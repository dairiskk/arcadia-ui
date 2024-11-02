// pages/index.js


export default function LoginComponent() {


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="max-w-md w-full bg-gray-800 p-8 border border-gray-700 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center text-white">Sign In</h2>
                <p className="text-center text-gray-400 mb-6">Welcome back! Please login to your account.</p>

                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-300" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="flex justify-end text-sm">
                        <a href="#" className="text-indigo-400 hover:underline">Forgot Password?</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-gray-400 mt-6">
                    Don't have an account? <a href="#" className="text-indigo-400 hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    );
}
