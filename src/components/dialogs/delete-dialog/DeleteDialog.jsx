import {useDispatch, useSelector} from "react-redux";
import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import {IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Photo from "../../photo/Photo";
import {Content, Text, Wrapper} from "../DialogStyle";
import {deleteItem} from "../../../store/photosSlice";
import ActionButtons from "../../action-button/ActionButtons";

const DeleteDialog = ({open, onClose, img}) => {
    const dispatch = useDispatch();
    const selected = useSelector(state => state.photos.selectedPhoto);

    const handleDeleteItem = () => {
        dispatch(deleteItem(img.id));
        onClose();
    };

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
                    <Text>Are you sure you want to delete this photo?</Text>
                    <Photo view img={selected} withActionButtons={false}/>
                </Content>
                <ActionButtons onClick={handleDeleteItem}
                               onClose={onClose}
                               actionButtonText="Delete"
                />
            </Wrapper>
        </Modal>
    );
};

DeleteDialog.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    img: PropTypes.shape({})
};

export default DeleteDialog;
