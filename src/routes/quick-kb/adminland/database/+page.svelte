<script>
	import Header from '$quick-kb/common/navbar/admin.svelte';
	import Sidebar from '$quick-kb/common/navbar/sidebar.svelte';
</script>

<Header />
<main class="max-w-7xl mx-auto pb-10 lg:py-8 lg:px-8">
	<div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
		<Sidebar />

		<main class="max-w-xl pb-12 px-4 lg:col-span-6">
			<div>
				<h1 class="text-lg font-semibold dark:text-white">Manage Database</h1>
				<p class="text-gray-500 dark:text-gray-400 text-sm">Import/Export Database</p>

				<div>
					<h1 class="text-md font-semibold dark:text-white mt-6">Export Database</h1>
					<p class="text-gray-500 dark:text-gray-400 text-xs">
						Export database to a .sqlite file. You can use this file to import the database in
						another knowledge base or keep it as back to replace the current database in future.
					</p>
					<button class="btn-primary mt-2"> Export Database </button>
				</div>
				<div>
					<h1 class="text-md font-semibold dark:text-white mt-6">Import Database</h1>
					<p class="text-gray-500 dark:text-gray-400 text-xs">
						Import an .sqlite file to replace the current database. This will delete all the current
						data in the database and replace it with the data in the .sqlite file. Make sure to keep
						a backup of the current database before importing a new one.
					</p>
					<button class="btn-secondary mt-2"> Import Database </button>
				</div>
			</div>
		</main>
	</div>
</main>
