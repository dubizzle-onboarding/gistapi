import { configureStore } from '@reduxjs/toolkit';

import gistReducer from './gist/gistSlice';

export const store = configureStore({
  reducer: {
    gist: gistReducer,
  },
});
