import styled from "styled-components"
import Catalog from "../components/Catalog"


export default function HomePage(){


    return(
        <>
            <Container>
                <p>Selecione o filme</p>
            </Container>
            <Catalog/>
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