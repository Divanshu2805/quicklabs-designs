<script>
	import NavBar from '$quick-certify/common/navbar/admin.svelte';
	import EventSettingsNavBar from '$quick-certify/common/navbar/event.svelte';
</script>

<NavBar />

<main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
	<div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
		<aside class="px-2 py-6 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
			<EventSettingsNavBar />
		</aside>

		<main class="max-w-xl pb-12 px-4 lg:col-span-6">
			<div>
				<h1 class="text-lg font-semibold dark:text-white">Event Levels</h1>
				<p class="text-gray-500 dark:text-gray-400 text-sm">
					Event levels specify the difficulty or complexity of the event. For example, beginner,
					advanced, or expert. You can add new event levels, edit existing ones, or delete them.
				</p>

				<form class="w-full mt-6">
					<div class="mb-4 mt-6">
						<label for="email" class="form-input-label">Add New Event Level</label>
						<input
							type="email"
							id="email"
							class="form-input-field"
							placeholder="New event Level"
							required />
					</div>
					<button type="submit" class="btn-primary">Save</button>
				</form>

				<div class="relative overflow-x-auto mt-8">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead
							class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" class="px-6 py-3 w-full">Event Level</th>
								<th scope="col" class="px-6 py-3"> Action </th>
							</tr>
						</thead>
						<tbody>
							<tr
								class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
								<th
									scope="row"
									class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									Introductory
								</th>
								<td class="px-6 py-4 inline-flex">
									<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
										>Edit</a>
									<a
										href="#"
										class="ml-2 font-medium text-red-600 dark:text-red-500 hover:underline"
										>Delete</a>
								</td>
							</tr>
							<tr
								class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
								<th
									scope="row"
									class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									Foundational
								</th>
								<td class="px-6 py-4 inline-flex">
									<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
										>Edit</a>
									<a
										href="#"
										class="ml-2 font-medium text-red-600 dark:text-red-500 hover:underline"
										>Delete</a>
								</td>
							</tr>
							<tr
								class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
							</tr>
							<tr>
								<th class="p-2">
									<input
										type="text"
										id="last_name"
										class="form-input-field"
										placeholder="Engineering"
										value="Intermediate"
										required />
								</th>
								<td>
									<button type="submit" class="btn-primary">Save</button>
								</td>
							</tr>
							<tr
								class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-t">
								<th
									scope="row"
									class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									Advanced
								</th>
								<td class="px-6 py-4 inline-flex">
									<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
										>Edit</a>
									<a
										href="#"
										class="ml-2 font-medium text-red-600 dark:text-red-500 hover:underline"
										>Delete</a>
								</td>
							</tr>
							<tr
								class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-t">
								<th
									scope="row"
									class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									Professional
								</th>
								<td class="px-6 py-4 inline-flex">
									<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
										>Edit</a>
									<a
										href="#"
										class="ml-2 font-medium text-red-600 dark:text-red-500 hover:underline"
										>Delete</a>
								</td>
							</tr></tbody>
					</table>
				</div>
			</div>
		</main>
	</div>
</main>
