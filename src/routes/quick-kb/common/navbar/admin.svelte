<nav class="bg-white border-gray-200 dark:bg-gray-900">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="/quick-kb" class="flex items-center space-x-3 rtl:space-x-reverse">
			<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
				>Quick KB</span>
		</a>
		<div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
			<button
				type="button"
				class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
				id="user-menu-button"
				aria-expanded="false"
				data-dropdown-toggle="user-dropdown"
				data-dropdown-placement="bottom">
				<span class="sr-only">Open user menu</span>
				<img
					class="w-8 h-8 rounded-full"
					src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					alt="user photo" />
			</button>
			<!-- Dropdown menu -->
			<div
				class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm border dark:bg-gray-700 dark:divide-gray-600"
				id="user-dropdown">
				<div class="px-4 py-3">
					<span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
					<span class="block text-sm text-gray-500 truncate dark:text-gray-400"
						>name@flowbite.com</span>
				</div>
				<ul class="py-2" aria-labelledby="user-menu-button">
					<li>
						<a
							href="/quick-kb/adminland/password"
							class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
							>Admin Land</a>
					</li>

					<li>
						<a
							href="/quick-kb/firstrun/login"
							class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
							>Sign out</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</nav>
