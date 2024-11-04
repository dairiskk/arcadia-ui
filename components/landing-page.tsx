import React from 'react';


const LandingPage = () => {
    return (
        <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
            {/* Header */}


            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center justify-center px-4">
                <div className="max-w-3xl text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-indigo-500">
                        Welcome to MyApp!
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                        Connect with friends, share your moments, and engage in meaningful conversations. MyApp is your all-in-one social platform where you can stay connected, discover new friendships, and have fun!
                    </p>
                    <p className="text-gray-400 text-md md:text-lg leading-relaxed">
                        Dive in and explore a world of social connections, tailored just for you. Whether you're here to chat, make friends, or catch up with your loved ones, we've got you covered.
                    </p>

                    {/* Call-to-Action Button */}
                    <button className="mt-6 px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        Get Started
                    </button>
                </div>
            </main>

            {/* Footer */}

        </div>
    );
};

export default LandingPage;
