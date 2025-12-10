import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
            <h1 className="text-6xl font-bold">404</h1>
            <h2 className="text-2xl mt-4">Page Not Found</h2>
            <p className="mt-2 text-gray-600">The page you are looking for does not exist.</p>
            <Link href="/" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                Return Home
            </Link>
        </div>
    );
}
