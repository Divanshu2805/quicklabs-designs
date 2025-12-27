

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CFa9LDyy.js","_app/immutable/chunks/gDw3rRQz.js","_app/immutable/chunks/CaR-7Ml4.js","_app/immutable/chunks/Dy3tr4Ku.js"];
export const stylesheets = [];
export const fonts = [];
