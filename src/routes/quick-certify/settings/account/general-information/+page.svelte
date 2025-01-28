<script>
	import NavBar from '$quick-certify/common/navbar/admin.svelte';
	import SideBar from '$quick-certify/common/navbar/account.svelte';
</script>

<NavBar />

<main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
	<div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
		<SideBar />

		<main class="max-w-xl pb-12 px-4 lg:col-span-6">
			<div
				class="flex items-center p-2.5 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
				role="alert">
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
					class="lucide lucide-circle-check shrink-0 inline w-4 h-4 me-2"
					><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
				<span class="sr-only">Info</span>
				<div>
					<span class="font-medium"></span> Your issuer status has been verified.
				</div>
			</div>

			<div
				class="flex items-center p-2.5 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800"
				role="alert">
				<svg
					class="lucide lucide-triangle-alert shrink-0 inline w-4 h-4 me-2"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					><path
						d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /><path
						d="M12 9v4" /><path d="M12 17h.01" /></svg>
				<span class="sr-only">Info</span>
				<div>
					<span class="font-medium"></span> Your issuer status is currently unverified. It will be verified
					within next few days but this will not affect any operations till then.
				</div>
			</div>
			<div>
				<h1 class="text-lg font-semibold dark:text-white">General Information</h1>
				<p class="text-gray-500 dark:text-gray-400 text-sm">
					Add more details about the organisation or the certificate issuer
				</p>

				<form class="w-full mt-4">
					<div class="mb-5 mt-4">
						<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Issuer or Organisation Name
						</label>
						<input
							id="name"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Issuer Name"
							required />
					</div>

					<div class="mb-5">
						<label
							for="password"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Issuer Description</label>
						<textarea
							id="message"
							rows="4"
							class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Write more description here..."></textarea>
					</div>

					<div class="mb-5 mt-4">
						<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Support Email</label>
						<input
							type="email"
							id="email"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="johndoe@gmail.com"
							required />
					</div>
					<div class="mb-5 mt-4">
						<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Slogan
						</label>
						<input
							id="name"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Issuer Slogan"
							required />
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
