
<script>
	import NavBar from '$quick-certify/common/navbar/admin.svelte';

	let selectedType = 'all';

	const designs = [
		{
			id: 1,
			name: 'Course Completion Certificate',
			type: 'certificate',
			date: '12 Dec 2024',
			image: '/quick-certify/rashi.png'
		},
		{
			id: 2,
			name: 'Top Performer Badge',
			type: 'badge',
			date: '08 Dec 2024',
			image: '/quick-certify/rashi.png'
		}
	];

	$: filteredDesigns =
		selectedType === 'all'
			? designs
			: designs.filter(d => d.type === selectedType);
</script>

<NavBar />

<section class="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5 min-h-screen">
<div class="px-4 mx-auto max-w-screen-2xl lg:px-8">
		<div class="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-sm">
			<div class=" divide-y dark:divide-gray-700">
				<div
					class="flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
					<div>
						<h1 class="mr-3 form-title">Designs Library</h1>
						<p class="form-subtitle">
				Manage certificate and badge designs
			</p>
					</div>
					<div class="flex space-x-4">
						<div class="flex space-x-2 items-center w-full">
							<a
								type="button"
								href="/quick-certify/settings/account/team/add"
								class="btn-primary w-full">
								Add New Certificate
							</a>
						</div>
					</div>
				</div>
			</div>

<div class="flex flex-wrap justify-between pt-1 pb-4 border-t border-b dark:border-gray-700 px-4">

	<!-- Left: Filter section -->
	<div class="flex flex-wrap pt-1 pb-4 dark:border-gray-700 px-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">

		<div
			class="items-center hidden mt-3 mr-4 text-sm font-medium text-gray-900 md:flex dark:text-white">
			Show records only for:
		</div>

		<div class="flex flex-wrap">
			<a href="">
				<div class="flex items-center mt-3 mr-4">
					<input
						id="certificates"
						type="radio"
						name="show-only"
						class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 cursor-pointer"
						checked />
					<label
						for="certificates"
						class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
						Certificates
					</label>
				</div>
			</a>

			<a href="">
				<div class="flex items-center mt-3 mr-4">
					<input
						id="badges"
						type="radio"
						name="show-only"
						class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 cursor-pointer" />
					<label
						for="badges"
						class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
						Badges
					</label>
				</div>
			</a>

			<a
				class="underline mt-3 mr-4 font-medium text-blue-600 dark:text-blue-500 hover:underline text-sm">
				Show All
			</a>
		</div>
	</div>

	<!-- Right: Search -->
	<div class="flex items-center mt-3">
		<input
			type="text"
			placeholder="Search designs..."
			class="w-64 rounded-md border border-gray-300 px-3 py-2 text-sm
				focus:outline-none focus:ring-2 focus:ring-primary-500" />
	</div>

</div>



			<!-- Table -->
			<div class="overflow-x-auto">
				<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead class="text-xs uppercase bg-gray-50 dark:bg-gray-700">
						<tr>
							<th class="px-4 py-3">Design</th>
							<th class="px-4 py-3 text-right">Actions</th>
						</tr>
					</thead>

					<tbody>
						{#each filteredDesigns as design}
							<tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">

								<!-- Design column -->
								<td class="px-4 py-2">
									<div class="flex items-center gap-3">
										<img
											src={design.image}
											alt={design.type}
											class="w-12 h-12 rounded-md bg-gray-100 p-1 object-contain"
										/>

										<div>
											<div class="font-medium text-gray-900 dark:text-white">
												{design.name}
											</div>

											<div class="text-xs text-gray-500 mt-1 flex gap-2">
												<span class="capitalize bg-primary-100 text-primary-800 px-2 py-0.5 rounded">
													{design.type}
												</span>
												<span>•</span>
												<span>{design.date}</span>
											</div>
										</div>
									</div>
								</td>

								<!-- Actions -->
								<td class="px-4 py-2 text-right">
								<div class="flex justify-end gap-2">
	<button
		class="px-3 py-1.5 text-sm font-medium rounded-md
			bg-blue-50 text-blue-700 hover:bg-blue-100">
		Preview
	</button>

	<button
		class="px-3 py-1.5 text-sm font-medium rounded-md
			bg-gray-100 text-gray-700 hover:bg-gray-200">
		Edit
	</button>

	<button
		class="px-3 py-1.5 text-sm font-medium rounded-md
			bg-red-50 text-red-700 hover:bg-red-100">
		Delete
	</button>
</div>

								</td>
							</tr>
						{/each}

						{#if filteredDesigns.length === 0}
							<tr>
								<td colspan="2" class="text-center py-6 text-gray-500">
									No designs found
								</td>
							</tr>
						{/if}
					</tbody>
				</table>
			</div>

		</div>
	</div>
</section>






