import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, BookOpen, Code, Users, Zap, CheckCircle, Star, Play } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: BookOpen,
    title: '系统化教程',
    description: '从零基础到高级应用，完整的学习路径让你快速掌握n8n工作流自动化。',
  },
  {
    icon: Code,
    title: '实战案例',
    description: '真实业务场景案例，涵盖客户管理、营销自动化、数据同步等实际应用。',
  },
  {
    icon: Users,
    title: '中文社区',
    description: '活跃的中文社区，经验分享、问题解答、最佳实践交流。',
  },
  {
    icon: Zap,
    title: '持续更新',
    description: '紧跟n8n版本更新，确保教程内容始终与最新功能保持同步。',
  },
]

const tutorials = [
  {
    title: 'n8n快速入门',
    description: '30分钟掌握n8n基础操作，创建你的第一个工作流。',
    level: '入门',
    duration: '30分钟',
    href: '/tutorials/quick-start',
  },
  {
    title: 'HTTP请求节点详解',
    description: '深入理解HTTP请求节点，掌握API集成核心技能。',
    level: '进阶',
    duration: '45分钟',
    href: '/tutorials/http-requests',
  },
  {
    title: '邮件营销自动化',
    description: '构建完整的邮件营销自动化系统，提升营销效率。',
    level: '实战',
    duration: '60分钟',
    href: '/tutorials/email-marketing',
  },
  {
    title: '数据同步工作流',
    description: '实现多系统间数据自动同步，确保数据一致性。',
    level: '实战',
    duration: '90分钟',
    href: '/tutorials/data-sync',
  },
]

const stats = [
  { label: '教程数量', value: '50+' },
  { label: '学习用户', value: '1000+' },
  { label: '实战案例', value: '20+' },
  { label: '社区成员', value: '500+' },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              🚀 全新上线
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              你的n8n工作流自动化
              <span className="block text-blue-200">学习指南</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
              从零开始，掌握n8n工作流自动化。提供系统化的中文教程、实战案例和最佳实践，助你成为自动化专家。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-n8n-600 hover:bg-blue-50">
                <Link href="/quick-start">
                  开始学习
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link href="/tutorials">
                  <Play className="mr-2 h-4 w-4" />
                  观看教程
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-n8n-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              为什么选择 n8n-guide？
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              n8n-guide 是中文世界最权威的n8n学习平台，提供系统化、实战化的学习体验。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="feature-card">
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-n8n-500 mb-4" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              热门教程
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              从基础入门到高级应用，精选教程助你快速掌握n8n工作流自动化。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tutorials.map((tutorial) => (
              <Card key={tutorial.title} className="tutorial-card">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={tutorial.level === '入门' ? 'default' : tutorial.level === '进阶' ? 'secondary' : 'destructive'}>
                      {tutorial.level}
                    </Badge>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      {tutorial.duration}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {tutorial.description}
                  </CardDescription>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={tutorial.href}>
                      开始学习
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/tutorials">
                查看所有教程
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              准备好开始你的n8n学习之旅了吗？
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              加入我们的学习社区，与1000+开发者一起掌握工作流自动化技术。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/quick-start">
                  立即开始学习
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/community">
                  加入社区
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

