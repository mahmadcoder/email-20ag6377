import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <>
    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
    <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
    <div className="flex flex-col justify-center gap-8">
    <h1 className="h1-bold">Discover Your Niche: Website Search Made Simple!</h1>
    <p className="p-regular-20 md:p-regular-24">Our powerful search engine scours Google to compile a refined list of relevant sites. Just input your keyword, and dive into a world of curated information. Simplify your research journey-start exploring now!</p>
    <Button size="lg" asChild className="button w-full sm:w-fit">
      <Link href="/dashboard">Get Started</Link>
    </Button>
    </div>
    <Image src="/assets/images/hero.png" width={1000} height={1000} alt="Hero" className="max-h-[70vh] object-contain object-center 2xl:max-h[50vh]" />
    </div>
    </section>
    </>
      );
}
