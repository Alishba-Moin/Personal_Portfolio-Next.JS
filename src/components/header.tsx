import Link from "next/link";
import { Button } from "./ui/button";
import Navbar from "./nav";
import MobileNav from "./mobileNav";

export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
            <h1 className="font-semibold text-4xl">Alishba's</h1></Link>


            <div className="hidden xl:flex items-center gap-8">
            <Navbar/>
                <Link href="/contact">
                <Button>Hire me</Button></Link>
            </div>


            <div className="xl:hidden">
              <MobileNav/>
            </div>
        </div>
    </header>
  )
}

