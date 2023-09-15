"use client";
import React, { useState } from "react";
import Image from "next/image";

const Password = ({ nameLabel, name }) => {
  const [openEye, setOpenEye] = useState(false);

  const ojo = {
    open: "/Images/password/open.png",
    close: "/Images/password/close.png",
  };

  return (
    <div className="my-8">
      <label
        className=" font-dmsans font-medium"
        htmlFor={name}
      >
        {" "}
        {nameLabel}{" "}
      </label>
      <div className="relative">
        <input
          className="w-full border-b dark:border-secondaryWhite rounded-lg text-black dark:bg-darkNav dark:text-secondaryWhite border-secondaryBlack bg-slate-50 px-2 h-10"
          type={openEye ? "text" : "password"}
          name={name}
          id={name}
          required="required"
        />
        <Image
          width={25}
          height={25}
          src={openEye ? ojo.open : ojo.close}
          alt="image"
          onClick={() => setOpenEye(!openEye)}
          className="inline-block absolute right-4 top-2 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Password;
