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

// get user photos
export const getUserPhotos = createAsyncThunk(
    "photo/userphotos",
    async (id, thunkAPI) => {

        const token = thunkAPI.getState().auth.user.token

        const data = await photoService.getUserPhotos(id, token)

        if(data.errors)  {
            return thunkAPI.rejectWithValue(data.errors[0])
        }

        return data
    }
)

// delete a photo
export const deletePhoto = createAsyncThunk(
    "photo/delete",
    async (id, thunkAPI) => {

        const token = thunkAPI.getState().auth.user.token

        const data = await photoService.deletePhoto(id, token)

        if(data.errors)  {
            return thunkAPI.rejectWithValue(data.errors[0])
        }

        return data
    }
)

// update a photo
export const updatePhoto = createAsyncThunk(
    "photo/update",
    async (photoData, thunkAPI) => {

        const token = thunkAPI.getState().auth.user.token

        const data = await photoService.updatePhoto({title: photoData.title}, photoData.id, token)

        if(data.errors)  {
            return thunkAPI.rejectWithValue(data.errors[0])
        }

        return data
    }
)

// get photo by id
export const getPhoto = createAsyncThunk(
    "photo/getphoto",
    async (id, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token

        const data = await photoService.getPhoto(id, token)
 
        if(data.errors)  {
            return thunkAPI.rejectWithValue(data.errors[0])
        }

        return data
    })

// like a photo
export const likePhoto = createAsyncThunk(
    "photo/like",
    async (id, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token

        const data = await photoService.likePhoto(id, token)

        if(data.errors)  {
            return thunkAPI.rejectWithValue(data.errors[0])
        }


        return data
    }
)

// add a comment to a photo
export const comment = createAsyncThunk(
    "photo/comment",
    async (photoData, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token 

        const data = await photoService.comment({comment: photoData.comment}, photoData.id, token)

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
                state.error = null
            })
            .addCase(publishPhoto.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.success = true
                state.photo = action.payload
                state.photos.unshift(state.photo)
                state.message = "foto publicada com sucesso"
            })
            .addCase(publishPhoto.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.photo = {}
            })
            .addCase(getUserPhotos.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getUserPhotos.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.success = true
                state.photos = action.payload
            })
            .addCase(deletePhoto.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(deletePhoto.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.success = true
                
                // removendo a imagem do array de fotos
                // a foto dentro do array que tiver o mesmo id do payload, será excluída.
                state.photos = state.photos.filter((photo) => {
                    return photo._id !== action.payload.id
                })

                state.message = action.payload.message                
            })
            .addCase(deletePhoto.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.photo = {}
            })
            .addCase(updatePhoto.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(updatePhoto.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.success = true
                
                // editando o title da imagem
                // a imagem que tive o mesmo id do payload photo, terá seu título alterado.
                state.photos.map((photo) => {
                    if (photo._id === action.payload.photo._id) {
                        return photo.title = action.payload.photo.title
                    }
                    return photo
                })

                state.message = action.payload.message                
            })
            .addCase(updatePhoto.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.photo = {}
            })
            .addCase(getPhoto.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(getPhoto.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.success = true
                state.photo = action.payload
            })
            .addCase(likePhoto.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.success = true
                
                if(state.photo.likes) {
                    state.photo.likes.push(action.payload.userId)
                }

                state.photos.map((photo) => {
                    if (photo._id === action.payload.photoId) {
                        return photo.likes.push(action.payload.userId)
                    }
                    return photo
                })

                state.message = action.payload.message                
            })
            .addCase(likePhoto.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.photo = {}
            })
            .addCase(comment.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.success = true
                
                state.photo.comments.push(action.payload.comment)
                

                state.message = action.payload.message                
            })
            .addCase(comment.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export const {resetMessage} = photoSlice.actions
export default photoSlice.reducer