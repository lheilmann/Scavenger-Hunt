import React from "react";
import { Check, Minus } from "react-feather";

import { Badge, List, ListItem, ListItemIcon } from "../components/List";
import { blue300 } from "../constants";

function Tasks() {
  const yellowBus =
    localStorage.getItem("scavenger-hunt.item.yellow-bus") ?? false;
  const stopSign =
    localStorage.getItem("scavenger-hunt.item.stop-sign") ?? false;
  const redHat = localStorage.getItem("scavenger-hunt.item.red-hat") ?? false;

  return (
    <List>
      <ListItem done={yellowBus}>
        <ListItemIcon>
          {yellowBus ? (
            <Check size="20" color={blue300} />
          ) : (
            <Minus size="20" />
          )}
        </ListItemIcon>
        <span>A yellow bus</span>
        <Badge done={yellowBus}>
          <small>1 point</small>
        </Badge>
      </ListItem>
      <ListItem done={stopSign}>
        <ListItemIcon>
          {stopSign ? <Check size="20" color={blue300} /> : <Minus size="20" />}
        </ListItemIcon>
        <span>A stop sign</span>
        <Badge done={stopSign}>
          <small>5 point</small>
        </Badge>
      </ListItem>
      <ListItem done={redHat}>
        <ListItemIcon>
          {redHat ? <Check size="20" color={blue300} /> : <Minus size="20" />}
        </ListItemIcon>
        <span>A red hat</span>
        <Badge done={redHat}>
          <small>10 point</small>
        </Badge>
      </ListItem>
    </List>
  );
}

export default Tasks;
