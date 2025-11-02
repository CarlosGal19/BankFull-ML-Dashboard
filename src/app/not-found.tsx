"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] bg-white text-black">
      <div className="p-10 text-center max-w-md">
        <h1 className="text-7xl font-bold text-[#e61d00] mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-5 py-3 bg-[#e61d00] text-white rounded-xl hover:bg-[#c61a00] transition-all duration-200"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
