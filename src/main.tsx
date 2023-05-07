import { render } from "preact";
import { App } from "./app.tsx";
import "../404.html";

render(<App />, document.getElementById("app") as HTMLElement);
