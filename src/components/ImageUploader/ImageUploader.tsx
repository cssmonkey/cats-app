import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageUploading, { ImageListType } from "react-images-uploading";

import { upload } from "../../state/imageUpload/actions";
import { getImageUploading } from "../../state/imageUpload/selectors";

import "./image-uploader.css";

const ImageUploader: FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getImageUploading);

  const onChange = (files: ImageListType) => {
    if (files[0]) {
      dispatch(upload(files[0]));
    }
  };

  if (isLoading) {
    return (
      <div className="bg-gray-100 border border-gray-200 text-center py-8 px-4 my-20">
        <p className="text-2xl font-sans text-blue-500">Uploading image, please wait...</p>
      </div>
    );
  }
  return (
    <div className="image-uploader my-20">
      <ImageUploading multiple={false} value={[]} onChange={onChange}>
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
          errors,
        }) => (
          <div className="image-uploader__inner">
            <button
              {...dragProps}
              onClick={onImageUpload}
              className="image-uploader__button font-sans font-bold"
            >
              Click or Drop here
            </button>
            {errors && (
              <div>
                {errors.maxNumber && <span>Number of selected images exceed maxNumber</span>}
                {errors.acceptType && <span>Your selected file type is not allowed</span>}
                {errors.maxFileSize && <span>Selected file size exceed maxFileSize</span>}
                {errors.resolution && (
                  <span>Selected file is not match your desired resolution</span>
                )}
              </div>
            )}
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default ImageUploader;
