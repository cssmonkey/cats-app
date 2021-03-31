import React, { FC } from "react";

import AppRouter from "../AppRouter/AppRouter";

const App: FC = () => (
  <div className="app bg-gray-50 min-h-screen p-4 md:px-4 md:py-8">
    <AppRouter />
  </div>
);

export default App;
