import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Всероссийская олимпиада школьников",
      description: "Призеры и победители регионального этапа",
      count: "12",
      year: "2024",
      category: "academic",
    },
    {
      title: "Научно-практические конференции",
      description: "Дипломанты городских и всероссийских конференций",
      count: "28",
      year: "2024",
      category: "research",
    },
    {
      title: "Спортивные достижения",
      description: "Чемпионы и призеры городских соревнований",
      count: "8",
      year: "2024",
      category: "sport",
    },
    {
      title: "Творческие конкурсы",
      description: "Лауреаты международных и всероссийских конкурсов",
      count: "15",
      year: "2024",
      category: "creative",
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "academic":
        return "Trophy";
      case "research":
        return "Microscope";
      case "sport":
        return "Medal";
      case "creative":
        return "Palette";
      default:
        return "Award";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "academic":
        return "bg-yellow-50 text-yellow-600 border-yellow-200";
      case "research":
        return "bg-blue-50 text-blue-600 border-blue-200";
      case "sport":
        return "bg-red-50 text-red-600 border-red-200";
      case "creative":
        return "bg-purple-50 text-purple-600 border-purple-200";
      default:
        return "bg-gray-50 text-gray-600 border-gray-200";
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-academic-navy mb-4">
            Наши достижения
          </h2>
          <p className="text-xl text-academic-gray max-w-2xl mx-auto">
            Результаты работы наших учеников и педагогов в различных областях
            знаний
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-full ${getCategoryColor(achievement.category)} flex items-center justify-center`}
                >
                  <Icon
                    name={getCategoryIcon(achievement.category) as any}
                    size={20}
                  />
                </div>
                <Badge variant="secondary">{achievement.year}</Badge>
              </div>

              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-academic-blue mb-2">
                  {achievement.count}
                </div>
                <div className="text-sm text-academic-gray">участников</div>
              </div>

              <h3 className="text-lg font-semibold text-academic-navy mb-2">
                {achievement.title}
              </h3>
              <p className="text-sm text-academic-gray">
                {achievement.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="bg-academic-light rounded-lg p-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-academic-navy mb-2">
                Гордимся нашими учениками
              </h3>
              <p className="text-academic-gray">
                Каждый год наши выпускники поступают в ведущие вузы страны
              </p>
            </div>
            <div className="hidden md:block">
              <Icon
                name="TrendingUp"
                size={48}
                className="text-academic-blue"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
