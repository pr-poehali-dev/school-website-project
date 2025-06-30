import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const values = [
    {
      title: "Качественное образование",
      description: "Высокие стандарты обучения и современные методики",
      icon: "BookOpen",
    },
    {
      title: "Индивидуальный подход",
      description: "Развитие способностей каждого ученика",
      icon: "Users",
    },
    {
      title: "Инновации",
      description: "Современные технологии в образовательном процессе",
      icon: "Lightbulb",
    },
    {
      title: "Профессионализм",
      description: "Опытные педагоги и методисты",
      icon: "Award",
    },
  ];

  const history = [
    {
      year: "2008",
      event: "Основание школы",
      description: "Открытие образовательного учреждения",
    },
    {
      year: "2012",
      event: "Первые профильные классы",
      description: "Запуск специализированных программ",
    },
    {
      year: "2018",
      event: "Статус инновационной площадки",
      description: "Признание на городском уровне",
    },
    {
      year: "2024",
      event: "Современное оснащение",
      description: "Полная модернизация учебных классов",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-academic-navy mb-4">
            О нашей школе
          </h2>
          <p className="text-xl text-academic-gray max-w-3xl mx-auto">
            ГБОУ Школа №548 — современное образовательное учреждение, которое
            готовит успешных и образованных граждан будущего
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-academic-navy mb-6">
              Наша миссия
            </h3>
            <div className="space-y-4 text-academic-gray">
              <p>
                Мы создаем образовательную среду, где каждый ученик может
                раскрыть свой потенциал и подготовиться к успешной жизни в
                современном мире.
              </p>
              <p>
                Наша школа объединяет традиционные ценности образования с
                инновационными подходами к обучению, обеспечивая высокое
                качество знаний и всестороннее развитие личности.
              </p>
              <p>
                Мы воспитываем ответственных граждан, способных к критическому
                мышлению, творчеству и успешной адаптации в быстро меняющемся
                мире.
              </p>
            </div>

            <div className="mt-8">
              <Button className="bg-academic-blue hover:bg-academic-blue/90">
                <Icon name="FileText" size={16} className="mr-2" />
                Устав школы
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-academic-navy mb-6">
              Наши ценности
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-academic-light rounded-full flex items-center justify-center">
                      <Icon
                        name={value.icon as any}
                        size={16}
                        className="text-academic-blue"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-academic-navy mb-1">
                        {value.title}
                      </h4>
                      <p className="text-sm text-academic-gray">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-academic-light rounded-lg p-8">
          <h3 className="text-2xl font-bold text-academic-navy mb-8 text-center">
            История развития
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {history.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-academic-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-lg">{item.year}</span>
                </div>
                <h4 className="font-semibold text-academic-navy mb-2">
                  {item.event}
                </h4>
                <p className="text-sm text-academic-gray">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 shadow-sm border">
            <div className="flex items-center justify-center mb-6">
              <Icon name="Quote" size={32} className="text-academic-blue" />
            </div>
            <blockquote className="text-xl text-academic-navy italic mb-4">
              "Образование — это то, что остается после того, как забывается
              все, чему учили в школе"
            </blockquote>
            <cite className="text-academic-gray">— Альберт Эйнштейн</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
