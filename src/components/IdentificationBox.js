import { useState } from "react"
import axios from "axios"
import baseUrl from "../url"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function IdentificationBox({ chosenSeats, movie, day }) {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [cpf, setCpf] = useState("")

    const [error, setError] = useState(false)

    function bookSeats(event) {
        if (chosenSeats.length > 0) {
            event.preventDefault()

            const order = {
                ids: chosenSeats,
                email: email,
                cpf: cpf
            }

            const promise = axios.post(
                `${baseUrl}/seats/book-many`,
                order
            )


            promise.then((response) => {
                navigate("/sucesso",
                    {
                        movie: movie,
                        day: day,
                        ids: chosenSeats,
                        client: {
                            email: email,
                            cpf: cpf
                        }
                    })
            })

            promise.catch((response) => {
                setError(true)
            })
        }else{
            alert("Escolha pelo menos 1 assento")
        }

    }

    return (
        <>
            <form onSubmit={bookSeats}>
                <Container>
                    <label for="name">Nome do comprador:</label>
                    <input type="name" value={email} required onChange={e => setEmail(e.target.value)} />
                    <label for="cpf">CPF do comprador:</label>
                    <input type="cpf" value={cpf} required onChange={e => setCpf(e.target.value)} />
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

    input{
        height: 51px;
        width: 327px;
    }

    label{
        font-size: 18px;
        line-height: 21px;
        font-weight: 400;
        color: #293845;
    }
    
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