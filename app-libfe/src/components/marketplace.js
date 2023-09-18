import styled from "styled-components"
import { NavLink } from 'react-router-dom'
import imagem from "../assets/img/icon-header.svg"
import imagemMarketplace from "../assets/img/marketplace.svg"
import axios from "axios"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useRef } from 'react';

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

const Marketplace = ({ onEdit }) => {
    function callModal() {
        setBuyBook(true);
        setMenu(false)
        setSignUp(!signUp)
        setModal(true)
    }

    function closeModal() {
        setModal(!modalIsActivated)
        setPayment(false);
    }

    function resetBooks() {
        setReturnBooks(false);
    }

    const ref = useRef();
    const [imageBook, setImage] = useState([])

    const [menusIsActivated, setMenu] = useState(false);
    const [buyBook, setBuyBook] = useState(false);
    const [payment, setPayment] = useState(false);

    const [returnBooks, setReturnBooks] = useState(false);
    const [modalIsActivated, setModal] = useState(false);
    const [signUp, setSignUp] = useState(false);


    const searchBook = async (e) => {
        e.preventDefault();

        const book = ref.current;
        let isFormValid = !(!book.livro.value)

        if (!onEdit && isFormValid) {
            await axios
                .post("http://localhost:8800/buscar-livros", {
                    livro: book.livro.value,
                })
                .then(({ data }) => {
                    if (data.length > 0) {
                        setReturnBooks(true);
                        setImage(data);
                    } else {
                        resetBooks()
                    }
                })
        }
    };

    const handleSubmitBuy = async (e) => {
        e.preventDefault();

        const book = imageBook[0].codigo_de_barras;

        await axios
            .post("http://localhost:8800/efetuar-compra", {
                cpf: '987.654.321-00',
                codigo_de_barras: book,
                data_compra: new Date().getDay(),
                hora_compra: new Date().getHours(),
                link_pdf:'https://www.caceres.mt.gov.br/fotos_institucional_downloads/2.pdf',
                id_compra: 8
            })
            .then(({ data }) => {
                console.log('data', data)
                if (data === 'Sucesso') {
                    setBuyBook(false);
                    setPayment(true);
                }
            })

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
                                <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                                    <div style={{ display: 'flex', padding: "2rem", backgroundColor: 'white', width: '65%', borderRadius: '25px', flexDirection: 'column', margin: '0 auto' }}>
                                        {/* // botão fechar modal */}
                                        <div style={{ alignSelf: 'flex-end' }}>
                                            <FontAwesomeIcon onClick={() => closeModal()} icon={faX} style={{ fontSize: '1.5rem' }} />
                                        </div>
                                        {
                                            buyBook ?
                                                <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
                                                    <img src={imageBook[0].imagem} alt="" style={{ maxWidth: '60%' }}></img>
                                                    <h4 style={{ marginTop: '1rem' }}> {imageBook[0].nome_livro} </h4>
                                                    <p style={{ color: '#696969' }}> Autor: {imageBook[0].autor} </p>
                                                    <p style={{ color: '#696969' }}> Editora: {imageBook[0].editora} </p>
                                                    <p style={{ color: '#696969' }}> Páginas: {imageBook[0].numero_paginas} </p>
                                                    <p style={{ color: '#696969' }}> Ano: {imageBook[0].ano_lancamento} </p>
                                                    <p style={{ fontWeight: '700', color: '#1E8422', padding: '1rem' }}>{imageBook[0].preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                                                    <button onClick={handleSubmitBuy} style={{ color: 'white', backgroundColor: '#1E8422', borderRadius: '30px', padding: '15px 40px', border: 'none', fontSize: '1rem', fontWeight: '700' }}>
                                                        Comprar
                                                    </button>
                                                </div>
                                                : null
                                        }

                                        {
                                            payment ?
                                                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                                    <h3 style={{ textAlign: 'center', paddingTop: '1rem', paddingBottom: '1rem' }}>
                                                        Pagamento processado com sucesso!
                                                    </h3>
                                                    <NavLink to="/meus-livros">
                                                        <button style={{ color: 'white', backgroundColor: '#1E8422', borderRadius: '30px', padding: '15px 40px', paddingTop: '1rem', border: 'none', fontSize: '1rem' }}>
                                                            Ir para Meus Livros
                                                        </button>
                                                    </NavLink>
                                                </div>
                                                : null
                                        }

                                    </div>
                                </div>
                            </div>
                        </div> : null}

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
                            <strong> boas-vindas ao nosso Marketplace! </strong>
                        </PrincipalSectionTitle>
                        <PrincipalSectionText>
                            Aqui você poderá adquirir novos livros de
                            escritores independentes ou de editoras
                            de todo o mundo!
                        </PrincipalSectionText>
                        <div style={{ marginBottom: '2rem' }}>
                            <img src={imagemMarketplace} alt=""></img>
                        </div>
                    </PrincipalSection>


                    <KnowMoreSection id="nossosServicos">
                        <KnowMoreTitle>
                            <strong> Insira abaixo o livro que você deseja encontrar! </strong>
                        </KnowMoreTitle>
                        <form onSubmit={searchBook} ref={ref}>
                            <input
                                maxLength={255} type="text" name="livro" placeholder="Buscar livro" style={{ padding: '0.75rem', borderRadius: '15px', border: 'none', marginTop: '1rem', textAlign: 'center', fontSize: '1rem' }}>
                            </input>
                        </form>
                        <button type="submit" style={{ display: 'none' }}></button>
                        <div style={{ paddingBottom: "2rem" }}></div>
                    </KnowMoreSection>

                    <div style={{ display: 'flex', width: '100%' }}>
                        {returnBooks ?
                            <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                                <div style={{ border: '1px solid #1E8422', borderRadius: '25px', width: "50%", display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
                                    <img src={imageBook[0].imagem} alt="" style={{ maxWidth: '60%' }}></img>
                                    <h4 style={{ marginTop: '1rem' }}> {imageBook[0].nome_livro} </h4>
                                    <p style={{ color: '#696969' }}> {imageBook[0].autor} </p>
                                    <p style={{ fontWeight: '700', color: '#1E8422', padding: '1rem' }}>{imageBook[0].preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                                    <button onClick={callModal} style={{ color: 'white', backgroundColor: '#1E8422', borderRadius: '30px', padding: '15px 40px', border: 'none', fontSize: '1rem', fontWeight: '700' }}>
                                        Ver detalhes
                                    </button>
                                </div>
                            </div>
                            :
                            <div style={{ padding: '2rem' }}>
                                <p style={{ textAlign: 'center', fontWeight: '700' }}>
                                    Poxa, a sua busca não trouxe nenhum resultado, tente novamente!
                                </p>
                            </div>
                        }
                    </div>

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

export default Marketplace