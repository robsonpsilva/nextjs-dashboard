import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Acme Customers Page',
  description: 'The official Next.js Customer Page, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function Page() {
  return <p>Customers Page</p>;
}