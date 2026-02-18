import { createContext } from "react";
import type { Note } from "./types";

type NotesContextValue = {
  notes: Note[];
  updateNoteContent: (id: string, content: string) => void;
  deleteNote: (id: string) => void;
  query: string;
  setQuery: (value: string) => void;
};

export const NotesContext = createContext<NotesContextValue | null>(null);
