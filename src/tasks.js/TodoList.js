



import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TodoList = () => {
  const initialState = [
    {
      id: 1,
      name: "nithin",
      skills: ["html", "css", "bootstrap", "sql", "problemSolving", "javascript", "react"]
    },
   
  ];
  
  const newTodos = [
    {
      id: 2,
      name: "amruth",
      skills: ["html", "css", "bootstrap", "sql", "problemSolving", "javascript", "react"]
    },
    {
      id: 3,
      name: "kiran",
      skills: ["html", "css", "bootstrap", "sql", "problemSolving", "javascript", "react"]
    },
    {
      id: 4,
      name: "harish",
      skills: ["html", "css", "bootstrap", "sql", "problemSolving", "javascript", "react"]
    },
    {
      id: 5,
      name: "akash",
      skills: ["html", "css", "bootstrap", "sql", "problemSolving", "javascript", "react"]
    },
    {
      id: 6,
      name: "suman",
      skills: ["html", "css", "bootstrap", "sql", "problemSolving", "javascript", "react"]
    }
  ];

  const [todo, setTodo] = useState(initialState);
  const [currentIndex, setCurrentIndex] = useState(0);

  const TodoHandler = () => {
    if (currentIndex < newTodos.length) {
      const newTodo = newTodos[currentIndex];
      setTodo(prevTodo => [...prevTodo, newTodo]);
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  const removeRoutineHandler = (each) => {
    const id = each.id;
    const FilterData = todo.filter((eachTodo) => eachTodo.id !== id);
    setTodo(FilterData);
  };

  const style = {
    display: "grid",
    justifyContent: "center",
    gap: 30
  };

  return (
    <>
      <div style={{ backgroundColor: "#e9ecef", padding: "50px 0" }}>
        <div style={style}>
          <div style={style}>Todo List</div>
          <Button style={style} variant="primary" onClick={TodoHandler}>Add Todo</Button>
        </div>
      </div>
      <br />
      <div style={style}>
        {todo.map((each) => {
          return (
            <div key={each.id}>
              <Card style={{ width: '18rem' }}>
                <Button variant="warning" onClick={() => removeRoutineHandler(each)}>Remove Todo</Button>
                <Card.Body style={style}>
                  <Card.Text>{each.id}</Card.Text>
                  <Card.Text>{each.name}</Card.Text>
                  <Card.Title>
                    {each.skills.map((skill, index) => (
                      <p key={index}>{skill}</p>
                    ))}
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
