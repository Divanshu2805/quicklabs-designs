<script>
	import NavBar from '$quick-certify/common/navbar/admin.svelte';
	import InfoButton from '$lib/tooltip.svelte';
</script>

<NavBar />
<main>
	<section class="bg-white dark:bg-gray-900">
		<div class="py-8 px-4 mx-auto max-w-2xl lg:py-8">
			<div>
				<h1 class="form-title">Add New Team Member</h1>
				<p class="form-subtitle">
					Please fill in details of new team member to send them an invitation to join your team.
				</p>
			</div>

			<form
				id="new_user"
				action="/quick-certify/settings/account/team"
				accept-charset="UTF-8"
				method="GET">
				<div class="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-4">
					<div>
						<div>
							<label class="form-input-label" for="user_first_name">First Name</label>
							<div class="mt-1">
								<input
									class="form-input-field w-full"
									type="text"
									placeholder="John"
									name="user[first_name]"
									id="user_first_name" />
							</div>
						</div>
					</div>
					<div>
						<div>
							<label class="form-input-label" for="user_last_name">Last Name</label>
							<div class="mt-1">
								<input
									class="form-input-field w-full"
									type="text"
									placeholder="Doe"
									name="user[last_name]"
									id="user_last_name" />
							</div>
						</div>
					</div>
					<div>
						<div>
							<label class="form-input-label" for="user_email">Email</label>
							<div class="mt-1">
								<input
									class="form-input-field w-full"
									type="text"
									placeholder="johndoe@gmail.com"
									name="user[email]"
									id="user_email" />
							</div>
						</div>
					</div>
					<div>
						<label
							for="user-role"
							class="inline-flex items-center mb-2 text-sm font-medium text-gray-900 dark:text-white">
							User Role
							<InfoButton
								tooltipText="A team member can be either Admin, Manager or Designer."
								id="tooltip-user-role" />
						</label>
						<select name="user[role]" id="bucket" class="form-input-field w-full"
							><option value="data">Admin</option>
							<option value="recruiter">Manager</option>
							<option value="interviewer">Designer</option>
						</select>
					</div>
				</div>

				<button type="submit" class="btn-primary mt-4"> Send Invitation </button>
				<a class="btn-secondary ml-1" href="/quick-certify">Cancel</a>
			</form>
		</div>
	</section>
</main>
