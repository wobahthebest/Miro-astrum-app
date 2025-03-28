import { MoveRight } from "lucide-react";
import { useTranslations } from "next-intl";

const Body1 = () => {
  const t = useTranslations("HeroPage");

  return (
    <div className="md:flex flex-grid mb-20 md:justify-between justify-center space-y-10 items-center">
      <div className="w-full h-full space-y-10">
        <h1 className="text-7xl font-semibold">{t("title")}</h1>
        <p className="text-2xl">{t("paragraph")}</p>
        <div className="space-y-2">
          <div className="space-x-4 flex w-full max-w-lg">
            <input
              type="email"
              className="input -z-10 border-info input-lg flex-1"
              placeholder={t("input")}
            />

            <p className="btn rounded-4xl flex-1 flex items-center border-0 btn-lg bg-primary">
              <span>Sign up free</span> <MoveRight />
            </p>
          </div>
          <p className="text-zinc-500 ps-2">{t("subParagraph")}</p>
        </div>
        <img src="./div.png" alt="" />
      </div>
      <div className="w-full">
        <img className="object-fill" src={"./Hero.png"} alt="img" />
      </div>
    </div>
  );
};
export default Body1;
