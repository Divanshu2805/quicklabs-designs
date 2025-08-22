<section class="bg-gray-50 dark:bg-gray-900">
	<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
		<a
			href="/quick-test"
			class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
			<img
				class="w-8 h-8 mr-2"
				src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
				alt="logo" />
			Quick Test
		</a>
		<div
			class="w-full bg-white rounded-sm shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
			<div class="p-6 space-y-4 md:space-y-4 sm:p-8">
				<h1
					class="h1">
					Create your account
				</h1>
				<form class="space-y-4 md:space-y-4" action="#">
					<div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
						<div>
							<label for="first-name" class="form-input-label">First Name</label>
							<input
								type="text"
								name="first-name"
								id="first-name"
								class="form-input-field"
								placeholder="First name"
								required="" />
						</div>
						<div>
							<label for="last-name" class="form-input-label">Last Name</label>
							<input
								type="text"
								name="first-name"
								id="first-name"
								class="form-input-field"
								placeholder="Last name"
								required="" />
						</div>
					</div>

					<div>
						<label for="email" class="form-input-label">Your email</label>
						<input
							type="email"
							name="email"
							id="email"
							class="form-input-field"
							placeholder="name@company.com"
							required="" />
					</div>
					<div>
						<label for="company-name" class="form-input-label">Organization Name</label>
						<input
							type="text"
							name="company-name"
							id="first-name"
							class="form-input-field"
							placeholder="Company name"
							required="" />
					</div>

					<div class="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-6">
						<div>
							<label for="password" class="form-input-label">Password</label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="••••••••"
								class="form-input-field"
								required="" />
						</div>
						<div>
							<label for="password" class="form-input-label">Confirm Password</label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="••••••••"
								class="form-input-field"
								required="" />
						</div>
					</div>

					<div class="flex items-start">
						<div class="flex items-center h-5">
							<input
								id="terms"
								aria-describedby="terms"
								type="checkbox"
								class="checkbox"
								required="" />
						</div>
						<div class="ml-3 text-sm">
							<label for="terms" class="font-light text-gray-500 dark:text-gray-300"
								>I accept the <a
									class="font-medium text-primary-600 hover:underline dark:text-primary-500"
									href="#">Terms and Conditions</a
								></label>
						</div>
					</div>
					<a href="/quick-test/signup/team" class="mt-4">
						<button type="submit" class="w-full mt-4 btn-primary">Create an account</button>
					</a>
					<p
						class="text-sm font-light text-gray-500 dark:text-gray-400 flex justify-center items-center">
						Already have an account? <a
							href="/quick-test/login"
							class="link ml-2"
							>Login</a>
					</p>
				</form>
			</div>
		</div>
	</div>
</section>
