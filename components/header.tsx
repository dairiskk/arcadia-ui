// pages/index.js


export default function Header() {


    return (
        <header className="bg-gray-800 text-gray-100 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-indigo-500">
                    MyApp
                </div>

                {/* Navigation Links */}
                <nav className="space-x-6">
                    <a href="#" className="text-gray-300 hover:text-white">Home</a>
                    <a href="#" className="text-gray-300 hover:text-white">Friends</a>
                    <a href="#" className="text-gray-300 hover:text-white">Chat</a>
                </nav>

                {/* Profile Button or Login (Placeholder) */}
                <div>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                        Profile
                    </button>
                </div>
            </div>
        </header>
    );
}
