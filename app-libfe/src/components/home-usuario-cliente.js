import React, { useEffect, useState } from "react"
import axios from "axios";
import styled from "styled-components"
import Carousel from 'react-elastic-carousel';

import imagem from "../assets/img/calendario-home-cliente.png";
import imagemOgawa from "../assets/img/restaurante-ogawa.png";
import imagemTacos from "../assets/img/restaurante-tacos.png";
import imagemBurger from "../assets/img/restaurante-burger.png";
import imagemPizza from "../assets/img/restaurante-pizza.png";
import imagemChurras from "../assets/img/restaurante-churras.png";
import imagemDocesMel from "../assets/img/restaurante-doce.png";
import imagemVegetarirango from "../assets/img/restaurante-veggie.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";


const state = {
    items: [
        {id: 1, title: 'Restaurante Ogawa', image: imagemOgawa, nota: "4,6"},
        {id: 2, title: 'Arriba Tacos', image: imagemTacos, nota: "5"},
        {id: 3, title: 'Seu Burger', image: imagemBurger, nota: "4,7"},
        {id: 4, title: 'Pizzas 10', image: imagemPizza, nota: "4,9"},
        {id: 5, title: 'Churras e Afins', image: imagemChurras, nota: "5"},
        {id: 6, title: 'Doce de Mel', image: imagemDocesMel, nota: "4,8"},
        {id: 7, title: 'Vegetarirango', image: imagemVegetarirango, nota: "4,9"}
    ]
}

const breakPoints = [
    { width: 1, itemsToShow: 2, itemsToScroll: 1 }
]

const HomeContent = styled.div`
    background-color: white;
    width: 100%;
    min-height: 100vh;
`

const Header = styled.header`
    width: 100%;
    height: 15%
`

const UserLocation = styled.div`
    margin: 1.5rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

const CityOfUser = styled.div`
    font-family: 'Eina', sans-serif
`

const Reservations = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
`

const ReservationLeftContent = styled.div`
    width: 50%;
    text-align: center;
    margin-left: 1rem;`

const ReservationRightContent = styled.div`
    width: 50%`

const ReservationComponent = styled.div`
    width: 90%;
    border-radius: 20px;
    background-color: #FF1D1D;
    font-family: 'Eina', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 5px 2px 1px rgba(0, 0, 0, 0.2);
`

const NumberOfReservations = styled.button`
    background-color: #fdddb1;
    border: 2px solid white;
    color: #ff1d1d;
    border-radius: 20px;
    padding: 0.675rem;
    font-family: 'Eina', sans-serif;
    font-size: 1rem;
`

const ReservationText = styled.div`
    color: white;
    font-family: 'Eina', sans-serif;
    padding-bottom: 1rem;
    font-size: 1.25rem;
`

const Establishments = styled.div`
    margin-top: 3.5rem;
    font-size: 1.5rem;
`

const EstablishmentsTitle = styled.h3`
    text-align: center;
    font-weight: 300;
    font-size: 1.25rem;
    padding: 0 2rem 1rem 2rem;
`

const EstablishmentsItems = styled.div``

const HomeUsuarioCliente = () => {
    var [reservations, setReservations] = useState([])
    var [userInformations, setUserInformations] = useState([])

    const getReservationsUser = async () => {
            await axios
            .post("http://localhost:8800/reservations", {
                cpf: '47155151807'
            })
            .then(({ data }) => {
                setReservations(data)
            })
    }

    const getUserInformations = async () => {
        await axios
            .post("http://localhost:8800/info", {
                cpf: '471.551.518-07'
            })
            .then(({ data }) => {
                setUserInformations(data)
            })
    }

    const getUserEmail = async () => {
        await axios
            .post("http://localhost:8800/getEmail")
            .then(({ data }) => {
                console.log('data', data); 
            }) 
    }

    const navigate = useHistory()

    const goToReservation = () => {
        navigate.push('/fazer-reserva')
    }

    useEffect(() => {
        getUserEmail();
        getReservationsUser();
        getUserInformations()
    }, [setReservations])

    const { items } = state;

    return (
        <>
            <HomeContent>
                <Header>
                    <UserLocation>
                        <FontAwesomeIcon icon={faLocationDot} style={{fontSize: "2rem", marginRight: "0.5rem", color: "#ff1d1d"}} />
                        <CityOfUser>São Paulo</CityOfUser>
                    </UserLocation>
                </Header>

                <Reservations>
                    <ReservationComponent>
                        <ReservationLeftContent>
                            <ReservationText>
                                Acompanhe as <br></br>suas reservas
                            </ReservationText>
                            <NumberOfReservations> {reservations.length > 0 ? `Você possui ${reservations.length} reserva(s)!` : 'Sem reservas'}</NumberOfReservations>
                        </ReservationLeftContent>
                        <ReservationRightContent>
                            <img src={imagem} alt="" className="imagem-calendario__home-cliente"></img>
                        </ReservationRightContent>
                    </ReservationComponent>
                </Reservations>

                <Establishments>
                    <EstablishmentsTitle>
                        Veja estabelecimentos próximos de você:
                    </EstablishmentsTitle>
                    <EstablishmentsItems >
                        <Carousel breakPoints={breakPoints}>
                            {items.map(item => 
                            <div key={item.id} className="carouselEstablishments" onClick={goToReservation}>
                                <img src={item.image} alt="" style={{width: "50%"}}></img>
                                <p style={{fontSize: "0.5rem", fontFamily:'Eina', textAlign: "center", paddingTop: "0.5rem"}}>{item.title}</p>
                                <div>
                                    <FontAwesomeIcon icon={faStar} style={{fontSize: "0.75rem", marginRight: "0.25rem", color: "#ff1d1d"}} />
                                    <span style={{fontFamily:'Eina', fontSize: "0.75rem"}}>{item.nota}</span>                            
                                </div>    
                            </div>)}
                        </Carousel>
                    </EstablishmentsItems>
                </Establishments>

                {/* <ReservationsInfo>
                    <ReservationsInfoTitle>
                        Suas próximas reservas:
                    </ReservationsInfoTitle>
                    <ReservationsGrid>
                        <div>
                            {reservations[0].nome_estabelecimento} - {reservations[0].data_reserva} | {reservations[0].horario_reserva}  
                        </div>
                        <div style={{marginTop: "1rem"}}>
                            {reservations[1].nome_estabelecimento} - {reservations[1].data_reserva} | {reservations[1].horario_reserva}  
                        </div>

                    </ReservationsGrid>
                </ReservationsInfo> */}

            </HomeContent>
        </>
    );
};

export default HomeUsuarioCliente