'use client'
import { signOut } from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import { useRouter } from "next/navigation";

export default function LogoutForm() {

    const router = useRouter();

    const onSubmit = () => {
        signOut(auth);
        router.push("/");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg w-full max-w-md text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Sign Out</h3>
                <p className="mb-6 text-gray-600">Are you sure you want to sign out?</p>
                <button
                    onClick={onSubmit}
                    className="px-6 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-300"
                >
                    Sign Out
                </button>
            </div>
        </div>
    );
}
