import PropTypes from "prop-types";
import {IconButton, Modal} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {Content, Text, Wrapper} from "../DialogStyle";
import Form from "../../form/Form";

const EditDialog = ({open, onClose, img}) => {
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
                    <Text>Edit Photo</Text>
                    <Form onClose={onClose}
                          actionButtonText="Edit"
                          type="submit"
                          url={img.url}
                          title={img.title}
                    />
                </Content>
            </Wrapper>
        </Modal>
    );
};

EditDialog.propTypes = {
    open: PropTypes.bool,
    img: PropTypes.shape({}),
    onClose: PropTypes.func
};

export default EditDialog;
