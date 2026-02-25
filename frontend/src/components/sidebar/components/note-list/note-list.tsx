import { useNavigate, useParams } from "react-router-dom";
import { useNotes } from "../../../../hooks";
import styles from "./note-list.module.css";

export const NoteList = () => {
  const navigate = useNavigate();

  const { notes, query } = useNotes();

  const { id } = useParams();

  const hendleNote = (noteId: string) => {
    navigate(`/notes/${noteId}`);
  };

  return (
    <div className={styles.noteList}>
      <h1>NoteList</h1>
      {notes
        .filter((note) => {
          const q = query.toLowerCase();
          return (
            note.title.toLowerCase().includes(q) ||
            note.content.toLowerCase().includes(q)
          );
        })
        .map((note) => (
          <div
            className={`${styles.noteItem} ${note.id === id ? styles.active : ""}`}
            key={note.id}
            onClick={() => hendleNote(note.id)}
          >
            {note.title}
          </div>
        ))}
    </div>
  );
};
