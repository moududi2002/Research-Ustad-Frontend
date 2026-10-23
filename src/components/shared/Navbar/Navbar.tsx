// src/components/shared/Navbar/Navbar.tsx
"use client";
import { DroopDown } from "@/components/ui/core/DropDown/DropDown";
import { Button } from "@/components/ui/core";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getCurrentUser, logout } from "@/services/AuthService";
import { Menu, X, LogIn, User, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getDashboardUrl } from "@/lib/dashboardUtils";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: 'Our Services', href: '/services' },
  { name: "Team Member", href: "/team-members" },
  { name: "Course", href: "/course" },
  { name: "Event", href: "/event" },
  { name: "Blogs", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

const researchWingItems = [
  { name: "Publication", href: "/published" },
  { name: "Ongoing Projects", href: "/ongoing-projects" },
  { name: "International Conference", href: "/international-conferences" },
  { name: "Achievements", href: "/achievements" },
];

type UserToken = {
  id: string;
  email: string;
  role: "user" | "admin" | "superAdmin";
  iat: number;
  exp: number;
};

const convertJwtToUserToken = (jwtPayload: any): UserToken | null => {
  if (!jwtPayload || typeof jwtPayload !== "object") return null;
  return {
    id: jwtPayload.sub || jwtPayload.id || "",
    email: jwtPayload.email || "",
    role: jwtPayload.role || "user",
    iat: jwtPayload.iat || 0,
    exp: jwtPayload.exp || 0,
  };
};

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<UserToken | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const toggleCategory = (category: string) =>
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );

  const isCategoryExpanded = (category: string) =>
    expandedCategories.includes(category);

  useEffect(() => {
    const fetchData = async () => {
      const jwtPayload = await getCurrentUser();
      setUser(convertJwtToUserToken(jwtPayload));
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogOut = () => {
    logout();
    setUser(null);
    router.push("/");
  };

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolling
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_-8px_rgba(30,58,95,0.15)] border-b border-brand-border"
          : "bg-white border-b border-transparent"
      )}
    >
      {/* ─── Desktop ─── */}
      <div className="max-w-7xl mx-auto hidden lg:flex justify-between items-center px-6 h-20">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="Research Ustad"
            width={1000}
            height={100}
            priority
            className="w-14 h-14 transition-transform duration-300 group-hover:scale-105"
          />
          <h2 className="font-serif font-bold text-[22px] flex items-center text-brand-primary tracking-tight">
            Research
            <span className="text-brand-secondary ml-1">Ustad</span>
          </h2>
        </Link>

        {/* Nav links + Login */}
        <div className="flex items-center gap-6">
          <DroopDown />

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="primary" size="sm" className="gap-2">
                  <User className="w-4 h-4" />
                  Dashboard
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 mt-2">
                <DropdownMenuItem className="cursor-pointer">
                  <Link
                    href={getDashboardUrl(user?.role || "")}
                    className="flex items-center w-full"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleLogOut}
                  className="cursor-pointer text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button variant="primary" size="sm" className="gap-2">
                <LogIn className="w-4 h-4" />
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* ─── Mobile ─── */}
      <div className="lg:hidden">
        <div className="bg-white/95 backdrop-blur-md">
          <div className="flex justify-between items-center px-4 h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Research Ustad"
                width={1000}
                height={100}
                priority
                className="w-12 h-12"
              />
              <h2 className="font-serif font-bold text-lg text-brand-primary">
                Research<span className="text-brand-secondary ml-1">Ustad</span>
              </h2>
            </Link>

            <div className="flex items-center gap-2">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="primary" size="sm" className="gap-1">
                      <User className="w-3.5 h-3.5" />
                      <span className="text-xs">Dashboard</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-44 mt-2">
                    <DropdownMenuItem className="cursor-pointer">
                      <Link
                        href={getDashboardUrl(user?.role || "")}
                        className="flex items-center w-full text-sm"
                      >
                        <User className="w-3.5 h-3.5 mr-2" />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={handleLogOut}
                      className="cursor-pointer text-red-600 hover:bg-red-50 text-sm"
                    >
                      <LogIn className="w-3.5 h-3.5 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link href="/login">
                  <Button variant="primary" size="sm" className="gap-1">
                    <LogIn className="w-3.5 h-3.5" />
                    <span className="text-xs">Login</span>
                  </Button>
                </Link>
              )}

              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger className="p-2 hover:bg-brand-surface rounded-lg transition-colors">
                  {open ? <X size={20} /> : <Menu size={20} />}
                </SheetTrigger>
                <SheetContent side="left" className="w-80 p-0 bg-white">
                  <div className="flex flex-col h-full">
                    <div className="p-4 border-b border-brand-border">
                      <h2 className="font-serif text-lg font-semibold text-brand-primary">
                        Menu
                      </h2>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                      <nav className="py-2">
                        {navLinks.map((link, index) => (
                          <div key={link.name}>
                            <Link
                              href={link.href}
                              onClick={() => setOpen(false)}
                             className={cn(
                                'flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors duration-200',
                                link.href === '/services'
                                  ? 'mx-3 my-2 rounded-xl bg-gradient-to-r from-[#093a5a] to-[#087e55] !text-white shadow-md font-extrabold'
                                  : isActive(link.href)
                                  ? 'text-brand-secondary bg-brand-primary/5'
                                  : 'text-gray-700 hover:text-brand-secondary hover:bg-gray-50'
                              )}
                            >
                              <span>{link.name}</span>
                            </Link>

                            {index === 0 && (
                              <div className="border-b border-brand-border/50">
                                <button
                                  onClick={() => toggleCategory("researchWing")}
                                  className={cn(
                                    "flex items-center justify-between w-full px-4 py-3 text-sm font-medium transition-colors",
                                    isActive("/published") ||
                                      isActive("/ongoing-projects") ||
                                      isActive("/international-conferences") ||
                                      isActive("/achievements")
                                      ? "text-brand-secondary bg-brand-surface"
                                      : "text-brand-ink hover:text-brand-secondary hover:bg-brand-surface/60"
                                  )}
                                >
                                  <span>Research Wing</span>
                                  {isCategoryExpanded("researchWing") ? (
                                    <ChevronDown className="w-4 h-4 text-brand-muted" />
                                  ) : (
                                    <ChevronRight className="w-4 h-4 text-brand-muted" />
                                  )}
                                </button>

                                {isCategoryExpanded("researchWing") && (
                                  <div className="bg-brand-surface/60">
                                    {researchWingItems.map((item) => (
                                      <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className={cn(
                                          "block px-8 py-2.5 text-sm border-b border-brand-border/40 last:border-b-0 transition-colors",
                                          isActive(item.href)
                                            ? "text-brand-secondary font-medium"
                                            : "text-brand-muted hover:text-brand-secondary"
                                        )}
                                      >
                                        {item.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </nav>
                    </div>

                    <div className="p-4 border-t border-brand-border">
                      <p className="text-xs text-brand-muted text-center">
                        © {new Date().getFullYear()} ResearchUstad
                      </p>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;