import { ImageType } from "react-images-uploading";

export const ACTION_TYPES = {
  UPLOAD: "IMAGE_UPLOAD/UPLOAD",
  UPLOAD_SUCCESS: "IMAGE_UPLOAD/UPLOAD_SUCCESS",
  UPLOAD_ERROR: "IMAGE_UPLOAD/UPLOAD_ERROR",
} as const;

export const upload = (image: ImageType, onSuccessCallback: () => void) => {
  return <const>{
    type: ACTION_TYPES.UPLOAD,
    image,
    onSuccessCallback,
  };
};

export const uploadSuccess = () => {
  return <const>{
    type: ACTION_TYPES.UPLOAD_SUCCESS,
  };
};

export const uploadError = () => {
  return <const>{
    type: ACTION_TYPES.UPLOAD_ERROR,
  };
};

export type ImageUploadActions =
  | ReturnType<typeof upload>
  | ReturnType<typeof uploadSuccess>
  | ReturnType<typeof uploadError>;
