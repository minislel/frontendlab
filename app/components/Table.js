"use client";
import { useState, useMemo } from 'react';
import { FaSort, FaSortUp, FaSortDown, FaEye } from 'react-icons/fa';

export default function Table({ headers, data, footer }) {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
    const [selectedRows, setSelectedRows] = useState(new Set());
    const [hiddenRows, setHiddenRows] = useState(new Set());


    const sortedData = useMemo(() => {
        let sortableItems = [...data];
        if (sortConfig.key !== null && sortConfig.direction !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [data, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        } else if (sortConfig.key === key && sortConfig.direction === 'descending') {
            direction = null;
        }
        setSortConfig({ key: direction ? key : null, direction });
    };

    const getSortIcon = (name) => {
        if (sortConfig.key !== name) return <FaSort className="inline ml-1 text-gray-400" />;
        if (sortConfig.direction === 'ascending') return <FaSortUp className="inline ml-1 text-blue-500" />;
        if (sortConfig.direction === 'descending') return <FaSortDown className="inline ml-1 text-blue-500" />;
        return <FaSort className="inline ml-1 text-gray-400" />;
    };


    const toggleSelect = (id) => {
        const newSelected = new Set(selectedRows);
        if (newSelected.has(id)) {
            newSelected.delete(id);
        } else {
            newSelected.add(id);
        }
        setSelectedRows(newSelected);
    };

    const toggleSelectAll = () => {
        if (selectedRows.size === sortedData.length) {
            setSelectedRows(new Set());
        } else {
            setSelectedRows(new Set(sortedData.map(item => item.id)));
        }
    };


    const collapseSelected = () => {
        const newHidden = new Set(hiddenRows);
        selectedRows.forEach(id => newHidden.add(id));
        setHiddenRows(newHidden);
        setSelectedRows(new Set());
    };

    const restoreGroup = (ids) => {
        const newHidden = new Set(hiddenRows);
        ids.forEach(id => newHidden.delete(id));
        setHiddenRows(newHidden);
    };

    const getHiddenRowsLabel = (count) => {
        if (count === 1) return `ukryty wiersz`;
        const lastDigit = count % 10;
        const lastTwoDigits = count % 100;

        if (lastDigit > 1 && lastDigit < 5 && (lastTwoDigits < 10 || lastTwoDigits >= 20)) {
            return `ukryte wiersze`;
        }
        return `ukrytych wierszy`;
    };


    const renderRows = () => {
        const visibleItems = [];
        const hiddenCount = hiddenRows.size;


        sortedData.forEach(item => {
            if (!hiddenRows.has(item.id)) {
                visibleItems.push(item);
            }
        });

        const rows = [];


        if (hiddenCount > 0) {
            rows.push(
                <tr key="restore-all" className="bg-blue-50 dark:bg-blue-900/20 border-b border-blue-100 dark:border-blue-800">
                    <td colSpan={headers.length + 1} className="px-6 py-3 text-center">
                        <button
                            onClick={() => setHiddenRows(new Set())}
                            className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center justify-center mx-auto"
                        >
                            <FaEye className="mr-2" />
                            Pokaż {hiddenCount} {getHiddenRowsLabel(hiddenCount)}
                        </button>
                    </td>
                </tr>
            );
        }


        visibleItems.forEach(item => {
            rows.push(
                <tr key={item.id} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="p-4 w-4">
                        <input
                            type="checkbox"
                            checked={selectedRows.has(item.id)}
                            onChange={() => toggleSelect(item.id)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                    </td>
                    {headers.map(header => (
                        <td key={`${item.id}-${header.key}`} className="px-6 py-4 text-gray-900 dark:text-gray-100">
                            {item[header.key]}
                        </td>
                    ))}
                </tr>
            );
        });

        return rows;
    };

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

            <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 border-b dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Dane Tabelaryczne</h3>
                {selectedRows.size > 0 && (
                    <button
                        onClick={collapseSelected}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-4 rounded transition text-sm"
                    >
                        Zwiń zaznaczone ({selectedRows.size})
                    </button>
                )}
            </div>

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            <input
                                type="checkbox"
                                checked={selectedRows.size === sortedData.length && sortedData.length > 0}
                                onChange={toggleSelectAll}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                            />
                        </th>
                        {headers.map((header) => (
                            <th key={header.key} scope="col" className="px-6 py-3">
                                <button
                                    onClick={() => requestSort(header.key)}
                                    className="flex items-center uppercase font-bold hover:text-gray-900 dark:hover:text-white"
                                >
                                    {header.label}
                                    {getSortIcon(header.key)}
                                </button>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
                {footer && (
                    <tfoot>
                        <tr className="font-semibold text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700">
                            <td className="p-4"></td>
                            {headers.map((header, idx) => (
                                <td key={`footer-${idx}`} className="px-6 py-3">
                                    {footer[header.key] || ''}
                                </td>
                            ))}
                        </tr>
                    </tfoot>
                )}
            </table>
        </div>
    );
}
