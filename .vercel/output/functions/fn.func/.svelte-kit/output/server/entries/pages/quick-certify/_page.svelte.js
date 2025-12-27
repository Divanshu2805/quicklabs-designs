import { w as ensure_array_like } from "../../../chunks/index2.js";
import { e as escape_html } from "../../../chunks/escaping.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$renderer) {
  const onboarding = [
    { title: "Login", link: "/quick-certify/login" },
    {
      title: "Forgot Password",
      link: "/quick-certify/forgot-password"
    },
    {
      title: "Reset Password",
      link: "/quick-certify/reset-password"
    },
    { title: "Signup", link: "/quick-certify/signup" },
    {
      title: "Google Signup",
      link: "/quick-certify/signup/complete"
    }
  ];
  let profileSettings = [
    {
      title: "General",
      link: "/quick-certify/settings/profile/general"
    },
    {
      title: "Change Password",
      link: "/quick-certify/settings/profile/password"
    },
    {
      title: "Change Password (Google)",
      link: "/quick-certify/settings/profile/password-google"
    },
    {
      title: "Preferences",
      link: "/quick-certify/settings/profile/preferences"
    }
  ];
  let accountSettings = [
    {
      title: "General Information",
      link: "/quick-certify/settings/account/general-information"
    },
    {
      title: "Social Links",
      link: "/quick-certify/settings/account/social-links"
    },
    {
      title: "Branding",
      link: "/quick-certify/settings/account/branding"
    },
    {
      title: "Issuer Portal",
      link: "/quick-certify/settings/account/issuer-portal"
    },
    {
      title: "Billing Information",
      link: "/quick-certify/settings/account/billing-information"
    }
  ];
  let teamSettings = [
    { title: "Team", link: "/quick-certify/settings/account/team" },
    {
      title: "Add Member",
      link: "/quick-certify/settings/account/team/add"
    },
    {
      title: "Edit Member",
      link: "/quick-certify/settings/account/team/edit"
    }
  ];
  let eventSettings = [
    {
      title: "Event Types",
      link: "/quick-certify/settings/event/type"
    },
    {
      title: "Event Levels",
      link: "/quick-certify/settings/event/level"
    },
    {
      title: "Event Formats",
      link: "/quick-certify/settings/event/format"
    }
  ];
  let settingWorkflows = [
    { title: "Onboarding", screens: onboarding },
    { title: "Personal Settings", screens: profileSettings },
    { title: "Account Settings", screens: accountSettings },
    { title: "Event Settings", screens: eventSettings },
    { title: "Team", screens: teamSettings }
  ];
  let publicPages = [
    {
      title: "Certificate Detail",
      link: "/quick-certify/public/credential"
    },
    { title: "Event Detail", link: "/quick-certify/public/event/1" },
    {
      title: "Event Participants List",
      link: "/quick-certify/public/event/1/participants"
    },
    {
      title: "Issuer Profile",
      link: "/quick-certify/public/company"
    },
    {
      title: "Issuer Recipients List",
      link: "/quick-certify/public/recipients"
    },
    {
      title: "Issuer Events List",
      link: "/quick-certify/public/event"
    },
    {
      title: "Issuer Participant Detail",
      link: "/quick-certify/public/event/1/person"
    },
    { title: "Person Detail", link: "/quick-certify/public/person" }
  ];
  let publicWorkflows = [{ title: "Public", screens: publicPages }];
  $$renderer.push(`<div class="mx-auto w-full flex-grow lg:flex"><div class="min-w-0 flex-1 bg-white xl:flex"><div class="border-b border-gray-200 bg-white xl:w-64 xl:flex-shrink-0 xl:border-b-0 border-r"><div class="h-full sm:pl-6 lg:pl-8 xl:pl-0"><div class="relative"><!--[-->`);
  const each_array = ensure_array_like(settingWorkflows);
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let workflow = each_array[$$index_1];
    $$renderer.push(`<div class="sticky top-0 z-10 border-t border-b border-gray-200 bg-gray-200 px-6 py-1 text-sm font-medium text-gray-500"><h3>${escape_html(workflow.title)}</h3></div> <ul role="list" class="relative z-0 divide-y divide-gray-200"><!--[-->`);
    const each_array_1 = ensure_array_like(workflow.screens);
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let screen = each_array_1[$$index];
      $$renderer.push(`<li class="bg-white"><div class="relative flex items-center space-x-3 px-6 py-2 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 hover:bg-gray-50"><div class="min-w-0 flex-1"><a${attr("href", screen.link)} target="_blank" class="focus:outline-none"><p class="text-sm font-medium text-gray-900">${escape_html(screen.title)}</p></a></div></div></li>`);
    }
    $$renderer.push(`<!--]--></ul>`);
  }
  $$renderer.push(`<!--]--></div></div></div> <div class="border-b border-gray-200 bg-white xl:w-64 xl:flex-shrink-0 xl:border-b-0 border-r"><div class="h-full sm:pl-6 lg:pl-8 xl:pl-0"><div class="relative"><!--[-->`);
  const each_array_2 = ensure_array_like(publicWorkflows);
  for (let $$index_3 = 0, $$length = each_array_2.length; $$index_3 < $$length; $$index_3++) {
    let workflow = each_array_2[$$index_3];
    $$renderer.push(`<div class="sticky top-0 z-10 border-t border-b border-gray-200 bg-gray-200 px-6 py-1 text-sm font-medium text-gray-500"><h3>${escape_html(workflow.title)}</h3></div> <ul role="list" class="relative z-0 divide-y divide-gray-200"><!--[-->`);
    const each_array_3 = ensure_array_like(workflow.screens);
    for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
      let screen = each_array_3[$$index_2];
      $$renderer.push(`<li class="bg-white"><div class="relative flex items-center space-x-3 px-6 py-2 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 hover:bg-gray-50"><div class="min-w-0 flex-1"><a${attr("href", screen.link)} target="_blank" class="focus:outline-none"><p class="text-sm font-medium text-gray-900">${escape_html(screen.title)}</p></a></div></div></li>`);
    }
    $$renderer.push(`<!--]--></ul>`);
  }
  $$renderer.push(`<!--]--></div></div></div></div></div>`);
}
export {
  _page as default
};
