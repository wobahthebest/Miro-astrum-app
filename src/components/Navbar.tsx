import { useTranslations } from "next-intl";
import Dropdown from "./Dropdown";
import { ArrowBigDownDash, MoveRight } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const t = useTranslations("NavBar");

  return (
    <div className="w-full sticky bg-zinc-50  text-info-content top-0 border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex-grid md:flex justify-between items-center h-28 md:h-20">
          <div className="flex space-x-4 items-center">
            <Link href={"/"}>
              <h1 className="text-4xl">MIRO</h1>
            </Link>
            <div className="dropdown  dropdown-start">
              <div
                tabIndex={0}
                role="button"
                className="flex space-x-2 btn rounded-none"
              >
                {t("product")} <ArrowBigDownDash />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-start">
              <div
                tabIndex={0}
                role="button"
                className="flex space-x-2 btn rounded-none"
              >
                {t("solutions")} <ArrowBigDownDash />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-start">
              <div
                tabIndex={0}
                role="button"
                className="flex space-x-2 btn rounded-none"
              >
                {t("resources")} <ArrowBigDownDash />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
            <p className="btn-link cursor-pointer">{t("enterprise")}</p>
            <p className="btn-link cursor-pointer">{t("pricing")}</p>
          </div>
          <div className="flex items-center space-x-4">
            <Dropdown />
            <p className="btn-link cursor-pointer">{t("Contact-Sales")}</p>
            <p className="btn-link cursor-pointer">login</p>
            <p className="btn rounded-4xl flex items-center border-0 btn-md bg-primary">
              <span>Sign up free</span> <MoveRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
