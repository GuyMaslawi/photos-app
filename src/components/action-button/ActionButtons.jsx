import {DialogActions} from "@mui/material";
import PropTypes from "prop-types";
import MainButton from "../main-button/MainButton";

const ActionButtons = ({type, actionButtonText, onClick, onClose}) => {
    return (
        <DialogActions sx={{width: '100%', marginTop: '3rem', justifyContent: 'center'}}>
            {type === "submit" ?
                <MainButton type="submit">
                    {actionButtonText}
                </MainButton>
                :
                <MainButton onClick={onClick}>
                    {actionButtonText}
                </MainButton>
            }
            <MainButton variant="text"
                        onClick={onClose}>
                Cancel
            </MainButton>
        </DialogActions>
    );
};

ActionButtons.propTypes = {
    onClose: PropTypes.func,
    onClick: PropTypes.func,
    type: PropTypes.string,
    actionButtonText: PropTypes.string
};

export default ActionButtons;
