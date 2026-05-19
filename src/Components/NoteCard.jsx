const NoteCard = ({ title, description, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 border hover:shadow-xl transition duration-300">
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>

        <button
          onClick={onDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
        >
          Delete
        </button>
      </div>

      <p className="text-gray-600 mt-3 whitespace-pre-wrap">
        {description}
      </p>
    </div>
  );
};
export default NoteCard