"use client";

import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50 bg-white flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <img src="/logo-whole-notes.png" alt="logo" height={60} width={250} />
        </Link>
      </div>
      <div
        onClick={() => router.push("/checkout")}
        className="relative space-x-4"
      >
        <div className="absolute top-0 right-0 bg-yellow-300 rounded-full px-1">
          <span className="text-gray-400">4</span>
        </div>
        <ShoppingCartIcon className="h-12 w-12 text-blue-300" />
      </div>
    </header>
  );
}

export default Header;
