import GlobalStyle from "../globalstyles";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Header from "./Header";
import SessionPage from "../pages/SessionPage";
import SeatsPage from "../pages/SeatsPage";
import SucessPage from "../pages/SucessPage";

export default function App() {

    const [movie, setMovie] = useState({})
    const [session, setSession] = useState({})
    const [chosenSeats, setChosenSeats] = useState([])
    const [client, setClient] = useState({})


    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sessoes/:idFilme" element={<SessionPage />} />
                    <Route path="/assentos/:idSessao" element={
                        <SeatsPage
                            movie={movie}
                            session={session}
                            chosenSeats={chosenSeats}
                            client={client}
                            setMovie={setMovie}
                            setSession={setSession}
                            setChosenSeats={setChosenSeats}
                            setClient={setClient} />} />
                    <Route path="/sucesso" element={
                        <SucessPage
                            movie={movie}
                            session={session}
                            chosenSeats={chosenSeats}
                            client={client} />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
