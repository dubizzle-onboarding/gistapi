import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gistList:[]
}
  
export const gistSlice = createSlice({
    name:'gist', // we name the varible for gist List inside the state
    initialState,
    reducers:{
        setListOfGist : (state,action)=>{ // Only we need getList updated when user search
            state.gistList = action.payload;
        }
    }
})

// Only we update gistList in the state when user search
export const {setListOfGist} = gistSlice.actions; 

//Only we can get updated gistList when we needed
export const selectGists = (state) => state.gist;

export default gistSlice.reducer;
