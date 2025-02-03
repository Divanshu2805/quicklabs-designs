<script>
	import NavBar from '$quick-certify/common/navbar/admin.svelte';
	import SideBar from '$quick-certify/common/navbar/account.svelte';
</script>

<NavBar />

<main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
	<div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
		<SideBar />

		<main class="max-w-xl pb-12 px-4 lg:col-span-6">
			<div>
				<h1 class="text-lg font-semibold dark:text-white">Issuer Portal</h1>
				<p class="text-gray-500 dark:text-gray-400 text-sm">
					Issuer Portal is public page where all the public events are visible to internet.
				</p>
			</div>

			<div class="mt-4">
				<div class="mb-2">
					<label for="dropzone-file" class="block text-sm font-medium text-gray-900 dark:text-white"
						>Banner Image</label>
					<label for="product-options" class="text-xs text-gray-500 dark:text-gray-300"
						>Banner image is shown on issuer portal if it is enabled</label>
				</div>
				<div class="flex justify-center items-center w-full">
					<label
						for="dropzone-file"
						class="flex flex-col justify-center items-center w-full h-40 bg-gray-50 rounded-sm border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
						<div class="flex flex-col justify-center items-center pt-5 pb-6">
							<svg
								aria-hidden="true"
								class="mb-3 w-10 h-10 text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
								></path
								></svg>
							<p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
								<span class="font-semibold">Click to upload</span> or drag and drop
							</p>
							<p class="mb-4 text-xs text-gray-500 dark:text-gray-400">Size: 1152x192</p>
						</div>
						<input id="dropzone-file" type="file" class="hidden" />
					</label>
				</div>
			</div>
			<div class="flex mt-6">
				<div class="flex items-center h-5">
					<input
						id="helper-checkbox"
						aria-describedby="helper-checkbox-text"
						type="checkbox"
						value=""
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
				</div>
				<div class="ms-2 text-sm">
					<label for="helper-checkbox" class="font-medium text-gray-900 dark:text-gray-300"
						>Enable Issuer Portal</label>
					<p id="helper-checkbox-text" class="text-sm font-normal text-gray-400 dark:text-gray-300">
						If disabled, there will be no public page to showcase public events limiting your reach.
						Issuer portal is enabled by default.
					</p>
				</div>
			</div>
		</main>
	</div>
</main>
