"use client";

import { Link } from "@heroui/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "AI Guidance", href: "/guidance" },
    { name: "Profile", href: "/profile" },
    { name: "Login", href: "/auth/login" },
    { name: "Sign Up", href: "/auth/signup" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <Navbar
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      className="pt-4"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarBrand>
        <Link href="/">
          <p className="font-bold text-inherit text-xl">SkillGuide AI</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        {menuItems.slice(0, 3).map(({ name, href }) => (
          <NavbarItem key={href} isActive={isActive(href)}>
            <Link
              href={href}
              className={clsx("text-foreground", {
                "text-primary font-semibold": isActive(href),
              })}
            >
              {name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem>
          <Link
            href="/auth/login"
            className={clsx("text-foreground", {
              "text-primary font-semibold": isActive("/auth/login"),
            })}
          >
            Login
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="/auth/signup"
            variant="flat"
            className={clsx({
              "border border-primary": isActive("/auth/signup"),
            })}
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />

      <NavbarMenu className="mt-4">
        {menuItems.map(({ name, href }, index) => (
          <NavbarMenuItem key={name}>
            <Link
              href={href}
              className={clsx("w-full", {
                "text-primary font-semibold": isActive(href),
              })}
              size="lg"
              color={
                name === "Login"
                  ? "primary"
                  : name === "Sign Up"
                    ? "danger"
                    : "foreground"
              }
            >
              {name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
