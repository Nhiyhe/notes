export interface Note {
  id: string;
  timestamp: number;
  text: string;
}

export interface Lecture {
  name: string;
  notes: Note[];
}
