import { Cat } from "./types";

export const ACTION_TYPES = {
  FETCH_IMAGES: "CATS_LISTING/FETCH_IMAGES",
  FETCH_IMAGES_SUCCESS: "CATS_LISTING/FETCH_IMAGES_SUCCESS",
  FETCH_IMAGES_ERROR: "CATS_LISTING/FETCH_IMAGES_ERROR",
  CLEAR_IMAGES: "CATS_LISTING/CLEAR_IMAGES",
} as const;

export const fetchImages = () => {
  return <const>{
    type: ACTION_TYPES.FETCH_IMAGES,
  };
};

interface FetchImagesSuccess {
  type: typeof ACTION_TYPES.FETCH_IMAGES_SUCCESS;
  payload: Array<Cat>;
}

export const fetchImagesError = () => {
  return <const>{
    type: ACTION_TYPES.FETCH_IMAGES_ERROR,
  };
};

export const clearImages = () => {
  return <const>{
    type: ACTION_TYPES.CLEAR_IMAGES,
  };
};

export type CatsListingActions =
  | ReturnType<typeof fetchImages>
  | ReturnType<typeof fetchImagesError>
  | FetchImagesSuccess
  | ReturnType<typeof clearImages>;
