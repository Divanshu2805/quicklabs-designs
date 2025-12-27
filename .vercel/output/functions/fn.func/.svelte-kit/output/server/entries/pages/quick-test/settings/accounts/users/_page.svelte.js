import "clsx";
import { F as Fullnavbar } from "../../../../../../chunks/fullnavbar2.js";
import { A as Accountsidebar } from "../../../../../../chunks/accountsidebar.js";
function _page($$renderer) {
  $$renderer.push(`<!---->1 `);
  Fullnavbar($$renderer);
  $$renderer.push(`<!----> <main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8"><div class="lg:grid lg:grid-cols-12 lg:gap-x-5"><aside class="px-2 py-6 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">`);
  Accountsidebar($$renderer);
  $$renderer.push(`<!----></aside> <main class="max-w-xl pb-12 px-4 lg:col-span-6 space-y-4"><div><h1 class="form-title">Manage Users</h1> <p class="form-subtitle">Manager all your team Members</p></div> <div></div></main></div></main>`);
}
export {
  _page as default
};
