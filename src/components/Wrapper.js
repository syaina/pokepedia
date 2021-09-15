import React from "react";
import styled from "@emotion/styled";

const StyledWrapper = styled.div`
  padding: 1rem;
  box-shadow: 0px 0px 3px 2px #eaeaea;
  border-radius: 5px;
`;

export default function Wrapper({ children }) {
  return (
    <>
      <StyledWrapper>{children}</StyledWrapper>
    </>
  );
}
