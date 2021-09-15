import React from "react";
import styled from "@emotion/styled";

const Card = styled.div`
  padding: 1.3rem 1rem;
  padding-bottom: 1rem;
  background-color: #ffcb05;
  color: #000;
  width: 100%;
  margin-bottom: 10px;
  height: 100%;
  cursor: pointer;
  border: thin solid #eaeaea;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  align-item: center;
  position: relative;
`;

const Thumbnail = styled.img`
  width: 100%;
  max-width: 80px;
  height: auto;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: calc(1rem * 1.2);
  text-transform: capitalize;
  font-family: "Poppins", sans-serif;
  margin-bottom: 10px;
`;

const BadgeType = styled.span`
  font-size: calc(1rem * 0.7);
  color: #fff;
  background: #2a75bb;
  padding: 0.4em 1em;
  border-radius: 5px;
  margin-right: 5px;
`;

const BadgeId = styled.span`
  font-size: calc(1rem * 0.7);
  color: #fff;
  background: #c7a008;
  padding: 0.3em 1em;
  border-radius: 5px;
  margin-right: 5px;
  position: absolute;
  width: fit-content;
  top: 0;
  left: 0;
`;

const Flex = styled.div((props) => ({
  display: "flex",
  flexDirection: props.column && `column`,
  justifyContent: props.center && `center`,
}));

export default function CardPokemon({ onClick, name, img, types, id }) {
  return (
    <Card onClick={onClick}>
      <Flex column center>
        <BadgeId>#{id}</BadgeId>
        <Title>{name}</Title>
        <Flex>
          {types.map((type) => (
            <BadgeType>{type.type.name}</BadgeType>
          ))}
        </Flex>
      </Flex>
      <Thumbnail src={img} alt={name} />
    </Card>
  );
}
