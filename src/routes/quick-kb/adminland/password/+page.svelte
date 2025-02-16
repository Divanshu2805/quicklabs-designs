<script>
	import Header from '$quick-kb/common/navbar/admin.svelte';
	import Sidebar from '$quick-kb/common/navbar/sidebar.svelte';
</script>

<Header />
<main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
	<div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
		<Sidebar />

		<main class="max-w-xl pb-12 px-4 lg:col-span-6">
			<div>
				<h1 class="text-lg font-semibold dark:text-white">Change Password</h1>
				<p class="text-gray-500 dark:text-gray-400 text-sm">Please change your password.</p>

				<form class="w-full mt-6">
					<div class="mb-5 mt-6">
						<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Old Password or recovery code</label>
						<input
							type="email"
							id="email"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="••••••••"
							required />
					</div>
					<div class="mb-5">
						<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>New Password</label>
						<input
							type="email"
							id="email"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="••••••••"
							required />
					</div>

					<div class="mb-5">
						<label
							for="password"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Confirm password</label>
						<input
							type="password"
							id="password"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="••••••••"
							required />
					</div>

					<button
						type="submit"
						class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>Save</button>
				</form>
			</div>
		</main>
	</div>
</main>
