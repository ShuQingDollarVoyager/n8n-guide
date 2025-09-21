import Link from 'next/link'
import { Github, Twitter, Mail, Heart } from 'lucide-react'

const footerLinks = {
  learn: [
    { name: '快速开始', href: '/quick-start' },
    { name: '基础教程', href: '/tutorials/basics' },
    { name: '进阶教程', href: '/tutorials/advanced' },
    { name: '实战案例', href: '/tutorials/cases' },
  ],
  resources: [
    { name: '节点大全', href: '/resources/nodes' },
    { name: '模板库', href: '/resources/templates' },
    { name: '最佳实践', href: '/resources/best-practices' },
    { name: 'API文档', href: '/resources/api' },
  ],
  community: [
    { name: '问答社区', href: '/community/q-a' },
    { name: '用户分享', href: '/community/sharing' },
    { name: '最新动态', href: '/community/news' },
    { name: '贡献指南', href: '/community/contribute' },
  ],
  about: [
    { name: '关于我们', href: '/about' },
    { name: '联系我们', href: '/contact' },
    { name: '隐私政策', href: '/privacy' },
    { name: '使用条款', href: '/terms' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-n8n-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">n8n</span>
              </div>
              <span className="font-bold text-xl">n8n-guide</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              你的n8n工作流自动化学习指南，从零开始掌握自动化技术。
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="mailto:contact@n8n-guide.com" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-semibold mb-4">学习资源</h3>
            <ul className="space-y-2">
              {footerLinks.learn.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">工具资源</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold mb-4">社区</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold mb-4">关于</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 n8n-guide.com. 保留所有权利。
          </p>
          <p className="text-sm text-muted-foreground flex items-center mt-2 md:mt-0">
            用 <Heart className="h-4 w-4 text-red-500 mx-1" /> 制作
          </p>
        </div>
      </div>
    </footer>
  )
}

