import React from "react";
import { render, RenderResult } from "@testing-library/react";
import { createStore, Store } from "redux";
import { Provider } from "react-redux";

import rootReducer from "../../state/rootReducer";

interface RenderConnected {
  ui: JSX.Element;
  initialState?: Record<string, unknown>;
  store?: Store;
}

const renderConnected = ({
  ui,
  initialState = {},
  store = createStore(rootReducer, initialState),
}: RenderConnected): RenderResult => render(<Provider store={store}>{ui}</Provider>);

export default renderConnected;
