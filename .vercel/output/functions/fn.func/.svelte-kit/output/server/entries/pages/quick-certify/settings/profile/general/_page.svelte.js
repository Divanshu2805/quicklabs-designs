import "clsx";
import { A as Admin } from "../../../../../../chunks/admin.js";
import { P as Profilesidebar } from "../../../../../../chunks/profilesidebar.js";
function _page($$renderer) {
  Admin($$renderer);
  $$renderer.push(`<!----> <main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8"><div class="lg:grid lg:grid-cols-12 lg:gap-x-5"><aside class="px-2 py-6 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">`);
  Profilesidebar($$renderer);
  $$renderer.push(`<!----></aside> <main class="max-w-xl pb-12 px-4 lg:col-span-6"><div><h1 class="form-title">Profile Settings</h1> <p class="form-subtitle">Change your personal profile settings</p> <form class="w-full mt-6 space-y-4"><div class="sm:col-span-2"><label class="form-input-label" for="file_input">Upload avatar</label> <div class="items-center w-full sm:flex"><img class="w-20 h-20 mb-4 rounded-full sm:mr-4 sm:mb-0" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png" alt="Helene avatar"/></div></div> <div><label for="email" class="form-input-label">First Name</label> <input type="email" id="email" class="form-input-field" placeholder="First Name" required/></div> <div><label for="email" class="form-input-label">Last Name</label> <input type="email" id="email" class="form-input-field" placeholder="Last Name" required/></div> <div class="mb-4"><label for="password" class="form-input-label">Email</label> <input type="password" id="password" class="form-input-field" placeholder="email@gmail.com" required/></div> <button type="submit" class="btn-primary">Save</button></form></div></main></div></main>`);
}
export {
  _page as default
};
