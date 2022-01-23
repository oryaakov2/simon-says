import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { storage } from '../index';

interface GameState {
    disableButton: boolean,
    playerSelect: number,
    score: number,
    gameScreenEffect: boolean,
    flash: number,
    results: Result[]
}

interface Result {
    name: string,
    score: number
}

const initialState: GameState = {
    disableButton: true,
    playerSelect: 0,
    score: 1,
    gameScreenEffect: false,
    flash: 0,
    results: []
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setDisableButton(state, action: PayloadAction<boolean>) {
            state.disableButton = action.payload
        },

        setPlayerSelect(state, action: PayloadAction<any>) {
            state.playerSelect = action.payload
        },

        setScore(state) {
            state.score += 1
        },

        resetScore(state) {
            state.score = 0
        },

        setToggleGameEffect(state) {
            state.gameScreenEffect = !state.gameScreenEffect
        },

        setFlashButton(state, action: PayloadAction<number>) {
            state.flash = action.payload
        },

        setResults(state, action: PayloadAction<any>) {
            state.results = action.payload
        },

        addNewResult(state, action: PayloadAction<Result>) {
            if (state.results.length < 10) {
                state.results.push(action.payload)

            } else {
                const smallestResult = state.results.splice(-1)[0]

                if (smallestResult.score < action.payload.score) {
                    state.results.push(action.payload)

                } else {
                    state.results.push(smallestResult)
                }
            }

            state.results.sort((item1, item2) => item1.score < item2.score ? 1 : -1)
            storage.setArray('results', state.results)
        }
    }
})

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;