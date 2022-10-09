import styled from "styled-components"

export default function Header(){
    return(
        <>
            <HeaderContainer>
                <h1>CINEFLEX</h1>
            </HeaderContainer>
        </>
    )
}

const HeaderContainer = styled.div`
    position: absolute;
    height: 67px;
    width: 100%;
    top: 0px;
    left: 0px;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`