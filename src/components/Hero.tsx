
import { Button } from '@/components/ui/button';
import { Mail, FileText, ArrowDown, Code, Palette, Database, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const texts = ["MERN Developer", "DSA Enthusiast"];

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    
    if (isTyping) {
      // Typing animation
      if (displayedText.length < currentFullText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        }, 100); // Type each character every 100ms
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait then start erasing
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Wait 2 seconds before erasing
        return () => clearTimeout(timeout);
      }
    } else {
      // Erasing animation
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50); // Erase each character every 50ms
        return () => clearTimeout(timeout);
      } else {
        // Finished erasing, move to next text
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentTextIndex, texts]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating circle - top right */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full floating-element blur-sm"></div>
        
        {/* Medium floating element - top left */}
        <div className="absolute top-32 left-16 w-20 h-20 bg-secondary/30 rounded-2xl floating-element rotate-12"></div>
        
        {/* Small floating dots */}
        <div className="absolute top-1/4 right-1/3 w-4 h-4 bg-primary rounded-full floating-element"></div>
        <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-secondary rounded-full floating-element"></div>
        
        {/* Tech icon bubbles */}
        <div className="absolute top-1/3 right-1/4 p-4 bg-card/50 backdrop-blur-sm rounded-2xl floating-element border border-border/20">
          <Code className="h-8 w-8 text-primary" />
        </div>
        
        <div className="absolute bottom-1/4 right-20 p-4 bg-card/50 backdrop-blur-sm rounded-2xl floating-element border border-border/20">
          <Database className="h-8 w-8 text-secondary" />
        </div>
        
        <div className="absolute top-2/3 left-16 p-4 bg-card/50 backdrop-blur-sm rounded-2xl floating-element border border-border/20">
          <Palette className="h-8 w-8 text-accent" />
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full floating-element blur-xl"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-secondary/15 to-transparent rounded-full floating-element blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-card/50 backdrop-blur-sm border border-border/20 rounded-full text-sm font-medium text-muted-foreground">
              <Zap className="h-4 w-4 mr-2 text-primary" />
              Available for opportunities
            </div>

            {/* Name & Title */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Ayush
                </span>
                <br />
                <span className="text-foreground">Carpenter</span>
                <span className="text-primary">→</span>
              </h1>
              
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
                  I am a{' '}
                  <span className="text-primary font-semibold">
                    {displayedText}
                    <span className="animate-pulse text-secondary">|</span>
                  </span>
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-xl">
                  Experience developer and problem solver remotely from IIIT Kota.
                </p>
              </div>
            </div>

            {/* Description */}
            

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-8 py-6 text-lg rounded-2xl glow-effect"
                size="lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Let's Connect
              </Button>
              <Button
                variant="outline"
                className="px-8 py-6 text-lg rounded-2xl border-border/30 bg-card/20 backdrop-blur-sm "
                onClick={() => window.open('/Ayush_Carpenter_Resume.pdf', '_blank')}
                size="lg"
              >
                <FileText className="mr-2 h-5 w-5" />
                View Resume
              </Button>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main profile image container */}
              <div className="relative w-80 h-80 rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl bg-gradient-to-br from-card/50 to-card/80 backdrop-blur-sm">
                <img
                  src="/lovable-uploads/ef529d8f-7a06-458e-a1a7-6cdb7ed9764e.png"
                  alt="Ayush Carpenter"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <div className="text-sm text-muted-foreground">Scroll to explore</div>
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};
