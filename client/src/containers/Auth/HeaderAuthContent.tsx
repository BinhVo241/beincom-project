"use client";

interface IHeaderAuthContent {
  title: string;
  des: string;
}

const HeaderAuthContent: React.FC<IHeaderAuthContent> = ({ title, des }) => {
  return (
    <div className="flex w-full flex-col items-center gap-1 p-6 xs:p-12 xs:pb-6">
      <div className="text-lg font-bold text-neutral-80 xs:text-2xl">
        {title}
      </div>
      <div className="mt-1 text-center text-sm font-normal text-neutral-60">
        {des}
      </div>
    </div>
  );
};

export default HeaderAuthContent;
