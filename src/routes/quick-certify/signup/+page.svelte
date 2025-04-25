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
					Register new issuer account
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
							<label
								for="email"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>Your email</label>
							<input
								type="email"
								name="email"
								id="email"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="name@company.com"
								required="" />
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
						<div class="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-6">
							<div>
								<label
									for="password"
									class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>Password</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required="" />
							</div>
							<div>
								<label
									for="password"
									class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>Confirm Password</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required="" />
							</div>
						</div>

						<button type="submit" class="w-full btn-primary">Create New Issuer Account</button>

						{#if showGoogleSignIn}
							<div class="space-y-3">
								<a
									href="#"
									class="w-full inline-flex items-center justify-center py-2 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-sm border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
									<svg
										class="w-5 h-5 mr-2"
										viewBox="0 0 21 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<g clip-path="url(#clip0_13183_10121)">
											<path
												d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z"
												fill="#3F83F8" />
											<path
												d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z"
												fill="#34A853" />
											<path
												d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z"
												fill="#FBBC04" />
											<path
												d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z"
												fill="#EA4335" />
										</g>
										<defs>
											<clipPath id="clip0_13183_10121">
												<rect width="20" height="20" fill="white" transform="translate(0.5)" />
											</clipPath>
										</defs>
									</svg>
									Sign up with Google
								</a>
							</div>
						{/if}
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
