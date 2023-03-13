import React from "react"
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
  padding: 1.5rem;
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

const InputArea = styled.div`
    width: 100%
    `

const Input = styled.input`
    width: 80%;
    margin-bottom: 1rem;
    border: 1.5px solid #96959d;
    border-radius: 20px;
    padding: 15px 10px
`

const RecuperarSenha = () => {
    return (
        <>
        <ActionSheet>
            <NavLink to='/pre-login' style={{alignSelf: "flex-end"}}>
                <FontAwesomeIcon icon={faXmark} style={{fontSize: "2rem", marginRight: "2rem", color: "#ff1d1d"}} />
            </NavLink>
            <ActionSheetTitle>
                Esqueceu a sua <br></br>senha?
            </ActionSheetTitle>
            <ActionSheetText>
                Informe o seu e-mail que encaminharemos uma nova senha para você caso ele conste na nossa base de dados!
            </ActionSheetText>

            <InputArea>
                <Input name="email" type="email" placeholder="Insira o seu e-mail" required></Input>
            </InputArea>
            
            <ActionSheetButton>
                <NavLink to='confirma-recuperar-senha' style={{ textDecoration: 'none', color: 'white'}}>Recuperar senha</NavLink>
            </ActionSheetButton>
        </ActionSheet>
        </>
    );
};

export default RecuperarSenha