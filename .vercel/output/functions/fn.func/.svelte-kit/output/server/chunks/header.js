import { w as ensure_array_like, y as attr_class } from "./index2.js";
import { a as attr, c as clsx } from "./attributes.js";
import { e as escape_html } from "./escaping.js";
function Header($$renderer, $$props) {
  let { selection } = $$props;
  let tabs = [
    {
      name: "Overview",
      href: "#",
      current: selection === "Overview"
    },
    {
      name: "Test Runs",
      href: "/quick-test/projects/1/testruns",
      current: selection === "Test Runs"
    },
    {
      name: "Test Cases",
      href: "#",
      current: selection === "Test Cases"
    },
    {
      name: "Test Groups",
      href: "#",
      current: selection === "Test Groups"
    },
    { name: "Todos", href: "#", current: selection === "Todos" },
    {
      name: "Milestones",
      href: "/quick-test/projects/1/milestones",
      current: selection === "Milestones"
    },
    { name: "Members", href: "#", current: selection === "Members" }
  ];
  $$renderer.push(`<div class="bg-gray-50/50"><div class="mx-auto px-4 pt-4 sm:px-6 lg:px-8"><div class="sm:flex sm:items-baseline sm:justify-between"><div class="sm:w-0 sm:flex-1"><h1 class="flex-1 text-2xl font-bold text-gray-900">GraphQL API</h1> <p class="mt-1 truncate text-sm text-gray-500">This is project description which should not go beyond one line</p></div> <div class="mt-4 flex items-center justify-between sm:ml-6 sm:mt-0 sm:flex-shrink-0 sm:justify-start"><span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span> <div class="relative ml-3 inline-block text-left"><div><button type="button" class="-my-2 flex items-center rounded-full bg-white p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" id="menu-0-button" aria-expanded="false" aria-haspopup="true"><span class="sr-only">Open options</span> <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"></path></svg></button></div> `);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div></div></div></div> <div><div class="sm:hidden"><label for="tabs" class="sr-only">Select a tab</label> <select id="tabs" name="tabs" class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">`);
  $$renderer.option({}, ($$renderer2) => {
    $$renderer2.push(`Overview`);
  });
  $$renderer.option({}, ($$renderer2) => {
    $$renderer2.push(`Todos`);
  });
  $$renderer.option({ selected: true }, ($$renderer2) => {
    $$renderer2.push(`Milestones`);
  });
  $$renderer.option({}, ($$renderer2) => {
    $$renderer2.push(`Test Cases`);
  });
  $$renderer.option({}, ($$renderer2) => {
    $$renderer2.push(`Test Runs`);
  });
  $$renderer.option({}, ($$renderer2) => {
    $$renderer2.push(`Team`);
  });
  $$renderer.push(`</select></div> <div class="hidden sm:block"><div class="border-b border-gray-200 mt-2"><nav class="-mb-px flex space-x-8 px-8" aria-label="Tabs"><!--[-->`);
  const each_array = ensure_array_like(tabs);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let tab = each_array[$$index];
    $$renderer.push(`<a${attr("href", tab.href)}${attr_class(clsx(tab.current ? "border-indigo-500 text-indigo-600 whitespace-nowrap border-b-2 py-2 px-1 text-sm font-medium" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-2 px-1 text-sm font-medium"))}>${escape_html(tab.name)}</a>`);
  }
  $$renderer.push(`<!--]--></nav></div></div></div></div>`);
}
export {
  Header as H
};
