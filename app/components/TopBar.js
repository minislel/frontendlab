import Link from 'next/link';

export default function TopBar() {
    return (
        <header className="bg-white shadow p-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800">Welcome</h1>
            <div className="space-x-4">
                <Link href="/user/signin" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Sign In
                </Link>
                <Link href="/user/register" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                    Register
                </Link>
            </div>
        </header>
    );
}
