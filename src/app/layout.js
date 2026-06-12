import './globals.css'
import { Inter, Syne } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { SystemProvider } from './context/SystemContext'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const syne = Syne({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-syne' })

export const metadata = {
    title: 'Portfolio | Eldhose George',
    description: 'Personal Portfolio Website',
}

export const viewport = {
    themeColor: '#0A0505',
    width: 'device-width',
    initialScale: 1,
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${syne.variable} font-sans bg-obsidian text-slate-300 antialiased`} suppressHydrationWarning={true}>
                <SystemProvider>
                    <main className="flex min-h-screen flex-col selection:bg-cyan/30 selection:text-white overflow-hidden w-full">
                        <Navbar />
                        {children}
                        <Footer />
                    </main>
                </SystemProvider>
            </body>
        </html>
    )
}
