import { RootState } from "../rootReducer";

export const getCatListingError = (state: RootState) => state.catsListing.error;
export const getCatImages = (state: RootState) => state.catsListing.catImages;
