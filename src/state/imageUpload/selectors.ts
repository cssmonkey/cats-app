import { RootState } from "../rootReducer";

export const getImageUploading = (state: RootState) => state.imageUpload.loading;
export const getImageUploadError = (state: RootState) => state.imageUpload.error;
