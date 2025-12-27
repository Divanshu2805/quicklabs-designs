import "clsx";
function Navbar($$renderer) {
  $$renderer.push(`<nav class="bg-gray-800"><div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"><div class="relative flex h-12 items-center justify-between"><div class="absolute inset-y-0 left-0 flex items-center sm:hidden"><button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"><span class="sr-only">Open main menu</span> `);
  {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>`);
  }
  $$renderer.push(`<!--]--> `);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></button></div> <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"><div class="flex flex-shrink-0 items-center"><a href="/quick-release"><img class="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=500" alt="Your Company"/> <img class="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=500" alt="Your Company"/></a></div> <div class="hidden sm:ml-6 sm:block"><div class="flex space-x-4"><a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Quick Release</a></div></div></div> <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"><div class="relative ml-3"><div><button type="button" class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true"><span class="sr-only">Open user menu</span> <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/></button></div> `);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div></div></div></div> <div class="sm:hidden" id="mobile-menu"><div class="space-y-1 px-2 pt-2 pb-3"><a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Quick Release</a></div></div></nav>`);
}
function _page($$renderer) {
  $$renderer.push(`<div class="w-full bg-gray-50 h-screen">`);
  Navbar($$renderer);
  $$renderer.push(`<!----> <main class="mx-auto max-w-4xl pb-10 lg:py-12 lg:px-8 md:py-8 md:px-4 bg-gray-50"><div class="bg-white shadow sm:rounded-lg"><div class="px-4 py-5 sm:p-6"><h3 class="text-base font-semibold leading-6 text-gray-900">Create Your Team</h3> <div class="mt-2 w-full text-sm text-gray-500"><p>Please select a name for your team. This will be used as slug to create a URL for your
						product as well.</p></div> <form class="mt-5 sm:flex sm:items-center"><div class="w-full sm:max-w-xs"><label for="email" class="sr-only">Email</label> <div class="mt-1 flex rounded-md shadow-sm"><span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">release.quicklabs.in/</span> <input type="text" name="company-website" id="company-website" class="border block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="skia"/></div></div> <button type="submit" class="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Save</button></form> <p class="mt-2 text-sm text-red-600" id="email-error">The team name is already taken. Please select another.</p></div></div></main></div>`);
}
export {
  _page as default
};
