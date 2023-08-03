import { createSlice } from "@reduxjs/toolkit";
const initialState = []

const answareSlice = createSlice({
    name: "answares",
    initialState,
    reducers: {
        answaresAdd(state, action) {
            state.push(action.payload);
        },
        answaresUpdate(state, action) {
            state = action.payload
        },
    },
});

export const { answaresAdd, answaresUpdate } = answareSlice.actions;
export default answareSlice.reducer;