// pages/index.js


export default function Footer() {


    return (
        <footer className="bg-gray-800 text-gray-400 py-4">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                {/* Footer Text */}
                <p className="text-sm">&copy; 2023 MyApp. All rights reserved.</p>

                {/* Additional Links */}
                <nav className="space-x-4">
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <a href="#" className="hover:text-white">Terms of Service</a>
                    <a href="#" className="hover:text-white">Contact Us</a>
                </nav>
            </div>
        </footer>
    );
}
