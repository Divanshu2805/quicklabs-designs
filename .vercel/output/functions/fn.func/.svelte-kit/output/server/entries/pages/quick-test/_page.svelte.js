import { w as ensure_array_like } from "../../../chunks/index2.js";
import { e as escape_html } from "../../../chunks/escaping.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$renderer) {
  let settings = [
    { title: "My Profile", link: "/quick-test/settings/profile" },
    {
      title: "Change password",
      link: "/quick-test/settings/password"
    }
  ];
  let archive = [
    {
      title: "Archived Projects",
      link: "/quick-test/archive/projects"
    },
    { title: "Archived Users", link: "/quick-test/archive/users" }
  ];
  let account = [
    {
      title: "Payments",
      link: "/quick-test/settings/accounts/payments"
    },
    {
      title: "Billing",
      link: "/quick-test/settings/accounts/billing"
    },
    { title: "Users", link: "/quick-test/settings/accounts/users" },
    {
      title: "Integration",
      link: "/quick-test/settings/accounts/integration"
    }
  ];
  let projects = [
    { title: "Projects Home", link: "/quick-test/projects" },
    {
      title: "Milestones",
      link: "/quick-test/projects/1/milestones"
    },
    {
      title: "Milestone Detail",
      link: "/quick-test/projects/1/milestones/1"
    },
    { title: "Test Runs", link: "/quick-test/projects/1/testruns" },
    {
      title: "Test Runs Detail",
      link: "/quick-test/projects/1/testruns/1"
    }
  ];
  let login = [
    { title: "Login", link: "/quick-test/login" },
    {
      title: "Forgot Password",
      link: "/quick-test/forgot-password"
    },
    { title: "Reset Password", link: "/quick-test/reset-password" },
    { title: "Signup", link: "/quick-test/signup" }
  ];
  let dashboard = [];
  let workflows = [
    { title: "Onboarding", screens: login },
    { title: "Settings", screens: settings },
    { title: "Projects", screens: projects },
    { title: "Dashboard", screens: dashboard },
    { title: "Archive", screens: archive },
    { title: "Account", screens: account }
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
  $$renderer.push(`<!--]--></div></div></div></div></div>`);
}
export {
  _page as default
};
