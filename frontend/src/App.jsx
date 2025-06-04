import { useEffect, useState } from "react";
import { getItems, createItem, updateItem, deleteItem } from "./api.js";
import ItemForm from "./components/ItemForm.jsx";
import ItemList from "./components/ItemList.jsx";

function App() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const loadItems = async () => {
    const res = await getItems();
    setItems(res.data.results);
  };

  useEffect(() => {
    loadItems();
  }, []);

  const handleSubmit = async (item) => {
    if (editingItem) {
      await updateItem(editingItem.id, item);
    } else {
      await createItem(item);
    }
    setEditingItem(null);
    loadItems();
  };

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    loadItems();
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Item Manager</h1>
        <ItemForm onSubmit={handleSubmit} editingItem={editingItem} />
        <ItemList items={items} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
