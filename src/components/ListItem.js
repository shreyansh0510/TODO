import { Button, Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./ListItem.css";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import db from "./firebase";

function ListItem({ items, onSelect }) {
  return (
    <div className="listItem">
      {items.map((item, index) => (
        <Card className="listItem-card" key={index}>
          <div className="listitem-card-number">{index + 1}</div>
          <CardContent className="listitem-card-cardcontent">
            <Typography>
              <p className="card-para">{item.todo}</p>
            </Typography>
          </CardContent>

          <button className="deleteicon">
            <DeleteOutlineIcon
              className="DeleteOutlineIcon"
              // onClick={() => {
              //   onSelect(item.id);
              // }}
              onClick={(event) => db.collection("items").doc(item.id).delete()}
            />
          </button>
        </Card>
      ))}
    </div>
  );
}

export default ListItem;
