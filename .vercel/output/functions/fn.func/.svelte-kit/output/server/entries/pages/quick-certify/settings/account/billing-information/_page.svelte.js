import "clsx";
import { A as Admin } from "../../../../../../chunks/admin.js";
import { A as Account } from "../../../../../../chunks/account.js";
function _page($$renderer) {
  Admin($$renderer);
  $$renderer.push(`<!----> <main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8"><div class="lg:grid lg:grid-cols-12 lg:gap-x-5">`);
  Account($$renderer);
  $$renderer.push(`<!----> <main class="max-w-xl pb-12 px-4 lg:col-span-6"><div><h1 class="form-title">Billing Information</h1> <p class="form-subtitle">Manager your billing plan and invoices</p></div></main></div></main>`);
}
export {
  _page as default
};
