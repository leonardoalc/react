import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import photoService from "../services/photoService";

const initialState = {
    photos: [],
    photo: {},
    error: false,
    success: false,
    loading: false,
    message: null
}

// publish user photo
export const publishPhoto = createAsyncThunk(
    "photo/publish",
    async(photo, thunkAPI)=>{
        const token = thunkAPI.getState().auth.user.token

        const data = await photoService.publishPhoto(photo, token)

        // check for errors
        if(data.errors)  {
            return thunkAPI.rejectWithValue(data.errors[0])
        }

        return data
    }
)

export const photoSlice = createSlice({
    name: "photo",
    initialState,
    reducers: {
        resetMessage: (state) => { state.message = null}
    },
    extraReducers: (builder) => {
        builder
            .addCase(publishPhoto.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(publishPhoto.fulfilled, (state, action) => {
                state.loading = false
                state.error = false
                state.success = true
                state.user = action.payload
                state.photos.unshift(state.photo)
                state.message = "foto publicada com sucesso"
            })
            .addCase(publishPhoto.rejected, (state, action) => {
                state.loading = false
                state.error = true
                state.photo = {}
            })
    }
})

export const {resetMessage} = photoSlice.actions
export default photoSlice.reducer