import Button from "@/components/Button";
import Link from "next/link";

export default function Onboarding() {
  return (
    <div className="h-screen bg-[#eff4f3] font-poppins text-black flex flex-col px-6 pt-10 pb-6 relative">
      <div className="absolute top-0 left-0">
        <img src="/shape.png" alt="shapeicon" className="w-40" />
      </div>

      
      <div className="flex flex-col flex-grow justify-center items-center text-center w-full max-w-md mx-auto mt-12">
        <img src="/onboard.png" alt="Onboarding" className="w-40 mb-6" />
        <h1 className="text-xl font-bold mb-2">Gets things with TODOs</h1>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet<br />
          consectetur. Eget sit nec et<br />
          euismod. Consequat urna<br />
          quam felis interdum quisque.<br />
          Malesuada adipiscing tristique<br />
          ut eget sed.
        </p>
      </div>

      
      <div className="w-full max-w-sm mx-auto flex flex-col gap-4">
        <Link href="/register">
          <Button>Get Started</Button>
        </Link>
      </div>
    </div>
  );
}