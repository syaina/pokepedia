import React from "react";
import styled from "@emotion/styled";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function RowList({ children }) {
  return <Row>{children}</Row>;
}
