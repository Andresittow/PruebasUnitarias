import { useState } from "react";

interface SearchListProps {
  items: string[];
}

export default function SearchList({ items }: SearchListProps) {
  const [query, setQuery] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl shadow text-center max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Buscador de Nombres</h2>
      <input
        type="text"
        placeholder="Escribe un nombre..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700"
      />
      <ul className="list-disc pl-5 text-left">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <li key={item} className="py-1">
              {item}
            </li>
          ))
        ) : (
          <li className="text-red-500 font-medium">No encontrado</li>
        )}
      </ul>
    </div>
  );
}
