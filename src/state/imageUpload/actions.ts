export const ACTION_TYPES = {
  UPLOAD: "IMAGE_UPLOAD/UPLOAD",
  UPLOAD_SUCCESS: "IMAGE_UPLOAD/UPLOAD_SUCCESS",
  UPLOAD_ERROR: "IMAGE_UPLOAD/UPLOAD_ERROR",
};

export const upload = (file: string) => {
  return <const>{
    type: ACTION_TYPES.UPLOAD,
    file,
  };
};

export type ImageUploadActions = ReturnType<typeof upload>;
