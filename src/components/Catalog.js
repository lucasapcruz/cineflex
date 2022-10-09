import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import baseUrl from "../url"


export default function Catalog(){
    const [movies, setMovies] = useState(undefined)

    const [error, setError] = useState()


    useEffect(() => {
        const promise = axios.get(`${baseUrl}/movies`)

        promise.then((response) => {
            setMovies(response.data)
        })
        
        promise.catch((err) => setError(true))

    },[])
    
    return(
            <CatalogContainer>
                {movies?.map((movie) => <Movie key={movie.id} posterURL={movie.posterURL} title={movie.title}/>)}
            </CatalogContainer>
    )
}


function Movie({posterURL, title}){

    return(
        <FramedContainer>
            <img src={posterURL} alt={title}></img>
        </FramedContainer> 
    )
}

const FramedContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-left: 30px;
    margin-bottom: 11px;

    img{
        width: 129px;
        height: 193px;
    }
`

const CatalogContainer = styled.div`
    width: 375px;
    display: flex;
    flex-wrap: wrap;
`