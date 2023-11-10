import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: 'library',
    initialState: {
        books: []
    },
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        removeBook: (state, action) => {
            state.books = state.books.filter((book) => book.id !== action.payload)
        },
    }
})

export const {addBook, removeBook} = bookSlice.actions
export default bookSlice.reducer