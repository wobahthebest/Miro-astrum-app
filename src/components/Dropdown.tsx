"use client";

import { Globe } from "lucide-react";
import { useRouter } from "next/navigation";

const Dropdown = () => {
  const router = useRouter();

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-circle">
        <Globe />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-20 p-2 shadow-sm"
      >
        <li onClick={() => router.replace("uz")}>
          <a>uz</a>
        </li>
        <li onClick={() => router.replace("en")}>
          <a>en</a>
        </li>
      </ul>
    </div>
  );
};
export default Dropdown;
