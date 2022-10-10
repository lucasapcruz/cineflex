import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Order from "../components/Order";

export default function SucessPage({ movie, session, chosenSeats, client }) {
    const navigate = useNavigate()

    function backToHome() {
        navigate("/")
    }

    return (
        <>
            <Content>
                <Container>
                    <p>Pedido feito com sucesso!</p>
                </Container>
                <Order
                    movie={movie}
                    session={session}
                    chosenSeats={chosenSeats}
                    client={client} />
                <HomeBtn onClick={backToHome}>Voltar pra Home</HomeBtn>
            </Content>
        </>
    )
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Container = styled.div`
    margin-top: 67px;
    width: 250px;
    height: 110px;
    color: #247A6B;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 40px;
`
const HomeBtn = styled.button`
        background-color: #E8833A;
        color: #FFFFFF;
        height: 42px;
        width: 225px;
        font-size: 18px;
        line-height: 21px;
        border: none;
        border-radius: 3px;
        margin-top: 57px;
`