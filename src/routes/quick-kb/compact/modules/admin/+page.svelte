<script>
	import Banner from '$quick-kb/common/banner.svelte';
</script>

<section class="bg-white dark:bg-gray-900">
	<Banner />
	<div class="max-w-3xl px-4 mb-16 mx-auto lg:px-6 sm:py-8 lg:py-8">
		<nav class="flex" aria-label="Breadcrumb">
			<ol class="inline-flex justify-self-center space-x-1 md:space-x-2 rtl:space-x-reverse">
				<li class="inline-flex items-center">
					<a
						href="/quick-kb"
						class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white hover:underline">
						<svg
							class="w-3 h-3 me-2.5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20">
							<path
								d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
						</svg>
						Home
					</a>
				</li>
				<li>
					<div class="flex items-center">
						<svg
							class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 6 10">
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m1 9 4-4-4-4" />
						</svg>
						<a
							href="/quick-kb/workspaces"
							class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white hover:underline"
							>Workspace Name</a>
					</div>
				</li>
			</ol>
		</nav>
		<div class="text-left mt-4">
			<h2 class="text-xl font-extrabold text-gray-900 dark:text-white">Modules (6)</h2>
		</div>

		<div class="max-w-3xl mt-4 flex flex-col">
			<div class="flex items-center">
				<a href="/quick-kb/compact/articles" class="text-gray-900 dark:text-white hover:underline">
					Onboarding and Account Setup
				</a>
				<svg
					class="w-4 h-4 ml-4 text-blue-800 dark:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
					viewBox="0 0 24 24">
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28" />
				</svg>

				<svg
					class="ml-1 w-4 h-4 text-red-800 dark:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
					viewBox="0 0 24 24">
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
				</svg>
			</div>
			<a href="/quick-kb/compact/articles" class="text-gray-900 dark:text-white hover:underline">
				Billing and Subscription Plans
			</a>
			<a href="/quick-kb/compact/articles" class="text-gray-900 dark:text-white hover:underline">
				Account and Personal Settings
			</a>
			<a href="/quick-kb/compact/articles" class="text-gray-900 dark:text-white hover:underline">
				Managing Teams and Permissions
			</a>
			<a href="/quick-kb/compact/articles" class="text-gray-900 dark:text-white hover:underline">
				Managing Archive
			</a>
			<a href="/quick-kb/compact/articles" class="text-gray-900 dark:text-white hover:underline">
				Infrastructure and Security
			</a>
		</div>
	</div>
</section>
