import { useCallback, useEffect, useState } from "react";
import { NotesContext } from "./notes-context";
import type { Note } from "./types";
import { notesDB } from "../../db/notes-db";

const seedNotes: Note[] = [
  { id: "1", title: "First note", content: "Content of the first note" },
  { id: "2", title: "Second note", content: "Content of the second note" },
  { id: "3", title: "Third note", content: "Content of the third note" },
];

export const NotesProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    let isMounted = true;
    const loadNotes = async () => {
      const count = await notesDB.notes.count();
      if (count === 0) {
        await notesDB.notes.bulkAdd(seedNotes);
      }
      const allNotes = await notesDB.notes.toArray();
      if (isMounted) {
        setNotes(allNotes);
      }
    };

    loadNotes();
    return () => {
      isMounted = false;
    };
  }, []);

  const updateNoteContent = useCallback((id: string, content: string) => {
    setNotes((prev) => prev.map((n) => (n.id === id ? { ...n, content } : n)));
    notesDB.notes.update(id, { content });
  }, []);

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
    notesDB.notes.delete(id);
  };

  return (
    <NotesContext.Provider
      value={{ notes, updateNoteContent, deleteNote, query, setQuery }}
    >
      {children}
    </NotesContext.Provider>
  );
};
