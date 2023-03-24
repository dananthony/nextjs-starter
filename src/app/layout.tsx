import '@css/global.css';

export const metadata = {
  title: 'Next.js Starter',
  description: 'An opinionated Next.js starter template.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
