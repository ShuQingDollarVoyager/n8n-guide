import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'n8n-guide.com - 你的n8n工作流自动化学习指南',
  description: '从零开始，掌握n8n工作流自动化。提供系统化的中文教程、实战案例和最佳实践，助你成为自动化专家。',
  keywords: 'n8n, 工作流自动化, n8n教程, 中文教程, 自动化, 工作流, API集成',
  authors: [{ name: 'n8n-guide团队' }],
  openGraph: {
    title: 'n8n-guide.com - 你的n8n工作流自动化学习指南',
    description: '从零开始，掌握n8n工作流自动化。提供系统化的中文教程、实战案例和最佳实践。',
    type: 'website',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'n8n-guide.com - 你的n8n工作流自动化学习指南',
    description: '从零开始，掌握n8n工作流自动化。提供系统化的中文教程、实战案例和最佳实践。',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

