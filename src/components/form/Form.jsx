import {Controller, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import PropTypes from "prop-types";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import {Grid} from "@mui/material";
import {TextFieldStyle} from "../field/FieldStyle";
import ActionButtons from "../action-button/ActionButtons";
import {isTitleExists, isValidUrl} from "../utils";
import {addItem} from "../../store/photosSlice";

const schema = yup.object({
    title: yup.string().required(),
    url: yup.string().required(),
}).required();

const Form = ({
                  title,
                  url,
                  onClose,
                  actionButtonText,
                  type = ""
              }) => {
    const dispatch = useDispatch();
    const list = useSelector(state => state.photos.list);

    const {control, handleSubmit, formState: {errors}, setError} = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            title: title ? title : '',
            url: url ? url : ''
        }
    });

    const handleAddItem = (data) => {
        const isExists = isTitleExists(list, data.title);
        const isUrl = isValidUrl(data.url);

        if (isExists) {
            setError("title", {message: "Title Already Exists"});
            return false;
        } else if (!isUrl) {
            setError("url", {message: "Url is Not Valid"});
            return false;
        }
        dispatch(addItem(data));
        onClose();
    };

    return (
        <form onSubmit={handleSubmit(handleAddItem)}>
            <Grid container direction="column" spacing={2}>
                <Grid item xs>
                    <Controller
                        name="title"
                        control={control}
                        rules={{required: true}}
                        render={({field}) =>
                            <TextFieldStyle label="Title"
                                            variant="outlined"
                                            fullWidth
                                            {...field}
                            />
                        }
                    />
                    <p>{errors.title?.message}</p>
                </Grid>

                <Grid item xs>
                    <Controller
                        name="url"
                        control={control}
                        rules={{required: true}}
                        render={({field}) =>
                            <TextFieldStyle label="Url"
                                            variant="outlined"
                                            fullWidth
                                            {...field}/>
                        }
                    />

                    <p>{errors.url?.message}</p>
                </Grid>
            </Grid>
            <ActionButtons type={type}
                           onClose={onClose}
                           actionButtonText={actionButtonText}
            />
        </form>
    );
};

Form.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    onClose: PropTypes.func,
    actionButtonText: PropTypes.string
};

export default Form;
