'use client'
import Link from 'next/link';
import { FaHome, FaUser, FaKey, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from "@/app/lib/AuthContext";

export default function Sidebar() {
  const { user } = useAuth();

  return (
    <aside className="w-64 bg-gray-800 text-white h-full flex flex-col">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        MyApp
      </div>
      <nav className="mt-10">
        <Link href="/" className="flex items-center py-2 px-6 bg-gray-700 bg-opacity-25 text-gray-100 border-l-4 border-gray-100">
          <FaHome className="mr-3" />
          Home
        </Link>
        <Link href="/user/profile" className="flex items-center mt-5 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
          {user?.photoURL ? (
            <img src={user.photoURL} alt="Profile" className="w-5 h-5 rounded-full mr-3" />
          ) : (
            <FaUser className="mr-3" />
          )}
          Profile
        </Link>
        <Link href="/user/changepassword" className="flex items-center mt-5 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
          <FaKey className="mr-3" />
          Change Password
        </Link>
        <Link href="/user/signout" className="flex items-center mt-5 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
          <FaSignOutAlt className="mr-3" />
          Sign Out
        </Link>
      </nav>
    </aside>
  );
}
