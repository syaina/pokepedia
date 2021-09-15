import React from "react";
import styled from "@emotion/styled";

const Container = styled.section`
  width: calc(100% - 2rem);
  max-width: 480px;
  margin: auto;
  position: relative;
  margin-bottom: 2rem;
`;

export default function Section({ children }) {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
}
