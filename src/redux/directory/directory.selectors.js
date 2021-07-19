import { createSelector } from "reselect";

const selectDirectory = state => state;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
)
