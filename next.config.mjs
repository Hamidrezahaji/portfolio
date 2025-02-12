/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: "/resume.pdf",
      destination: "/resume/Hamidreza_Haji_UXUI_Designer.pdf",
      permanent: true,
    },
  ],
};

export default nextConfig;