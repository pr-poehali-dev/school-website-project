import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const contacts = [
    {
      title: "Приемная",
      phone: "+7 (495) 123-45-67",
      email: "school548@edu.mos.ru",
      schedule: "Пн-Пт: 8:00-17:00",
      icon: "Phone",
    },
    {
      title: "Директор",
      phone: "+7 (495) 123-45-68",
      email: "director@school548.ru",
      schedule: "По записи",
      icon: "User",
    },
    {
      title: "Приемная комиссия",
      phone: "+7 (495) 123-45-69",
      email: "admission@school548.ru",
      schedule: "Пн-Пт: 9:00-16:00",
      icon: "UserPlus",
    },
  ];

  const departments = [
    {
      name: "Начальная школа",
      head: "Иванова Елена Петровна",
      phone: "+7 (495) 123-45-70",
      email: "primary@school548.ru",
    },
    {
      name: "Средняя школа",
      head: "Петров Михаил Сергеевич",
      phone: "+7 (495) 123-45-71",
      email: "middle@school548.ru",
    },
    {
      name: "Старшая школа",
      head: "Сидорова Анна Владимировна",
      phone: "+7 (495) 123-45-72",
      email: "senior@school548.ru",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-academic-navy mb-4">
            Контакты
          </h2>
          <p className="text-xl text-academic-gray max-w-2xl mx-auto">
            Свяжитесь с нами для получения подробной информации о школе и
            поступлении
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-academic-navy mb-6">
              Основные контакты
            </h3>

            <div className="space-y-4 mb-8">
              {contacts.map((contact, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-academic-light rounded-full flex items-center justify-center">
                      <Icon
                        name={contact.icon as any}
                        size={20}
                        className="text-academic-blue"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-academic-navy mb-2">
                        {contact.title}
                      </h4>
                      <div className="space-y-1 text-academic-gray">
                        <div className="flex items-center gap-2">
                          <Icon name="Phone" size={14} />
                          <a
                            href={`tel:${contact.phone}`}
                            className="hover:text-academic-blue"
                          >
                            {contact.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Mail" size={14} />
                          <a
                            href={`mailto:${contact.email}`}
                            className="hover:text-academic-blue"
                          >
                            {contact.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Clock" size={14} />
                          <span>{contact.schedule}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="bg-academic-blue text-white rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="MapPin" size={24} />
                <h4 className="text-lg font-semibold">Адрес школы</h4>
              </div>
              <div className="space-y-2">
                <p className="text-lg">ул. Примерная, д. 10, стр. 1</p>
                <p>Москва, 123456</p>
                <p className="text-sm opacity-90">
                  Метро: Примерная (5 мин пешком)
                </p>
              </div>
              <Button variant="secondary" className="mt-4">
                <Icon name="Navigation" size={16} className="mr-2" />
                Построить маршрут
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-academic-navy mb-6">
              Руководство подразделений
            </h3>

            <div className="space-y-4 mb-8">
              {departments.map((dept, index) => (
                <Card key={index} className="p-6">
                  <h4 className="font-semibold text-academic-navy mb-3">
                    {dept.name}
                  </h4>
                  <div className="space-y-2 text-sm text-academic-gray">
                    <div className="flex items-center gap-2">
                      <Icon name="User" size={14} />
                      <span>{dept.head}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Phone" size={14} />
                      <a
                        href={`tel:${dept.phone}`}
                        className="hover:text-academic-blue"
                      >
                        {dept.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Mail" size={14} />
                      <a
                        href={`mailto:${dept.email}`}
                        className="hover:text-academic-blue"
                      >
                        {dept.email}
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-white border-2 border-academic-blue">
              <div className="text-center">
                <Icon
                  name="MessageSquare"
                  size={32}
                  className="text-academic-blue mx-auto mb-4"
                />
                <h4 className="text-lg font-semibold text-academic-navy mb-2">
                  Обратная связь
                </h4>
                <p className="text-academic-gray mb-4">
                  Есть вопросы? Напишите нам, и мы обязательно ответим
                </p>
                <Button className="w-full bg-academic-blue hover:bg-academic-blue/90">
                  <Icon name="Send" size={16} className="mr-2" />
                  Написать сообщение
                </Button>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg p-6">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Icon
                name="Clock"
                size={24}
                className="text-academic-blue mx-auto mb-2"
              />
              <h4 className="font-semibold text-academic-navy mb-1">
                Режим работы
              </h4>
              <p className="text-sm text-academic-gray">Пн-Пт: 8:00-19:00</p>
            </div>
            <div>
              <Icon
                name="Car"
                size={24}
                className="text-academic-blue mx-auto mb-2"
              />
              <h4 className="font-semibold text-academic-navy mb-1">
                Парковка
              </h4>
              <p className="text-sm text-academic-gray">
                Бесплатная для родителей
              </p>
            </div>
            <div>
              <Icon
                name="Shield"
                size={24}
                className="text-academic-blue mx-auto mb-2"
              />
              <h4 className="font-semibold text-academic-navy mb-1">
                Безопасность
              </h4>
              <p className="text-sm text-academic-gray">Пропускной режим</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
