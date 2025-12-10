"use client";
import { useState, useEffect } from 'react';
import { useAuth } from '@/app/lib/AuthContext';
import { db } from '@/app/lib/firebase';
import { collection, addDoc, query, onSnapshot, orderBy, serverTimestamp } from 'firebase/firestore';

export default function Dashboard() {
    const { user } = useAuth();
    const [note, setNote] = useState('');
    const [notes, setNotes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!user) return;

        const q = query(
            collection(db, "notes"),
            orderBy("createdAt", "desc")
        );


        const unsubscribe = onSnapshot(q, (snapshot) => {
            const notesData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setNotes(notesData);
        });

        return () => unsubscribe();
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!note.trim() || !user) return;

        setLoading(true);
        setError(null);
        try {
            await addDoc(collection(db, "notes"), {
                text: note,
                userId: user.uid,
                userEmail: user.email,
                createdAt: serverTimestamp(),
            });
            setNote('');
        } catch (error) {
            console.error("Error adding document: ", error);
            setError("Błąd zapisu: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">Panel Użytkownika</h1>

            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Witaj, {user?.email}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    To jest strona chroniona. Możesz zweryfikować zapisywanie danych, dodając notatkę poniżej.
                </p>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                        <span className="block sm:inline">{error}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="mb-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="text"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            placeholder="Wpisz notatkę..."
                            className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            disabled={loading}
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition disabled:opacity-50"
                        >
                            {loading ? 'Zapisywanie...' : 'Dodaj Notatkę'}
                        </button>
                    </div>
                </form>
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Ostatnie Notatki</h3>
                {notes.length === 0 ? (
                    <p className="text-gray-500 italic">Brak notatek.</p>
                ) : (
                    notes.map((n) => (
                        <div key={n.id} className="bg-white dark:bg-gray-800 p-4 rounded shadow border-l-4 border-blue-500">
                            <p className="text-gray-800 dark:text-gray-200">{n.text}</p>
                            <div className="mt-2 text-xs text-gray-500 flex justify-between">
                                <span>{n.userEmail}</span>
                                <span>{n.createdAt?.seconds ? new Date(n.createdAt.seconds * 1000).toLocaleString() : 'Przed chwilą'}</span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
