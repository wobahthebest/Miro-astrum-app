import { MoveRight } from "lucide-react";
import { useTranslations } from "next-intl";

const Body6 = () => {
  const t = useTranslations("Body4");

  return (
    <div className="space-y-10 mb-20">
      <h1 className="text-6xl font-semibold">{t("title")}</h1>
      <div className="grid grid-cols-7 gap-4">
        <p className=" btn">{t("NavBar.brainstorming")}</p>
        <p className=" btn">{t("NavBar.diagramming")}</p>
        <p className=" btn">{t("NavBar.meetings-Workshops")}</p>
        <p className=" btn">{t("NavBar.scrum-Events")}</p>
        <p className=" btn">{t("NavBar.mapping")}</p>
        <p className=" btn">{t("NavBar.research-Design")}</p>
        <p className=" btn">{t("NavBar.strategic-Planning")}</p>
      </div>
      <div className="md:flex flex-grid  gap-20 md:justify-between justify-center space-y-10 items-center">
        <div className="w-full h-full space-y-15">
          <h1 className="text-4xl font-semibold">{t("sub-title")}</h1>
          <p className="text-2xl">{t("paragraph")}</p>
          <p className="flex text-lg text-primary btn-link items-center space-x-2 ">
            <span>{t("link")}</span>
            <MoveRight />
          </p>
        </div>
        <div className="w-full">
          <img
            className="object-fill"
            src={"./Brainstormwithoutshadow.png"}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};
export default Body6;
