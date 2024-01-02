export default function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="p-2 text-sm text-black rounded-md bg-[#E7EFE9] mt-2 block"
    >
      {children}
    </button>
  );
}
