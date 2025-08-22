<section class="bg-gray-50 dark:bg-gray-900">
	<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
		<a
			href="/quick-learn"
			class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
			<img
				class="w-8 h-8 mr-2"
				src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
				alt="logo" />
			Quick Learn
		</a>
		<div
			class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
			<h2
				class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
				Set your Password
			</h2>
			<form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
				<div>
					<label for="password" class="form-input-label">New Password</label>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="••••••••"
						class="form-input-field"
						required="" />
				</div>
				<div>
					<label for="confirm-password" class="form-input-label">Confirm password</label>
					<input
						type="confirm-password"
						name="confirm-password"
						id="confirm-password"
						placeholder="••••••••"
						class="form-input-field"
						required="" />
				</div>
				<a href="/quick-learn/dashboard">
					<button
						class="w-full mt-4 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						>Set password</button>
				</a>
			</form>
		</div>
	</div>
</section>
