
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Heart, Users } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Who I Am</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate and dedicated Computer Science enthusiast currently pursuing my B.Tech at IIIT Kota. 
              With hands-on experience in software engineering and a drive for innovation, I aim to solve meaningful 
              problems through technology.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in tech is driven by curiosity and a desire to create impactful solutions. Whether it's 
              building telehealth platforms or developing marketplace solutions, I believe in leveraging technology 
              to make a positive difference in people's lives.
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Fun Facts</h3>
              <div className="grid gap-4">
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Fitness enthusiast who believes in maintaining work-life balance</span>
                </div>
                <div className="flex items-center space-x-3">   
                   
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Constantly learning and exploring new technologies</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Education</h3>
            
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-foreground">B.Tech in Computer Science</h4>
                  <p className="text-primary font-medium">IIIT Kota</p>
                  <p className="text-muted-foreground">Ongoing</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-foreground">Senior Secondary</h4>
                  <p className="text-primary font-medium">St. John's School, Jhalawar</p>
                  <p className="text-muted-foreground">92.4%</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-foreground">Secondary</h4>
                  <p className="text-primary font-medium">St. John's School, Jhalawar</p>
                  <p className="text-muted-foreground">86%</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
