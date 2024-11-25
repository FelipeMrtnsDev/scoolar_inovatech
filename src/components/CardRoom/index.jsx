import { PlataformContainer } from "./styles";
import PropTypes from "prop-types";

function CardRoom({ titulo, isActive, onClick }) {
    return (
        <PlataformContainer>
            <div className={isActive ? "activated" : ""}
            onClick={onClick}>
                <h3>{titulo}</h3>
            </div>
        </PlataformContainer>
    );
}

CardRoom.propTypes = {
    titulo: PropTypes.string.isRequired,  
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
};

export default CardRoom;