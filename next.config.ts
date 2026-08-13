import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Platzhalter-Bilder. Fuer echte Werkstatt-Fotos aus dem Tina-Media-Manager
    // reicht der lokale /public-Pfad, dafuer ist kein remotePattern noetig.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
