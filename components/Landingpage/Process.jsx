"use client";
import React from "react";
import Image from "next/image";

const Process = () => {
  return (
    <section
      style={{ backgroundImage: "url(/process.png)" }}
      className="relative h-[30vh] md:h-[50vh] lg:h-[70vh] w-full bg-cover bg-center bg-fixed md:bg-contain md:bg-top"
    />
  );
};

export default Process;
