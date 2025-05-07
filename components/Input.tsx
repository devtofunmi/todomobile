interface InputProps {
    placeholder: string;
    type?: string;
    [key: string]: any;
  }
  
  export default function Input({ placeholder, type = "text", ...props }: InputProps) {
    return (
      <div className="mb-4">
        <input
          type={type}
          placeholder={placeholder}
          className="w-full rounded-full bg-white   px-6 py-4 text-sm placeholder:text-sm placeholder-black/80 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          {...props}
        />
      </div>
    );
  }
  
  