import React, { useState, useRef } from "react";
import { TextField, Button, Box, List, ListItem, ListItemText } from "@mui/material";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");
  const searchRef = useRef<HTMLInputElement | null>(null);

  const addTodo = () => {
    if (!inputValue.trim()) return;
    setTodos([...todos, inputValue.trim()]);
    setInputValue("");
  };

  const clearSearch = () => {
    setSearch("");
    searchRef.current?.focus();
  };

  const filtered = todos.filter((t) =>
    t.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: 4, width: 400, margin: "0 auto" }}>
      <h2>To-Do List</h2>

      {/* Добавление новой задачи */}
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <TextField
          fullWidth
          label="Новая задача"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button variant="contained" onClick={addTodo}>+</Button>
      </Box>

      {/* Поиск */}
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <TextField
          fullWidth
          label="Поиск"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          inputRef={searchRef as React.Ref<HTMLInputElement>}
        />
        <Button variant="outlined" onClick={clearSearch}>X</Button>
      </Box>

      {/* Список */}
      <List>
        {filtered.map((t, i) => (
          <ListItem key={i} divider>
            <ListItemText primary={t} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default App;