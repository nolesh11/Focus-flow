import { AlignHorizontalJustifyCenter } from "lucide-react";

export function Header() {
  return (
    <header className="px-12 py-8 flex justify-between">
      <div className="self-center">
        <AlignHorizontalJustifyCenter size={40} className="text-text-muted" />
      </div>
      <div>
        <h1 className="text-3xl text-text">Focus flow</h1>
        <p className="text-text-muted">
          FocusFlow is a study productivity application
        </p>
      </div>
    </header>
  );
}
