import { w as ensure_array_like } from "../../../chunks/index2.js";
import { e as escape_html } from "../../../chunks/escaping.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$renderer) {
  let login = [
    { title: "Login", link: "/quick-release/login" },
    {
      title: "Forgot Password",
      link: "/quick-release/forgot-password"
    },
    {
      title: "Reset Password",
      link: "/quick-release/reset-password"
    }
  ];
  let signup = [
    { title: "Signup", link: "/quick-release/signup" },
    { title: "Create Team", link: "/quick-release/signup/team" }
  ];
  let changelog = [
    { title: "Admin Changelogs", link: "/quick-release/changelog" },
    { title: "Empty State", link: "/quick-release/changelog/empty" },
    {
      title: "Add Change Log",
      link: "/quick-release/changelog/new"
    },
    {
      title: "Public Changelog Detail",
      link: "/quick-release/changelog/1"
    },
    {
      title: "Public Changelog list",
      link: "/quick-release/changelog/public"
    },
    {
      title: "Settigns - General",
      link: "/quick-release/settings/team/general"
    },
    {
      title: "Settings - tags",
      link: "/quick-release/settings/team/tags"
    }
  ];
  let profile = [
    {
      title: "General",
      link: "/quick-release/settings/profile/general"
    },
    {
      title: "Change Password",
      link: "/quick-release/settings/profile/password"
    },
    {
      title: "Preferences",
      link: "/quick-release/settings/profile/preferences"
    }
  ];
  let account = [];
  let team = [];
  let workflows = [
    { title: "Login", screens: login },
    { title: "Signup", screens: signup },
    { title: "Changelog", screens: changelog },
    { title: "Profile Settings", screens: profile }
  ];
  let workflows2 = [
    { title: "Account Settings", screens: account },
    { title: "Team Settings", screens: team }
  ];
  $$renderer.push(`<div class="mx-auto w-full flex-grow lg:flex"><div class="min-w-0 flex-1 bg-white xl:flex"><div class="border-b border-gray-200 bg-white xl:w-64 xl:flex-shrink-0 xl:border-b-0 border-r"><div class="h-full sm:pl-6 lg:pl-8 xl:pl-0"><div class="relative"><!--[-->`);
  const each_array = ensure_array_like(workflows);
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let workflow = each_array[$$index_1];
    $$renderer.push(`<div class="sticky top-0 z-10 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"><h3>${escape_html(workflow.title)}</h3></div> <ul role="list" class="relative z-0 divide-y divide-gray-200"><!--[-->`);
    const each_array_1 = ensure_array_like(workflow.screens);
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let screen = each_array_1[$$index];
      $$renderer.push(`<li class="bg-white"><div class="relative flex items-center space-x-3 px-6 py-2 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 hover:bg-gray-50"><div class="min-w-0 flex-1"><a${attr("href", screen.link)} class="focus:outline-none"><p class="text-sm font-medium text-gray-900">${escape_html(screen.title)}</p></a></div></div></li>`);
    }
    $$renderer.push(`<!--]--></ul>`);
  }
  $$renderer.push(`<!--]--></div></div></div> <div class="border-b border-gray-200 bg-white xl:w-64 xl:flex-shrink-0 xl:border-b-0 border-r"><div class="h-full sm:pl-6 lg:pl-8 xl:pl-0"><div class="relative"><!--[-->`);
  const each_array_2 = ensure_array_like(workflows2);
  for (let $$index_3 = 0, $$length = each_array_2.length; $$index_3 < $$length; $$index_3++) {
    let workflow = each_array_2[$$index_3];
    $$renderer.push(`<div class="sticky top-0 z-10 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"><h3>${escape_html(workflow.title)}</h3></div> <ul role="list" class="relative z-0 divide-y divide-gray-200"><!--[-->`);
    const each_array_3 = ensure_array_like(workflow.screens);
    for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
      let screen = each_array_3[$$index_2];
      $$renderer.push(`<li class="bg-white"><div class="relative flex items-center space-x-3 px-6 py-2 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 hover:bg-gray-50"><div class="min-w-0 flex-1"><a${attr("href", screen.link)} class="focus:outline-none"><p class="text-sm font-medium text-gray-900">${escape_html(screen.title)}</p></a></div></div></li>`);
    }
    $$renderer.push(`<!--]--></ul>`);
  }
  $$renderer.push(`<!--]--></div></div></div></div></div>`);
}
export {
  _page as default
};
