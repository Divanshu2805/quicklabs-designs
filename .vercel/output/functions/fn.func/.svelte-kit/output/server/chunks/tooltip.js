import { x as bind_props } from "./index2.js";
import { a as attr } from "./attributes.js";
import { e as escape_html } from "./escaping.js";
import { j as fallback } from "./utils2.js";
function Tooltip($$renderer, $$props) {
  let tooltipText = fallback($$props["tooltipText"], "This is a tooltip");
  let id = $$props["id"];
  $$renderer.push(`<button type="button"${attr("data-tooltip-target", id)} data-tooltip-style="dark" class="ml-1"><svg aria-hidden="true" class="w-4 h-4 text-gray-400 hover:text-gray-900 dark:hover:text-white dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> <span class="sr-only">Show information</span></button> <div${attr("id", id)} role="tooltip" class="text-tooltip tooltip" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(66px, -1015px, 0px);" data-popper-placement="top">${escape_html(tooltipText)} <div class="tooltip-arrow" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate3d(192px, 0px, 0px);"></div></div>`);
  bind_props($$props, { tooltipText, id });
}
export {
  Tooltip as T
};
