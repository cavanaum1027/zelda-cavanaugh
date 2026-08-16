import Link from "next/link";
import { PlusRule } from "@/components/Marks";

export default function NotFound() {
  return (
    <section className="relative min-h-[80svh] px-5 pb-16 pt-28 md:px-8 lg:px-10">
      <PlusRule />
      <h1 className="mt-10 text-5xl font-extrabold tracking-tight">404</h1>
      <p className="mt-4 text-white/55">This page does not exist.</p>
      <Link href="/" className="mt-8 inline-block text-sm text-accent">
        + home
      </Link>
    </section>
  );
}
