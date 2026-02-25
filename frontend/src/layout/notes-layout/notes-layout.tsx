import { Sidebar, Workspace } from "../../components";
import styles from "./notes-layout.module.css";

export const NotesLayout = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Workspace />
    </div>
  );
};
