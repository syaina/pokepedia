import React from "react";
import styled from "@emotion/styled";

export default function Header() {
  const HeaderContainer = styled.header`
    height: 80px;
    width: 100%;
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
    ${"" /* border-bottom: thin solid #eaeaea; */}
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-items: center;
  `;

  const AppLogo = styled.a`
    text-decoration: none;
    font-size: 2rem;
    color: #cc0000;
    font-weight: 600;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: fit-content;
    border-radius: 10px;
    margin-left: 1rem;
  `;

  const MyPokemon = styled.a`
    text-decoration: none;
    font-size: 0.875rem;
    margin-right: 1rem;
    margin-top: 33px;
    padding: 5px 10px;
    background: #cc0000;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
  `;

  return (
    <HeaderContainer>
      <AppLogo href="/">PokePedia</AppLogo>
      <MyPokemon href="/my-pokemon">My Pokemon</MyPokemon>
    </HeaderContainer>
  );
}
