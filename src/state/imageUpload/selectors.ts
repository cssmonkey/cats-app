import { RootState } from "../rootReducer";

export const getImageUploading = (state: RootState) => state.imageUpload.loading;
export const getImageUpError = (state: RootState) => state.imageUpload.error;
