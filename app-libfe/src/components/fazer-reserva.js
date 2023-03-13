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

const Button = styled.button`
  color: #ff1d1d;
  cursor: pointer;
  background-color: transparent ;
  width: 50%;
  padding: 0.75rem 1rem;
  border-radius: 2rem;
  border: 2px #ff1d1d solid;
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
    border: 1.5px solid #ff1d1d;
    border-radius: 20px;
    padding: 15px 10px
`

const GetHour = styled.div``

const GetDate = styled.div``

const GetPublic = styled.div``

const FazerReserva = ({ onEdit }) => {
    const ref = useRef();

    const navigate = useHistory()

    useEffect(() => {}, [onEdit]);

    const chooseDate = (e) => {
        let lastElementActived = document.getElementsByClassName('active')
        
        if(lastElementActived.length > 0){
            lastElementActived[0].classList.remove('active')
        }

        let element = e.target
        element.classList.add('active')
    }

    const chooseHour = (e) => {
        let lastElementActived = document.getElementsByClassName('actived')
        
        if(lastElementActived.length > 0){
            lastElementActived[0].classList.remove('actived')
        }

        let element = e.target
        element.classList.add('actived')
    }

    const handleSubmitReservation = async (e) => {
        e.preventDefault();

        const dia = document.getElementsByClassName('active')[0].textContent
        const hora = document.getElementsByClassName('actived')[0].textContent
        const reservantes = document.getElementsByTagName('input')[0].value

        if(!onEdit) {
            await axios
                .post("http://localhost:8800/new-reservation", {
                    cpf: '47155151807',
                    nome_estabelecimento: 'Teste',
                    data_reserva: dia,
                    horario_reserva: hora,
                    reservantes: reservantes,
            })
            .then(({ data }) => {
                if(data === 'Sucesso'){
                    navigate.push('/reserva-sucesso')
            }})
        }
    };

    return (
        <>
            <ActionSheet>
                <NavLink to='/home-usuario-cliente' style={{ alignSelf: "flex-end" }}>
                    <FontAwesomeIcon icon={faXmark} style={{ fontSize: "2rem", marginRight: "2rem", color: "#ff1d1d" }} />
                </NavLink>
                <ActionSheetTitle>
                    Que ótimo, ficamos <br></br>
                    muito feliz pela sua <br></br>
                    preferência!
                </ActionSheetTitle>
                <ActionSheetText>
                    Agora, escolha uma data e um horário disponível <br></br>
                    para finalizar a sua reserva:
                </ActionSheetText>

                <GetDate style={{width: "75%"}}>
                    <div style={{display: "flex", gap: "10px", paddingBottom: "1rem"}}>
                        <Button onClick={chooseDate} > 31/03 </Button>
                        <Button onClick={chooseDate} > 01/04 </Button>
                        <Button onClick={chooseDate} > 02/04 </Button>
                    </div>

                    <div style={{display: "flex", gap: "10px", justifyContent: "center"}}>
                        <Button onClick={chooseDate} > 03/04 </Button>
                        <Button onClick={chooseDate} > 04/04 </Button>
                    </div>
                </GetDate>

                <GetHour>
                    <ActionSheetText>
                    Para a data escolhida os horários disponíveis <br></br>
                        para reserva são os que estão abaixo:
                    </ActionSheetText>

                    <div style={{paddingTop: "0.5rem", width: "60%", margin: "0 auto"}}>
                        <div className="timeToSchedule" onClick={chooseHour}>18:00</div>
                        <div className="timeToSchedule" onClick={chooseHour}>19:00</div>
                        <div className="timeToSchedule" onClick={chooseHour}>20:30</div>
                    </div>
                </GetHour>

                <GetPublic>
                    <ActionSheetText style={{paddingBottom: "1rem"}}>
                        Quantas pessoas irão? <br></br>
                        Lembrete: conte o número de pessoas <br></br>
                        incluindo você também ;)
                    </ActionSheetText>

                    <Input type="tel" name="reservantes" className="timeToSchedule" style={{textAlign: "center"}}>
                    </Input>

                    <ActionSheetText style={{paddingTop: "1rem"}}>
                        Agora é só finalizar a sua reserva!
                    </ActionSheetText>

                </GetPublic>

                <ActionSheetButton type="submit" onClick={handleSubmitReservation}> Finalizar Reserva </ActionSheetButton>


            </ActionSheet>
        </>
    );
};

export default FazerReserva