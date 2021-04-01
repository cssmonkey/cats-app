import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageUploading, { ImageListType } from "react-images-uploading";

import { upload } from "../../state/imageUpload/actions";
import { getImageUploading, getImageUploadError } from "../../state/imageUpload/selectors";

import ErrorMessage from "../ErrorMessage/ErrorMessage";

import "./image-uploader.css";

interface ImageUploaderProps {
  onImageUploadSuccess: () => void;
}

const ImageUploader: FC<ImageUploaderProps> = ({ onImageUploadSuccess }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getImageUploading);
  const hasImageUploadError = useSelector(getImageUploadError);

  const onChange = (files: ImageListType) => {
    if (files[0]) {
      dispatch(upload(files[0], onImageUploadSuccess));
    }
  };

  return (
    <div className="image-uploader my-20">
      {isLoading ? (
        <p className="image-uploader__loading-message font-sans font-bold text-2xl text-center">
          Uploading image, please wait...
        </p>
      ) : (
        <ImageUploading multiple={false} value={[]} onChange={onChange}>
          {({ onImageUpload, dragProps, errors }) => (
            <div className="image-uploader__inner">
              {hasImageUploadError && (
                <ErrorMessage>
                  Sorry something went wrong with your image upload, please try again
                </ErrorMessage>
              )}
              {errors && (
                <ul className="image-uploader__error-list">
                  {errors.maxNumber && (
                    <li>
                      <ErrorMessage>Number of selected images exceed maxNumber</ErrorMessage>
                    </li>
                  )}
                  {errors.acceptType && (
                    <li>
                      <ErrorMessage>Your selected file type is not allowed</ErrorMessage>
                    </li>
                  )}
                  {errors.maxFileSize && (
                    <li>
                      <ErrorMessage>Selected file size exceed maxFileSize</ErrorMessage>
                    </li>
                  )}
                  {errors.resolution && (
                    <li>
                      <ErrorMessage>
                        Selected file is not match your desired resolution
                      </ErrorMessage>
                    </li>
                  )}
                </ul>
              )}

              <button
                {...dragProps}
                onClick={onImageUpload}
                className="image-uploader__button font-sans font-bold text-center text-2xl"
              >
                Click or Drop here
              </button>
            </div>
          )}
        </ImageUploading>
      )}
    </div>
  );
};

export default ImageUploader;
