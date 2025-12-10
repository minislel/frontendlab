"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from "@/app/lib/AuthContext";
import { FaBars, FaTimes } from 'react-icons/fa';

export default function TopBar() {
    const { user } = useAuth();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header className="bg-white dark:bg-gray-800 shadow relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
                            Frontend Lab
                        </Link>
                    </div>


                    <div className="hidden md:flex items-center space-x-4">
                        {!user ? (
                            <>
                                <Link href="/user/signin" className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
                                    Zaloguj
                                </Link>
                                <Link href="/user/register" className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded hover:bg-blue-700">
                                    Rejestracja
                                </Link>
                            </>
                        ) : (
                            <span className="text-sm text-gray-500 dark:text-gray-300">
                                Zalogowany jako {user.email}
                            </span>
                        )}
                    </div>

                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Otwórz menu</span>
                            {isMobileMenuOpen ? (
                                <FaTimes className="block h-6 w-6" />
                            ) : (
                                <FaBars className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>


            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-700">
                            Strona Główna
                        </Link>
                        <Link href="/dashboard" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-700">
                            Panel
                        </Link>
                        <Link href="/components" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-700">
                            Komponenty
                        </Link>
                        <Link href="/about" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-700">
                            O nas
                        </Link>

                        <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>

                        {!user ? (
                            <>
                                <Link href="/user/signin" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-700">
                                    Zaloguj
                                </Link>
                                <Link href="/user/register" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:text-blue-800">
                                    Rejestracja
                                </Link>
                            </>
                        ) : (
                            <>
                                <div className="px-3 py-2 text-sm text-gray-500 dark:text-gray-400">
                                    {user.email}
                                </div>
                                <Link href="/user/profile" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-700">
                                    Profil
                                </Link>
                                <Link href="/user/changepassword" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-700">
                                    Zmień Hasło
                                </Link>
                                <Link href="/user/signout" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-700">
                                    Wyloguj Się
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}
