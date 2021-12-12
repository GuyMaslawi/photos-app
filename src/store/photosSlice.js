import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
    loading: false,
    selectedPhoto: {},
    list: []
}

export const fetchAllPhotos = createAsyncThunk('photos/fetchAllPhotos', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
    return response.data;
});

export const photosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        setSelectedPhoto: (state, action) => {
            state.selectedPhoto = action.payload;
        },
        addItem: (state, action) => {
            const rest = state.list.length % 50;
            const albumsAmount = state.list.length / 50;
            const currentAlbumId = rest === 0 ? albumsAmount + 1 : albumsAmount;

            return {
                ...state,
                list: {
                    ...state.list,
                    albumId: currentAlbumId,
                    title: action.payload.title,
                    url: action.payload.url,
                    thumbnailUrl: action.payload.url
                }
            }
        },
        deleteItem: (state, action) => {
            return {
                ...state.list,
                list: state.list.filter(i => i !== action.payload)
            }
        },
        editItem: (state, action) => {
            const id = state.list.find(i => i.id !== action.payload.id);
            return {
                ...state,
                list: {
                    ...state.list,
                    id: id,
                    title: action.payload.title,
                    url: action.payload.url,
                    thumbnailUrl: action.payload.url
                }
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllPhotos.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllPhotos.fulfilled, (state, action) => {
                state.loading = false;
                state.list = state.list.concat(action.payload);
            })
            .addCase(fetchAllPhotos.rejected, (state) => {
                state.loading = false
            })
    }
})

export const {setSelectedPhoto, deleteItem, addItem, editItem} = photosSlice.actions;

export default photosSlice.reducer;
