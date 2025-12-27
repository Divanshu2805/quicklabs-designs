import "clsx";
import { F as Fullnavbar } from "../../../../../../chunks/fullnavbar.js";
import { P as Profilesidebar } from "../../../../../../chunks/profilesidebar2.js";
function _page($$renderer) {
  Fullnavbar($$renderer);
  $$renderer.push(`<!----> <main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8"><div class="lg:grid lg:grid-cols-12 lg:gap-x-5">`);
  Profilesidebar($$renderer);
  $$renderer.push(`<!----> <main class="max-w-xl pb-12 px-4 lg:col-span-6"><div><h1 class="form-title">Preferences</h1> <p class="form-subtitle">Please change your personal preferences.</p> <div class="flex mt-6"><div class="flex items-center h-5"><input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="checkbox"/></div> <div class="ms-2 text-sm"><label for="helper-checkbox" class="font-medium text-gray-900 dark:text-gray-300">Enable All Email Alerts</label> <p id="helper-checkbox-text" class="form-input-description">If disabled, no email alert will land in your inbox.</p></div></div></div></main></div></main>`);
}
export {
  _page as default
};
