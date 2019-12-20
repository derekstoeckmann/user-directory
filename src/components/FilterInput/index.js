import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const FilterInput = props => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Filter results: </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        value={props.inputValue}
        onChange={event => props.setInputValue(event.target.value)}
        placeholder="username"
        aria-label="username"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  );
};

export default FilterInput;
