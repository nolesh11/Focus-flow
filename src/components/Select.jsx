export function Select({ id, options, placeholder, label }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <select id={id} className="border border-border p-3 rounded-sm mt-1">
        <option>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
