import React from "react"
import styled from "styled-components"
import imagem from "../assets/img/chef-confirma-cadastro.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { NavLink } from 'react-router-dom'

const ActionSheet = styled.div`
  background-color: white;
  border-radius: 2rem 2rem 0 0;
  height: 30vh;
  width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const ActionSheetTitle = styled.h2`
  font-size: 1.675rem;
  font-family: 'Eina', sans-serif;
  line-height: 2rem;
`;

const ActionSheetText = styled.p`
  color: #343634;
  font-size: 0.9rem;
  padding: 0.5rem;
  line-height: 1.25rem
`;

const Picture = styled.picture`
    max-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: flex-end`

const CadastroClienteSucesso = () => {
    return (
        <>
        <Picture>
            <img src={imagem} alt="" className="imagem-chef__01"></img>
        </Picture>
        <ActionSheet>
            <NavLink to='/cliente-login' style={{ alignSelf: "flex-end" }}>
                <FontAwesomeIcon icon={faXmark} style={{ fontSize: "2rem", marginRight: "2rem", color: "#ff1d1d" }} />
            </NavLink>
            <ActionSheetTitle>
                Prontinho! <br></br> Agora é com a gente!
            </ActionSheetTitle>
            <ActionSheetText>
                Entre no e-mail cadastrado para confirmar <br></br>
                o seu cadastro!
            </ActionSheetText>
        </ActionSheet>
        </>
    );
};

export default CadastroClienteSucesso