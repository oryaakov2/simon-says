import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiState {
    modalVisible: boolean
}

const initialState: UiState = {
    modalVisible: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setModalVisible(state, action: PayloadAction<boolean>) {
            state.modalVisible = action.payload
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;