
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Server, Settings, Brain, Users } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['C++', 'Python', 'JavaScript', 'Java (Basic)', 'SQL'],
      color: 'text-blue-500',
    },
    {
      title: 'Frontend',
      icon: Palette,
      skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Tailwind CSS'],
      color: 'text-green-500',
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      color: 'text-purple-500',
    },
    {
      title: 'Tools & Technologies',
      icon: Settings,
      skills: ['Git', 'GitHub', 'VS Code', 'Linux/Windows', 'Agile'],
      color: 'text-orange-500',
    },
    {
      title: 'Computer Science',
      icon: Brain,
      skills: ['OOP', 'Operating Systems', 'DBMS', 'Data Structures', 'Algorithms'],
      color: 'text-red-500',
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Team Leadership', 'Problem Solving', 'Time Management', 'Communication'],
      color: 'text-teal-500',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">What I Do Best</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <category.icon className={`h-12 w-12 mx-auto mb-4 ${category.color}`} />
                <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm py-1 px-3"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
