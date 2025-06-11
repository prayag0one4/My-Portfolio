
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Star, Code, Award } from 'lucide-react';

export const Achievements = () => {
  const achievements = [
    {
      title: 'Top 50 Teams',
      description: 'Out of 950+ teams in Oddo Hackathon @ IIT Gandhinagar',
      icon: Trophy,
      color: 'text-yellow-500',
      stat: '50/950+',
    },
    {
      title: '1600+ Rating',
      description: 'On Leetcode Contests',
      icon: Star,
      color: 'text-blue-500',
      stat: '1600+',
    },
    {
      title: '200+ LeetCode Problems',
      description: 'Solved over 200 problems on LeetCode platform',
      icon: Code,
      color: 'text-green-500',
      stat: '200+',
    },
    {
      title: '100+ GeeksforGeeks Problems',
      description: 'Completed more than 100 coding challenges on GeeksforGeeks',
      icon: Award,
      color: 'text-purple-500',
      stat: '100+',
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Highlights</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={achievement.title} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 space-y-4">
                <div className={`inline-flex p-4 rounded-full bg-muted ${achievement.color}`}>
                  <achievement.icon className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-primary">{achievement.stat}</h3>
                  <h4 className="text-lg font-semibold text-foreground">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
