export default function AccountInput({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="p-3 px-5 border-1 border-neutral-800 rounded-sm focus:border-neutral-600 outline-0"
    />
  );
}
