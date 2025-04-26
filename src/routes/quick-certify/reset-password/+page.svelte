<section class="bg-gray-50 dark:bg-gray-900">
	<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
		<a
			href="/quick-certify"
			class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
			<img
				class="w-8 h-8 mr-2"
				src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
				alt="logo" />
			Quick Certify
		</a>
		<div
			class="w-full p-6 bg-white rounded-sm shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
			<h2
				class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
				Change Password
			</h2>
			<form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="/quick-certify/login">
				<div>
					<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>New Password</label>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="••••••••"
						class="form-text-field"
						required="" />
				</div>
				<div>
					<label
						for="confirm-password"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Confirm password</label>
					<input
						type="password"
						name="confirm-password"
						id="confirm-password"
						placeholder="••••••••"
						class="form-text-field"
						required="" />
				</div>

				<button type="submit" class="w-full btn-primary">Change Password</button>
				<p class="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
					<a
						href="/quick-certify/login"
						class="font-medium text-primary-600 hover:underline dark:text-primary-500"
						>Return Back to Login</a>
				</p>
			</form>
		</div>
	</div>
</section>
