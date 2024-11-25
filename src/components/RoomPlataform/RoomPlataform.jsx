import { useState } from "react";
import { salas as importedSalas } from "../../model/salas";
import { CardRoomContainer, ImageUser, SalasText, PlataformContainer, BotaoEntrar } from "./styles";
import CardRoom from "../CardRoom";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";

function RoomPlataform() {
    const [rooms, setRooms] = useState(importedSalas || []);
    const [selectedRoomId, setSelectedRoomId] = useState(null);
    const navigate = useNavigate();

    const handleSelectRoom = (id) => {
        setSelectedRoomId(id);
    };

    const handleEnterRoom = () => {
        if (selectedRoomId) {
            navigate(`/sala/${selectedRoomId}`); 
        } else {
            toast.error("Erro: Nenhuma sala foi selecionada.")
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
            <ToastContainer />
            <CardRoomContainer>
                <ImageUser>
                    <div>
                        <FaArrowLeft onClick={() => navigate(-1)}/>
                    </div>
                    <div className="profile">
                        <div className="image-user"></div>
                        <h1>Usuário</h1>
                    </div>
                </ImageUser>
                <SalasText>
                    <h2>Salas</h2>
                </SalasText>
                <PlataformContainer>
                    {rooms.length > 0 ? (
                        rooms.map((room, index) => (
                            <CardRoom
                                key={index}
                                titulo={room.sala}
                                isActive={selectedRoomId === room.id}
                                onClick={() => handleSelectRoom(room.id)}
                            />
                        ))
                    ) : (
                        <p>Nenhuma sala disponível.</p>
                    )}
                </PlataformContainer>
            </CardRoomContainer>
            <BotaoEntrar>
                <button onClick={handleEnterRoom}>Entrar</button>
            </BotaoEntrar>
        </>
    );
}

export default RoomPlataform;