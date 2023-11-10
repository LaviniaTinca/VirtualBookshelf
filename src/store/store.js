import { configureStore } from "@reduxjs/toolkit";
import bookSlice from './slices/booksReducer'

export const store = configureStore({reducer: {library: bookSlice}})
