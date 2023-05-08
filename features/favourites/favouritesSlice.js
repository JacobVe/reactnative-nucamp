import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
	name: "favourites",
	initialState: [],
	reducers: {
		toggleFavourite: (favourites, action) => {
			if (favourites.includes(action.payload)) {
				return favourites.filter((favourite) => favourite !== action.payload);
			} else {
				favourites.push(action.payload);
			}
		},
	},
});

export const { toggleFavourite } = favouritesSlice.actions;
export const favouritesReducer = favouritesSlice.reducer;
