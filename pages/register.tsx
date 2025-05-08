import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";

export default function Register() {
  return (
    <div className="h-screen relative bg-[#eff4f3] font-poppins text-black flex flex-col px-6 pt-10 pb-6">
      {/* Background shape */}
      <div className="absolute top-0 left-0">
        <img src="/shape.png" alt="shapeicon" className="w-40" />
      </div>

      {/* Form section */}
      <div className="flex w-full max-w-sm mx-auto flex-col flex-grow justify-center">
        <h2 className="text-lg font-bold mb-4 text-center">Welcome to Onboard!</h2>
        <p className="text-center text-black/80 mb-6">
          Let’s help to meet up your<br /> tasks.
        </p>

        <Input placeholder="Enter your full name" />
        <Input placeholder="Enter your Email" type="email" />
        <Input placeholder="Enter Password" type="password" />
        <Input placeholder="Confirm password" type="password" />
      </div>

      {/* Bottom fixed section */}
      <div className="w-full max-w-sm mx-auto flex flex-col gap-4">
        <Link href="/login">
          <Button>Register</Button>
        </Link>

        <p className="text-sm text-center text-black/80">
          Already have an account?{" "}
          <Link href="/login" className="text-cyan-500">Sign In</Link>
        </p>
      </div>
    </div>
  );
}


