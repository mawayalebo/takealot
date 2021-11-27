import { creatSlice } from '@reduxjs/toolkit';


const initState = {
    departments: [],
}

export const uiDataSlice = creatSlice({
    name: 'uiData',
    initialState: initState,
    reducers: {
        setDepartments: (state, action) => {
            state.departments = action.payload;
        }
    }
});

export const { setDepartments } = uiDataSlice.actions;

export default uiDataSlice.reducer;


