<script>
	import NavBar from '$quick-test/common/navbar/fullnavbar.svelte';
	import Profilesidebar from '$quick-test/common/navbar/accountsidebar.svelte';
</script>

<NavBar />

<main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
	<div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
		<aside class="px-2 py-6 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
			<Profilesidebar />
		</aside>

		<main class="max-w-xl pb-12 px-4 lg:col-span-6 space-y-4">
			
			<div>
				<h1 class="form-title">Billing Settings</h1>
				<p class="form-subtitle">Manage your billing information</p>
				<form class="w-full mt-6 space-y-4">
					
<div class="mb-4">
						<label for="address-line-1" class="form-input-label">Address Line 1</label>
						<input
							type="text"
							id="address-line-1"
							class="form-input-field"
							placeholder=""
							required />
					</div>
                    <div class="mb-4">
						<label for="address-line-2" class="form-input-label">Address Line 2</label>
						<input
							type="text"
							id="address-line-2"
							class="form-input-field"
							placeholder=""
							required />
					</div>

					<div class="grid gap-4 sm:grid-cols-2 sm:gap-4">
						<div>
							<label for="first-name" class="form-input-label">City</label>
							<input
								type="text"
								name="first-name"
								id="first-name"
								class="form-input-field"
								placeholder="City name"
								required="" />
						</div>
						<div>
							<label for="last-name" class="form-input-label">State</label>
							<input
								type="text"
								name="first-name"
								id="first-name"
								class="form-input-field"
								placeholder="State name"
								required="" />
						</div>
					</div>

					

					<div class="grid gap-4 sm:grid-cols-2 sm:gap-4">
						<div>
							<label for="first-name" class="form-input-label">Postal Code</label>
							<input
								type="text"
								name="first-name"
								id="first-name"
								class="form-input-field"
								placeholder="Postal Code"
								required="" />
						</div>
						<div>
							<label for="last-name" class="form-input-label">Country</label>
							<input
								type="text"
								name="first-name"
								id="first-name"
								class="form-input-field"
								placeholder="Country name"
								required="" />
						</div>
					</div>

					<button type="submit" class="btn-primary">Save</button>
				</form>
			</div>
		</main>
	</div>
</main>
