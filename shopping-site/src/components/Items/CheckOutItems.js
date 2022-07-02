import React from "react";
import { Avatar } from "@mui/material";
import classes from "./CheckOutItems.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button } from "@mui/material";

export default function CheckOutItems(props) {
  return (
    <div className={classes.content}>
      <div>
        <Avatar
          variant="rounded"
          src={props.image}
          fontSize="large"
          sx={{ width: 60, height: 70 }}
        />
      </div>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.price}>{props.price}</div>
      <div className={classes.actions}>
        <Button>
          <AddIcon />
        </Button>
      </div>
      <div className={classes.actions}>
        <Button>
          <RemoveIcon />
        </Button>
      </div>
    </div>
  );
}
