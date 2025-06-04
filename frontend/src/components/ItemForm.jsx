import { useEffect, useState } from "react";

export default function ItemForm({ onSubmit, editingItem }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingItem) {
      setName(editingItem.name);
      setDescription(editingItem.description);
    } else {
      setName("");
      setDescription("");
    }
  }, [editingItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) return;
    onSubmit({ name, description });
    setName("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow-md mb-6"
    >
      <div className="mb-3">
        <label className="block text-sm font-medium">Name</label>
        <input
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium">Description</label>
        <input
          className="w-full border p-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {editingItem ? "Update Item" : "Add Item"}
      </button>
    </form>
  );
}
