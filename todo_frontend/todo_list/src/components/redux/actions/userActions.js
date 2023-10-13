import { createAction } from "@reduxjs/toolkit";

// Action to set a user when they log in or register
export const setUser = createAction("user/setUser");

// Action to clear the user when they log out
export const clearUser = createAction("user/clearUser");
export const setFilter = createAction("user/setFilter");
