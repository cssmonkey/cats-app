import React, { FC, lazy, Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import ROUTES from "../../constants/routes";

import LandingPage from "../../pages/LandingPage/LandingPage";

const UploadPage = lazy(() =>
  import(/* webpackChunkName: "UploadPage" */ "../../pages/UploadPage/UploadPage")
);

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
    <Suspense fallback={() => <p>Loading...</p>}>
      <Switch>
        {pages.map(({ path, component, exact }) => (
          <Route key={path} path={path} component={component} exact={exact} />
        ))}
        <Route component={() => <p>Page not found</p>} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default AppRouter;
