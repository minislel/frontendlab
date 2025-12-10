'use client'
import Link from 'next/link';
import { FaHome, FaUser, FaKey, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from "@/app/lib/AuthContext";

export default function Sidebar() {
  const { user } = useAuth();

  return (
    <aside className="w-64 bg-gray-800 text-white h-full hidden md:flex flex-col">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        Frontend Lab
      </div>
      <nav className="mt-10 flex-1 overflow-y-auto">
        <Link href="/" className="flex items-center py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
          <FaHome className="mr-3" />
          Strona Główna
        </Link>
        <Link href="/dashboard" className="flex items-center mt-5 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
          <FaHome className="mr-3" />
          Panel (Chroniony)
        </Link>
        <Link href="/components" className="flex items-center mt-5 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
          <FaHome className="mr-3" />
          Komponenty
        </Link>
        <Link href="/about" className="flex items-center mt-5 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
          <FaHome className="mr-3" />
          O nas
        </Link>

        {user && (
          <>
            <div className="mt-5 px-6 text-xs text-gray-400 uppercase tracking-wider">Użytkownik</div>
            <Link href="/user/profile" className="flex items-center mt-2 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
              {user?.photoURL ? (
                <img src={user.photoURL} alt="Profile" className="w-5 h-5 rounded-full mr-3" />
              ) : (
                <FaUser className="mr-3" />
              )}
              Profil
            </Link>
            <Link href="/user/changepassword" className="flex items-center mt-2 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
              <FaKey className="mr-3" />
              Zmień Hasło
            </Link>
            <Link href="/user/signout" className="flex items-center mt-2 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
              <FaSignOutAlt className="mr-3" />
              Wyloguj Się
            </Link>
          </>
        )}
      </nav>
    </aside>
  );
}
