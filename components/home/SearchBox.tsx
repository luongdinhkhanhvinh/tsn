interface SearchBoxProps {
  placeholder?: string;
}

export default function SearchBox({ placeholder = 'Tìm kiếm...' }: SearchBoxProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <input
        type="search"
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
      />
    </div>
  );
}
