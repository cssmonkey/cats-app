import React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore, { MockStore } from "redux-mock-store";
interface RenderConnected {
  ui: JSX.Element;
  state: Record<string, unknown>;
}

const configureMockStore = configureStore([]);

interface RenderConnectedWithStore extends RenderResult {
  store: MockStore;
}

const renderConnected = ({ ui, state }: RenderConnected): RenderConnectedWithStore => {
  const store = configureMockStore(state);
  const rendered = render(<Provider store={store}>{ui}</Provider>);
  return {
    ...rendered,
    store,
  };
};

export default renderConnected;
