import "./ToDoList.css";
import deleteIcon from "../assets/delete.png";
import { useEffect, useState } from "react";

interface ItemProps {
  item: string;
  idx: any;
  onDelete: (idx: any) => void;
}

const Item = ({ item, idx, onDelete }: ItemProps) => {
  return (
    <div className="item">
      <input type="checkbox" />
      <span>{item}</span>
      <button className="delete-btn" onClick={() => onDelete(idx)}>
        <img src={deleteIcon} />
      </button>
    </div>
  );
};

const ToDoList = () => {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState<string[]>([]);

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
      setItems([...items, inputText]);
      setInputText("");
    }
  };

  const handleDelete = (idx: number) => {
    setItems(items.filter((_, i) => i !== idx));
  };

  return (
    <div className="container-primary">
      <div className="input-row">
        <input
          type="text"
          className="input-field"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button className="add-btn" onClick={handleClick}>
          +
        </button>
      </div>
      {items.map((item, idx) => (
        <Item key={idx} item={item} idx={idx} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ToDoList;
