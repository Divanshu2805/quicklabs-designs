import "clsx";
import { A as Admin } from "../../../../../../chunks/admin.js";
import { P as Profilesidebar } from "../../../../../../chunks/profilesidebar.js";
function _page($$renderer) {
  Admin($$renderer);
  $$renderer.push(`<!----> <main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8"><div class="lg:grid lg:grid-cols-12 lg:gap-x-5"><aside class="px-2 py-6 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">`);
  Profilesidebar($$renderer);
  $$renderer.push(`<!----></aside> <main class="max-w-xl pb-12 px-4 lg:col-span-6"><div><h1 class="form-title">Change Password</h1> <p class="form-subtitle">Setup a new password for your account</p> <form class="w-full mt-6 space-y-4"><div><label for="email" class="form-input-label">Old Password</label> <input type="email" id="email" class="form-input-field" placeholder="••••••••" required/></div> <div><label for="email" class="form-input-label">New Password</label> <input type="email" id="email" class="form-input-field" placeholder="••••••••" required/></div> <div><label for="password" class="form-input-label">Confirm password</label> <input type="password" id="password" class="form-input-field" placeholder="••••••••" required/></div> <button type="submit" class="btn-primary">Save</button></form></div></main></div></main>`);
}
export {
  _page as default
};
