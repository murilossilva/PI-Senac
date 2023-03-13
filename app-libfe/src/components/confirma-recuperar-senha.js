import React from "react"
import styled from "styled-components"
import imagem from "../assets/img/chef-confirma-recuperar-senha.png"

import { NavLink } from 'react-router-dom'

const ActionSheet = styled.div`
  background-color: white;
  border-radius: 2rem 2rem 0 0;
  height: 40vh;
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

const ActionSheetButton = styled.button`
  color: white !important;
  cursor: pointer;
  background-color: #ff1d1d;
  width: 50%;
  padding: 0.75rem 1rem;
  border-radius: 2rem;
  border: none;
  font-weight: 700;
`

const Picture = styled.picture`
    max-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: flex-end`

const ConfirmaRecuperarSenha = () => {
    return (
        <>
        <Picture>
            <img src={imagem} alt="" className="imagem-chef__01"></img>
        </Picture>
        <ActionSheet>
            <ActionSheetTitle>
                Prontinho, <br></br> verifique o seu e-mail!
            </ActionSheetTitle>
            <ActionSheetText>
                Não encontrou a sua senha?<br></br>
                Lembre de consultar a sua caixa de spam, <br></br>
                ela pode estar lá!
            </ActionSheetText>
            <ActionSheetButton>
                <NavLink to='cliente-login' style={{ textDecoration: 'none', color: 'white'}}>Voltar para tela de login</NavLink>
            </ActionSheetButton>
        </ActionSheet>
        </>
    );
};

export default ConfirmaRecuperarSenha