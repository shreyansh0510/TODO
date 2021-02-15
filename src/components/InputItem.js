import React, { useEffect, useState } from "react";
import ListItem from "./ListItem.js";
import "./InputItem.css";
import AddBoxIcon from "@material-ui/icons/AddBox";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import db from "./firebase";
import firebase from "firebase";

import BackspaceIcon from "@material-ui/icons/Backspace";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";

function InputItem() {
  const [input, setInput] = useState("");
  const [items, setItem] = useState([]);

  useEffect(() => {
    db.collection("items")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setItem(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().item }))
        );
      });
  }, []);

  const getItem = (event) => {
    db.collection("items").add({
      item: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    event.preventDefault();
    setItem([...items, input]);
    setInput("");
  };

  const getClear = (event) => {
    event.preventDefault();
    setInput("");
  };

  // const deleteItem = (index) => {
  //   setItem(
  //     items.filter((arr, id) => {
  //       return id !== index;
  //     })
  //   );
  // };

  return (
    <div className="input-list">
      <form className="inputItem-form">
        <div className="sample">
          <input
            placeholder="Enter notes"
            className="inputItem-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <button
            disabled={!input}
            type="submit"
            className="button-add"
            onClick={getItem}
          >
            <AddBoxIcon className="AddBoxIcon" />
          </button>

          <button className="button-clear" onClick={getClear}>
            <ClearAllIcon />
          </button>
        </div>
      </form>

      <div className="inputItem-listItem">
        <ListItem
          items={items}
          // onSelect={deleteItem}
          className="listitemscroll"
        />
      </div>
    </div>
  );
}

export default InputItem;
