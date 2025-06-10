import { Briefcase, Github, GraduationCap, Linkedin, Mail, MapPin, Twitter } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about TSonStack - a passionate developer sharing insights about technology and life.',
}

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/lethanhson9901',
    icon: Github,
    description: 'Check out my code and projects'
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/tsonstack',
    icon: Linkedin,
    description: 'Connect with me professionally'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/tsonstack',
    icon: Twitter,
    description: 'Follow my thoughts and updates'
  },
  {
    name: 'Email',
    href: 'mailto:contact@tsonstack.com',
    icon: Mail,
    description: 'Get in touch directly'
  },
]

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Company',
    period: '2022 - Present',
    description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies.'
  },
  {
    title: 'Full Stack Developer',
    company: 'Software Agency',
    period: '2020 - 2022',
    description: 'Built custom web solutions for clients using modern JavaScript frameworks and best practices.'
  },
  {
    title: 'Frontend Developer',
    company: 'Startup Company',
    period: '2018 - 2020',
    description: 'Focused on creating responsive, user-friendly interfaces and improving user experience.'
  },
]

const skills = [
  'JavaScript/TypeScript',
  'React/Next.js',
  'Node.js',
  'Python',
  'PostgreSQL/MongoDB',
  'AWS/Azure',
  'Docker/Kubernetes',
  'Git/GitHub Actions',
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary-foreground">TS</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">TSonStack</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            A passionate full-stack developer who loves building amazing web experiences 
            and sharing knowledge with the tech community.
          </p>
          <div className="flex items-center justify-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Vietnam</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span>Full Stack Developer</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              <span>Computer Science</span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Welcome to my corner of the internet! I'm a full-stack developer with over 5 years 
              of experience building web applications and solving complex problems with code. 
              My journey in tech started with curiosity about how websites work, and it has evolved 
              into a passion for creating digital experiences that make people's lives better.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              When I'm not coding, you'll find me exploring new technologies, contributing to open 
              source projects, or writing about my experiences in the tech industry. I believe in 
              the power of sharing knowledge and helping others grow in their developer journey.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This blog is where I share my thoughts on technology, programming best practices, 
              career advice, and life experiences. I hope you find something valuable here that 
              helps you in your own journey!
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="border rounded-lg p-6 bg-card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-primary font-medium mb-3">{exp.company}</p>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-muted rounded-lg p-4 text-center font-medium hover:bg-muted/80 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Social Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Connect With Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-4 p-4 border rounded-lg bg-card hover:bg-muted/50 transition-colors group"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{link.name}</h3>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-muted rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and interesting projects. 
            Whether you want to collaborate on something or just say hi, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get In Touch
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-6 py-3 border border-border bg-background text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
            >
              Read My Blog
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 