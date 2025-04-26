<script>
	import NavBar from '$quick-certify/common/navbar/admin.svelte';
</script>

<NavBar />

<main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
	<div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
		<aside class="px-2 py-6 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
			<nav class="space-y-1">
				<a
					href="/quick-certify/settings/profile/general"
					class="bg-gray-200 text-gray-900 hover:bg-gray-200 rounded px-3 py-2 flex items-center text-sm font-medium">
					<!-- Heroicon name: outline/user-circle -->
					<svg
						class="w-6 h-6 text-gray-800 dark:text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24">
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.3-.6-1-1-1.6-1H7.6c-.7 0-1.3.4-1.6 1M4 5h16c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V6c0-.6.4-1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
					</svg>
					<span class="truncate ml-2"> Profile </span>
				</a>
				<a
					href="/quick-certify/settings/profile/password"
					class="text-gray-900 hover:text-gray-900 hover:bg-gray-50 rounded px-3 py-2 flex items-center text-sm font-medium">
					<!-- Heroicon name: outline/user-circle -->
					<svg
						class="w-6 h-6 text-gray-800 dark:text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24">
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H7a1 1 0 0 1-1-1v-7c0-.6.4-1 1-1Z" />
					</svg>
					<span class="truncate ml-2"> Change Password </span>
				</a>
				<a
					href="/quick-certify/settings/profile/preferences"
					class="text-gray-900 hover:text-gray-900 hover:bg-gray-50 rounded px-3 py-2 flex items-center text-sm font-medium">
					<!-- Heroicon name: outline/user-circle -->
					<svg
						class="w-6 h-6 text-gray-800 dark:text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24">
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 4h3c.6 0 1 .4 1 1v15c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1V5c0-.6.4-1 1-1h3m0 3h6m-6 7 2 2 4-4m-5-9v4h4V3h-4Z" />
					</svg> <span class="truncate ml-2"> Email Preferences </span>
				</a>
			</nav>
		</aside>

		<main class="max-w-xl pb-12 px-4 lg:col-span-6 space-y-4">
			<div>
				<h1 class="text-lg font-semibold dark:text-white">Change Password</h1>
				<p class="text-gray-500 dark:text-gray-400 text-sm">
					Setup a new password for your account
				</p>
			</div>
			<div>
				<p class="text-gray-700 dark:text-gray-400 text-sm">
					There is no password associated with this account as you've singed up using Google. In
					order to setup a new password, you need to disconnect your google account first. Once
					done, you will be able to login with your new password.
				</p>
				<button class="link mt-2">Disconnect Google & Reset Password</button>
			</div>
		</main>
	</div>
</main>
