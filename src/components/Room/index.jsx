import { useState } from "react";
import { CardRoomContainer, ImageUser, SalasText, PlataformContainer, BotaoEntrar } from "./styles";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { salas } from "../../model/salas";
import CardRoom from "../CardRoom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Room() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [selectedGame, setSelectedGame] = useState(null);
    const room = salas.find((sala) => sala.id == id);

    if (!room) {
        return <div style={{ color: "red" }}>Sala não encontrada!</div>;
    }
    
    const handleGameSelect = (game) => {
        console.log("Jogo selecionado:", game);
        setSelectedGame(game); 
    };

    const handleEnterClick = () => {
        console.log(selectedGame);
    
        if (!selectedGame) {
            console.log("Nenhuma sala foi selecionada!");
            toast.error("Erro: Nenhuma sala foi selecionada.");
        } else {
            window.location.href = "https://phbenayon.itch.io/schoolar";
        }
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <CardRoomContainer>
                <ImageUser>
                    <div>
                        <FaArrowLeft onClick={() => navigate(-1)} />
                    </div>
                    <div className="profile">
                        <div className="image-user"></div>
                        <h1>Usuário</h1>
                    </div>
                </ImageUser>
                <SalasText>
                    <h2>{room.sala}</h2>
                </SalasText>
                <PlataformContainer>
                    <CardRoom
                        titulo="Game 1"
                        isActive={selectedGame?.id === room.id}
                        onClick={() => handleGameSelect(room)} 
                    />
                </PlataformContainer>
            </CardRoomContainer>
            <BotaoEntrar>
                <button onClick={handleEnterClick} disabled={!selectedGame}>Entrar</button>
            </BotaoEntrar>
        </>
    );
}

export default Room;
