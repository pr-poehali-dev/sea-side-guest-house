import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const rooms = [
    {
      id: 1,
      title: "Морской бриз",
      description: "Уютный номер с видом на море, идеален для пар",
      features: ["Вид на море", "Балкон", "Кондиционер"],
      price: "3500 ₽/ночь",
      image: "/img/0d298c78-d43f-4ef6-adec-d372f37c4807.jpg"
    },
    {
      id: 2,
      title: "Тихая гавань",
      description: "Просторный семейный номер с садовой террасой",
      features: ["Терраса", "2 спальни", "Мини-кухня"],
      price: "4200 ₽/ночь",
      image: "/img/0d298c78-d43f-4ef6-adec-d372f37c4807.jpg"
    },
    {
      id: 3,
      title: "Капитанская каюта",
      description: "Роскошный номер в морском стиле",
      features: ["Джакузи", "Каминная зона", "Панорамные окна"],
      price: "5500 ₽/ночь",
      image: "/img/bc6a6a30-35a3-4b8d-a556-53866f698b0b.jpg"
    }
  ];

  const reviews = [
    {
      name: "Анна К.",
      rating: 5,
      text: "Прекрасное место для отдыха! Очень уютно и близко к морю. Хозяева внимательные и гостеприимные.",
      date: "Июль 2024"
    },
    {
      name: "Михаил С.",
      rating: 5,
      text: "Отличный домик на берегу! Тишина, покой и потрясающие закаты. Обязательно вернемся еще.",
      date: "Июнь 2024"
    },
    {
      name: "Семья Петровых",
      rating: 4,
      text: "Замечательное место для семейного отдыха. Дети в восторге от пляжа, а взрослые от комфорта.",
      date: "Май 2024"
    }
  ];

  const attractions = [
    { name: "Городской пляж", distance: "100 м", icon: "Waves" },
    { name: "Маяк", distance: "500 м", icon: "Lighthouse" },
    { name: "Ресторан морепродуктов", distance: "300 м", icon: "UtensilsCrossed" },
    { name: "Морской музей", distance: "1.2 км", icon: "Anchor" },
    { name: "Прокат лодок", distance: "400 м", icon: "Ship" },
    { name: "Сувенирный рынок", distance: "800 м", icon: "ShoppingBag" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean-50 to-sand-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Home" className="text-ocean-600" size={32} />
              <span className="text-2xl font-bold text-navy-900">Морской Домик</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-navy-700 hover:text-ocean-600 transition-colors">О домике</a>
              <a href="#rooms" className="text-navy-700 hover:text-ocean-600 transition-colors">Номера</a>
              <a href="#location" className="text-navy-700 hover:text-ocean-600 transition-colors">Расположение</a>
              <a href="#reviews" className="text-navy-700 hover:text-ocean-600 transition-colors">Отзывы</a>
              <Button className="bg-ocean-600 hover:bg-ocean-700">Забронировать</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/50 to-navy-900/30 z-10"></div>
        <img 
          src="/img/c24b8185-fce1-4999-b45b-9ad95ce8e1ff.jpg" 
          alt="Гостевой домик на берегу моря"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Морской Домик
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Уютный отдых на берегу моря в атмосфере домашнего тепла
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-ocean-600 hover:bg-ocean-700 text-lg px-8 py-4">
              <Icon name="Calendar" className="mr-2" size={20} />
              Забронировать номер
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-navy-900 text-lg px-8 py-4">
              <Icon name="Phone" className="mr-2" size={20} />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-navy-900 mb-6">О нашем домике</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Наш гостевой домик расположен всего в 100 метрах от моря и предлагает 
              комфортное размещение в уютной домашней атмосфере. Здесь вы найдете 
              все необходимое для незабываемого отдыха на берегу Черного моря.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <Icon name="Waves" className="mx-auto text-ocean-600 mb-4" size={48} />
                <CardTitle className="text-navy-900">100 м до моря</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Всего несколько шагов отделяют вас от чистого песчаного пляжа</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <Icon name="Home" className="mx-auto text-sand-600 mb-4" size={48} />
                <CardTitle className="text-navy-900">Домашний уют</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Теплая атмосфера и все удобства для комфортного отдыха</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <Icon name="MapPin" className="mx-auto text-green-600 mb-4" size={48} />
                <CardTitle className="text-navy-900">Удобное расположение</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Рядом с достопримечательностями и инфраструктурой курорта</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 bg-gradient-to-b from-sand-50 to-ocean-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-6">Наши номера</h2>
            <p className="text-lg text-gray-600">Выберите идеальный номер для вашего отдыха</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in">
                <div className="relative h-48">
                  <img 
                    src={room.image} 
                    alt={room.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-ocean-600 text-white">{room.price}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-navy-900">{room.title}</CardTitle>
                  <CardDescription>{room.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-ocean-700 border-ocean-200">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-ocean-600 hover:bg-ocean-700">
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-6">Расположение и достопримечательности</h2>
            <p className="text-lg text-gray-600">Все самое интересное рядом с вами</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Что рядом с нами</h3>
              <div className="space-y-4">
                {attractions.map((attraction, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <Icon name={attraction.icon as any} className="text-ocean-600" size={24} />
                    <div className="flex-1">
                      <span className="font-medium text-navy-900">{attraction.name}</span>
                    </div>
                    <Badge variant="outline" className="text-ocean-700">
                      {attraction.distance}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <Icon name="Map" className="mx-auto text-gray-400 mb-4" size={64} />
                <p className="text-gray-600">Интерактивная карта</p>
                <p className="text-sm text-gray-500">Будет добавлена в следующей версии</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-b from-ocean-50 to-sand-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-6">Отзывы наших гостей</h2>
            <p className="text-lg text-gray-600">Что говорят о нас те, кто уже отдыхал в нашем домике</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-navy-900">{review.name}</CardTitle>
                    <div className="flex items-center">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                  </div>
                  <CardDescription>{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-ocean-600 text-ocean-600 hover:bg-ocean-600 hover:text-white">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Оставить отзыв
            </Button>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-gradient-to-r from-ocean-600 to-navy-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы к незабываемому отдыху?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Забронируйте номер в нашем уютном домике на берегу моря и создайте воспоминания на всю жизнь
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-ocean-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Icon name="Calendar" className="mr-2" size={20} />
              Проверить доступность
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-ocean-600 text-lg px-8 py-4">
              <Icon name="Phone" className="mr-2" size={20} />
              +7 (XXX) XXX-XX-XX
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Home" className="text-ocean-400" size={24} />
                <span className="text-xl font-bold">Морской Домик</span>
              </div>
              <p className="text-gray-300">
                Уютный гостевой домик на берегу моря для незабываемого отдыха
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <p>📍 г. Сочи, ул. Приморская, 15</p>
                <p>📞 +7 (XXX) XXX-XX-XX</p>
                <p>✉️ info@seasidehouse.ru</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <div className="space-y-2 text-gray-300">
                <p>🏖️ Доступ к пляжу</p>
                <p>🚗 Парковка</p>
                <p>🍳 Завтрак</p>
                <p>🚌 Трансфер</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Соцсети</h4>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-ocean-600 hover:border-ocean-600">
                  <Icon name="Instagram" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-ocean-600 hover:border-ocean-600">
                  <Icon name="MessageCircle" size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Морской Домик. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;