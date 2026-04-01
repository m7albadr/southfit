"use client";

import Image from "next/image";

export default function SouthFitLogo({
  className = "",
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <Image
      src="/logo.jpg"
      alt="SouthFit Kuwait"
      width={size}
      height={size}
      className={`rounded-full ${className}`}
      priority
    />
  );
}
