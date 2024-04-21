import { ThemeToggler } from "@/components/ThemeToggler";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col text-bold items-center justify-center text-center pt-20">
      <div className="text-5xl text-bold">Hello this is Pratik Mohanty</div>
      <div className="p-10 flex flex-col text-8xl text-bold">
        Welcome To
        <h1 className="p-10 text-10xl">Sticky Notes</h1>
      </div>
    </div>
  );
}
