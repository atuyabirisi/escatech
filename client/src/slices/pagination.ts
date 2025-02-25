import { createSlice } from "@reduxjs/toolkit";
import { Pagination } from "../types/PaginationType";

const initialState: Pagination = {
    currentPage: 1,
    postsPerPage: 5,
    totalPosts: 0
}

const paginationSlice = createSlice({
    name: "paginationslice",
    initialState,
    reducers: {
        updateTotalPosts: ((state, { payload }) => {
            state.totalPosts = payload;
        }),
        updatePageNumber: ((state, { payload }) => {
            state.currentPage = payload;
        }),
    }
});

export const { updateTotalPosts, updatePageNumber, } = paginationSlice.actions;
export default paginationSlice.reducer;