import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const getAllProducts =  createAsyncThunk(
    'api/products',
    async() => {
        const res = await axios.get('http://localhost:5001/products');
        return res.data
    },
)

export const getProdByCat = createAsyncThunk(
    'api/catagory',
    async() => {
        const res = await axios.get('http://localhost:5001/category');
        return res.data
    }
);

interface catState  {
    categories : [],
    loading: 'idel' | 'pending' | 'succeeded' | 'failed'
}

const catinitialState = {
    categories: [],
    loading: 'idel'
} as catState

export const catSlice = createSlice({
    name: 'catagories',
    initialState: catinitialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProdByCat.pending, (state) => {
            state.loading = 'pending'
        })
        .addCase(getProdByCat.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.categories = action.payload;
        }).addCase(getProdByCat.rejected, (state) => {
            state.loading = 'failed'
        })
    }
})

interface productsState {
    products : [],
    loading: 'idel' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
    products : [],
    loading: 'idel',
} as productsState

export const productsSlice = createSlice({
    name: 'All Products',
    initialState,
    reducers: {
    },
    extraReducers:(builder) => {
        builder
        .addCase(getAllProducts.pending, (state) =>  {
            state.loading = 'pending'
        })
        .addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.products = action.payload;
        })
        .addCase(getAllProducts.rejected, (state) => {
            state.loading = 'failed'
        })
    }
})

export default productsSlice.reducer;



