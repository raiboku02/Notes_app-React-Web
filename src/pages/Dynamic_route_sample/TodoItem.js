import React from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";

const TodoItem = () => {
  const { slug } = useParams();

  const newData = data.todos.find((item) => {
    return item.slug === slug;
  });

  return <div>
    <p>{newData.id}</p>
    <p>{newData.todo}</p>
    <p>{newData.slug}</p>
  </div>;
};

export default TodoItem;
