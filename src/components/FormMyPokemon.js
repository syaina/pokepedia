import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  font-family: inherit;
  font-size: 1rem;
  border: thin solid #eaeaea;
  border-radius: 5px;
`;

const Submit = styled.button`
  background: #2a75bb;
  color: #fff;
  margin-top: 10px;
  cursor: pointer;
  padding: 10px;
  font-family: inherit;
  font-size: 1rem;
  border: thin solid #eaeaea;
  border-radius: 5px;
`;

export default function FormMyPokemon({
  onChange,
  onButtonClick,
  onKeyPress,
  ref,
  value,
}) {
  return (
    <Form>
      <Input
        type="text"
        name="pokemon"
        id="pokemon"
        value={value}
        placeholder="Name your pokemon"
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <Submit type="submit" onClick={onButtonClick} ref={ref}>
        OK
      </Submit>
    </Form>
  );
}
