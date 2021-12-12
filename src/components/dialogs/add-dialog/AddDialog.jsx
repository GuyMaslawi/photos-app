import PropTypes from "prop-types";
import {IconButton, Modal} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {Content, Text, Wrapper} from "../DialogStyle";
import Form from "../../form/Form";

const AddDialog = ({open, onClose}) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            onBackdropClick={onClose}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Wrapper>
                <IconButton
                    aria-label="close"
                    onClick={onClose}>
                    <CloseIcon sx={{
                        width: '2rem',
                        height: '2rem',
                        color: '#000'
                    }}/>
                </IconButton>
                <Content>
                    <Text>Add New Photo</Text>
                    <Form onClose={onClose}
                          actionButtonText="Add"
                          type="submit"
                    />
                </Content>
            </Wrapper>
        </Modal>
    );
};

AddDialog.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
};

export default AddDialog;
