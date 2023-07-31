import { render } from "preact";
import { App } from "./app.tsx";
import "../404.html?raw";

render(<App />, document.getElementById("app") as HTMLElement);
