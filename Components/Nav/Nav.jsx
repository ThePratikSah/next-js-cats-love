import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav>
      <Link href="/" passHref>
        <span>I &hearts; Cats</span>
      </Link>
    </nav>
  );
}
