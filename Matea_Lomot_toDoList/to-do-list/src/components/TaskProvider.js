import React, {useState} from "react";

const NewTasksList = ({ addItem }) => {
    const [text, setContent] = useState("");

    const Submit = (e) => {
        e.preventDefault();
        addItem(text);
    }

    return (
        <form onSubmit={Submit}>
            <input id="tekst"type="text" onChange={(e) => {setContent(e.target.value)}}/>
            <input id="dugme" type="submit" value="Add"/>
        </form>
    );
}

export default NewTasksList;