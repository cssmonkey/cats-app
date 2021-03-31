import React, { FC } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { History, createBrowserHistory } from "history";

import ROUTES from "../../constants/routes";

import LandingPage from "../../pages/LandingPage/LandingPage";
import UploadPage from "../../pages/UploadPage/UploadPage";

const history: History = createBrowserHistory();

interface Page {
  path: string;
  component: FC;
  exact: boolean;
}

const pages: Array<Page> = [
  {
    path: ROUTES.landingPage,
    component: LandingPage,
    exact: true,
  },
  {
    path: ROUTES.upload,
    component: UploadPage,
    exact: true,
  },
];

const AppRouter: FC = () => (
  <BrowserRouter>
    <Switch>
      {pages.map(({ path, component, exact }) => (
        <Route key={path} path={path} component={component} exact={exact} />
      ))}
      <Route component={() => <p>Page not found</p>} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
