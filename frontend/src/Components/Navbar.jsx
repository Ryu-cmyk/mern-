import React from "react";
import { Link } from "react-router";
import {PlusIcon} from "lucide-react"

const Navbar = () => {
  return <header className="bg-base-300 border-b border-cyan-500 border-base-content/10  ">
    <div className="mx-auto max-w-6xl p-4  ">
      <div className="flex items-center justify-between ">
        <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">Think</h1>
        <div className="flex items-center ">
        <Link to ={"/create"} className="btn btn-primary rounded-3xl">
         <PlusIcon className ="size-5" /> 
         <span>New note</span>
        </Link>

        </div>

      </div>

    </div>
  </header>
};

export default Navbar;
