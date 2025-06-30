import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Footer = () => {
  const quickLinks = [
    "Главная",
    "О школе",
    "Поступление",
    "Образование",
    "Новости",
    "Контакты",
  ];

  const documents = [
    "Устав школы",
    "Лицензия",
    "Правила приема",
    "Образовательные программы",
    "Отчеты",
    "Документооборот",
  ];

  const services = [
    "Электронный дневник",
    "Расписание",
    "Питание",
    "Транспорт",
    "Библиотека",
    "Медицинский кабинет",
  ];

  return (
    <footer className="bg-academic-navy text-white">
      <div className="container mx-auto px-4">
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Icon
                  name="GraduationCap"
                  size={32}
                  className="text-academic-blue"
                />
                <div>
                  <h3 className="text-lg font-bold">ГБОУ Школа №548</h3>
                  <p className="text-sm text-gray-300">Образование будущего</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 text-sm">
                Современное образовательное учреждение с профильными классами и
                инновационными методиками обучения в центре Москвы.
              </p>

              <div className="flex gap-3">
                <Button
                  size="sm"
                  variant="ghost"
                  className="p-2 text-white hover:bg-white/10"
                >
                  <Icon name="Facebook" size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="p-2 text-white hover:bg-white/10"
                >
                  <Icon name="Instagram" size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="p-2 text-white hover:bg-white/10"
                >
                  <Icon name="Youtube" size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="p-2 text-white hover:bg-white/10"
                >
                  <Icon name="Twitter" size={16} />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-gray-300 hover:text-white text-sm justify-start"
                    >
                      {link}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Документы</h4>
              <ul className="space-y-2">
                {documents.map((doc, index) => (
                  <li key={index}>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-gray-300 hover:text-white text-sm justify-start"
                    >
                      {doc}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Сервисы</h4>
              <ul className="space-y-2 mb-6">
                {services.map((service, index) => (
                  <li key={index}>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-gray-300 hover:text-white text-sm justify-start"
                    >
                      {service}
                    </Button>
                  </li>
                ))}
              </ul>

              <div className="bg-white/10 rounded-lg p-3">
                <h5 className="font-medium mb-2 text-sm">Горячая линия</h5>
                <a
                  href="tel:+74951234567"
                  className="text-academic-blue hover:text-white text-sm"
                >
                  +7 (495) 123-45-67
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={14} />
                <span>ул. Примерная, д. 10, Москва, 123456</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={14} />
                <span>school548@edu.mos.ru</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-300">
              <Button
                variant="ghost"
                className="p-0 h-auto text-gray-300 hover:text-white text-sm"
              >
                Политика конфиденциальности
              </Button>
              <span>•</span>
              <Button
                variant="ghost"
                className="p-0 h-auto text-gray-300 hover:text-white text-sm"
              >
                Карта сайта
              </Button>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/10 text-center text-sm text-gray-400">
            <p>© 2024 ГБОУ Школа №548. Все права защищены.</p>
            <p className="mt-1">
              Лицензия на образовательную деятельность № 123456 от 01.09.2008
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
