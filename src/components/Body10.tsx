import { MoveRight } from "lucide-react";
import { useTranslations } from "next-intl";

const Body10 = () => {
  const t = useTranslations("Body8");
  return (
    <div className="flex text-white items-center justify-center w-full p-10 bg-info-content rounded-3xl h-120">
      <div className="space-y-5 text-center flex flex-col items-center">
        <h1 className="text-5xl font-semibold">{t("title")}</h1>
        <p className="font-medium text-zinc-300 text-lg tracking-wider">
          {t("paragraph1")}
        </p>
        <p className="font-medium underline text-zinc-300 text-lg tracking-wider">
          {t("paragraph2")}
        </p>
        <p className="flex text-lg mt-8 btn-xl text-white font-semibold btn btn-info items-center space-x-2 ">
          <span>Learn more</span>
          <MoveRight />
        </p>
      </div>
    </div>
  );
};
export default Body10;
