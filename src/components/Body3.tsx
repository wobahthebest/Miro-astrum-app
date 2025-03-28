import { MoveRight } from "lucide-react";
import { useTranslations } from "next-intl";

const Body3 = () => {
  const t = useTranslations("Body2");
  return (
    <div className="md:flex flex-grid mb-20 gap-20 md:justify-between justify-center space-y-10 items-center">
      <div className="w-full h-full space-y-10">
        <h1 className="text-7xl font-semibold">{t("title")}</h1>
        <p className="text-2xl">{t("paragraph")}</p>
        <p className="flex text-lg text-primary btn-link items-center space-x-2 ">
          <span>Learn more</span>
          <MoveRight />
        </p>
      </div>
      <div className="w-full">
        <img className="object-fill" src={"./hybridwork.png"} alt="img" />
      </div>
    </div>
  );
};
export default Body3;
