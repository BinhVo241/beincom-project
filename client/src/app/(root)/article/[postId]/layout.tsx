export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start justify-center gap-x-6 px-5 pt-6 xl:gap-x-12 xl:px-11">
      {children}
    </div>
  );
}
