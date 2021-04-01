import React, { FC } from "react";

interface CatCardProps {
  url: string;
  fileName: string;
}

const CatCard: FC<CatCardProps> = ({ url, fileName }) => (
  <div className="shadow">
    <img src={url} alt={fileName} />
  </div>
);

export default CatCard;
