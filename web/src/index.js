import { createElement } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const reactApp = document.getElementById("reactApp");

const reactDOM = createRoot(reactApp);

reactDOM.render(createElement(App, null, {}));
