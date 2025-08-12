import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Nav from "@/components/navbar";
import AuthProvider from "@/components/AuthProvider";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <AuthProvider>
          <Providers>
            <div className="relative flex flex-col h-screen">
              <Nav />
              {/* max-w-7xl container mx-auto */}
              <main className="pt-16 flex-grow">{children}</main>
              <footer className="w-full flex items-center bg-primary justify-center py-3">
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://specshub.ng"
                  title="heroui.com homepage"
                >
                  <span className="text-white">Powered by</span>
                  <p className="text-white">RightSpec</p>
                </Link>
              </footer>
            </div>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}

// import "@/styles/globals.css";
// import { Metadata, Viewport } from "next";
// import { Link } from "@heroui/link";
// import clsx from "clsx";

// import { Providers } from "./providers";

// import { siteConfig } from "@/config/site";
// import { fontSans } from "@/config/fonts";
// import Nav from "@/components/navbar";

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

// export const viewport: Viewport = {
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "white" },
//     { media: "(prefers-color-scheme: dark)", color: "black" },
//   ],
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html suppressHydrationWarning lang="en">
//       <head />
//       <body
//         className={clsx(
//           "min-h-screen text-foreground bg-background font-sans antialiased",
//           fontSans.variable
//         )}
//       >
//         <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
//           <div className="relative flex flex-col h-screen">
//             <Nav />
//             <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
//               {children}
//             </main>
//             <footer className="w-full flex items-center justify-center py-3">
//               <Link
//                 isExternal
//                 className="flex items-center gap-1 text-current"
//                 href="https://heroui.com?utm_source=next-app-template"
//                 title="heroui.com homepage"
//               >
//                 <span className="text-default-600">Powered by</span>
//                 <p className="text-primary">RightSpecs</p>
//               </Link>
//             </footer>
//           </div>
//         </Providers>
//       </body>
//     </html>
//   );
// }
