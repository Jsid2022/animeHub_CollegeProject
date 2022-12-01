import { configureStore, createSlice } from "@reduxjs/toolkit";

const animeSlice = createSlice({
    name: "anime",
    initialState: {
        underRated: false,
        navbarToggler: false,
        type: 'popular',
        searchQuery: null,
        animeId: null
    },
    reducers: {
        setNavToggler(state, action) {
            state.navbarToggler = action.payload;
        },
        setAnimeType(state, action) {
            state.type = action.payload
        },
        setSearchQuery(state, action) {
            state.searchQuery = action.payload;
        },
        setAnimeId(state, action) {
            state.animeId = action.payload;
        },
        setUnderRated(state, action) {
            state.underRated = action.payload;
        }
    }
})

export const animeActions = animeSlice.actions;

export const store = configureStore({
    reducer: {
        anime: animeSlice.reducer
    }
})