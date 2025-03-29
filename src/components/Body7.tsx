import { Check, MoveRight } from "lucide-react";
import { useTranslations } from "next-intl";

const Body7 = () => {
  const t = useTranslations("Body5");

  return (
    <div className="space-y-10 mb-20">
      <h1 className="text-6xl font-semibold">{t("title")}</h1>
      <div className="grid grid-cols-7 gap-4">
        <p className=" btn">{t("NavBar.UX-&-Design")}</p>
        <p className=" btn">{t("NavBar.marketing")}</p>
        <p className=" btn">{t("NavBar.product-management")}</p>
        <p className=" btn">{t("NavBar.engineering")}</p>
        <p className=" btn">{t("NavBar.consultants")}</p>
        <p className=" btn">{t("NavBar.agile-coaches")}</p>
        <p className=" btn">{t("NavBar.sales")}</p>
      </div>
      <div className="md:flex flex-grid  gap-20 md:justify-between justify-center space-y-10 items-center">
        <div className="w-full h-full space-y-15">
          <div className="space-y-5">
            <p className="text-2xl text-zinc-600 flex items-center space-x-2">
              <Check />
              <span>{t("paragraph1")}</span>
            </p>
            <p className="text-2xl text-zinc-600 flex items-center space-x-2">
              <Check />
              <span>{t("paragraph2")}</span>
            </p>
            <p className="text-2xl text-zinc-600 flex mb-10 items-center space-x-2">
              <Check />
              <span>{t("paragraph3")}</span>
            </p>

            <p className="flex  text-lg text-primary btn-link items-center space-x-2 ">
              <span>{t("link")}</span>
              <MoveRight />
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-2xl text-zinc-600">{t("paragraph4")}</p>
            <img src={"./logosdesign.png"} alt="img" />
          </div>
        </div>
        <div className="w-full">
          <img src={"./uxdesignwithoutshadow.png"} alt="img" />
        </div>
      </div>
    </div>
  );
};
export default Body7;
