import React, { FC } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";

const ImageUploader: FC = () => {
  const onChange = () => {
    return true;
  };
  return (
    <div className="image-uploader">
      <ImageUploading multiple={false} value={[]} onChange={onChange}>
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className="image-uploader__inner">
            <button onClick={onImageUpload}>Click or Drop here</button>
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default ImageUploader;
