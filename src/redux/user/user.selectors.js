import { createSelector } from "reselect";

const selectUser = state => state;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)