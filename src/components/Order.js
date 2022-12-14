import styled from "styled-components"

export default function Order({ movie, session, chosenSeats, client }) {
    return (
        <>
            <Container>
                <Summary>
                    <h2>Filmes e Sessao</h2>
                    <p data-identifier="movie-session-infos-reserve-finished">{movie.title}</p>
                    <p data-identifier="movie-session-infos-reserve-finished">{session.date} {session.showtime}</p>
                </Summary>
                <Summary>
                    <h2>Ingressos</h2>
                    {chosenSeats.map((seat) => <p data-identifier="seat-infos-reserve-finished">Assento {(seat%50).toString()}</p>)}
                </Summary>
                <Summary>
                    <h2>Comprador</h2>
                    <p data-identifier="buyer-infos-reserve-finished">Nome: {client.name}</p>
                    <p data-identifier="buyer-infos-reserve-finished">CPF: {client.cpf}</p>
                </Summary>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 300px;
`

const Summary = styled.div`
    margin-bottom: 40px;

    h2{
        color: #293845;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 28px;
    }
    p{
        color: #293845;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
    }
`