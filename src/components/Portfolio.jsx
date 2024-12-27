import { useState, useEffect } from 'react'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Layout,
  Database,
  Cloud,
  Terminal,
  ArrowRight
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("projects")
  const [scrollProgress, setScrollProgress] = useState(0)

  const blogPosts = [
    {
      title: "Understanding React Server Components",
      date: "2024-02-15",
      category: "Technical",
      readTime: "5 min read",
      excerpt: "An in-depth look at React Server Components and how they revolutionize web development.",
      image: "/api/placeholder/600/400"
    },
    {
      title: "The Future of Web Development",
      date: "2024-02-01",
      category: "Industry",
      readTime: "8 min read",
      excerpt: "Exploring upcoming trends and technologies shaping the future of web development.",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Optimizing React Performance",
      date: "2024-01-20",
      category: "Performance",
      readTime: "6 min read",
      excerpt: "Advanced techniques for improving React application performance and user experience.",
      image: "/api/placeholder/600/400"
    }
  ]

  const projects = [
    {
      title: "AI Analytics Platform",
      description: "Real-time data visualization platform with machine learning insights.",
      tags: ["React", "TensorFlow.js", "Node.js", "WebGL"],
      image: "/api/placeholder/600/400"
    },
    {
      title: "Blockchain Explorer",
      description: "Interactive blockchain visualization and transaction tracking system.",
      tags: ["Web3", "TypeScript", "WebSocket", "GraphQL"],
      image: "/api/placeholder/600/400"
    },
    {
      title: "AR Product Viewer",
      description: "Augmented reality product visualization using web technologies.",
      tags: ["WebXR", "Three.js", "React", "WebGL"],
      image: "/api/placeholder/600/400"
    }
  ]

  const skills = [
    {
      category: "Frontend Development",
      icon: <Layout className="h-6 w-6" />,
      items: ["React", "TypeScript", "Next.js", "Tailwind"]
    },
    {
      category: "Backend Development",
      icon: <Database className="h-6 w-6" />,
      items: ["Node.js", "Python", "PostgreSQL", "Redis"]
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      items: ["AWS", "Docker", "CI/CD", "Kubernetes"]
    },
    {
      category: "Development Tools",
      icon: <Terminal className="h-6 w-6" />,
      items: ["Git", "Jest", "Webpack", "VS Code"]
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.pageYOffset
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-primary z-50 transition-transform duration-300 origin-left"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background" />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Creative Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building exceptional digital experiences through innovative technology
          </p>

          <div className="flex gap-4 justify-center">
            <Button 
              className="group"
              onClick={() => setActiveSection("projects")}
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub Profile</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn Profile</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email Contact</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Background Animation */}
        <div className="absolute inset-0 -z-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 bg-background/95 border-b z-40 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 py-4">
            <Button 
              variant={activeSection === "projects" ? "default" : "ghost"}
              onClick={() => setActiveSection("projects")}
            >
              Projects
            </Button>
            <Button 
              variant={activeSection === "skills" ? "default" : "ghost"}
              onClick={() => setActiveSection("skills")}
            >
              Skills
            </Button>
            <Button 
              variant={activeSection === "contact" ? "default" : "ghost"}
              onClick={() => setActiveSection("contact")}
            >
              Contact
            </Button>
            <Button 
              variant={activeSection === "blog" ? "default" : "ghost"}
              onClick={() => setActiveSection("blog")}
            >
              Blog
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Projects Section */}
        <section className={activeSection === "projects" ? "block" : "hidden"}>
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-primary/10 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button variant="default" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                      <Button variant="outline" size="sm">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className={activeSection === "skills" ? "block" : "hidden"}>
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold">{skill.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <li 
                        key={itemIndex}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <Code2 className="h-4 w-4" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className={activeSection === "contact" ? "block" : "hidden"}>
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <Card className="max-w-xl mx-auto">
            <CardContent className="p-6">
              <div className="space-y-4">
                <Button className="w-full group" variant="outline">
                  <Mail className="h-5 w-5 mr-2 group-hover:text-primary transition-colors" />
                  hello@example.com
                </Button>
                <Button className="w-full group" variant="outline">
                  <Github className="h-5 w-5 mr-2 group-hover:text-primary transition-colors" />
                  github.com/username
                </Button>
                <Button className="w-full group" variant="outline">
                  <Linkedin className="h-5 w-5 mr-2 group-hover:text-primary transition-colors" />
                  linkedin.com/in/username
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Blog Section */}
        <section className={activeSection === "blog" ? "block" : "hidden"}>
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index}
                className="group overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="text-primary">{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {post.excerpt}
                    </p>
                    <Button variant="ghost" className="group-hover:text-primary transition-colors">
                      Read More 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}