import {useState} from "react";
import {useDispatch} from "react-redux";
import PropTypes from "prop-types";
import {Grid} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
    Container,
    Img,
    Content,
    Actions,
    IconButtonStyle
} from './PhotoStyle';
import Dialog from "../dialogs/Dialog";
import {MODAL_TYPES} from "../definitions";
import {setSelectedPhoto} from "../../store/photosSlice";

const Photo = ({
                   view = false,
                   img,
                   withActionButtons = true
               }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState("");
    const dispatch = useDispatch();

    const handleClose = () => setIsOpen(false);

    const handleModal = (str) => {
        dispatch(setSelectedPhoto(img));
        setType(str);
        setIsOpen(true);
    };

    return (
        <Container view={view.toString()}>
            <Img src={img.url} alt={img.title}/>
            <Content>{img.title}</Content>

            {withActionButtons &&
            <Actions container>
                <Grid item xs container justifyContent="center">
                    <IconButtonStyle aria-label="edit"
                                     color="warning"
                                     onClick={() => handleModal(MODAL_TYPES.EDIT)}>
                        <EditIcon/>
                    </IconButtonStyle>
                </Grid>
                <Grid item xs container justifyContent="center">
                    <IconButtonStyle aria-label="delete"
                                     color="error"
                                     onClick={() => handleModal(MODAL_TYPES.DELETE)}>
                        <DeleteIcon/>
                    </IconButtonStyle>
                </Grid>
            </Actions>
            }

            <Dialog open={isOpen}
                    onClose={handleClose}
                    type={type}
                    img={img}/>
        </Container>
    );
};

Photo.propTypes = {
    img: PropTypes.shape({}),
    view: PropTypes.bool,
    withActionButtons: PropTypes.bool
};

export default Photo;
