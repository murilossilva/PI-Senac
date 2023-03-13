import React, { useEffect, useRef } from "react"

import axios from "axios"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { NavLink, useHistory } from 'react-router-dom'
import { IMaskInput } from "react-imask";


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

const FlexContent = styled.div`
    display: flex;
    width: 90%;
`

const CadastroCliente = ({ onEdit }) => {
    const ref = useRef();

    const navigate = useHistory();

    useEffect(() => {}, [onEdit]);

    const handleSubmitClient = async (e) => {
        e.preventDefault();

        const user = ref.current;

        let isFormValid = !(!user.nome.value || !user.telefone.value || !user.email.value || !user.cep.value || !user.endereco_logradouro.value || 
            !user.endereco_numero.value || !user.endereco_bairro.value || !user.endereco_cidade.value || !user.endereco_uf.value ||
            !user.data_nascimento.value || !user.cpf.value || !user.senha.value)

        if(!onEdit && isFormValid) {
            await axios
                .post("http://localhost:8800", {
                    nome: user.nome.value,
                    telefone: user.telefone.value,
                    email: user.email.value,
                    cep: user.cep.value,
                    endereco_logradouro: user.endereco_logradouro.value,
                    endereco_numero: user.endereco_numero.value,
                    endereco_complemento: user.endereco_complemento.value,
                    endereco_bairro: user.endereco_bairro.value,
                    endereco_cidade: user.endereco_cidade.value,
                    endereco_uf: user.endereco_uf.value,
                    data_nascimento: '1999-07-07',
                    cpf: user.cpf.value,
                    senha: user.senha.value
            })
            .then(({ data }) => {
                if(data !== 'Sucesso'){
                    navigate.push('/cadastro-cliente-sucesso')
            }})
        }
    };

    return (
        <>
            <ActionSheet>
                <NavLink to='/cliente-login' style={{ alignSelf: "flex-end" }}>
                    <FontAwesomeIcon icon={faXmark} style={{ fontSize: "2rem", marginRight: "2rem", color: "#ff1d1d" }} />
                </NavLink>
                <ActionSheetTitle>
                    Ainda não tem <br></br> cadastro? Sem neura!
                </ActionSheetTitle>
                <ActionSheetText>
                    O nosso cadastro é bem rapidinho,<br></br>
                    para isso, é só informar os dados solicitados<br></br>
                    no formulário abaixo:
                </ActionSheetText>

                <FormContainer ref={ref} onSubmit={handleSubmitClient}>
                    <InputArea>
                        <Input name="nome" type="text" placeholder="Nome Completo" ></Input>
                    </InputArea>

                    <FlexContent>
                        <InputArea className="flex-content_mid-low">
                            <IMaskInput name="cpf" type="tel" mask="000.000.000-00" placeholder="CPF" className="button-style__imask"></IMaskInput>
                        </InputArea>
                        <InputArea className="flex-content_mid-high">
                            <IMaskInput name="data_nascimento" type="tel" mask="00/00/0000" placeholder="Data de Nascimento" className="button-style__imask"></IMaskInput>
                        </InputArea>
                    </FlexContent>

                    <FlexContent>
                        <InputArea>
                            <IMaskInput name="cep" type="tel" mask="00000-000" placeholder="CEP" className="button-style__imask" ></IMaskInput>
                        </InputArea>
                        <InputArea>
                            <Input name="endereco_uf" type="text" placeholder="Estado" ></Input>
                        </InputArea>
                    </FlexContent>

                    <InputArea>
                        <Input name="endereco_logradouro" type="text" placeholder="Endereço. Ex.: Rua Timbó" ></Input>
                    </InputArea>

                    <FlexContent>
                        <InputArea>
                            <Input name="endereco_cidade" type="text" placeholder="Cidade" ></Input>
                        </InputArea>
                        <InputArea>
                            <Input name="endereco_bairro" type="text" placeholder="Bairro" ></Input>
                        </InputArea>
                    </FlexContent>

                    <FlexContent>
                        <InputArea>
                            <Input name="endereco_numero" type="tel" placeholder="Nº" ></Input>
                        </InputArea>
                        <InputArea>
                            <Input name="endereco_complemento" type="text" placeholder="Complemento"></Input>
                        </InputArea>
                    </FlexContent>

                    <InputArea>
                        <IMaskInput name="telefone" type="tel" mask="(00) 00000-0000" placeholder="Telefone de Contato" className="button-style__imask" ></IMaskInput>
                    </InputArea>

                    <InputArea>
                        <Input name="email" type="text" placeholder="E-mail" ></Input>
                    </InputArea>
                    <InputArea>
                        <Input name="senha" type="password" placeholder="Senha" ></Input>
                    </InputArea>
                    <InputArea>
                        <Input name="senha_confirmacao" type="password" placeholder="Confirme a senha" ></Input>
                    </InputArea>

                    <ActionSheetButton type="submit" onClick={handleSubmitClient}> Cadastrar </ActionSheetButton>
                </FormContainer>

            </ActionSheet>
        </>
    );
};

export default CadastroCliente