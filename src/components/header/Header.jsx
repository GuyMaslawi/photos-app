import {useState} from "react";
import PropTypes from 'prop-types';
import {Wrapper, Title, Holder} from "./HeaderStyle";
import Dialog from "../dialogs/Dialog";
import {MODAL_TYPES} from "../definitions";
import MainButton from "../main-button/MainButton";

const Header = ({title}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenDialog = () => setIsOpen(true);
    const handleCloseDialog = () => setIsOpen(false);

    return (
        <Wrapper>
            <Holder>
                <Title>{title}</Title>
                <MainButton onClick={handleOpenDialog}>
                    Add New
                </MainButton>
            </Holder>

            <Dialog open={isOpen}
                    type={MODAL_TYPES.ADD}
                    onClose={handleCloseDialog}/>
        </Wrapper>
    );
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;
