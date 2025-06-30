import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  const profiles = [
    {
      title: "Техно-лингвистический",
      description: "Углубленное изучение технических наук и иностранных языков",
      icon: "Laptop",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Естественно-научный",
      description: "Физика, химия, биология, математика на профильном уровне",
      icon: "Atom",
      color: "bg-green-50 text-green-600",
    },
    {
      title: 'Классы "Сириус"',
      description: "Инновационная программа для одаренных детей",
      icon: "Star",
      color: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-academic-light to-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-academic-navy mb-4">
            ГБОУ Школа № 548
          </h1>
          <p className="text-xl text-academic-gray mb-6 max-w-3xl mx-auto">
            Современное образовательное учреждение с профильными классами и
            инновационными методиками обучения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-academic-blue hover:bg-academic-blue/90"
            >
              <Icon name="UserPlus" size={20} className="mr-2" />
              Подать заявление
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-academic-blue text-academic-blue hover:bg-academic-blue hover:text-white"
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              День открытых дверей
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {profiles.map((profile, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div
                className={`w-12 h-12 rounded-full ${profile.color} flex items-center justify-center mb-4`}
              >
                <Icon name={profile.icon as any} size={24} />
              </div>
              <h3 className="text-xl font-semibold text-academic-navy mb-2">
                {profile.title}
              </h3>
              <p className="text-academic-gray">{profile.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-academic-blue mb-2">
                850+
              </div>
              <div className="text-academic-gray">учеников</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-academic-blue mb-2">
                45+
              </div>
              <div className="text-academic-gray">педагогов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-academic-blue mb-2">
                95%
              </div>
              <div className="text-academic-gray">поступление в ВУЗы</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-academic-blue mb-2">
                15+
              </div>
              <div className="text-academic-gray">лет опыта</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
