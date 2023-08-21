import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodeService} from "../../services";
import {progressActions} from "./progressSlice";

const initialState = {
    pages:0,
    episodes:[],
    revenueEpisode:null
};

const getAll=createAsyncThunk(
    'episodesSlice/getAll',
    async ({page},thunkAPI)=>{
        try {
            thunkAPI.dispatch(progressActions.setIsLoading(true))
            const {data}=await episodeService.getAll(page)
            return data
        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }finally {
            thunkAPI.dispatch(progressActions.setIsLoading(false))
        }
    }
)

const slice= createSlice({
    name:'episodesSlice',
    initialState,
    reducers:{
        setCurrent:(state, action)=>{
            state.revenueEpisode=action.payload
        }
    },
    extraReducers:builder => builder
        .addCase(getAll.fulfilled,(state,action)=>{
            const {info:{pages},results}=action.payload
            state.pages=pages
            state.episodes=results
            state.revenueEpisode=null
        })
})

const {reducer:episodesReducer,actions}=slice;

const episodesActions = {
    ...actions,
    getAll,
}

export {
    episodesReducer,
    episodesActions
}