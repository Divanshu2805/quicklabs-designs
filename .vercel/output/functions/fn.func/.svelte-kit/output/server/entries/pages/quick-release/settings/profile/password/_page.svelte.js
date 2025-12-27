import "clsx";
import { F as Fullnavbar } from "../../../../../../chunks/fullnavbar.js";
import { P as Profilesidebar } from "../../../../../../chunks/profilesidebar2.js";
function _page($$renderer) {
  Fullnavbar($$renderer);
  $$renderer.push(`<!----> <main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8"><div class="lg:grid lg:grid-cols-12 lg:gap-x-5">`);
  Profilesidebar($$renderer);
  $$renderer.push(`<!----> <main class="max-w-xl pb-12 px-4 lg:col-span-6"><div><h1 class="form-title">Change Password</h1> <p class="form-subtitle">Please change your password.</p> <form class="w-full mt-6"><div class="mb-4 mt-6"><label for="email" class="form-input-label">Old Password</label> <input type="email" id="email" class="form-input-field" placeholder="••••••••" required/></div> <div class="mb-4"><label for="email" class="form-input-label">New Password</label> <input type="email" id="email" class="form-input-field" placeholder="••••••••" required/></div> <div class="mb-4"><label for="password" class="form-input-label">Confirm password</label> <input type="password" id="password" class="form-input-field" placeholder="••••••••" required/></div> <button type="submit" class="btn-primary">Save</button></form></div></main></div></main>`);
}
export {
  _page as default
};
