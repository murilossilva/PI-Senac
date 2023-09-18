import styled from "styled-components"
import { NavLink, useHistory } from 'react-router-dom'
import imagem from "../assets/img/icon-header.svg";
import axios from "axios"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useRef } from 'react';

import { faX } from '@fortawesome/free-solid-svg-icons'
import { IMaskInput } from "react-imask";

const MenuContent = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #00823B;
    animation: go-back 1s;
`
const Header = styled.div`
  background-color: white;
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row
`

const IconHeader = styled.div`
  width: 100%; 
  padding: 0.5rem 0;
`

const PrincipalSection = styled.div`
  height: 100%;
  width: 100%;
  background-color: #F6F4F4;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const PrincipalSectionTitle = styled.h2`
  font-size: 1.5rem;
  font-family: 'Eina', sans-serif;
  line-height: 1.5rem;
  margin: 1.5rem;
  margin-top: 2rem;
  padding-bottom: 0.5rem;
`;

const PrincipalSectionText = styled.p`
  color: #717171;
  font-size: 0.9rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  line-height: 1.25rem
`;

const PrincipalSectionButton = styled.button`
  color: #1E8422 !important;
  cursor: pointer;
  background-color: transparent;
  width: 50%;
  padding: 0.75rem 1rem;
  margin-bottom: 2rem;
  border-radius: 2rem;
  border: 1px solid #1E8422;
  font-weight: 400;
`

const KnowMoreSection = styled.div`
  height: 100%;
  width: 100%;
  background-color: #00823B;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const KnowMoreTitle = styled.h2`
  font-size: 1rem;
  color: white;
  font-family: 'Eina', sans-serif;
  line-height: 1.5rem;
  padding: 1.5rem;
  padding-top: 0.5rem;
  margin-top: 1.5rem;
`;

const KnowMoreDescription = styled.div`
  color: #717171;
  font-size: 0.9rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  line-height: 1.25rem
`;

const KnowMoreButton = styled.button`
  color: #1E8422 !important;
  cursor: pointer;
  background-color: white;
  width: 50%;
  padding: 0.75rem 1rem;
  border-radius: 2rem;
  border: 1px solid white;
  font-weight: 400;
`

const Footer = styled.div`
  width: 100%;
  background-color: #444;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 0.75rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`

const Intro = ({ onEdit }) => {
  function callModal() {
    setMenu(false)
    setSignUp(!signUp)
    setModal(!modalIsActivated)
  }

  function callSignInModal() {
    setSignUp(!signUp)
    setSignIn(!signIn)
  }

  function callUserCreatedModal() {
    setSignIn(!signIn)
    setUserCreated(!userCreated)
  }

  function callForgotPasswordModal() {
    setSignUp(!signUp)
    setForgotPassword(!forgotPassword)
  }

  function closeModal() {
    setModal(!modalIsActivated)
    setSignIn(false);
    setSignUp(false);
    setUserCreated(false);
    setForgotPassword(false);
    setCheckEmailToNewPassword(false);
  }

  function handleSubmitForgotPassword() {
    if(!onEdit) {
      const user = ref.current;
      let isFormValid = !(!user.email.value)

      if(isFormValid) {
        setForgotPassword(!forgotPassword)
        setCheckEmailToNewPassword(!checkEmail)
      }
    }
  }

  const ref = useRef();
  const navigate = useHistory();

  const [menusIsActivated, setMenu] = useState(false);
  const [modalIsActivated, setModal] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [checkEmail, setCheckEmailToNewPassword] = useState(false);


  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    const user = ref.current;
    let isFormValid = !(!user.email.value || !user.senha.value)

    if (!onEdit && isFormValid) {
      await axios
        .post("http://localhost:8800/login", {
          email: user.email.value,
          senha: user.senha.value
        })
        .then(({ data }) => {
          if (data === 'Usuário encontrado') {
            navigate.push('/home-usuario')
          } else {
            setLoginError(true)
          }
        })
    }
  };

  const handleSubmitClient = async (e) => {
    e.preventDefault();

    const user = ref.current;

    let isFormValid = !(!user.nome.value || !user.email.value || !user.data_nascimento.value || !user.cpf.value || !user.senha.value)

    if (!onEdit && isFormValid) {
      await axios
        .post("http://localhost:8800/criar-conta", {
          nome: user.nome.value,
          email: user.email.value,
          data_nascimento: '1999-07-07',
          cpf: user.cpf.value,
          senha: user.senha.value
        })
        .then(({ data }) => {
          console.log(data)
          if (data === 'Sucesso') {
            callUserCreatedModal();
          }
        })
    }
  };



  return (
    <>
      {menusIsActivated ?
        <MenuContent>
          <IconHeader>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingTop: '1rem', marginRight: '1rem' }}>
              <div onClick={() => setMenu(!menusIsActivated)}>
                <FontAwesomeIcon icon={faX} style={{ fontSize: '2rem', color: "white" }} />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '4rem' }}>
              <div onClick={() => setMenu(!menusIsActivated)}>
                <a href="#nossosServicos" style={{ color: 'white', fontSize: '1.5rem', fontWeight: '700', textDecoration: 'none' }}
                >Nossos Serviços</a>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '3rem' }}>
              <div onClick={() => callModal()}>
                <button style={{ backgroundColor: '#36DD3D', borderRadius: '50px', padding: '25px 80px', border: 'none', fontSize: '1.25rem', fontWeight: '700' }}>
                  Entrar
                </button>
              </div>
            </div>
          </IconHeader>
        </MenuContent>

        :

        <>
          {modalIsActivated ?
            <div style={{ width: '100%', height: '100%' }}>
              <div style={{ position: 'fixed', height: '100%', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                  <div style={{ display: 'flex', padding: "2rem", backgroundColor: 'white', width: '65%', borderRadius: '25px', flexDirection: 'column', margin: '0 auto' }}>
                    {/* // botão fechar modal */}
                    <div style={{ alignSelf: 'flex-end' }}>
                      <FontAwesomeIcon onClick={() => closeModal()} icon={faX} style={{ fontSize: '1.5rem' }} />
                    </div>

                    {signUp ?
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h3 style={{ textAlign: 'center', marginTop: '1rem' }}>
                          Acesse agora mesmo o Livrar!
                        </h3>
                        <form style={{ display: 'flex', flexDirection: 'column' }} ref={ref} onSubmit={handleSubmitLogin}>

                          {!loginError ?
                            <input type="email" name="email" placeholder="digite o seu e-mail" style={{ padding: '0.75rem', borderRadius: '15px', border: '1px solid #1E8422', marginTop: '1rem', textAlign: 'center', fontSize: '1rem' }}>
                            </input> :
                            <input type="email" name="email" placeholder="digite o seu e-mail" style={{ padding: '0.75rem', borderRadius: '15px', border: '1px solid red', marginTop: '1rem', textAlign: 'center', fontSize: '1rem' }}>
                            </input>}

                          {!loginError ?
                            <input type="password" name="senha" placeholder="digite a sua senha" style={{ padding: '0.75rem', borderRadius: '15px', border: '1px solid #1E8422', marginTop: '1rem', marginBottom: '1rem', textAlign: 'center', fontSize: '1rem' }}>
                            </input> :
                            <input type="password" name="senha" placeholder="digite a sua senha" style={{ padding: '0.75rem', borderRadius: '15px', border: '1px solid red', marginTop: '1rem', marginBottom: '0.5rem', textAlign: 'center', fontSize: '1rem' }}>
                            </input>
                          }

                          {!loginError ? null :
                            <p style={{ color: 'red', textAlign: 'center', marginBottom: '0.5rem' }}>E-mail e/ou Senha incorretos</p>}
                        </form>

                        <p style={{ textAlign: 'center' }}>
                          Basta digitar as suas credenciais, mas caso ainda não possua é só <span onClick={callSignInModal} style={{ color: '#00823B' }}>clicar aqui!</span>
                        </p>
                        <button onClick={handleSubmitLogin} style={{ color: 'white', fontWeight: '700', padding: '15px', width: '70%', margin: '1.5rem auto', borderRadius: '25px', border: '1px solid #1E8422', background: '#1E8422' }}>
                          Entrar
                        </button>
                        <p style={{ textAlign: 'center' }}>
                          Esqueceu a senha? <span onClick={callForgotPasswordModal} style={{ color: '#00823B' }}>clique aqui</span>
                        </p>
                      </div> : null
                    }

                    {signIn ?
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h3 style={{ textAlign: 'center' }}>Junte-se aos nossos leitores!</h3>

                        <p style={{ textAlign: 'center', color: '#2F2F2F', marginTop: '0.25rem' }}>
                          Preencha os dados abaixo para realizar o seu cadastro conosco!
                        </p>

                        <form style={{ display: 'flex', flexDirection: 'column' }} ref={ref} onSubmit={handleSubmitLogin}>

                          {!loginError ?
                            <IMaskInput maxLength={255} type="text" name="nome" placeholder="Nome Completo" style={{ padding: '0.75rem', borderRadius: '15px', border: '1px solid #1E8422', marginTop: '1rem', textAlign: 'center', fontSize: '1rem' }}>
                            </IMaskInput> :
                            <IMaskInput maxLength={255} type="text" name="nome" placeholder="Nome Completo" style={{ padding: '0.75rem', borderRadius: '15px', border: '1px solid red', marginTop: '1rem', textAlign: 'center', fontSize: '1rem' }}>
                            </IMaskInput>
                          }

                          {!loginError ?
                            <IMaskInput type="tel" mask="000.000.000-00" name="cpf" placeholder="CPF" style={{ padding: '0.75rem', borderRadius: '15px', border: '1px solid #1E8422', marginTop: '1rem', textAlign: 'center', fontSize: '1rem' }}>
                            </IMaskInput> :
                            <IMaskInput type="tel" name="cpf" mask="000.000.000-00" placeholder="CPF" style={{ padding: '0.75rem', borderRadius: '15px', border: '1px solid red', marginTop: '1rem', textAlign: 'center', fontSize: '1rem' }}>
                            </IMaskInput>
                          }

                          {!loginError ?
                            <IMaskInput type="tel" mask="00/00/0000" name="data_nascimento" placeholder="Data de Nascimento" style={{ padding: '0.75rem', borderRadius: '15px', border: '1px solid #1E8422', marginTop: '1rem', textAlign: 'center', fontSize: '1rem' }}>
                            </IMaskInput> :
                            <IMaskInput type="tel" name="data_nascimento" mask="00/00/0000" placeholder="Data de Nascimento" style={{ padding: '0.75rem', borderRadius: '15px', border: '1px solid red', marginTop: '1rem', textAlign: 'center', fontSize: '1rem' }}>
                            </IMaskInput>
                          }

                          {!loginError ?
                            <IMaskInput type="text" name="email" placeholder="E-mail" style={{ padding: '0.75rem', borderRadius: '15px', border: '1px solid #1E8422', marginTop: '1rem', textAlign: 'center', fontSize: '1rem' }}>
                            </IMaskInput> :
                            <IMaskInput type="text" name="email" placeholder="E-mail" style={{ padding: '0.75rem', borderRadius: '15px', border: '1px solid red', marginTop: '1rem', textAlign: 'center', fontSize: '1rem' }}>
                            </IMaskInput>
                          }

                          {!loginError ?
                            <IMaskInput type="password" name="senha" placeholder="Senha" style={{ padding: '0.75rem', borderRadius: '15px', border: '1px solid #1E8422', marginTop: '1rem', textAlign: 'center', fontSize: '1rem' }}>
                            </IMaskInput> :
                            <IMaskInput type="password" name="senha" placeholder="Senha" style={{ padding: '0.75rem', borderRadius: '15px', border: '1px solid red', marginTop: '1rem', textAlign: 'center', fontSize: '1rem' }}>
                            </IMaskInput>
                          }

                          {!loginError ? null :
                            <p style={{ color: 'red', textAlign: 'center', marginBottom: '0.5rem' }}>Confira os campos novamente!</p>}
                        </form>

                        <button onClick={handleSubmitClient} style={{ color: 'white', fontWeight: '700', padding: '15px', width: '70%', margin: '1.5rem auto 0 auto', borderRadius: '25px', border: '1px solid #1E8422', background: '#1E8422' }}>
                          Concluir
                        </button>
                      </div>
                      : null}

                    {userCreated ?
                      <div>
                        <h3 style={{ textAlign: 'center', marginTop: '1rem' }}>
                          Você está a um passo de se tornar um de nossos leitores!
                        </h3>
                        <p style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                          Entre no e-mail cadastrado e confirme o seu cadastro!
                        </p>
                      </div>
                      : null}

                    {forgotPassword ?
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h3 style={{ textAlign: 'center', marginTop: '1rem' }}>
                          Poxa, não lembra a sua senha? A gente te ajuda!
                        </h3>
                        <form style={{ display: 'flex', flexDirection: 'column' }} ref={ref} onSubmit={handleSubmitForgotPassword}>
                          <input type="email" name="email" placeholder="digite o e-mail cadastrado" style={{ padding: '0.75rem', borderRadius: '15px', border: '1px solid #1E8422', marginTop: '1rem', textAlign: 'center', fontSize: '1rem' }}>
                          </input>
                        </form>

                        <p style={{ textAlign: 'center', marginTop: '1rem' }}>
                          Insira o e-mail cadastrado para te ajudarmos a recuperar a sua senha                        
                        </p>
                        <button onClick={handleSubmitForgotPassword} style={{ color: 'white', fontWeight: '700', padding: '15px', width: '70%', margin: '1.5rem auto', marginBottom: '0', borderRadius: '25px', border: '1px solid #1E8422', background: '#1E8422' }}>
                          Recuperar senha
                        </button>
                      </div> : null
                    }

                    { checkEmail ? 
                      <div>
                        <h3 style={{textAlign: 'center' }}>
                          Você está a um passo de voltar para a sua rotina de leitura!
                        </h3>
                        <p style={{textAlign: 'center', marginTop: '1rem' }}>
                          Caso o e-mail informado esteja correto, você receberá um link para redefinir a sua senha antiga.
                        </p>
                      </div> : null
                    }

                  </div>
                </div>
              </div>
            </div>
            : null}
          <Header>
            <IconHeader>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '1rem' }}>
                  <img src={imagem} alt=""></img>
                  <h2 style={{ marginLeft: "0.25rem" }}>livrar</h2>
                </div>
                <div onClick={() => setMenu(!menusIsActivated)} style={{ marginRight: '1rem' }}>
                  <FontAwesomeIcon icon={faBars} style={{ fontSize: '2rem' }} />
                </div>
              </div>
            </IconHeader>
          </Header>

          <PrincipalSection>
            <PrincipalSectionTitle>
              <strong> leia, estude e visite diversos universos com o Livrar </strong>
            </PrincipalSectionTitle>
            <PrincipalSectionText>
              Acesse diversas histórias por meio de ebooks onde, como e quando quiser!
            </PrincipalSectionText>
            <PrincipalSectionButton>
              <button onClick={() => callModal()} style={{ border: 'none', color: '#1E8422' }}>Comece a ler agora!</button>
            </PrincipalSectionButton>
          </PrincipalSection>

          <KnowMoreSection id="nossosServicos">
            <KnowMoreTitle>
              <strong> Quer saber mais sobre o Livrar? Confira os nossos produtos e serviços </strong>
            </KnowMoreTitle>
            <KnowMoreDescription>
              <h3 style={{ color: 'white', paddingBottom: '0.25rem' }}> Leitura </h3>
              <p style={{ color: '#EDEDED' }}>
                A principal missão do Livrar é servir de apoio para leitores,
                levando o livro para os dispositivos móveis, sendo possível acessar de qualquer
                lugar a qualquer momento!
              </p>
              <hr style={{ marginTop: '1.5rem', marginBottom: '1.5rem', border: '0.5px solid #32E839' }}></hr>
            </KnowMoreDescription>
            <KnowMoreDescription>
              <h3 style={{ color: 'white', paddingBottom: '0.25rem' }}> Ciência </h3>
              <p style={{ color: '#EDEDED' }}>
                O Livrar está preocupado com o avanço científico e para isso permite a publicação de artigos por instituições
                educacionais, construindo assim um acervo consultivo para pesquisas científicas!
              </p>
              <hr style={{ marginTop: '1.5rem', marginBottom: '1.5rem', border: '0.5px solid #32E839' }}></hr>
            </KnowMoreDescription>
            <KnowMoreDescription>
              <h3 style={{ color: 'white', paddingBottom: '0.25rem' }}> Publicação Independente </h3>
              <p style={{ color: '#EDEDED' }}>
                Uma das nossas missões é a de tornar livros menos elitistas, permitindo que escritores e editores
                independentes possam fazer a publicação digital do seu livro de forma gratuita!
              </p>
              <hr style={{ marginTop: '1.5rem', marginBottom: '1.5rem', border: '0.5px solid #32E839' }}></hr>
            </KnowMoreDescription>
            <KnowMoreDescription>
              <h3 style={{ color: 'white', paddingBottom: '0.25rem' }}> Publicação Editorial </h3>
              <p style={{ color: '#EDEDED' }}>
                Dentro da linha de publicação editorial, o nosso intuito é o de firmar parceria com
                editoras para trazer o máximo de conteúdo com a máxima qualidade possível!
              </p>
              <hr style={{ marginTop: '1.5rem', marginBottom: '1.5rem', border: '0.5px solid #32E839' }}></hr>
            </KnowMoreDescription>


            <KnowMoreButton>
              <NavLink to='pre-login' style={{ textDecoration: 'none', color: '#1E8422' }}>Aproveite agora!</NavLink>
            </KnowMoreButton>

            <div style={{ paddingBottom: "2rem" }}></div>
          </KnowMoreSection>

          <Footer>
            <p>
              Livrar 2023 | Todos os direitos reservados
            </p>
          </Footer>
        </>
      }
    </>
  );
}

export default Intro