"use client";
import Link from "next/link";

interface IFooterAuthContent {
  title: string;
  linkName: string;
  path: string;
}

const FooterAuthContent: React.FC<IFooterAuthContent> = ({
  title,
  linkName,
  path,
}) => {
  return (
    <div className="w-full p-6 xs:p-12 xs:pt-6">
      <div className="w-full text-center text-sm text-neutral-60">
        {title}
        <Link href={path} className="font-medium text-blue-50 hover:underline">
          {linkName}
        </Link>
      </div>
    </div>
  );
};

export default FooterAuthContent;
