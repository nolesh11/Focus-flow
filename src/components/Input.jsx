export function Input({ id, label, textarea, ...props }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1">{label}</label>
      {textarea ? (
        <textarea {...props} className="border border-border rounded-sm mb-2 p-3" />
      ) : (
        <input {...props} id={id} className="border border-border mb-2 rounded-sm p-3" />
      )}
    </div>
  );
}
