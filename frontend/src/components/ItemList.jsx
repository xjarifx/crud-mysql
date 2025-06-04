export default function ItemList({ items, onEdit, onDelete }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white p-4 rounded shadow flex justify-between items-center"
        >
          <div>
            <h2 className="text-lg font-bold">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => onEdit(item)}
              className="text-blue-500 hover:underline"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(item.id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
