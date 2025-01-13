import { resolveName, resolveNote } from "./helpers";
import { Lecture, Note } from "./interfaces";

export function resolveLectures(remote: Lecture, local: Lecture): Lecture {
  const resolvedName = resolveName(remote.name, local.name);

  // Create a map to merge notes by ID
  const noteMap = new Map<string, { remote?: Note; local?: Note }>();

  // Populate the map with remote notes
  for (const note of remote.notes) {
    noteMap.set(note.id, { remote: note });
  }

  // Populate the map with local notes
  for (const note of local.notes) {
    if (noteMap.has(note.id)) {
      noteMap.get(note.id)!.local = note;
    } else {
      noteMap.set(note.id, { local: note });
    }
  }

  // Resolve notes
  const resolvedNotes: Note[] = [];
  for (const { remote, local } of noteMap.values()) {
    if (remote && local) {
      resolvedNotes.push(resolveNote(remote, local));
    } else {
      resolvedNotes.push(remote || local!);
    }
  }

  return {
    name: resolvedName,
    notes: resolvedNotes,
  };
}
