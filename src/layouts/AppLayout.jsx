import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import AnguillaFlag from "../assets/imgs/anguilla-flag.png";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Revisions", href: "#", icon: "", current: true },
  { name: "Laws", href: "/admin/laws", icon: "", current: false },
  { name: "Regulations", href: "/admin/regulations", icon: "", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AppLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between p-4 border-b">
        <div>
          <Link to="/dashboard">
            <img src={AnguillaFlag} className="w-auto h-8" alt="" />
          </Link>
        </div>
        <div>
          <button className="px-4 py-2 text-sm font-semibold text-white rounded-md bg-cyan-600 hover:bg-cyan-500">
            Log Out
          </button>
        </div>
      </div>
      <div>
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
}
