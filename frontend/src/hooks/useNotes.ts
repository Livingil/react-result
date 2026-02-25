import { useContext } from "react";
import { NotesContext } from "../context";

export const useNotes = () => {
  const { notes, updateNoteContent, deleteNote, query, setQuery } = useContext(
    NotesContext,
  ) || {
    notes: [],
    updateNoteContent: () => {},
    deleteNote: () => {},
    query: "",
    setQuery: () => {},
  };
  return { notes, updateNoteContent, deleteNote, query, setQuery };
};
