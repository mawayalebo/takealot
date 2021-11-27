import { createSlice } from '@reduxjs/toolkit';


const initState = {
    departments: [],
    thirdPartyData: [],
}

export const uiDataSlice = createSlice({
    name: 'uiData',
    initialState: initState,
    reducers: {
        setDepartments: (state, action) => {
            state.departments = action.payload;
        },
        setThirdPartyData: (state, action) => {
            state.thirdPartyData = action.payload;
        }
    }
});

export const { setDepartments, setThirdPartyData } = uiDataSlice.actions;

export const selectDepartments = state => state.uiData.departments;
export const selectThirdPartyData = state => state.uiData.thirdPartyData;

export default uiDataSlice.reducer;


