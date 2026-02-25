import { Button, Group, Textarea } from "@mantine/core";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { marked } from "marked";
import { useNotes } from "../../hooks";
import { modals } from "@mantine/modals";
import styles from "./workspace.module.css";

export const Workspace = () => {
  const [isEditing, setIsEditing] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  const { notes, updateNoteContent, deleteNote } = useNotes();
  const note = notes.find((note) => note.id === id);

  const [draft, setDraft] = useState(note?.content || "");

  const hendlEdit = () => {
    setDraft(note?.content || "");
    setIsEditing(!isEditing);
  };

  const html = marked.parse(note?.content || "");

  useEffect(() => {
    if (!isEditing || !id) return;

    const timeout = setTimeout(() => {
      updateNoteContent(id, draft);
    }, 500);

    return () => clearTimeout(timeout);
  }, [draft, id, isEditing, updateNoteContent]);

  const handleDelete = () => {
    if (!note) return;

    modals.openConfirmModal({
      title: "Удалить заметку?",
      children: "Это действие нельзя отменить.",
      labels: { confirm: "Удалить", cancel: "Отмена" },
      confirmProps: { color: "red" },
      onConfirm: () => {
        deleteNote(note.id);
        navigate("/", { replace: true });
      },
    });
  };

  return (
    <div className={styles.workspace}>
      <h1>{note ? note.title : "Note not found"}</h1>
      {isEditing ? (
        <Textarea
          className={styles.textarea}
          value={draft}
          onChange={(e) => setDraft(e.currentTarget.value)}
        />
      ) : (
        <div
          className={styles.workspace}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}

      {note && (
        <Group>
          <Button onClick={hendlEdit}>
            {isEditing ? "Сохранить" : "Редактировать"}
          </Button>
          <Button color="red" onClick={handleDelete}>
            Удалить
          </Button>
        </Group>
      )}
    </div>
  );
};
