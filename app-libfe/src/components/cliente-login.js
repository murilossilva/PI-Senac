import React, { useRef } from "react"
import styled from "styled-components"
import axios from "axios"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { NavLink, useHistory } from 'react-router-dom'

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

const LoginText = styled.div`
    width: 82.5%;
    display: flex;
    margin-bottom: 0.5rem;
    margin-top: 2rem;
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
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

const NewHireOrHelpToLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
`

const ClienteLogin = ({ onEdit }) => {
    const ref = useRef();
    const navigate = useHistory();

    const handleSubmitLogin = async (e) => {
        e.preventDefault();

        const user = ref.current;
        let isFormValid = !(!user.email.value || !user.senha.value)

        if(!onEdit && isFormValid) {
            await axios
                .post("http://localhost:8800/login", {
                    email: user.email.value,
                    senha: user.senha.value
            })
            .then(({ data }) => {
                if(data === 'Usuário encontrado'){
                    navigate.push('/home-usuario-cliente')
                } else {
                    console.log('Usuário não encontrado')
                }
            })
        }
    };

    return (
        <>
        <ActionSheet>
            <NavLink to='/pre-login' style={{alignSelf: "flex-end"}}>
                <FontAwesomeIcon icon={faXmark} style={{fontSize: "2rem", marginRight: "2rem", color: "#ff1d1d"}} />
            </NavLink>
            <ActionSheetTitle>
                Entre ou crie a <br></br> <strong className="action-sheet__title-red">sua conta!</strong>
            </ActionSheetTitle>
            <FormContainer ref={ref} onSubmit={handleSubmitLogin}>
                <LoginText>
                    Fazer login                
                </LoginText>
                <InputArea>
                    <Input name="email" type="email" placeholder="Insira o seu e-mail"></Input>
                </InputArea>
                <InputArea>
                    <Input name="senha" type="password" placeholder="Insira a sua senha"></Input>
                </InputArea>
            </FormContainer>

            <NewHireOrHelpToLogin>
                <p>Ainda não tem conta? <NavLink to='cadastro-cliente' style={{ textDecoration: 'none', color: "black"}}><b>Cadastre-se</b></NavLink></p>
                <p>Esqueceu a senha? <NavLink to='recuperar-senha' style={{ textDecoration: 'none', color: "black"}}><b>Recuperar senha</b></NavLink></p>
            </NewHireOrHelpToLogin>

            <ActionSheetButton onClick={handleSubmitLogin}>Entrar</ActionSheetButton>
        </ActionSheet>
        </>
    );
};

export default ClienteLogin