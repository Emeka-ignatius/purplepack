import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/navigation-bar';
import Footer from '@/components/layout/footer';
import { PROFILE } from '@/lib/data';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: PROFILE.name,
	description: `Welcome to ${PROFILE.name} (African, Flavorful, Irresistible)`,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body className={`${inter.className}`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='light'
					enableSystem
				>
					<Navbar />
					{children}
					<Analytics />
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
