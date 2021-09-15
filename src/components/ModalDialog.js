import React from "react";
import { Close } from "@material-ui/icons";
import styled from "@emotion/styled";
import { List } from "./CardPokemonDetail";

const DialogContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(128, 128, 128, 0.5);
`;

const Dialog = styled.div`
  width: calc(100% - 1rem);
  max-width: calc(480px - 1rem);
  padding: 1rem;
  position: fixed;
  border-radius: 5px;
  border: thin solid #eaeaea;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

const DialogTitle = styled.h3`
  margin-top: 20px;
  margin-bottom: 2rem;
`;

const DialogContent = styled.div``;

const IconButton = styled.button`
  border: none;
  position: absolute;
  background: none;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const ModalDialog = ({ children, onClick, title }) => {
  return (
    <DialogContainer>
      <Dialog>
        <List spaceBetween>
          <DialogTitle>{title}</DialogTitle>
          <IconButton onClick={onClick}>
            <Close />
          </IconButton>
        </List>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </DialogContainer>
  );
};

export default ModalDialog;
