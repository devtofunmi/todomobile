import Button from "@/components/Button";
import Link from "next/link";

export default function Onboarding() {
  return (
    <div className="h-screen w-full font-poppins bg-[#eff4f3] flex flex-col items-center px-6 pt-10 pb-6 relative">
      <div className="absolute top-0 left-0">
        <img src="/shape.png" alt="shapeicon" className="w-40" />
      </div>

      <div className="flex flex-col flex-grow items-center justify-center text-center">
        <img src="/onboard.png" alt="Onboarding" className="w-40 mb-6" />
        <h1 className="text-xl mt-10 font-bold font-poppins mb-2 text-black">
          Gets things with TODOs
        </h1>
        <p className="text-gray-600 font-poppins mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet<br />
          consectetur. Eget sit nec et<br />
          euismod. Consequat urna<br />
          quam felis interdum quisque.<br />
          Malesuada adipiscing tristique<br />
          ut eget sed.
        </p>
      </div>

      <div className="w-full">
        <Link href="/register">
          <Button>Get Started</Button>
        </Link>
      </div>
    </div>
  );
}