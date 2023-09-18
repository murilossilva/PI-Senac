import styled from "styled-components"
import { NavLink } from 'react-router-dom'
import imagem from "../assets/img/icon-header.svg";
import pdfTeste from "../assets/pdf/pdf-teste.pdf";
import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react';

import { faX } from '@fortawesome/free-solid-svg-icons'

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

const MeusLivros = () => {
    function callModal() {
        setModal(!modalIsActivated)
    }

    function closeModal() {
        setModal(!modalIsActivated)
    }

    const [menusIsActivated, setMenu] = useState(false);
    const [modalIsActivated, setModal] = useState(false);
    const [haveABook, setHaveABook] = useState(false);
    const [imageBook, setImage] = useState([])


    var [books, setReservations] = useState([])

    const indicationBook = async (e) => {
        {
            await axios
                .post("http://localhost:8800/livros-indicacao", {
                })
                .then(({ data }) => {
                    console.log('data', data)
                    if (data.length > 0) {
                        setImage(data);
                    }
                })
        }
    };

    const getBooksUser = async () => {
        await axios
            .post("http://localhost:8800/livros-usuario", {
                cpf: '987.654.321-00'
            })
            .then(({ data }) => {
                if (data.length > 0) {
                    setHaveABook(true);
                    getBooksInfo(data[0].codigo_de_barras);
                } else {
                    indicationBook()
                }
                setReservations(data)
            })
    }

    const getBooksInfo = async (codigo_de_barras) => {
        await axios
            .post("http://localhost:8800/buscar-livros", {
                codigo_de_barras: codigo_de_barras
            })
            .then(({ data }) => {
                setReservations(data)
            })
    }

    useEffect(() => {
        getBooksUser();
    }, [setReservations])

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

                        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '4rem', flexDirection: 'column', gap: '2rem', textAlign: 'center' }}>
                            <div onClick={() => setMenu(!menusIsActivated)}>
                                <NavLink to='/home-usuario' style={{ textDecoration: 'none' }}>
                                    <p style={{ color: 'white', fontSize: '1.5rem', fontWeight: '700', textDecoration: 'none' }}>
                                        Início
                                    </p>
                                </NavLink>
                            </div>
                            <div onClick={() => setMenu(!menusIsActivated)}>
                                <NavLink to='/marketplace' style={{ textDecoration: 'none' }}>
                                    <p style={{ color: 'white', fontSize: '1.5rem', fontWeight: '700', textDecoration: 'none' }}>
                                        Marketplace
                                    </p>
                                </NavLink>
                            </div>
                            <div onClick={() => setMenu(!menusIsActivated)}>
                                <NavLink to='/meus-livros' style={{ textDecoration: 'none' }}>
                                    <p style={{ color: 'white', fontSize: '1.5rem', fontWeight: '700', textDecoration: 'none' }}>
                                        Meus livros
                                    </p>
                                </NavLink>
                            </div>
                        </div>
                    </IconHeader>
                </MenuContent>

                :

                <>
                    {modalIsActivated ?
                        <div style={{ width: '100%', height: '100%' }}>
                            <div style={{ position: 'fixed', height: '100%', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                                <div onClick={() => closeModal()} style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                                    <iframe src='https://www.caceres.mt.gov.br/fotos_institucional_downloads/2.pdf' width="760" height="500" type='application/pdf' style={{ border: 'none' }}></iframe>
                                </div>
                            </div>
                        </div>
                        : null
                    }

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
                        <PrincipalSectionTitle style={{ marginBottom: '0' }}>
                            <strong> aqui você pode consultar todos os livros que você possui na sua conta! </strong>
                        </PrincipalSectionTitle>
                        {
                            haveABook ?
                                <PrincipalSectionText>
                                    Uau, sua biblioteca virtual está aumentando!<br></br>
                                    Você possui um total de 1 livro, clique no botão abaixo para aumentar ainda mais o seu acervo literário! ;)
                                </PrincipalSectionText>
                                : <PrincipalSectionText>
                                    Poxa, vimos aqui que você não possui
                                    nenhum livro ainda :( <br></br>
                                    Não desanime, você pode adquirir
                                    clicando no botão abaixo!
                                </PrincipalSectionText>
                        }

                        <PrincipalSectionButton>
                            <NavLink to='/marketplace' style={{ textDecoration: 'none', color: '#1E8422' }}>Adquirir novos livros</NavLink>
                        </PrincipalSectionButton>
                    </PrincipalSection>

                    <KnowMoreSection id="nossosServicos">
                        {
                            haveABook ?
                                <div>
                                    <KnowMoreTitle>
                                        <strong> Esses são os livros que você possui no momento!
                                        </strong>
                                    </KnowMoreTitle>

                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <div style={{ border: '1px solid #1E8422', backgroundColor: 'white', borderRadius: '25px', width: "50%", display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
                                            <img src={books[0].imagem} alt="" style={{ maxWidth: '60%' }}></img>
                                            <h4 style={{ marginTop: '1rem' }}> {books[0].nome_livro} </h4>
                                            <p style={{ color: '#696969' }}> {books[0].autor} </p>
                                            <p style={{ fontWeight: '700', color: '#1E8422', padding: '1rem' }}>{books[0].numero_paginas} páginas</p>
                                            <button onClick={() => callModal()} style={{ color: 'white', backgroundColor: '#1E8422', borderRadius: '30px', padding: '15px 40px', border: 'none', fontSize: '1rem', fontWeight: '700' }}>
                                                Ler agora
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div>
                                    <KnowMoreTitle>
                                        <strong> Como você ainda não possui nenhum
                                            livro,  temos algumas indicações
                                            de livros para você!
                                        </strong>
                                    </KnowMoreTitle>
                                    <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
                                        <div style={{ backgroundColor: 'white', borderRadius: '25px', padding: '2rem' }}>
                                            <img src={imageBook[0]?.imagem} alt="" style={{ maxWidth: '60%' }}></img>
                                            <h4 style={{ marginTop: '1rem' }}> {imageBook[0]?.nome_livro} </h4>
                                            <p style={{ color: '#696969' }}> Autor: {imageBook[0]?.autor} </p>
                                            <p style={{ color: '#696969' }}> Editora: {imageBook[0]?.editora} </p>
                                            <p style={{ color: '#696969' }}> Páginas: {imageBook[0]?.numero_paginas} </p>
                                            <p style={{ color: '#696969' }}> Ano: {imageBook[0]?.ano_lancamento} </p>
                                            <p style={{ fontWeight: '700', color: '#1E8422', padding: '1rem' }}>{imageBook[0]?.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>

                                            <NavLink to='/marketplace'>
                                                <button style={{ color: 'white', backgroundColor: '#1E8422', borderRadius: '30px', padding: '15px 40px', border: 'none', fontSize: '1rem', fontWeight: '700' }}>
                                                    Comprar
                                                </button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>

                        }

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

export default MeusLivros