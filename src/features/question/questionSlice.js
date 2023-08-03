import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isQuestionDragable: true,
    questions: [
        {
            id: 1,
            title: "",
        }
    ]
}

const questionsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        questionAdd(state, action) {
            state.questions.push(action.payload);
        },
        questionDelete(state, action) {
            if (state.questions.length === 1) {
                return state
            }
            const filtered = state.questions?.filter((item) => item.id !== action.payload)
            state.questions = filtered
        },
        isQuestionDragableToggle(state) {
            state.isQuestionDragable = !state.isQuestionDragable
        },
        questionUpdate(state, action) {
            state.questions = action.payload
        },
    },
});

export const { questionAdd, questionDelete, isQuestionDragableToggle, questionUpdate } = questionsSlice.actions;
export default questionsSlice.reducer;