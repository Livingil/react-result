import { NoteList, SearchBox } from "./components";
import styles from "./sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SearchBox />
      <NoteList />
    </div>
  );
};
