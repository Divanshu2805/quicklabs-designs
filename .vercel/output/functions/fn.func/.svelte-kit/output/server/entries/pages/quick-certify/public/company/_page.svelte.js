import "clsx";
import { H as Header, F as Footer } from "../../../../../chunks/footer.js";
function _page($$renderer) {
  Header($$renderer);
  $$renderer.push(`<!----> <div class="bg-gray-50 h-screen p-8"><div class="max-w-7xl mx-auto rounded-sm border border-stroke-dark bg-white"><div><img class="h-32 w-full object-cover lg:h-48" src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80" alt=""/></div> <div class="mt-2 md:flex md:items-center md:justify-between p-4"><div class="min-w-0 flex-1"><h2 class="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Crownstack Technologies</h2></div></div></div></div> `);
  Footer($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
