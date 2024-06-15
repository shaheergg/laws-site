import React, { useState } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import SideNav from "../components/SideNav";
import Drawer from "../components/Drawer";
import MobileNav from "../components/MobileNav";

function RootLayout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Navigation />
      <MobileNav setOpen={setOpen} />
      <HeroSection />
      <Drawer open={open} setOpen={setOpen} />
      <section className="flex px-8 py-4 mx-auto max-w-7xl lg:px-4">
        <div className="hidden border-r md:block">
          <SideNav />
        </div>
        <main className="px-12 py-4 h-[100vh] overflow-y-auto flex-1">
          {children}
        </main>
      </section>
    </div>
  );
}

export default RootLayout;
