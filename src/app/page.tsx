'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { portfolioData } from '@/data/portfolio-data'
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Dribbble, 
  ExternalLink, 
  Mail, 
  Menu, 
  X 
} from 'lucide-react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Message sent! (This is a demo)')
    setFormData({ name: '', email: '', message: '' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setMobileMenuOpen(false)
    }
  }

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      github: Github,
      linkedin: Linkedin,
      twitter: Twitter,
      dribbble: Dribbble,
    }
    return icons[iconName] || Github
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold glow-text hover:text-primary transition-colors"
            >
              {portfolioData.nav.logo}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {portfolioData.nav.links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-all hover:text-primary relative ${
                    activeSection === link.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary glow-cyan rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-2">
              {portfolioData.nav.links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full text-left px-4 py-2 rounded-md transition-all ${
                    activeSection === link.id 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-muted-foreground hover:bg-accent'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      >
        {/* Background Glow Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in">
              {portfolioData.home.greeting}
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold glow-text animate-fade-in delay-100">
              {portfolioData.home.name}
            </h1>
            <p className="text-2xl md:text-3xl text-primary animate-fade-in delay-200">
              {portfolioData.home.title}
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-300">
              {portfolioData.home.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-400">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="text-base px-8 glow-purple hover:scale-105 transition-transform"
              >
                {portfolioData.home.cta.primary}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection('contact')}
                className="text-base px-8 glow-border hover:scale-105 transition-transform"
              >
                {portfolioData.home.cta.secondary}
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold glow-text">
                {portfolioData.about.title}
              </h2>
              <p className="text-xl text-muted-foreground">
                {portfolioData.about.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glow-border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>About</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {portfolioData.about.description}
                  </p>
                </CardContent>
              </Card>

              <Card className="glow-border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {portfolioData.about.stats.map((stat, index) => (
                      <div key={index} className="text-center space-y-2">
                        <p className="text-2xl md:text-3xl font-bold text-primary">
                          {stat.number}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="glow-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {portfolioData.about.skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary glow-cyan transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="bg-border/30" />

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold glow-text">
                {portfolioData.projects.title}
              </h2>
              <p className="text-xl text-muted-foreground">
                {portfolioData.projects.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.projects.items.map((project) => (
                <Card key={project.id} className="glow-border bg-card/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300 flex flex-col">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-base mb-4">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="glow-box">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-2">
                    <Button variant="outline" size="sm" className="flex-1 glow-border">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 glow-purple">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-border/30" />

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold glow-text">
                {portfolioData.contact.title}
              </h2>
              <p className="text-xl text-muted-foreground">
                {portfolioData.contact.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glow-border bg-card/50 backdrop-blur-sm h-fit">
                <CardHeader>
                  <CardTitle>Contact Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a 
                      href={`mailto:${portfolioData.contact.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {portfolioData.contact.email}
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-4">Follow Me</h4>
                    <div className="flex gap-4">
                      {portfolioData.contact.socials.map((social, index) => {
                        const Icon = getIcon(social.icon)
                        return (
                          <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all glow-box"
                          >
                            <Icon className="w-5 h-5" />
                          </a>
                        )
                      })}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {portfolioData.contact.description}
                  </p>
                </CardContent>
              </Card>

              <Card className="glow-border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Send Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        {portfolioData.contact.form.fields.name.label}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder={portfolioData.contact.form.fields.name.placeholder}
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        {portfolioData.contact.form.fields.email.label}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={portfolioData.contact.form.fields.email.placeholder}
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        {portfolioData.contact.form.fields.message.label}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={portfolioData.contact.form.fields.message.placeholder}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="bg-background/50 resize-none"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full glow-purple"
                    >
                      {portfolioData.contact.form.submitButton}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 bg-background/80 backdrop-blur-md mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              {portfolioData.footer.copyright}
            </p>
            <p className="text-sm text-muted-foreground">
              {portfolioData.footer.madeWith}
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </div>
  )
}
