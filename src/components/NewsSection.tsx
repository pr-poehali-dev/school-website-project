import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "День открытых дверей 2024",
      description:
        "Приглашаем будущих первоклассников и их родителей познакомиться с нашей школой",
      date: "15 мар 2024",
      category: "Мероприятие",
      urgent: true,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Победа в городской олимпиаде",
      description: "Наши ученики заняли призовые места по математике и физике",
      date: "10 мар 2024",
      category: "Достижения",
      urgent: false,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Набор в профильные классы",
      description:
        "Открыт прием документов в техно-лингвистические и естественно-научные классы",
      date: "5 мар 2024",
      category: "Образование",
      urgent: false,
      image: "/placeholder.svg",
    },
  ];

  const announcements = [
    {
      title: "Родительское собрание",
      date: "20 марта 2024",
      time: "18:00",
      location: "Актовый зал",
    },
    {
      title: "Каникулы",
      date: "25-31 марта 2024",
      time: "Весь день",
      location: "Школа закрыта",
    },
    {
      title: "Научная конференция",
      date: "3 апреля 2024",
      time: "14:00",
      location: "Аудитория 201",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-academic-navy">
                Новости школы
              </h2>
              <Button variant="outline" className="hidden sm:flex">
                <Icon name="Rss" size={16} className="mr-2" />
                Все новости
              </Button>
            </div>

            <div className="space-y-6">
              {news.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="md:flex">
                    <div className="md:w-48 h-48 md:h-auto bg-gray-200 flex items-center justify-center">
                      <Icon name="Image" size={48} className="text-gray-400" />
                    </div>
                    <div className="p-6 flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Badge
                            variant={item.urgent ? "destructive" : "secondary"}
                          >
                            {item.category}
                          </Badge>
                          {item.urgent && (
                            <Badge variant="destructive">
                              <Icon
                                name="AlertCircle"
                                size={12}
                                className="mr-1"
                              />
                              Важно
                            </Badge>
                          )}
                        </div>
                        <span className="text-sm text-academic-gray">
                          {item.date}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-academic-navy mb-2">
                        {item.title}
                      </h3>
                      <p className="text-academic-gray mb-4">
                        {item.description}
                      </p>

                      <Button
                        variant="ghost"
                        className="text-academic-blue p-0"
                      >
                        Читать далее
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-academic-navy mb-6">
              Объявления
            </h3>

            <div className="space-y-4 mb-8">
              {announcements.map((announcement, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-academic-light rounded-full flex items-center justify-center">
                      <Icon
                        name="Calendar"
                        size={16}
                        className="text-academic-blue"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-academic-navy mb-1">
                        {announcement.title}
                      </h4>
                      <div className="text-sm text-academic-gray space-y-1">
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" size={12} />
                          {announcement.date} в {announcement.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="MapPin" size={12} />
                          {announcement.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-academic-blue text-white">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Phone" size={20} />
                <h4 className="font-semibold">Контакты</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div>+7 (495) 123-45-67</div>
                <div>school548@edu.mos.ru</div>
                <div>ул. Примерная, д. 10</div>
                <div>Москва, 123456</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
