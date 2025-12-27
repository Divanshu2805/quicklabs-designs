import { w as ensure_array_like } from "../../../chunks/index2.js";
import { e as escape_html } from "../../../chunks/escaping.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$renderer) {
  let firstrun = [
    { title: "Signup", link: "/quick-kb/firstrun/signup" },
    { title: "Recovery Code", link: "/quick-kb/firstrun/recovery" },
    { title: "Login", link: "/quick-kb/firstrun/login" },
    {
      title: "Forgot Password",
      link: "/quick-kb/firstrun/forgot-password"
    },
    {
      title: "Reset Password",
      link: "/quick-kb/firstrun/reset-password"
    }
  ];
  let adminland = [
    {
      title: "Archived Workspaces",
      link: "/quick-kb/adminland/workspaces"
    },
    {
      title: "Archived Modules",
      link: "/quick-kb/adminland/modules"
    },
    {
      title: "Archived Articles",
      link: "/quick-kb/adminland/articles"
    },
    {
      title: "Change Password",
      link: "/quick-kb/adminland/password"
    },
    {
      title: "Account Settings",
      link: "/quick-kb/adminland/settings"
    }
  ];
  let workspaces = [
    {
      title: "Workspaces List for Public",
      link: "/quick-kb/workspaces"
    },
    {
      title: "Archived Workspace",
      link: "/quick-kb/workspaces/archived"
    },
    {
      title: "Workspaces List for Admin",
      link: "/quick-kb/workspaces/admin"
    }
  ];
  let modules = [
    { title: "Modules List for Public", link: "/quick-kb/modules" },
    {
      title: "Modules List for Admin",
      link: "/quick-kb/modules/admin"
    },
    { title: "Archived Module", link: "/quick-kb/modules/archived" }
  ];
  let workflows = [
    { title: "First Run", screens: firstrun },
    { title: "Admin Land", screens: adminland },
    { title: "Workspaces", screens: workspaces },
    { title: "Modules", screens: modules }
  ];
  let articles = [
    { title: "Article List for Public", link: "/quick-kb/articles" },
    {
      title: "Article List for Admin",
      link: "/quick-kb/articles/admin"
    },
    {
      title: "Article Detail for public",
      link: "/quick-kb/articles/1"
    },
    {
      title: "Article Detail for Admin",
      link: "/quick-kb/articles/editor"
    },
    { title: "Edit Article", link: "/quick-kb/articles/1/edit" },
    { title: "Add Article", link: "/quick-kb/articles/add" },
    {
      title: "Archived Article",
      link: "/quick-kb/articles/archived"
    }
  ];
  let compact = [
    {
      title: "Article List for Public",
      link: "/quick-kb/compact/articles"
    },
    {
      title: "Article List for Admin",
      link: "/quick-kb/compact/articles/admin"
    },
    {
      title: "Modules List for Public",
      link: "/quick-kb/compact/modules"
    },
    {
      title: "Modules List for Admin",
      link: "/quick-kb/compact/modules/admin"
    },
    {
      title: "Workspaces List for Public",
      link: "/quick-kb/compact/workspaces"
    },
    {
      title: "Workspaces List for Admin",
      link: "/quick-kb/compact/workspaces/admin"
    }
  ];
  let workflows2 = [
    { title: "Articles", screens: articles },
    { title: "Compact Theme", screens: compact }
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
