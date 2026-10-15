import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Avindu & Yavishka | Our Wedding',
  description: 'Join Avindu and Yavishka as we begin our forever. Wedding venue and directions to Ruwanara Royal Majestry, Narammala, Sri Lanka.',
  icons: { icon: '/lotus.svg' },
  openGraph: { title: 'Avindu & Yavishka — Our Wedding', description: 'Two hearts, one beautiful beginning. We can’t wait to celebrate with you.' }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
