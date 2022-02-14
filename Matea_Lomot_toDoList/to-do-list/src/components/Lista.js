import React, { useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid';
import NewTasksList from "./TaskProvider";

const NovaToDoLista = () => {
    const [items, setItems] = useState([]);

    const addItem = (text) => {
        if (text != "" && text.trim().length != 0) {
            setItems([...items, {text, id: uuidv4()}]);
        }
        else {
            alert("Invalid Input");
        }
    }
    const DeleteItem = (e) => {
        e.target.parentElement.remove();
    }

    return (
        <div>
            <h3>Pending todos: {items.length}</h3>
            {
                items.map(item => {return <p className="listItems"><li key={item.id}>{item.text} <button onClick={DeleteItem}>Remove</button></li></p>})
            }
            <NewTasksList addItem={addItem}/>
        </div>
    );
}

export default NovaToDoLista;