export default function SearchBar({ onKeyDown }) {
  return (
    <div>
      <input type="text" onKeyDown={onKeyDown} />
    </div>
  );
}
