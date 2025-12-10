'use client'
import { useAuth } from "@/app/lib/AuthContext";
import { updateProfile } from "firebase/auth";
import { useState } from "react";

export default function Profile() {
    const { user } = useAuth();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const data = {
            displayName: e.target.displayName.value,
            photoURL: e.target.photoURL.value,
        };

        updateProfile(user, {
            displayName: data.displayName,
            photoURL: data.photoURL,
        })
            .then(() => {
                console.log("Profile updated");
                setSuccess("Profile updated successfully.");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    if (!user) {
        return null;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg w-full max-w-md">
                <h3 className="text-2xl font-bold text-center text-gray-800">User Profile</h3>
                {user.photoURL && (
                    <div className="flex justify-center mt-4">
                        <img src={user.photoURL} alt="Profile" className="w-24 h-24 rounded-full" />
                    </div>
                )}
                <form onSubmit={onSubmit} key={user.uid}>
                    <div className="mt-4">
                        <div>
                            <label className="block" htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                defaultValue={user.email}
                                readOnly
                                className="w-full px-4 py-2 mt-2 border rounded-md bg-gray-100 focus:outline-none cursor-not-allowed"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block" htmlFor="displayName">Display Name</label>
                            <input
                                type="text"
                                name="displayName"
                                placeholder="Display Name"
                                defaultValue={user.displayName || ""}
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block" htmlFor="photoURL">Photo URL</label>
                            <input
                                type="text"
                                name="photoURL"
                                placeholder="Photo URL"
                                defaultValue={user.photoURL || ""}
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            />
                        </div>

                        {error && (
                            <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
                                {error}
                            </div>
                        )}
                        {success && (
                            <div className="mt-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded">
                                {success}
                            </div>
                        )}

                        <div className="flex items-baseline justify-between">
                            <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Update Profile</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
