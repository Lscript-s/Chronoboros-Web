import "./ToDoList.css";
import deleteIcon from "../assets/delete.png";
import { useEffect, useState } from "react";

type TodoItem = {
  text: string;
  checked: boolean;
};

interface ItemProps {
  item: TodoItem;
  idx: number;
  onDelete: (idx: number) => void;
  onToggle: (idx: number) => void;
}

const Item = ({ item, idx, onDelete, onToggle }: ItemProps) => {
  return (
    <div className="item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => onToggle(idx)}
      />
      <span>{item.text}</span>
      <button className="delete-btn" onClick={() => onDelete(idx)}>
        <img src={deleteIcon} />
      </button>
    </div>
  );
};

const ToDoList = () => {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState<TodoItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("todo-items");
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo-items", JSON.stringify(items));
  }, [items]);

  const handleClick = () => {
    if (inputText.trim() !== "") {
      setItems([...items, { text: inputText, checked: false }]);
      setInputText("");
    }
  };

  const handleDelete = (idx: number) => {
    setItems(items.filter((_, i) => i !== idx));
  };

  const handleToggle = (idx: number) => {
    setItems(
      items.map((item, i) =>
        i === idx ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="container-primary">
      <div className="input-row">
        <input
          type="text"
          className="input-field"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="add-btn" onClick={handleClick}>
          +
        </button>
      </div>
      {items.map((item, idx) => (
        <Item
          key={idx}
          item={item}
          idx={idx}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default ToDoList;
