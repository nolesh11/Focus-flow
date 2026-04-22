import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Modal({ open, children }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog
      ref={dialog}
      className="m-auto w-1/3 backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {open ? children : null}
    </dialog>,
    document.getElementById("dialog"),
  );
}
