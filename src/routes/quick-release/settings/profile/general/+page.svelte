<script>
	import Fullnavbar from '$quick-release/shared/fullnavbar.svelte';
	import SideBar from '$quick-release/shared/profilesidebar.svelte';

</script>

<Fullnavbar />

<main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
	<div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
		<SideBar />

		<main class="max-w-xl pb-12 px-4 lg:col-span-6">
			<div>
				<h1 class="form-title">Profile Settings</h1>
				<p class="form-subtitle">
					Change your personal profile settings
				</p>

				<form class="w-full mt-6">
					<div class="sm:col-span-2">
						<label class="form-input-label" for="file_input">Upload avatar</label>
						<div class="items-center w-full sm:flex">
							<img
								class="w-20 h-20 mb-4 rounded-full sm:mr-4 sm:mb-0"
								src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
								alt="Helene avatar" />
						</div>
					</div>

					<div class="mb-4 mt-6">
						<label for="email" class="form-input-label">First Name</label>
						<input
							type="email"
							id="email"
							class="form-input-field"
							placeholder="Aashish"
							required />
					</div>
					<div class="mb-4">
						<label for="email" class="form-input-label">Last Name</label>
						<input
							type="email"
							id="email"
							class="form-input-field"
							placeholder="Dhawan"
							required />
					</div>

					<div class="mb-4">
						<label for="password" class="form-input-label">Email</label>
						<input
							type="password"
							id="password"
							class="form-input-field"
							placeholder="aashish@gmail.com"
							required />
					</div>

					<button
						type="submit"
						class="btn-primary"
						>Save</button>
				</form>
			</div>
		</main>
	</div>
</main>
