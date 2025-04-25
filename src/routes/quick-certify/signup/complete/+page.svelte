<script>
	const title = 'Quick Certify';
	const showGoogleSignIn = true;
	const logo = 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg';
</script>

<section class="bg-gray-50 dark:bg-gray-900">
	<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
		<a
			href="/quick-certify"
			class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
			<img class="w-8 h-8 mr-2" src={logo} alt="logo" />
			{title}
		</a>
		<div
			class="w-full bg-white rounded-sm shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
			<div class="p-6 space-y-6 md:space-y-6 sm:p-8">
				<h1
					class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
					Tell us more about your issuer account
				</h1>
				<form class="space-y-6" action="#">
					<div class="space-y-4">
						<div class="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-6">
							<div>
								<label
									for="name"
									class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>First Name</label>
								<input
									type="text"
									name="name"
									id="name"
									class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="John"
									required="" />
							</div>
							<div>
								<label
									for="name"
									class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>Last Name</label>
								<input
									type="text"
									name="name"
									id="name"
									class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Doe"
									required="" />
							</div>
						</div>

						<div>
							<label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>Issuer name</label>
							<input
								type="text"
								name="name"
								id="name"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Issuer or company name"
								required="" />
						</div>
						<div>
							<label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>Issuer Website URL</label>
							<input
								type="text"
								name="name"
								id="name"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Website URL"
								required="" />
						</div>

						<button type="submit" class="w-full btn-primary"
							>Complete profile and go to Dashboard</button>

						<p
							class="text-sm font-light text-gray-500 dark:text-gray-400 flex justify-center items-center">
							Already have an account? <a
								href="/quick-certify/login"
								class="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2"
								>Login</a>
						</p>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>
