import React, { useEffect } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const ActionSheet = styled.div`
  background-color: white;
  border-radius: 2rem 2rem 0 0;
  height: 75vh;
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
  color: white;
  cursor: pointer;
  background-color: #ff1d1d;
  width: 55%;
  padding: 0.75rem 1rem;
  border-radius: 2rem;
  border: none;
  font-weight: 700;
`

const ActionSheetButtonSecondary = styled.button`
  color: #ff1d1d;
  cursor: pointer;
  background-color: transparent ;
  width: 55%;
  padding: 0.75rem 1rem;
  border-radius: 2rem;
  border: 2px #ff1d1d solid;
  font-weight: 700;
`

const PreLogin = () => {

    const checkClasses = () => {
      const disableClass = document.getElementsByClassName('active');
      
      if(disableClass.length > 0){
        disableClass[0].classList.remove('active')
    }
    }

    useEffect(() => {
      checkClasses()
    })

    return (
        <>
        <ActionSheet>
            <NavLink to='/' style={{alignSelf: "flex-end"}}>
                <FontAwesomeIcon icon={faXmark} style={{fontSize: "2rem", marginRight: "2rem", color: "#ff1d1d"}} />
            </NavLink>
            <ActionSheetTitle>
                Obrigado por vir <br></br> até aqui!
            </ActionSheetTitle>
            <ActionSheetText>
                Estamos muito feliz que você escolheu nos <br></br>
                conhecer melhor, vamos lá!
            </ActionSheetText>
            <ActionSheetText>
                  Antes de prosseguir, nos informe se você é <br></br> 
                  um estabelecimento ou um cliente em <br></br>
                  busca de alguma reserva ;)
            </ActionSheetText>
            <ActionSheetButton>
                <NavLink to='cliente-login' style={{ textDecoration: 'none', color: 'white'}}>Quero fazer uma reserva</NavLink>
            </ActionSheetButton>
            <ActionSheetButtonSecondary>
                <NavLink to='estabelecimento-login' style={{ textDecoration: 'none', color: '#ff1d1d'}}>Sou um Estabelecimento</NavLink>
            </ActionSheetButtonSecondary>
        </ActionSheet>
        </>
    );
};

export default PreLogin