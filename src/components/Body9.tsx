import { MoveRight } from "lucide-react";
import { useTranslations } from "next-intl";

const Body9 = () => {
  const t = useTranslations("Body7");
  return (
    <div className="flex flex-col items-center p-10 mb-10">
      <div className="space-y-7 mb-10">
        <h1 className=" text-5xl text-center font-semibold">{t("title")}</h1>
        <button className="btn btn-outline mx-auto flex items-center space-x-2 btn-info btn-xl">
          <span>{t("link")}</span>
          <MoveRight />
        </button>
      </div>
      <div className="p-10 grid grid-cols-3 gap-4">
        <div className="space-y-10 px-6">
          <h1 className="text-6xl font-semibold">{t("sub-title1")}</h1>
          <p className="text-lg text-zinc-600 font-medium">{t("paragraph1")}</p>
          <div className="flex items-center mt-auto space-x-4">
            <div className="avatar -z-10">
              <div className="w-14 rounded-full">
                <img src="./Mask1.png" />
              </div>
            </div>
            <div>
              <h1 className="text-lg font-semibold">Roxanne Mustafa</h1>
              <p className="text-sm text-zinc-500">
                Design Team Lead at VMware
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-10 px-6">
          <h1 className="text-6xl font-semibold">{t("sub-title2")}</h1>
          <p className="text-lg text-zinc-600 font-medium">{t("paragraph2")}</p>
          <div className="flex items-center space-x-4">
            <div className="avatar -z-10">
              <div className="w-14 rounded-full">
                <img src="./div (1).png" />
              </div>
            </div>
            <div>
              <h1 className="text-lg font-semibold">Jane Ashley</h1>
              <p className="text-sm text-zinc-500">
                Head of Design at DocuSign
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-10 px-6">
          <h1 className="text-6xl font-semibold">{t("sub-title1")}</h1>
          <p className="text-lg text-zinc-600 font-medium">{t("paragraph1")}</p>
          <div className="flex items-center mt-auto space-x-4">
            <div className="avatar -z-10  ">
              <div className="w-14 rounded-full">
                <img src="./Mask2.png" />
              </div>
            </div>
            <div>
              <h1 className="text-lg font-semibold">Laura Baird</h1>
              <p className="text-sm text-zinc-500">
                Associate Design Director at frog
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body9;
