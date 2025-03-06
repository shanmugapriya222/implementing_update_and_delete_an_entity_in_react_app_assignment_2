import { useState, useEffect } from "react";
import Item from "./Item";

const API_URI = `https://${import.meta.env.VITE_API_URI}/doors`;

const ItemList = () => {
    const [items, setItems] = useState([]);

    // Fetch items from API when the component mounts
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(API_URI);
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        };

        fetchItems();
    }, []);

    // Handle delete functionality
    const handleDelete = async (id) => {
        try {
            await fetch(`${API_URI}/${id}`, { method: "DELETE" });

            // Update state by removing the deleted item
            setItems((prevItems) => prevItems.filter((item) => item.id !== id));
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4 text-center">Doors List</h1>
            {items.length > 0 ? (
                items.map((item) => (
                    <Item key={item.id} item={item} onDelete={handleDelete} />
                ))
            ) : (
                <p className="text-center text-gray-500">No items available.</p>
            )}
        </div>
    );
};

export default ItemList;