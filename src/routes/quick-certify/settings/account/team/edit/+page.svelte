<script>
	import NavBar from '$quick-certify/common/navbar/admin.svelte';
	import InfoButton from '$lib/tooltip.svelte';
</script>

<NavBar />
<main>
	<section class="bg-white dark:bg-gray-900">
		<div class="py-8 px-4 mx-auto max-w-2xl lg:py-8">
			<div>
				<h1 class="form-title">Edit Team Member</h1>
				<p class="form-subtitle">
					Please update details to edit team member.
				</p>
			</div>

			<form id="new_user" action="/members" accept-charset="UTF-8" method="post">
				<div class="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-4">
					<div>
						<div>
							<label class="form-input-label" for="user_first_name">First Name</label>
							<div class="">
								<input
									class="form-input-field"
									required="required"
									type="text"
									name="user[first_name]"
									id="user_first_name" />
							</div>
						</div>
					</div>
					<div>
						<div>
							<label class="form-input-label" for="user_last_name">Last Name</label>
							<div class="">
								<input
									class="form-input-field"
									required="required"
									type="text"
									name="user[last_name]"
									id="user_last_name" />
							</div>
						</div>
					</div>
					<div>
						<div>
							<label class="form-input-label" for="user_email">Email</label>
							<div class="">
								<input
									class="form-input-field"
									required="required"
									type="text"
									name="user[email]"
									id="user_email" />
							</div>
						</div>
					</div>
					<div>
						<div class="flex items-center space-x-1 mb-2">
							<label for="password" class="block text-sm font-medium text-gray-900 dark:text-white"
								>User Role</label>
							<InfoButton
								tooltipText="A team member can be either Admin, Manager or Designer."
								id="tooltip-user-role" />
						</div>
						<select name="user[role]" id="bucket" class="form-input-field"
							><option value="data">Admin</option>
							<option value="recruiter">Manager</option>
							<option value="interviewer">Designer</option>
						</select>
					</div>
				</div>
				<div class="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-4">
					<div>
						<label
							for="user-role"
							class="inline-flex items-center mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Active
							
							<InfoButton
								tooltipText="Mark member as active or inactive."
								id="tooltip-user-active" />
							
						</label>
						<select name="user[role]" id="bucket" class="form-input-field"
							><option value="data">Active</option>
							<option value="recruiter">Inactive</option>
						</select>
					</div>
				</div>
				<button type="submit" class="btn-primary mt-6"> Edit Member </button>
				<a class="btn-secondary ml-2" href="/quick-certify">Cancel</a>
			</form>
		</div>
	</section>
</main>
