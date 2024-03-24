import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import "../public/css/custom.css";
import "react-tooltip/dist/react-tooltip.css";

import ReactQueryProvider from "@/providers/query-provider";
import TooltipProvider from "@/providers/tooltip-provider";

export const metadata: Metadata = {
  title: "Webkitt",
  description: "A web solution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster position="top-center" reverseOrder={false} />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
