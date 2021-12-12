import PropTypes from "prop-types";
import {MODAL_TYPES} from "../definitions";
import EditDialog from "./edit-dialog/EditDialog";
import DeleteDialog from "./delete-dialog/DeleteDialog";
import AddDialog from "./add-dialog/AddDialog";

const Dialog = ({img, onClose, open, type}) => {
    const props = {img, onClose, open, type};

    const currentDialog = () => {
        switch (type) {
            case MODAL_TYPES.EDIT:
                return <EditDialog {...props}/>
            case MODAL_TYPES.DELETE:
                return <DeleteDialog {...props}/>
            case MODAL_TYPES.ADD:
                return <AddDialog open={open}
                                  onClose={onClose}/>
            default:
                return;
        }
    };

    return <div>{currentDialog()}</div>
};

Dialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    type: PropTypes.string.isRequired,
    img: PropTypes.shape({})
};

export default Dialog;
