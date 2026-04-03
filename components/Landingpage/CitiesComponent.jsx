"use client";
import Link from "next/link";
import { serviceLocations } from "@/Data";

const CitesKeyword = () => {
  return (
    <div className="px-3 overflow-hidden mb-10 md:px-8 lg:px-26 mt-6">
      <h2 className="text-3xl  md:text-5xl font-bold md:my-12 mb-8 ">
        Our Supply <span className="text-[#E7000B]">Network</span>
      </h2>
      <div className="flex gap-2 flex-wrap ">
        {serviceLocations?.map(({ href, label, id }) => {
          return (
            <Link
              href={href}
              key={id}
              className="hover:font-bold hover:underline"
            >
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CitesKeyword;
