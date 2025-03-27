"use client";

import { useRouter } from "next/navigation";

const Dropdown = () => {
  const router = useRouter();

  return (
    <div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          Click
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li onClick={() => router.replace("uz")}>
            <a>uz</a>
          </li>
          <li onClick={() => router.replace("en")}>
            <a>en</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Dropdown;
