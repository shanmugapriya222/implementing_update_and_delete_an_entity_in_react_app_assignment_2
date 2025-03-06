const Item = ({ item, onDelete }) => {
    return (
        <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg shadow-md mb-2">
            <span className="text-lg font-semibold">{item.name}</span>
            <button 
                onClick={() => onDelete(item.id)} 
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700"
            >
                Delete
            </button>
        </div>
    );
};

export default Item;