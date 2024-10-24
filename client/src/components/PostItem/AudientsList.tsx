"use client";

import Link from "next/link";
import React from "react";

export interface IPostItemProps {
  group: any;
  showFull?: boolean;
}

const AudientsList: React.FC<IPostItemProps> = ({ showFull }) => {
  return (
    <div className="flex w-full overflow-hidden whitespace-nowrap ml-1 font-semibold text-neutral-60">
      <Link
        href=""
        className="overflow-hidden text-ellipsis inline cursor-pointer hover:underline hover:text-current"
      >
        BIC - NIỀM TIN x LAN TỎA
      </Link>
      <span className="whitespace-break-spaces last:hidden">, </span>
      {!showFull && <span className="w-full cursor-pointer">+1 others</span>}
      {showFull && (
        <span className="w-full cursor-pointer">
          BIC Token Launch Agreement (eKYC)
        </span>
      )}
    </div>
  );
};

export default AudientsList;
