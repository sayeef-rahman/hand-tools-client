import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div class="flex items-center justify-center w-screen h-screen">
            <div class="px-4 lg:py-12">
                <div class="lg:gap-4 lg:flex">
                    <div
                        class="flex flex-col items-center justify-center md:py-24 lg:py-32"
                    >
                        <h1 class="font-bold text-blue-600 text-9xl">404</h1>
                        <p
                            class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"
                        >
                            <span class="text-red-500">Oops!</span> Page not found
                        </p>
                        <p class="mb-8 text-center text-gray-500 md:text-lg">
                            The page you’re looking for doesn’t exist.
                        </p>
                        <button class="mt-5">
                            <a
                                class="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
                            >
                                <span
                                    class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
                                ></span>

                                <span class="relative block px-8 py-3 bg-[#1A2238] border border-current">
                                    <Link to="/">Go Home</Link>
                                </span>
                            </a>
                        </button>
                    </div>
                    <div class="mt-4">
                        <img
                            src="https://cdn.pixabay.com/photo/2016/11/22/23/13/black-dog-1851106__340.jpg"
                            alt="img"
                            class="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;