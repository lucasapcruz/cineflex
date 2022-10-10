import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import baseUrl from "../url"
import ShoppingCart from "../components/ShoppingCart"
import SeatSelector from "../components/SeatSelector"
import IdentificationBox from "../components/IdentificationBox"

export default function SeatsPage(){

    const {idSessao} = useParams()
    const [chosenSeats, setChosenSeats] = useState([])
    const [seats, setSeats] = useState([])
    const [day, setDay] = useState({})
    const [movie, setMovie] = useState({})

    const [error, setError] = useState(false)

    useEffect(() => {
        const promise = axios.get(`${baseUrl}/showtimes/${idSessao}/seats`)

        promise.then((response) => {
            const dayObj = {...day}
            dayObj.weekday = response.data.day.weekday
            dayObj.date = response.data.day.date
            setDay(dayObj)
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
            <IdentificationBox chosenSeats={chosenSeats} movie={movie} day={day}/>
            <ShoppingCart title={movie.title} posterURL={movie.posterURL} weekday={day.weekday} date={day.date}/>
        </>
    )
}

const Container = styled.div`
    margin-top: 67px;
    width: 100%;
    height: 110px;
    color: #293845;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`