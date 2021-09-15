import React from "react";
import styled from "@emotion/styled";

import Wrapper from "./Wrapper";

export const Card = styled.div`
  color: #000;
  width: 100%;
  border-radius: 5px;
  align-item: center;
  text-align: center;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  margin-top: 1.3rem;
  margin-bottom: 10px;
  pointer-event: none;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: calc(1rem * 1.2);
  text-transform: capitalize;
  font-family: "Poppins", sans-serif;
  margin-bottom: 10px;
`;

export const FontSmall = styled.span`
  font-size: calc(1rem * ${(props) => props.size});
  text-transform: none;
`;

export const FontSmallBold = styled(FontSmall)`
  font-weight: 500;
  color: ${(props) => props.color};
`;

export const BadgeType = styled.span`
  font-size: calc(1rem * 0.775);
  color: #fff;
  background: #2a75bb;
  padding: 0.4em 1em;
  border-radius: 5px;
  margin-right: 5px;
`;

export const BadgeMoves = styled(BadgeType)`
  font-size: calc(1rem * 0.775);
  color: #fff;
  background: #c7a008;
  ${"" /* margin-right: 5px; */}
  margin-bottom: 10px;
`;

export const BadgeId = styled.span`
  font-size: calc(1rem * 0.7);
  color: #fff;
  background: #c7a008;
  padding: 0.3em 1em;
  border-radius: 0 5px 5px 0px;
  margin-right: 5px;
  position: absolute;
  width: fit-content;
  top: 0;
  left: -1rem;
`;

export const List = styled.div((props) => ({
  display: "flex",
  flexWrap: props.wrap && `wrap`,
  flexDirection: props.column && `column`,
  justifyContent: props.justifyContent,
}));

export const BarProgress = styled.div`
  background-color: none;
  width: 100%;
  height: 12px;
  margin: auto;
  border-radius: 5px;
  position: relative;
`;

export const BarTitle = styled.p`
  margin-right: 12px;
  font-size: 12px;
  width: 120px;
  text-align: left;
  text-wrap: wrap;
  text-transform: capitalize;
`;

export const Bar = styled.div`
  width: ${(props) => props.width};
  background-color: #ffde00;
  height: 12px;
  margin: auto 0;
  border-radius: 5px;
`;

export const BarNumber = styled.span`
  position: absolute;
  font-size: 0.7rem;
  color: #c7a008;
  font-weight: 600;
  left: -20px;
  top: -2px;
`;

export const Box = styled.div`
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
`;

export const PokeBall = styled.button`
  border: none;
  background: none;
  position: fixed;
  right: 1rem;
  bottom: 4rem;
  width: 70px;
  height: 70px;
  cursor: pointer;
`;

export const WrapperTitle = styled.h3`
  margin-bottom: 1rem;
`;

export const Shadow = styled.div`
  width: 30px;
  margin: auto;
  height: 5px;
  border-radius: 50%;
  background: gray;
  filter: blur(1px);
`;

export default function CardPokemonDetail({ pokemon }) {
  const stats = [
    "Hp",
    "Attack",
    "Defense",
    "Sp. Attack",
    "Sp. Defense",
    "Speed",
  ];

  console.log(pokemon);

  return (
    <Card>
      <BadgeId>#{pokemon.id}</BadgeId>
      <Thumbnail
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      />
      <Title>
        {pokemon.name}{" "}
        <FontSmall size="0.875">
          ({pokemon.height}' {pokemon.weight} lbs.)
        </FontSmall>
      </Title>
      <List justifyContent="center">
        {pokemon.types.map((type) => (
          <BadgeType>{type.type.name}</BadgeType>
        ))}
      </List>

      {/* abilities box */}
      <Box mb="1rem" mt="2rem">
        <Wrapper>
          <WrapperTitle>Abilities</WrapperTitle>
          <List justifyContent="center" wrap>
            {pokemon.abilities.map((item) => (
              <BadgeMoves>{item.ability.name}</BadgeMoves>
            ))}
          </List>
        </Wrapper>
      </Box>

      {/* stats box */}
      <Box mb="1rem" mt="2rem">
        <Wrapper>
          <WrapperTitle>Base stats</WrapperTitle>
          {pokemon.stats.map((stat, idx) => (
            <Box mb="5px" key={idx}>
              <List center>
                <BarTitle>{stats[idx]}</BarTitle>
                <BarProgress>
                  <BarNumber>{stat.base_stat}</BarNumber>
                  <Bar width={`${stat.base_stat - 30}%`}></Bar>
                </BarProgress>
              </List>
            </Box>
          ))}
        </Wrapper>
      </Box>

      {/* moves box */}
      <Box mb="1rem" mt="2rem">
        <Wrapper>
          <WrapperTitle>Moves</WrapperTitle>
          <List justifyContent="center" wrap>
            {pokemon.moves.map((move) => (
              <BadgeMoves>{move.move.name}</BadgeMoves>
            ))}
          </List>
        </Wrapper>
      </Box>
    </Card>
  );
}
