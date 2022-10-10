import { useNavigate } from "react-router-dom"
import styled from "styled-components"



export default function SessionsList({ days }) {

    return (
        <SessionsContainer>
            {days?.map((day) => <DayOption key={day.id} weekday={day.weekday} date={day.date} showtimes={day.showtimes} />)}
        </SessionsContainer>
    )
}


function DayOption({ date, weekday, showtimes }) {

    return (
        <DayOptionContainer>
            <p>{weekday} - {date}</p>
            <ShowtimeContainer>
                {showtimes.map((showtime) => <ShowtimeOption key={showtime.id} time={showtime.name} id={showtime.id} />)}
            </ShowtimeContainer>
        </DayOptionContainer>
    )
}

function ShowtimeOption({ time, id }) {

    const navigate = useNavigate()

    function selectSession(id) {
        navigate(`/assentos/${id}`)
    }

    return (
        <>
            <button onClick={() => selectSession(id)}>
                <p>{time}</p>
            </button>
        </>
    )
}

const ShowtimeContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 22px 0px;

    button{
        width: 83px;
        height: 43px;
        margin-right: 8px;
        border-radius: 3px;
        border: none;
        background-color: #E8833A;
    }

    p{
        font-size: 18px;
        font-weight: 400;
        color: #FFFFFF;
    }
`

const DayOptionContainer = styled.div`
    font-size: 20px;
    color: #293845;
    font-weight: 400;
    line-height: 23px;
`

const SessionsContainer = styled.div`
    padding: 0 24px;
`