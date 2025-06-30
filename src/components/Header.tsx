import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const navItems = [
    "Главная",
    "Сведения об ОО",
    "Поступление",
    "Образование",
    "Воспитание",
    "ОДОД",
    "Достижения",
    "Реализация проекта в рамках гранта",
    "Родителям",
    "Безопасность",
    "Противодействие коррупции",
    "Инновационная деятельность",
    "Диагностическая школа",
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Icon
              name="GraduationCap"
              size={32}
              className="text-academic-blue"
            />
            <div>
              <h1 className="text-xl font-bold text-academic-navy">
                ГБОУ Школа №...
              </h1>
              <p className="text-sm text-academic-gray">
                Образовательное учреждение
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.slice(0, 6).map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="text-sm text-academic-navy hover:text-academic-blue hover:bg-academic-light"
              >
                {item}
              </Button>
            ))}
            <Button
              variant="ghost"
              className="text-sm text-academic-navy hover:text-academic-blue"
            >
              <Icon name="Menu" size={16} />
              Еще
            </Button>
          </nav>

          <Button className="lg:hidden" variant="ghost" size="sm">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
