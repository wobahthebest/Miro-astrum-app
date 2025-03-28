import { MoveRight } from "lucide-react";
import { useTranslations } from "next-intl";

const Body2 = () => {
  const t = useTranslations("Body1");
  return (
    <div className="w-full flex flex-col items-center mb-20">
      <h1 className="text-7xl text-center font-semibold mb-15 max-w-3xl">
        {t("title")}
      </h1>
      <div className="grid grid-cols-3 gap-5 mb-5 text-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-semibold">{t("sub-title1")}</h1>
          <p className="text-xl text-zinc-700">{t("paragraph1")}</p>
        </div>
        <div className="space-y-6">
          <h1 className="text-5xl font-semibold">{t("sub-title2")}</h1>
          <p className="text-xl text-zinc-700">{t("paragraph2")}</p>
        </div>
        <div className="space-y-6">
          <h1 className="text-5xl font-semibold">{t("sub-title3")}</h1>
          <p className="text-xl text-zinc-700">{t("paragraph3")}</p>
        </div>
      </div>
      <p className="btn rounded-4xl flex items-center border-0 btn-lg bg-primary">
        <span>Sign up free</span> <MoveRight />
      </p>
    </div>
  );
};
export default Body2;
