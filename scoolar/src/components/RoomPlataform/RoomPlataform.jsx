import React, { useState } from "react";
import { salas as importedSalas } from "../../model/salas";
import { CardRoomContainer, ImageUser, SalasText, PlataformContainer, BotaoEntrar } from "./styles";
import CardRoom from "../CardRoom";

function RoomPlataform() {
    const [rooms, setRooms] = useState(importedSalas || []);

    return (
        <>
            <CardRoomContainer>
                <ImageUser>
                    <div className="image-user"></div>
                    <h1>Usuário</h1>
                </ImageUser>
                <SalasText>
                    <h2>Salas</h2>
                </SalasText>
                <PlataformContainer>
                    {rooms.length > 0 ? (
                        rooms.map((room, index) => (
                            <CardRoom className="activated" key={index} titulo={room.sala} />
                        ))
                    ) : (
                        <p>Nenhuma sala disponível.</p>
                    )}
                </PlataformContainer>
            </CardRoomContainer>
            <BotaoEntrar>
                <button>Entrar</button>
            </BotaoEntrar>
        </>
    );
}

export default RoomPlataform;