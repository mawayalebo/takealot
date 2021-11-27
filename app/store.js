import { configureStore } from '@reduxjs/toolkit';
import uiDataReducer from '../features/slices/uiData';

const store = configureStore({
    reducer: {
        uiData: uiDataReducer
    }
});

export { store };