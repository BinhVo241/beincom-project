import WrapperLayout from "./WrapperLayout";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <WrapperLayout>{children}</WrapperLayout>;
}
