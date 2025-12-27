import "clsx";
import { A as Admin } from "../../../../../../../chunks/admin.js";
import { T as Tooltip } from "../../../../../../../chunks/tooltip.js";
function _page($$renderer) {
  Admin($$renderer);
  $$renderer.push(`<!----> <main><section class="bg-white dark:bg-gray-900"><div class="py-8 px-4 mx-auto max-w-2xl lg:py-8"><div><h1 class="form-title">Edit Team Member</h1> <p class="form-subtitle">Please update details to edit team member.</p></div> <form id="new_user" action="/members" accept-charset="UTF-8" method="post"><div class="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-4"><div><div><label class="form-input-label" for="user_first_name">First Name</label> <div><input class="form-input-field" required="required" type="text" name="user[first_name]" id="user_first_name"/></div></div></div> <div><div><label class="form-input-label" for="user_last_name">Last Name</label> <div><input class="form-input-field" required="required" type="text" name="user[last_name]" id="user_last_name"/></div></div></div> <div><div><label class="form-input-label" for="user_email">Email</label> <div><input class="form-input-field" required="required" type="text" name="user[email]" id="user_email"/></div></div></div> <div><div class="flex items-center space-x-1 mb-2"><label for="password" class="block text-sm font-medium text-gray-900 dark:text-white">User Role</label> `);
  Tooltip($$renderer, {
    tooltipText: "A team member can be either Admin, Manager or Designer.",
    id: "tooltip-user-role"
  });
  $$renderer.push(`<!----></div> <select name="user[role]" id="bucket" class="form-input-field">`);
  $$renderer.option({ value: "data" }, ($$renderer2) => {
    $$renderer2.push(`Admin`);
  });
  $$renderer.option({ value: "recruiter" }, ($$renderer2) => {
    $$renderer2.push(`Manager`);
  });
  $$renderer.option({ value: "interviewer" }, ($$renderer2) => {
    $$renderer2.push(`Designer`);
  });
  $$renderer.push(`</select></div></div> <div class="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-4"><div><label for="user-role" class="inline-flex items-center mb-2 text-sm font-medium text-gray-900 dark:text-white">Active `);
  Tooltip($$renderer, {
    tooltipText: "Mark member as active or inactive.",
    id: "tooltip-user-active"
  });
  $$renderer.push(`<!----></label> <select name="user[role]" id="bucket" class="form-input-field">`);
  $$renderer.option({ value: "data" }, ($$renderer2) => {
    $$renderer2.push(`Active`);
  });
  $$renderer.option({ value: "recruiter" }, ($$renderer2) => {
    $$renderer2.push(`Inactive`);
  });
  $$renderer.push(`</select></div></div> <button type="submit" class="btn-primary mt-6">Edit Member</button> <a class="btn-secondary ml-2" href="/quick-certify">Cancel</a></form></div></section></main>`);
}
export {
  _page as default
};
