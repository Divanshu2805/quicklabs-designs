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
				<h1 class="text-lg font-semibold dark:text-white">Social Links</h1>
				<p class="text-gray-500 dark:text-gray-400 text-sm">
					Add social links to your issuer profile. There are shown on various public pages to help
					users connect with you.
				</p>

				<form class="w-full mt-4">
					<div class="mb-5 mt-4">
						<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>LinkedIn Profile Link
						</label>
						<div class="flex">
							<span
								class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-sm dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-linkedin w-4 h-4 text-gray-500 dark:text-gray-400"
									><path
										d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect
										width="4"
										height="12"
										x="2"
										y="9" /><circle cx="4" cy="4" r="2" /></svg>
							</span>
							<input
								type="text"
								id="website-admin"
								class="rounded-none rounded-e-sm bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Linkedin ID" />
						</div>
					</div>

					<div class="mb-5 mt-4">
						<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Facebook Profile Link
						</label>
						<div class="flex">
							<span
								class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-sm dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-facebook w-4 h-4 text-gray-500 dark:text-gray-400"
									><path
										d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
							</span>
							<input
								type="text"
								id="website-admin"
								class="rounded-none rounded-e-sm bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Facebook ID" />
						</div>
					</div>
					<div class="mb-5 mt-4">
						<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Twitter/X Profile Link
						</label>
						<div class="flex">
							<span
								class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-sm dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-twitter w-4 h-4 text-gray-500 dark:text-gray-400"
									><path
										d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
							</span>
							<input
								type="text"
								id="website-admin"
								class="rounded-none rounded-e-sm bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Twitter/X ID" />
						</div>
					</div>
					<div class="mb-5 mt-4">
						<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Website Link
						</label>
						<div class="flex">
							<span
								class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-sm dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-globe w-4 h-4 text-gray-500 dark:text-gray-400"
									><circle cx="12" cy="12" r="10" /><path
										d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path
										d="M2 12h20" /></svg>
							</span>
							<input
								type="text"
								id="website-admin"
								class="rounded-none rounded-e-sm bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Website" />
						</div>
					</div>
					<button
						type="submit"
						class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>Save</button>
				</form>
			</div>
		</main>
	</div>
</main>
