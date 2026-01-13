import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { SystemProvider } from './context/SystemContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Portfolio | Eldhose George',
    description: 'Personal Portfolio Website',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className} suppressHydrationWarning={true}>
                <SystemProvider>
                    <main className="flex min-h-screen flex-col bg-[#121212]">
                        <Navbar />
                        {children}
                        <Footer />
                    </main>
                </SystemProvider>
            </body>
        </html>
    )
}
