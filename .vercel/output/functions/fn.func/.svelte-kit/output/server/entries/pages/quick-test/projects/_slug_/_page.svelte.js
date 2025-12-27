import "clsx";
import { F as Fullnavbar } from "../../../../../chunks/fullnavbar2.js";
import { H as Header } from "../../../../../chunks/header.js";
function _page($$renderer) {
  Fullnavbar($$renderer);
  $$renderer.push(`<!----> `);
  Header($$renderer, { selection: "Overview" });
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
