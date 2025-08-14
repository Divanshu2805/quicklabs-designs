<script>
	import NavBar from '$quick-certify/common/navbar/admin.svelte';
	import SideBar from '$quick-certify/common/navbar/account.svelte';
	import InfoButton from '$lib/tooltip.svelte';
</script>

<NavBar />

<main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
	<div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
		<SideBar />

		<main class="max-w-xl pb-12 px-4 lg:col-span-6">
			<div
				class="flex items-center p-2.5 mb-4 text-sm text-green-800 border border-green-300 rounded-sm bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
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
				class="flex items-center p-2.5 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-sm bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800"
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
				<h1 class="form-title">General Information</h1>
				<p class="form-subtitle">
					Add more details about the organisation or the certificate issuer
				</p>

				<form class="w-full mt-4 space-y-4">
					<div class="">
						<label for="email" class="form-input-label">Issuer or Organisation Name </label>
						<input id="name" class="form-input-field" placeholder="Issuer Name" required />
					</div>

					<div class="mb-4">
						<div class="flex items-center space-x-1 mb-2">
							<label for="password" class="block text-sm font-medium text-gray-900 dark:text-white"
								>Issuer Description</label>
							<InfoButton
								tooltipText="Write a few words about your organization to let people know what you specialize in. This description will be displayed on each credential page under your organization’s name."
								id="tooltip-hot" />
						</div>
						<textarea
							id="message"
							rows="4"
							class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Write more description here..."></textarea>
					</div>

					<div class="">
						<div class="flex items-center space-x-1 mb-2">
							<label for="password" class="block text-sm font-medium text-gray-900 dark:text-white"
								>Support Email</label>
							<InfoButton
								tooltipText="Enter the preferred email address your recipients can use to contact you regarding changes or problems with their credential."
								id="tooltip-support" />
						</div>
						<input
							type="email"
							id="email"
							class="form-input-field"
							placeholder="johndoe@gmail.com"
							required />
					</div>
					<div class="">
						<label for="email" class="form-input-label">Slogan </label>
						<input
							id="name"
							class="form-input-field"
							placeholder="Issuer slogan or tagline"
							required />
					</div>
					<div class="">
						<div class="flex items-center space-x-1 mb-2">
							<label for="email" class="block text-sm font-medium text-gray-900 dark:text-white"
								>LinkedIn Company ID
							</label>
							<InfoButton
								tooltipText="Providing the Linkedin Company ID ensures that all certificates your recipients add to their LinkedIn profiles will have your organization automatically selected as an issuer. "
								id="tooltip-linkedin" />
						</div>
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
								class="form-input-field"
								placeholder="Linkedin company ID" />
						</div>
						<p class="form-input-description">
							To find your LinkedIn Company ID, open your company’s profile being logged in as an
							admin, and copy the numbers before “/admin” in the URL.
						</p>
					</div>
					<button type="submit" class="btn-primary">Save</button>
				</form>
			</div>
		</main>
	</div>
</main>
