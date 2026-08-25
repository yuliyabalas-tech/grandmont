import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://grandmont-group.sites.openai.com'),
  title: 'GRANDMONT GROUP | Personální a náborová řešení',
  description: 'GRANDMONT GROUP propojuje spolehlivé pracovníky se silnými zaměstnavateli. Nábor zaměstnanců, personální řešení a pracovní příležitosti v České republice.',
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    title: 'GRANDMONT GROUP | Personální a náborová řešení',
    description: 'Spolehliví lidé. Stabilní výkon. Silné partnerství.',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: 'GRANDMONT GROUP – personální a náborová řešení' }],
  },
  twitter: { card: 'summary_large_image', title: 'GRANDMONT GROUP', description: 'Spolehliví lidé. Stabilní výkon. Silné partnerství.', images: ['/og.png'] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'Organization', name: 'GRANDMONT GROUP s.r.o.',
          address: { '@type': 'PostalAddress', streetAddress: 'Na Čečeličce 425/4', addressLocality: 'Praha 5', addressCountry: 'CZ' }
        }) }} />
        {children}
      </body>
    </html>
  );
}
