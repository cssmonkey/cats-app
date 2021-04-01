import React, { FC } from "react";

import "./error-message.scss";

interface ErrorMessageProps {
  children: JSX.Element[] | JSX.Element | string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ children }) => (
  <span className="error-message">{children}</span>
);

export default ErrorMessage;
