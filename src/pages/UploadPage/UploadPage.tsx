import React, { FC } from "react";

import PageContainer from "../../components/PageContainer/PageContainer";
import ImageUpload from "../../components/ImageUploader/ImageUploader";

const UploadPage: FC = () => (
  <PageContainer>
    <h2 className="text-2xl md:text-4xl font-sans font-black">Upload image</h2>
    <ImageUpload />
  </PageContainer>
);

export default UploadPage;
