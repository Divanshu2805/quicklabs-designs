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
				Forgot Password?
			</h2>
			<form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="/quick-certify/reset-password">
				<div>
					<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Enter email to recover password
					</label>
					<input
						type="email"
						name="email"
						id="email"
						class="form-input-field"
						placeholder="name@company.com"
						required="" />
				</div>

				<button type="submit" class="w-full btn-primary">Send Reset Password Instructions</button>
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
