import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            O nas
          </h1>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
            Dowiedz się więcej o zespole i misji stojącej za tym projektem.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Aplikacja</h3>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
              Frontend Lab to platforma demonstracyjna zaprojektowana w celu zaprezentowania nowoczesnych praktyk tworzenia stron internetowych, w tym uwierzytelniania, chronionych ścieżek i responsywnego designu przy użyciu Next.js i Tailwind CSS.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Autor</h3>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
              Stworzone przez pasjonata programowania, eksplorującego możliwości najnowszych technologii frontendowych. Dedykowane tworzeniu czystych, łatwych w utrzymaniu i przyjaznych dla użytkownika interfejsów.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Technologie</h3>
            <ul className="mt-3 list-disc list-inside text-base text-gray-500 dark:text-gray-400">
              <li>Next.js 15+</li>
              <li>Tailwind CSS</li>
              <li>Firebase Auth & Firestore</li>
              <li>React Icons</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium">
            &larr; Powrót do strony głównej
          </Link>
        </div>
      </div>
    </div>
  );
}
