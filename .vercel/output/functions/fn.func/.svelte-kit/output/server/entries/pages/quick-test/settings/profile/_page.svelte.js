import "clsx";
import { F as Fullnavbar } from "../../../../../chunks/fullnavbar2.js";
import { P as Profilesidebar } from "../../../../../chunks/profilesidebar3.js";
function _page($$renderer) {
  Fullnavbar($$renderer);
  $$renderer.push(`<!----> <main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8"><div class="lg:grid lg:grid-cols-12 lg:gap-x-5"><aside class="px-2 py-6 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">`);
  Profilesidebar($$renderer);
  $$renderer.push(`<!----></aside> <main class="max-w-xl pb-12 px-4 lg:col-span-6"><div><h1 class="form-title">Profile Settings</h1> <p class="form-subtitle">Change your personal profile settings</p> <form class="w-full mt-6 space-y-4"><div class="sm:col-span-2"><label class="form-input-label" for="file_input">Upload avatar</label> <div class="items-center w-full sm:flex"><img class="w-20 h-20 mb-4 rounded-full sm:mr-4 sm:mb-0" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png" alt="Helene avatar"/></div></div> <div class="grid gap-4 sm:grid-cols-2 sm:gap-4"><div><label for="first-name" class="form-input-label">First Name</label> <input type="text" name="first-name" id="first-name" class="form-input-field" placeholder="First name" required=""/></div> <div><label for="last-name" class="form-input-label">Last Name</label> <input type="text" name="first-name" id="first-name" class="form-input-field" placeholder="Last name" required=""/></div></div> <div class="mb-4"><label for="password" class="form-input-label">Email</label> <input type="password" id="password" class="form-input-field" placeholder="email@gmail.com" required/></div> <div class="mb-4"><label for="password" class="form-input-label">Organization Name</label> <input type="text" id="organization" class="form-input-field" placeholder="Crownstack" required/></div> <div><div class="flex items-center space-x-1 mb-2"><label for="password" class="block text-sm font-medium text-gray-900 dark:text-white">Select Language</label></div> <select name="user[role]" id="bucket" class="form-input-field">`);
  $$renderer.option({ value: "data" }, ($$renderer2) => {
    $$renderer2.push(`English`);
  });
  $$renderer.option({ value: "recruiter" }, ($$renderer2) => {
    $$renderer2.push(`Spanish`);
  });
  $$renderer.option({ value: "interviewer" }, ($$renderer2) => {
    $$renderer2.push(`French`);
  });
  $$renderer.push(`</select></div> <button type="submit" class="btn-primary">Save</button></form></div></main></div></main>`);
}
export {
  _page as default
};
