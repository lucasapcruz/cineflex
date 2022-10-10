import styled from "styled-components"


export default function ShoppingCart({ title, posterURL }) {
    return (
        <>
            <Container>
                <FramedContainer>
                    <img src={posterURL} />
                </FramedContainer>
                <p>{title}</p>
            </Container>
        </>
    )
}

const Container = styled.div`
    height: 117px;
    width: 100%;
    background-color: #DFE6ED;
    position: fixed;
    bottom: 0px;
    left: 0px;
    display: flex;
    padding: 14px 10px;
    align-items: center;

    p{  
        color:#293845;
        font-weight:400;
        font-size:26px;
        line-height: 30px;
    }
`


const FramedContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-right: 14px;

    img{
        width: 48px;
        height: 72px;
    }
`