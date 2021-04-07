import React from "react";
import styled, { css } from "styled-components";

import {
  blue300,
  fontFamily,
  fontSizeMedium,
  fontWeightBold,
  white,
} from "../constants";

const borderWidth = 2;
const iconSize = 20;

const StyledButton = styled.button`
  border: ${borderWidth}px solid transparent;
  border-radius: 6px;
  padding: 0 16px;
  cursor: pointer;
  font-family: ${fontFamily};
  font-size: ${fontSizeMedium}px;
  font-weight: ${fontWeightBold};
  text-transform: uppercase;
  height: 42px;
  transition: 0.5s;

  // --- Primary mode ---

  ${(props) =>
    props.primary &&
    !props.inverted &&
    css`
      // Default
      background: ${blue300};
      color: ${white};
      box-shadow: 0px 0px 10px ${blue300};
    `}

  ${(props) =>
    props.primary &&
    props.inverted &&
    css`
      // Inverted
      background: transparent;
      color: ${blue300};
      border: ${borderWidth}px solid ${blue300};
      box-shadow: 0px 0px 10px ${blue300};
    `}

  svg {
    vertical-align: middle;
    position: relative;
  }

  span {
    vertical-align: middle;
    position: relative;
    line-height: 20px;
  }
`;

const Button = ({ children, Icon, iconPosition, ...props }) => {
  return (
    <StyledButton {...props}>
      {Icon && iconPosition === "left" && (
        <Icon size={iconSize} style={{ marginRight: children ? "8px" : 0 }} />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon size={iconSize} style={{ marginLeft: children ? "8px" : 0 }} />
      )}
    </StyledButton>
  );
};

Button.defaultProps = {
  onClick: undefined,
  Icon: undefined,
  iconPosition: "left",
  primary: true,
  inverted: false,
  children: undefined,
};

export default Button;
