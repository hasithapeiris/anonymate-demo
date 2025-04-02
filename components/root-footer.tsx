import Link from "next/link";
import React from "react";

const RootFooter = () => {
  return (
    <footer className="py-6 w-full px-4 md:px-6 border-t">
      <div className="wrapper-root flex flex-col gap-2 sm:flex-row shrink-0 items-center">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Anonymate. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default RootFooter;
