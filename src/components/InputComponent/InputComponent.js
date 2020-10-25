import React from "react";
import StyledInputComponent from "./StyledInputComponent";

const InputComponent = ({
  label = "",
  value = "",
  onUpdateInput,
  width = "317px",
  height = "52px",
  placeholder = "",
  type = "input",
}) => {
  return (
    <StyledInputComponent width={width} height={height}>
      <div className="input">
        <div className="input__label">{label}</div>
        <input
          className="input__field"
          value={value}
          onChange={({ target }) => onUpdateInput(target.value)}
          placeholder={placeholder}
          type={type}
        />
      </div>
    </StyledInputComponent>
  );
};

export default InputComponent;
