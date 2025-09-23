import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchListProps {
  items: string[];
}

export default function SearchList({ items }: SearchListProps) {
  const [query, setQuery] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600 dark:text-blue-400">
        Buscador en Lista
      </h2>
      <div className="flex items-center border rounded-lg overflow-hidden mb-4 bg-slate-50 dark:bg-slate-900">
        <FaSearch className="mx-2 text-gray-500 dark:text-gray-400" />
        <input
          type="text"
          placeholder="Escribe un nombre..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 bg-transparent focus:outline-none"
        />
      </div>
      <ul className="divide-y divide-gray-200 dark:divide-slate-700 text-left">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <li key={item} className="py-2 px-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded">
              {item}
            </li>
          ))
        ) : (
          <li className="text-red-500 font-medium text-center py-2">
            No encontrado
          </li>
        )}
      </ul>
    </div>
  );
}

