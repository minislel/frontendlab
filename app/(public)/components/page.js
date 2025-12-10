import Table from '@/app/components/Table';

export default function Components() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                        Przegląd Komponentów
                    </h1>
                    <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
                        Kolekcja reużywalnych komponentów ostylowanych w Tailwind CSS.
                    </p>
                </div>


                <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-2">Przyciski</h2>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Główny
                        </button>
                        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                            Drugorzędny
                        </button>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1">
                            Animowany
                        </button>
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Obrysowany
                        </button>
                        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
                            Zablokowany
                        </button>
                    </div>
                </section>


                <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-2">Elementy Formularza</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="username">
                                Pole Tekstowe
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800 dark:text-white dark:border-gray-600" id="username" type="text" placeholder="Nazwa użytkownika" />
                        </div>
                        <div>
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="options">
                                Lista Rozwijana
                            </label>
                            <div className="relative">
                                <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800 dark:text-white dark:border-gray-600">
                                    <option>Opcja 1</option>
                                    <option>Opcja 2</option>
                                    <option>Opcja 3</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-200">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-2">Karty</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Tytuł Karty</div>
                                <p className="text-gray-700 dark:text-gray-300 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2">#fotografia</span>
                                <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2">#podróże</span>
                                <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2">#zima</span>
                            </div>
                        </div>


                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 border-l-4 border-blue-500">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Wyróżniona Karta</div>
                                <p className="text-gray-700 dark:text-gray-300 text-base">
                                    Ta karta zawiera ważną treść lub wyróżnione informacje. Lewe obramowanie dodaje przyjemny akcent wizualny.
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2 flex justify-end">
                                <button className="text-blue-500 hover:text-blue-800 font-semibold">Czytaj Więcej</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-2">Tabela z Sortowaniem i Zwijaniem</h2>
                    <Table
                        headers={[
                            { key: 'name', label: 'Imię' },
                            { key: 'role', label: 'Rola' },
                            { key: 'status', label: 'Status' },
                            { key: 'exp', label: 'Doświadczenie' }
                        ]}
                        data={[
                            { id: 1, name: 'Jan Kowalski', role: 'Frontend Dev', status: 'Aktywny', exp: 'Senior' },
                            { id: 2, name: 'Anna Nowak', role: 'UI Designer', status: 'Urlop', exp: 'Mid' },
                            { id: 3, name: 'Piotr Wiśniewski', role: 'Backend Dev', status: 'Aktywny', exp: 'Senior' },
                            { id: 4, name: 'Maria Wójcik', role: 'Project Manager', status: 'Aktywny', exp: 'Lead' },
                            { id: 5, name: 'Krzysztof Krawczyk', role: 'DevOps', status: 'Zwolniony', exp: 'Junior' },
                            { id: 6, name: 'Agnieszka Lis', role: 'QA Engineer', status: 'Aktywny', exp: 'Mid' },
                        ]}
                        footer={{
                            name: 'Suma',
                            role: '6 pracowników',
                            status: '-',
                            exp: '-'
                        }}
                    />
                </section>


                <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-2">Alerty</h2>
                    <div className="space-y-4">
                        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
                            <p className="font-bold">Info</p>
                            <p>Coś się wydarzyło, o czym powinieneś wiedzieć.</p>
                        </div>
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                            <p className="font-bold">Błąd</p>
                            <p>Coś poszło nie tak.</p>
                        </div>
                        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
                            <p className="font-bold">Sukces</p>
                            <p>Operacja zakończona powodzeniem!</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
