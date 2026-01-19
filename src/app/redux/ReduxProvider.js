"use client";

import { store } from "./store";

const { Provider } = require("react-redux");

const ReduxProvider = ({ Children }) => {
  <Provider store={store}>{Children}</Provider>;
};

export default ReduxProviderrovider;
