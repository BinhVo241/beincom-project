export default function Newsfeed({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start justify-center gap-x-6 px-5 xl:gap-x-12 xl:px-11 pt-0">
      {children}
    </div>
  );
}
