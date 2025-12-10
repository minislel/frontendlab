'use client'
import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence, signOut } from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import { useSearchParams, useRouter } from "next/navigation";
import Link from 'next/link';
import { Suspense, useState } from "react";

function SignInForm() {
    const params = useSearchParams();
    const router = useRouter();
    const returnUrl = params.get("returnUrl");
    const [error, setError] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const email = e.target["email"].value;
        const password = e.target["password"].value;

        setError('');

        setPersistence(auth, browserSessionPersistence)
            .then(() => {
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        if (!userCredential.user.emailVerified) {
                            signOut(auth);
                            router.push('/user/verify');
                            return;
                        }

                        if (returnUrl) {
                            router.push(returnUrl);
                        } else {
                            router.push('/');
                        }
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.error(errorCode, errorMessage);
                        setError(errorMessage);
                    });
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg w-full max-w-md">
                <h3 className="text-2xl font-bold text-center text-gray-800">Sign In</h3>
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
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        <div className="flex items-baseline justify-between">
                            <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                            <Link href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default function SignInPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SignInForm />
        </Suspense>
    );
}
