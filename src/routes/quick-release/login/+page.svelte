<section class="bg-gray-50 dark:bg-gray-900">
	<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
		<a
			href="/quick-release"
			class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
			<img
				class="w-8 h-8 mr-2"
				src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
				alt="logo" />
			Quick Release
		</a>
		<div
			class="w-full bg-white rounded-sm shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
			<div class="p-6 space-y-4 md:space-y-4 sm:p-8">
				<h1
					class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
					Sign in to your account
				</h1>
				<form class="space-y-4 md:space-y-4" action="#">
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
						<label for="password" class="form-input-label">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="••••••••"
							class="form-input-field"
							required="" />
					</div>
					<div class="flex items-center justify-between">
						<div class="flex items-start">
							<div class="flex items-center h-5">
								<input
									id="remember"
									aria-describedby="remember"
									type="checkbox"
									class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
									required="" />
							</div>
							<div class="ml-3 text-sm">
								<label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
							</div>
						</div>
						<a href="/quick-release/forgot-password" class="link">Forgot password?</a>
					</div>
					<a href="/quick-release/changelog">
						<button type="submit" class="btn-primary w-full mt-4">Sign in</button>
					</a>
					<p
						class="text-sm font-light text-gray-500 dark:text-gray-400 flex items-center justify-center">
						Don’t have an account yet? <a href="/quick-release/signup" class="link ml-2">Sign up</a>
					</p>
				</form>
			</div>
		</div>
	</div>
</section>
