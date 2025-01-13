import { Note } from "../interfaces";

export function resolveName(remoteName: string, localName: string): string {
  return remoteName !== localName ? `${remoteName}/${localName}` : remoteName;
}

export function resolveNote(remote: Note, local: Note): Note {
  const { id, timestamp } = remote;
  const text =
    remote.text !== local.text ? `${remote.text}/${local.text}` : remote.text;
  return {
    id,
    timestamp,
    text,
  };
}
