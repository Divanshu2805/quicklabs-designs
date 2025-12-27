

export const index = 42;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/quick-kb/articles/add/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/42.B-qB00kN.js","_app/immutable/chunks/gDw3rRQz.js","_app/immutable/chunks/CaR-7Ml4.js","_app/immutable/chunks/Dy3tr4Ku.js"];
export const stylesheets = [];
export const fonts = [];
