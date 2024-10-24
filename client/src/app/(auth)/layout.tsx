import background from "@/assets/images/background.webp";
import logo from "@/assets/images/logo.webp";
import Icon from "@/components/Icon";
import dynamic from "next/dynamic";
import Image from "next/image";
// import WrapperAuthLayout from "./WrapperAuthLayout";
const WrapperAuthLayout = dynamic(
  () => import("@/app/(auth)/WrapperAuthLayout"),
  { ssr: false }
);

const ContentDataLeft = [
  {
    title: "Social Community Platform",
    des: "Beincom is the platform for building and engaging with communities.",
  },
  {
    title: "Always Reach",
    des: "Contents created by communities are always distributed to all members' newsfeeds.",
  },
  {
    title: "Quality Content",
    des: "Read & Write with quality and earn rewards for each post.",
  },
  {
    title: "Security",
    des: "Rigorous account verification and security mechanisms using Web3 (Blockchain) technology.",
  },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative h-dvh w-screen overflow-auto overflow-x-hidden">
      <div className="fixed inset-0 -z-1">
        <Image
          src={background}
          alt=""
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            inset: 0,
            color: "transparent",
          }}
        />
      </div>
      <div className="h-dvh min-h-full w-full overflow-auto overflow-x-hidden p-8 flex-center xs:h-auto">
        <div className="mr-8 hidden w-[31.25rem] space-y-6 lg:mr-31 lg:block">
          <Image
            src={logo}
            alt=""
            width={174}
            style={{ color: "transparent" }}
          />
          {ContentDataLeft.map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <Icon name="login_check_icon" alt="check icon" />
              <div className="space-y-1">
                <div className="text-base font-semibold text-white">
                  {item.title}
                </div>
                <div className="text-sm font-normal text-white">{item.des}</div>
              </div>
            </div>
          ))}
        </div>
        <WrapperAuthLayout>{children}</WrapperAuthLayout>
      </div>
    </div>
  );
}
