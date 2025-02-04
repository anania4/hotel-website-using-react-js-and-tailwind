/* eslint-disable no-unused-vars */
import React, { useContext } from "react";

import { Menu } from "@headlessui/react";
import { Fragment } from 'react';
import { BsChevronDown } from "react-icons/bs";

const KidsDropdown = () => {
  const lis = [
    { name: "0 kids" },
    { name: "1 kids" },
    { name: "2 kids" },
    { name: "3 kids" },
  ];
  return (
    <Menu as="div" className="w-full h-full bg-white relative">
          <div>
            <Menu.Button className="w-full h-full flex items-center justify-between px-8">
              Kids
              <BsChevronDown className="text-base text-accent-hover"/>
            </Menu.Button>
          </div>
      <Menu.Items as="ul" className="bg-white absolute w-full flex flex-col z-40">
        {lis.map((li,index) => {
          return(
            <Menu.Item as="li" className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer" key={index}>
              {li.name}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default KidsDropdown;
