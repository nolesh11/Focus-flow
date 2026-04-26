const variants = {
  filled: 'bg-primary text-stone-200 px-4 rounded-sm',
  blank: 'border border-border px-4 py-2 rounded-sm'
}

export function Button({ children, className, variant, ...props }) {
  const currentVariant = variants[variant]
  return (
    <button {...props} className={`cursor-pointer ${className} ${currentVariant}`} variant={variant}>
      {children}
    </button>
  );
}
