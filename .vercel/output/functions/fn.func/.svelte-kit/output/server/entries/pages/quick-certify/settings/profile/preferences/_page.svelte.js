import "clsx";
import { A as Admin } from "../../../../../../chunks/admin.js";
import { P as Profilesidebar } from "../../../../../../chunks/profilesidebar.js";
function _page($$renderer) {
  Admin($$renderer);
  $$renderer.push(`<!----> <main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8"><div class="lg:grid lg:grid-cols-12 lg:gap-x-5"><aside class="px-2 py-6 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">`);
  Profilesidebar($$renderer);
  $$renderer.push(`<!----></aside> <main class="max-w-xl pb-12 px-4 lg:col-span-6"><div><h1 class="form-title">Preferences</h1> <p class="form-subtitle">Change your personal preferences</p> <div class="flex mt-6"><div class="flex items-center h-5"><input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="checkbox"/></div> <div class="ms-2 text-sm"><label for="helper-checkbox" class="form-input-label">Enable All Email Alerts</label> <p id="helper-checkbox-text" class="form-input-description -mt-2">If disabled, no email alert will land in your inbox.</p></div></div></div></main></div></main>`);
}
export {
  _page as default
};
