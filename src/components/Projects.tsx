
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'MediCare+',
      description: 'Built a multilingual telehealth platform with AI prescription scanning and chatbot appointment assistant. Helped improve rural healthcare access by 40%.',
      techStack: ['React', 'Node.js', 'MongoDB', 'AI/ML', 'Express.js'],
      achievements: ['40% improvement in rural healthcare access', 'AI-powered prescription scanning', 'Multilingual support'],
      githubLink: 'https://github.com/Ayush-1812/Medicare-',
      image: '/images/medicare.jpg',
    },
    {
      title: 'Dead Stock Marketplace',
      description: 'Developed a B2B platform connecting sellers of unsold inventory with buyers via AI-powered matching—reducing waste and transaction time drastically.',
      techStack: ['JavaScript', 'Node.js', 'MongoDB', 'AI Matching', 'REST APIs'],
      achievements: ['Reduced transaction time by 60%', 'AI-powered matching algorithm', 'Sustainable waste reduction'],
      githubLink: 'https://github.com/Ayush-1812/DeadStockMarketplace',
      image: '/images/DeadStock.jpg',
    },
    {
      title: 'DailyFix',
      description: 'Designed a student complaint resolution platform now actively used at IIIT Kota—resolved 90% of issues within 48 hours.',
      techStack: ['React', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Node.js'],
      achievements: ['90% issue resolution within 48 hours', 'Actively used at IIIT Kota', 'Streamlined complaint management'],
      githubLink: 'https://github.com/Ayush-1812/DailyFix',
      image: '/images/DailyFix.jpg',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Achievements</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
