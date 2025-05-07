import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";

export default function Register() {
  return (
    <div className="h-screen relative bg-[#eff4f3] font-poppins text-black flex flex-col px-6 pt-10 pb-6">
      {/* Top background shape */}
      <div className="absolute top-0 left-0">
        <img src="/shape.png" alt="shapeicon" className="w-40" />
      </div>

      {/* Centered content */}
      <div className="flex w-full max-w-sm mx-auto  flex-col flex-grow justify-center">
        <h2 className="text-lg font-bold mb-4 text-center">Welcome Back</h2>
        <img src="/login.png" alt="Register" className="w-40 mx-auto mb-6" />

        <Input placeholder="Enter your Email" type="email" />
        <Input placeholder="Enter Password" type="password" />

        <p className="text-cyan-500 text-center mt-2">Forgot password?</p>
      </div>

      {/* Bottom section */}
      <div className="w-full max-w-sm mx-auto  flex flex-col gap-4">
        <div className="w-full">
        <Link href="/dashboard">
          <Button>Register</Button>
        </Link>
      </div>
         
        <p className="text-sm text-center">
          Don’t have an account?{" "}
          <Link href="/register" className="text-cyan-500">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}


