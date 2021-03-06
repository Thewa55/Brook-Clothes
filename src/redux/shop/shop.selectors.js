import { createSelector } from "reselect";

const selectShop = state => state;

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)