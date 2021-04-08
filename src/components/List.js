import styled, { css } from "styled-components";

import { blue300 } from "../constants";

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin: 6px 0;
  list-style-type: none;

  ${(props) =>
    props.done &&
    css`
      // Done
      color: ${blue300};
    `}
`;

export const ListItemIcon = styled.div`
  margin-right: 12px;
`;

export const Badge = styled.span`
  display: flex;
  border-radius: 4px;
  padding: 2px 4px;
  margin-left: 12px;

  ${(props) =>
    props.done &&
    css`
      // Done
      background-color: ${blue300};
      color: white;
      border: 1px solid ${blue300};
    `}

  ${(props) =>
    !props.done &&
    css`
      // Pending
      background-color: white;
      color: ${blue300};
      border: 1px solid ${blue300};
    `}
`;
