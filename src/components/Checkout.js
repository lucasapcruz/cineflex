import { useState } from "react"
import axios from "axios"
import baseUrl from "../url"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Checkout({ chosenSeats, client, setClient }) {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")

    const [error, setError] = useState(false)

    function bookSeats(event) {
        if (chosenSeats.length > 0) {
            event.preventDefault()

            const order = {
                ids: chosenSeats,
                name: name,
                cpf: cpf
            }

            const promise = axios.post(
                `${baseUrl}/seats/book-many`,
                order
            )


            promise.then((response) => {
                navigate("/sucesso")
                const clientObj = { ...client }
                clientObj.name = name
                clientObj.cpf = cpf
                setClient(clientObj)
            })

            promise.catch((response) => {
                setError(true)
            })
        } else {
            alert("Escolha pelo menos 1 assento")
        }

    }

    return (
        <>
            <form onSubmit={bookSeats}>
                <Container>
                    <InputBox>
                        <label htmlFor="name">Nome do comprador:</label>
                        <input type="name" value={name} required placeholder="Digite seu nome..." onChange={e => setName(e.target.value)} />
                    </InputBox>
                    <InputBox>
                        <label htmlFor="cpf">CPF do comprador:</label>
                        <input type="cpf" value={cpf} required placeholder="Digite seu CPF..." onChange={e => setCpf(e.target.value)} />
                    </InputBox>
                    <button type="submit">Reservar Assentos</button>
                </Container>
            </form>
        </>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top:44px;
    
    button{
        background-color: #E8833A;
        color: #FFFFFF;
        height: 42px;
        width: 225px;
        font-size: 18px;
        line-height: 21px;
        border: none;
        border-radius: 3px;
        margin-top: 57px;
    }
`

const InputBox = styled.div`
    input{
        height: 51px;
        width: 327px;
        font-style: italic;
        font-size: 18px;
        line-height: 21px;
        border:1px solid #D5D5D5;
        font-weight: 400;
    }

    label{
        font-size: 18px;
        line-height: 21px;
        font-weight: 400;
        color: #293845;
    }
`