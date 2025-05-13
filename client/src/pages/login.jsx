export default function Example() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center px-6 py-12 lg:px-8">
        <div className="w-full max-w-md">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-2xl font-bold text-black-600">
              <span role="img" aria-label="book">📘</span>
              <span>RentReads</span>
            </div>

            <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">
              Log in to your account
            </h2>
          </div>

          <div className="mt-8">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black border border-black placeholder-gray-400 focus:outline-indigo-600 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black border border-black placeholder-gray-400 focus:outline-indigo-600 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-indigo-600"
                >
                  Log in
                </button>
              </div>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              Not Registered?{' '}
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}