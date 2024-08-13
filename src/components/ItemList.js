import React, { useState, useEffect } from 'react';
import { getItems, deleteItem } from '../api';

function ItemList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getItems();
            setItems(response.data);
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        await deleteItem(id);
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Item List</h1>
            <ul className="list-disc list-inside">
                {items.map(item => (
                    <li key={item.id} className="flex items-center justify-between p-2 border-b border-gray-200">
                        <span className="text-lg">{item.name}</span>
                        <button
                            onClick={() => handleDelete(item.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ItemList;
