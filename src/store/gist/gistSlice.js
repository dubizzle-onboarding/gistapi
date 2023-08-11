import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allGists: [],
};

export const gistSlice = createSlice({
  name: 'gist',
  initialState,
  reducers: {
    addAllGists: (state, action) => {
      state.allGists = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addAllGists } = gistSlice.actions;

export default gistSlice.reducer;
