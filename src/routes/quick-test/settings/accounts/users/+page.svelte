1<script>
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
				<h1 class="form-title">Manage Users</h1>
				<p class="form-subtitle">Manager all your team Members</p>
			</div>
			<div>
			</div>
		</main>
	</div>
</main>
