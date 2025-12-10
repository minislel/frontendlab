'use client'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useAuth } from "@/app/lib/AuthContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { auth } from "@/app/lib/firebase";

export default function Register() {
    const { user } = useAuth();
    const router = useRouter();
    const [registerError, setRegisterError] = useState("");

    if (user) {
        return null;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        setRegisterError("");

        if (password !== confirmPassword) {
            setRegisterError("Passwords do not match.");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("User registered!");
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        console.log("Email verification send!");
                        router.push("/user/verify");
                    });
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    setRegisterError("Email is already in use.");
                } else {
                    setRegisterError(error.message);
                }
                console.dir(error);
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg w-full max-w-md">
                <h3 className="text-2xl font-bold text-center text-gray-800">Register</h3>
                <form onSubmit={onSubmit}>
                    <div className="mt-4">
                        <div>
                            <label className="block" htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="Email" required
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="mt-4">
                            <label className="block" htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Password" required
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="mt-4">
                            <label className="block" htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" placeholder="Confirm Password" required
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        {registerError && (
                            <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
                                {registerError}
                            </div>
                        )}
                        <div className="flex items-baseline justify-between">
                            <button className="px-6 py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-green-900">Register</button>
                            <Link href="/user/signin" className="text-sm text-blue-600 hover:underline">Already have an account?</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
