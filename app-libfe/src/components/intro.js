import React from "react"
import styled from "styled-components"
import imagem from "../assets/img/chef-intro-01.png"
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
    max-height: 60vh;
    display: flex;
    justify-content: center;
    align-items: flex-end`

const Intro = () => {
    return (
        <>
        <Picture>
            <img src={imagem} alt="" className="imagem-chef__01"></img>
        </Picture>
        <ActionSheet>
            <ActionSheetTitle>
                O mais completo para <br></br> a <strong className='action-sheet__title-red'>sua reserva!</strong>
            </ActionSheetTitle>
            <ActionSheetText>
                Olá, bem-vindo(a) ao app ideal para realizar <br></br>
                o agendamento da sua reserva em restaurantes
            </ActionSheetText>
            <ActionSheetButton>
                <NavLink to='pre-login' style={{ textDecoration: 'none', color: 'white'}}>Continuar</NavLink>
            </ActionSheetButton>
        </ActionSheet>
        </>
    );
};

export default Intro