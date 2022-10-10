import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import baseUrl from "../url"
import ShoppingCart from "../components/ShoppingCart"
import SeatSelector from "../components/SeatSelector"
import Checkout from "../components/Checkout"

export default function SeatsPage({movie, session, chosenSeats, client, setMovie, setSession, setChosenSeats, setClient}){

    const {idSessao} = useParams()
    const [seats, setSeats] = useState([])

    const [error, setError] = useState(false)

    useEffect(() => {
        const promise = axios.get(`${baseUrl}/showtimes/${idSessao}/seats`)

        promise.then((response) => {
            const sessionObj = {...session}
            sessionObj.weekday = response.data.day.weekday
            sessionObj.date = response.data.day.date
            sessionObj.showtime = response.data.name
            setSession(sessionObj)
            const movieObj = {...movie}
            movieObj.title = response.data.movie.title
            movieObj.posterURL = response.data.movie.posterURL
            setMovie(movieObj)
            setSeats(response.data.seats)
        })

        promise.catch((err) => setError(true))

    }, [])

    return(
        <>
            <Container>
                <p>Selecione o(s) assento(s)</p>
            </Container>
            <SeatSelector seats={seats} chosenSeats={chosenSeats} setChosenSeats={setChosenSeats}/>
            <Checkout chosenSeats={chosenSeats} client={client} setClient={setClient}/>
            <ShoppingCart title={movie.title} posterURL={movie.posterURL} session={session}/>
        </>
    )
}

const Container = styled.div`
    margin-top: 67px;
    width: 100%;
    height: 90px;
    color: #293845;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    p{
        margin-top: 20px;
    }
`