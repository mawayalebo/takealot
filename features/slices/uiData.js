import { createSlice } from '@reduxjs/toolkit';


const initState = {
    departments: [],
    thirdPartyData: [],
    showMobileNav: false,
    showSearchBar: false,
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
        },
        setShowMobileNav: (state, action) => {
            state.showMobileNav = action.payload;
        },
        setShowSearchBar: (state, action) => {
            state.showSearchBar = action.payload;
        },
    }
});

export const { setDepartments, setThirdPartyData, setShowMobileNav, setShowSearchBar} = uiDataSlice.actions;

export const selectDepartments = state => state.uiData.departments;
export const selectThirdPartyData = state => state.uiData.thirdPartyData;
export const selectShowMobileNav = state => state.uiData.showMobileNav;
export const selectShowSearchBar = state => state.uiData.showSearchBar;

export default uiDataSlice.reducer;


