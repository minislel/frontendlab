'use client'
import { useAuth } from "@/app/lib/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import { useEffect, useState } from "react";
import Link from 'next/link';

export default function VerifyEmail() {
    const { user } = useAuth();
    const [email, setEmail] = useState(null);

    useEffect(() => {
        if (user && !email) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setEmail(user.email);
            signOut(auth);
        }
    }, [user, email]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
            <h1 className="text-4xl font-bold mb-4">Verify Your Email</h1>
            <p className="text-lg mb-6 text-center max-w-md">
                Email not verified. Verify clicking on link in email send to your address {email}
            </p>
            <Link href="/user/signin" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                Go to Sign In
            </Link>
        </div>
    );
}
