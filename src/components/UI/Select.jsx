export function Select({ id, options, placeholder, label, ...props }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="capitalize">{label}</label>
      <select id={id} {...props} className="border border-border p-3 rounded-sm mt-1">
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
