<script>
	export let tooltipText = 'This is a tooltip';
	export let id;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="currentColor"
	data-tooltip-target={id}
	class="size-4 cursor-pointer">
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>
<div
	{id}
	role="tooltip"
	class="max-w-sm absolute z-10 inline-block px-2 py-1 text-xs font-normal text-white transition-opacity duration-300 bg-gray-900 rounded-sm shadow-sm tooltip dark:bg-gray-700 opacity-0 invisible"
	style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(66px, -1015px, 0px);"
	data-popper-placement="top">
	{tooltipText}
	<div
		class="tooltip-arrow"
		data-popper-arrow=""
		style="position: absolute; left: 0px; transform: translate3d(192px, 0px, 0px);">
	</div>
</div>
