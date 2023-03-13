import React, { useEffect } from "react"

import styled from "styled-components"
import { useHistory } from 'react-router-dom'

import imagem from "../assets/img/restaurante-reserva-confirmada.png";

const Picture = styled.picture`
    max-height: 60vh;
    display: flex;
    justify-content: center;
    align-items: flex-end
`

const ActionSheet = styled.div`
  background-color: white;
  border-radius: 2rem 2rem 0 0;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 0;
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
  color: white;
  cursor: pointer;
  background-color: #ff1d1d;
  width: 55%;
  padding: 0.75rem 1rem;
  border-radius: 2rem;
  border: none;
  font-weight: 700;
`

const ReservaSucesso = ({ onEdit }) => {

    const navigate = useHistory();

    const goToRoute = ( ) => {
        navigate.push('/home-usuario-cliente')
    }

    useEffect(() => {}, [onEdit]);

    return (
        <>
            <ActionSheet>
                <ActionSheetTitle>
                    Reserva feita com <br></br>
                    sucesso!
                </ActionSheetTitle>
                
                <ActionSheetText>
                    Obrigado por fazer uma reserva com a gente, <br></br> nós ficamos muito felizes com isso!
                </ActionSheetText>

                <Picture>
                    <img src={imagem} alt=""></img>
                </Picture>

                <ActionSheetButton type="submit" onClick={goToRoute}> Voltar para Home </ActionSheetButton>

            </ActionSheet>
        </>
    );
};

export default ReservaSucesso