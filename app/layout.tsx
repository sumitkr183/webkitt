import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import "./custom.css";

import ReactQueryProvider from "@/providers/query-provider";

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
          {children}
          <Toaster position="top-center" reverseOrder={false} />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
