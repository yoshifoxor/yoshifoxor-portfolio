'use client';

import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export function Header() {
  return (
    <header
      className={`
        sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80
        backdrop-blur-sm
        dark:border-gray-800 dark:bg-gray-900/80
      `}
    >
      <div
        className={`
          container mx-auto flex h-16 items-center justify-between px-4
          md:px-6
        `}
      >
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Yoshifoxor
          </span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/profile">Profile</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/skills">Skills</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/products">Products</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link
                  href="http://github.com/yoshifoxor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
