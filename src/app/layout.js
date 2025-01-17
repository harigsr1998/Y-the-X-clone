import "./globals.css";

import DynamicHeader from "@/components/DynamicHeader";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        <div className="flex h-full flex-col justify-between xl:w-1/4 [&>*]:bg-black">
          <div className="flex h-[52px] shrink-0 grow-0 justify-between">
            <DynamicHeader />
          </div>
          <div className="grow overflow-y-scroll">{children}</div>
          <div className="flex shrink-0 grow-0 justify-around border-t">
            <NavBar />
          </div>
        </div>
        <div className="hidden h-screen items-center justify-center text-2xl xl:flex xl:w-3/4">
          View on mobile for best experience
        </div>
      </body>
    </html>
  );
}
