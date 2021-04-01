import React, { FC } from "react";

import Navigation from "../Navigation/Navigation";

interface PageContainerProps {
  children: JSX.Element[] | JSX.Element;
}

const PageContainer: FC<PageContainerProps> = ({ children }) => (
  <div className="container mx-auto bg-white p-8 md:p-16 shadow">
    <Navigation />
    <h1 className="mb-4 text-2xl font-sans font-black">It's all about Cats</h1>
    {children}
  </div>
);

export default PageContainer;
