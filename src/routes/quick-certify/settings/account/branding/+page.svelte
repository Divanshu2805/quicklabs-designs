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
				<h1 class="form-title">Branding</h1>
				<p class="form-subtitle">Add issuer logo and other brand related information</p>
			</div>
			<div class="mt-4">
				<label for="dropzone-file" class="form-input-label">Issuer Logo</label>
				<p class="form-input-description -mt-2 mb-2">
					Your logo appears on your issuer page, and with all published credentials on Quick
					Certify. Recommended size: Square, at least 400 pixels per side. File type: JPG, JPEG, or
					PNG
				</p>
				<div class="flex justify-center items-center w-64">
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
							<p class="mb-4 text-xs text-gray-500 dark:text-gray-400">Max. File Size: 1MB</p>
						</div>
						<input id="dropzone-file" type="file" class="hidden" />
					</label>
				</div>
			</div>
			<div class="mt-6">
				<label for="dropzone-file" class="form-input-label">Favicon</label>
				<p class="form-input-description -mt-2 mb-2">
					We accept SVG, JPG and PNG files up to 1 MB.
				</p>
				<div class="flex justify-center items-center w-64">
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
							<p class="mb-4 text-xs text-gray-500 dark:text-gray-400">Max. File Size: 1MB</p>
						</div>
						<input id="dropzone-file" type="file" class="hidden" />
					</label>
				</div>
			</div>
		</main>
	</div>
</main>
