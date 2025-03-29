import Body1 from "@/components/Body1";
import Body10 from "@/components/Body10";
import Body2 from "@/components/Body2";
import Body3 from "@/components/Body3";
import Body4 from "@/components/Body4";
import Body5 from "@/components/Body5";
import Body6 from "@/components/Body6";
import Body7 from "@/components/Body7";
import Body8 from "@/components/Body8";
import Body9 from "@/components/Body9";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full mx-auto max-w-6xl my-14">
        <Body1 />
        <div className="mb-20">
          <p className="text-center text-zinc-500">Trusted by 45M+ users</p>
          <div className="grid-cols-5 grid  gap-4 p-6">
            <img src="./Walmart.png" className="mx-auto" alt="img" />
            <img src="./cisco.png" className="mx-auto" alt="img" />
            <img src="./volvo.png" className="mx-auto" alt="img" />
            <img src="./deloitte.png" className="mx-auto" alt="img" />
            <img src="./okta.png" className="mx-auto" alt="img" />
          </div>
        </div>
        <Body2 />
        <Body3 />
        <Body4 />
        <Body5 />
        <Body6 />
        <Body7 />
        <div className="bg-warning p-5 mb-10">
          <Body8 />
        </div>
        <Body9 />
        <Body10 />
      </div>
    </div>
  );
};
export default page;
