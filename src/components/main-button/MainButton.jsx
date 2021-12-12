import PropTypes from "prop-types";
import {InputStyle, ButtonStyle} from "./MainButtonStyle";

const MainButton = ({
                        type = "button",
                        variant = "contained",
                        onClick,
                        children
                    }) => {
    return (
        type === "submit" ?
            <InputStyle type="submit" value={children}/>
            :
            <ButtonStyle variant={variant}
                         onClick={onClick}
            >
                {children}
            </ButtonStyle>
    );
};

MainButton.propTypes = {
    variant: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
    type: PropTypes.string
};

export default MainButton;
