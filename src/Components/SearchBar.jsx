import { Paper, TextField } from "@mui/material";
import { useState } from "react";
const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit(searchTerm);
    }
  };
  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <TextField
        fullWidth
        label="Search..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        onKeyDown={onKeyDown}
      />
    </Paper>
  );
};

export default SearchBar;
