
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Palette, Rocket, GraduationCap } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      title: 'Full-Stack Web Development',
      description: 'Custom, responsive applications from frontend to backend. I build scalable web solutions using modern technologies like React, Node.js, and MongoDB.',
      icon: Code,
      color: 'text-blue-500',
      features: ['Responsive Design', 'Modern Tech Stack', 'Scalable Architecture', 'API Integration'],
    },
    {
      title: 'UI/UX Design & Web Prototyping',
      description: 'Clean and intuitive designs with Tailwind CSS. I create user-friendly interfaces that provide excellent user experience across all devices.',
      icon: Palette,
      color: 'text-green-500',
      features: ['User-Centered Design', 'Responsive Layouts', 'Modern UI Components', 'Accessibility Focus'],
    },
    {
      title: 'Freelance MVP/Prototype Development',
      description: 'Campus and startup project execution. I help bring your ideas to life with rapid prototyping and MVP development for quick market validation.',
      icon: Rocket,
      color: 'text-purple-500',
      features: ['Rapid Prototyping', 'MVP Development', 'Agile Methodology', 'Quick Turnaround'],
    },
    {
      title: 'DSA Mentorship',
      description: 'Personalized guidance on problem-solving and coding interviews. I help students and professionals improve their algorithmic thinking and interview skills.',
      icon: GraduationCap,
      color: 'text-orange-500',
      features: ['1-on-1 Mentoring', 'Interview Preparation', 'Problem Solving Techniques', 'Competitive Programming'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">How I Can Help</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-muted ${service.color}`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
