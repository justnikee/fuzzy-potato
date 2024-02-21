// step 1. import createAsyncThunk, createSlice
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// step 2. create the initial state + types

interface collections {
    collections : any[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
    collections: [],
    loading: 'idle'
}  as collections

// step 3. crate the function to get the collectiosn

export const getCollections = createAsyncThunk(
    "get/collections" , 
    async() => {
        const res = await axios.get('http://localhost:5001/category');
        console.log(res.data)
        return res.data
    }
)

// step 4. create collection slice with createSlice

export const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {

    },
    extraReducers : (builder) => {
        builder
        .addCase(getCollections.pending, (state) => {
            state.loading = 'pending'
        })
        .addCase(getCollections.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.collections = action.payload
        })
        .addCase(getCollections.rejected, (state) => {
            state.loading = 'failed'
        })
    }
});


export default collectionSlice.reducer;