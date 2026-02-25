import { TextInput } from "@mantine/core";
import { useNotes } from "../../../../hooks";

export const SearchBox = () => {
  const { query, setQuery } = useNotes();

  return (
    <TextInput
      placeholder="Search"
      value={query}
      onChange={(event) => setQuery(event.currentTarget.value)}
    />
  );
};
