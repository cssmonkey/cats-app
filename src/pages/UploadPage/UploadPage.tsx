import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import ROUTES from "../../constants/routes";
import { clearImages } from "../../state/catsListing/actions";
import PageContainer from "../../components/PageContainer/PageContainer";
import ImageUpload from "../../components/ImageUploader/ImageUploader";

const UploadPage: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onImageUploadSuccess = () => {
    dispatch(clearImages());
    history.push(ROUTES.landingPage);
  };
  return (
    <PageContainer>
      <h2 className="text-2xl md:text-4xl font-sans font-black">Upload image</h2>
      <ImageUpload onImageUploadSuccess={onImageUploadSuccess} />
    </PageContainer>
  );
};

export default UploadPage;
