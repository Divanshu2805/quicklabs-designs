import "clsx";
import { A as Admin } from "../../../../../../chunks/admin.js";
import { P as Profilesidebar } from "../../../../../../chunks/profilesidebar.js";
function _page($$renderer) {
  Admin($$renderer);
  $$renderer.push(`<!----> <main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8"><div class="lg:grid lg:grid-cols-12 lg:gap-x-5"><aside class="px-2 py-6 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">`);
  Profilesidebar($$renderer);
  $$renderer.push(`<!----></aside> <main class="max-w-xl pb-12 px-4 lg:col-span-6 space-y-4"><div><h1 class="form-title">Change Password</h1> <p class="form-subtitle">Setup a new password for your account</p></div> <div><p class="text-gray-700 dark:text-gray-400 text-sm">There is no password associated with this account as you've singed up using Google. In
					order to setup a new password, you need to disconnect your google account first. Once
					done, you will be able to login with your new password.</p> <button class="link mt-2">Disconnect Google &amp; Reset Password</button></div></main></div></main>`);
}
export {
  _page as default
};
