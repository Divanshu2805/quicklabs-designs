import "clsx";
import { F as Fullnavbar } from "../../../../../../chunks/fullnavbar2.js";
import { A as Accountsidebar } from "../../../../../../chunks/accountsidebar.js";
function _page($$renderer) {
  Fullnavbar($$renderer);
  $$renderer.push(`<!----> <main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8"><div class="lg:grid lg:grid-cols-12 lg:gap-x-5"><aside class="px-2 py-6 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">`);
  Accountsidebar($$renderer);
  $$renderer.push(`<!----></aside> <main class="max-w-xl pb-12 px-4 lg:col-span-6 space-y-4"><div><h1 class="form-title">Set Up JIRA Integration</h1> <p class="form-subtitle">Connect your JIRA account to Quick Test</p></div> <div><p class="text-gray-700 dark:text-gray-400 text-sm">Using JIRA? Click the button below to set up the integration between JIRA and Quick Test. The integration enables you to view JIRA issues and add new issues directly from Quick Test.</p> <button class="btn-primary mt-2">Configure JIRA Integration</button></div></main></div></main>`);
}
export {
  _page as default
};
