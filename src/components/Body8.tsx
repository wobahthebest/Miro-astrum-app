import { useTranslations } from "next-intl";

const Body8 = () => {
  const t = useTranslations("Body6");
  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="text-center text-5xl font-semibold mb-8 p-10 max-w-xl">
        {t("title")}
      </h1>
      <div className="grid grid-cols-3 px-10 space-y-10 gap-4">
        <div className="text-center space-y-5">
          <h1 className="text-6xl">ISO</h1>
          <p className="text-lg font-medium">{t("paragraph1")}</p>
        </div>
        <div className="text-center space-y-5">
          <h1 className="text-6xl">#1</h1>
          <p className="text-lg font-medium">{t("paragraph2")}</p>
        </div>
        <div className="text-center space-y-5">
          <h1 className="text-6xl">99%</h1>
          <p className="text-lg font-medium">{t("paragraph3")}</p>
        </div>
        <div className="text-center space-y-5">
          <h1 className="text-6xl">1.000+</h1>
          <p className="text-lg font-medium">{t("paragraph4")}</p>
        </div>
        <div className="text-center space-y-5">
          <h1 className="text-6xl">45M+</h1>
          <p className="text-lg font-medium">{t("paragraph5")}</p>
        </div>
        <div className="text-center space-y-5">
          <h1 className="text-6xl">100+</h1>
          <p className="text-lg font-medium">{t("paragraph6")}</p>
        </div>
      </div>
    </div>
  );
};
export default Body8;
