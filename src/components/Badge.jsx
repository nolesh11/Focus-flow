const badgeValue = {
  low: "bg-green-100 text-green-800",
  medium: "bg-amber-100 text-amber-800",
  high: "bg-red-100 text-red-800",
};

export function Badge({ variant, children }) {
  const currentPriority = badgeValue[variant];
  
  return <p className={`${currentPriority} self-end text-sm capitalize w-fit p-1 rounded-sm`} variant={variant}>{children}</p>;
}
