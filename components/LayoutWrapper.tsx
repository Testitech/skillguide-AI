"use client";

import { usePathname } from "next/navigation";
import Nav from "@/components/navbar";
import { Link } from "@heroui/link";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const noLayoutPages = ["/auth/login", "/auth/signup"]; // pages without Nav & Footer

  const shouldHideLayout = noLayoutPages.includes(pathname);

  return (
    <div className="relative flex flex-col min-h-screen bg-slate-50">
      {!shouldHideLayout && <Nav />}
      <main className={shouldHideLayout ? "" : "pt-16 flex-grow"}>
        {children}
      </main>
      {!shouldHideLayout && (
        <footer className="w-full flex items-center bg-primary justify-center py-3">
          <Link
            isExternal
            className="flex items-center gap-1 text-current"
            href="https://specshub.ng"
          >
            <span className="text-white">Powered by</span>
            <p className="text-white">RightSpec</p>
          </Link>
        </footer>
      )}
    </div>
  );
}
