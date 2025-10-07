import SideCard from "@/components/SideCard";
import { NavbarBrand, Navbar } from "@heroui/navbar";
import { Link } from "@heroui/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col xl:flex-row md:overflow-hidden p-2 bg-[#f0f5fc]">
      <div className="flex-grow md:overflow-y-auto">
        <Navbar className="bg-transparent">
          <NavbarBrand>
            <Link href="/">
              <p className="font-bold text-inherit text-xl">SkillGuide AI</p>
            </Link>
          </NavbarBrand>
        </Navbar>
        <main className="p-6 md:p-12">{children}</main>
      </div>
      <div className="w-full flex items-center justify-center xl:w-[690px] bg-blue-500 rounded-xl">
        <SideCard />
      </div>
    </div>
  );
}
