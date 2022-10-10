import styled from "styled-components"

export default function SeatSelector({ seats, chosenSeats, setChosenSeats }) {
    return (
        <>
            <SeatsContainer>
                {seats.map((seat) => <Seat key={seat.id} name={seat.name} id={seat.id} isAvailable={seat.isAvailable} chosenSeats={chosenSeats} setChosenSeats={setChosenSeats}/>)}
            </SeatsContainer>
        </>
    )
}

function Seat({ id, name, isAvailable, chosenSeats, setChosenSeats }) {

    const wasChosen = chosenSeats.includes(id)

    function reserveSeat(id){
        setChosenSeats([...chosenSeats, id])
    }

    return (
        <>
            <SeatStyle name={name} isAvailable={isAvailable} wasChosen={wasChosen} onClick={() => reserveSeat(id)}>
                <p>{name}</p>
            </SeatStyle>
        </>
    )
}

function handleColor(wasChosen, isAvailable) {
    if (wasChosen) {
        return ("#1AAE9E")
    } else {
        if (isAvailable) {
            return ("#C3CFD9")
        } else {
            return ("#FBE192")
        }
    }
}

const SeatStyle = styled.div`
    height: 26px;
    width: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:3.5px;
    font-size: 11px;
    font-weight: 400;
    border-radius: 12px;
    background-color: ${props => handleColor(props.wasChosen, props.isAvailable)};
    border: 1px solid #808F9D;
    pointer-events: ${props => props.isAvailable && !props.wasChosen?'auto':'none'};
`

const SeatsContainer = styled.div`
    margin: 0 auto;
    width: 375px;
    padding: 20.5px;
    display: flex;
    flex-wrap: wrap;
`