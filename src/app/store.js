import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import questionSlice from '../features/question/questionSlice';
import answareSlice from '../features/answare/answareSlice';


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        questions: questionSlice,
        answares: answareSlice
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware().concat(apiSlice.middleware)],
    devTools: process.env.NODE_ENV !== 'production',
});


export default store;