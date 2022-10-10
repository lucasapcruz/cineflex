import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import SessionsList from "../components/SessionsList"
import baseUrl from "../url"
import ShoppingCart from "../components/ShoppingCart"

export default function SessionPage(){

    const {idFilme} = useParams()

    const [days, setDays] = useState(undefined)
    const [movie, setMovie] = useState({})

    const [error, setError] = useState()

    useEffect(() => {
        const promise = axios.get(`${baseUrl}/movies/${idFilme}/showtimes`)

        promise.then((response) => {
            setDays(response.data.days)
            const movieObj = {...movie}
            movieObj.title = response.data.title
            movieObj.posterURL = response.data.posterURL
            console.log(movieObj)
            setMovie(movieObj)
        })

        promise.catch((err) => setError(true))

    }, [])

    return(
        <>
            <Container>
                <p>Selecione o horário</p>
            </Container>
            <SessionsList days={days}/>
            <ShoppingCart title={movie.title} posterURL={movie.posterURL}/>
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