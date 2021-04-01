import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchImages } from "../../state/catsListing/actions";
import { getCatListingError, getCatImages } from "../../state/catsListing/selectors";

import PageContainer from "../../components/PageContainer/PageContainer";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import CatCard from "../../components/CatCard/CatCard";

import "./landing-page.css";

const LandingPage: FC = () => {
  const dispatch = useDispatch();
  const catImages = useSelector(getCatImages);
  const hasCatListingError = useSelector(getCatListingError);

  useEffect(() => {
    if (!catImages) {
      dispatch(fetchImages());
    }
  }, [dispatch]);

  const renderCatImagesList = () => {
    return (
      <div className="cat-listing">
        {catImages?.map(({ url, original_filename }, i) => (
          <div className="cat-listing__item" key={i}>
            <CatCard fileName={original_filename} url={url} />
          </div>
        ))}
      </div>
    );
  };
  return (
    <PageContainer>
      <h2 className="text-2xl md:text-4xl font-sans font-black">Landing page</h2>
      <div className="cat-listing my-20">
        {hasCatListingError ? (
          <ErrorMessage>Sorry something loading your images, please try again</ErrorMessage>
        ) : (
          renderCatImagesList()
        )}
      </div>
    </PageContainer>
  );
};

export default LandingPage;
