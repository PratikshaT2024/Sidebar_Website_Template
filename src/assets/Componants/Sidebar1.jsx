
"use client";

import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { FaInstagram } from 'react-icons/fa'; 
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';  




function Sidebar1() {
  return (
    <div  >
        <Sidebar aria-label="Sidebar with content separator example   " >
      <Sidebar.Items className="">
        <Sidebar.ItemGroup className=" bg-white">
          <Sidebar.Item href="#" icon={HiChartPie} className="text-[(#708090)] 
          ">
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Kanban
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup className=" flex bg-white">
         <Sidebar.Item href="#" icon={FaFacebook} className="mt-2 mb-3"></Sidebar.Item>
          <Sidebar.Item href="#" icon={FaInstagram} className="mb-3" > </Sidebar.Item>
          <Sidebar.Item href="#" icon={FaYoutube } className="mb-3"> </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
  );
}
export default Sidebar1
