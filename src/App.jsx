import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Хедер */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Логотип */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg"></div>
              <span className="text-2xl font-bold text-gray-900">Golova</span>
            </div>

            {/* Навигация */}
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Возможности</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition">О нас</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Контакты</a>
            </nav>

            {/* Кнопка */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-200">
              Начать
            </button>
          </div>
        </div>
      </header>

      {/* Главный баннер */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Инновационные решения
            <span className="text-blue-600 block">для вашего бизнеса</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Современные технологии и креативный подход для достижения ваших целей
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition duration-200">
              Узнать больше
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition duration-200">
              Демо
            </button>
          </div>
        </div>
      </section>
      {/* Секция с адаптивными карточками */}
<section className="py-20 bg-white">
  <div className="custom-container">
    {/* Заголовок секции */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Широкий спектр услуг для вашего бизнеса
      </p>
    </div>

    {/* Адаптивный контейнер */}
    {/* На mobile (до 576px) - горизонтальный скролл */}
    {/* На tablet (577px+) - обычная сетка */}
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:overflow-visible overflow-x-auto flex space-x-4 sm:space-x-0 pb-8 scrollbar-hide">
      
      {/* Карточка 1 */}
      <div className="flex-shrink-0 sm:flex-shrink sm:w-auto w-[280px] bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition duration-300">
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
          <span className="text-2xl">🎨</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Веб-дизайн</h3>
        <p className="text-gray-600 mb-4">
          Создаем современные и удобные интерфейсы, которые нравятся пользователям.
        </p>
        <div className="text-blue-600 font-medium">Узнать больше →</div>
      </div>

      {/* Карточка 2 */}
      <div className="flex-shrink-0 sm:flex-shrink sm:w-auto w-[280px] bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition duration-300">
        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
          <span className="text-2xl">⚡</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Разработка</h3>
        <p className="text-gray-600 mb-4">
          Полный цикл разработки от идеи до запуска проекта.
        </p>
        <div className="text-blue-600 font-medium">Узнать больше →</div>
      </div>

      {/* Карточка 3 */}
      <div className="flex-shrink-0 sm:flex-shrink sm:w-auto w-[280px] bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition duration-300">
        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
          <span className="text-2xl">📱</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Мобильные приложения</h3>
        <p className="text-gray-600 mb-4">
          Кроссплатформенные приложения для iOS и Android.
        </p>
        <div className="text-blue-600 font-medium">Узнать больше →</div>
      </div>
    
      {/* Карточка 4 */}
      <div className="flex-shrink-0 sm:flex-shrink sm:w-auto w-[280px] bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition duration-300">
        <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
          <span className="text-2xl">🔍</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">SEO оптимизация</h3>
        <p className="text-gray-600 mb-4">
          Повышаем видимость вашего сайта в поисковых системах.
        </p>
        <div className="text-blue-600 font-medium">Узнать больше →</div>
      </div>

      {/* Карточка 5 */}
      <div className="flex-shrink-0 sm:flex-shrink sm:w-auto w-[280px] bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition duration-300">
        <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
          <span className="text-2xl">📊</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Аналитика</h3>
        <p className="text-gray-600 mb-4">
          Глубокий анализ данных для принятия правильных решений.
        </p>
        <div className="text-blue-600 font-medium">Узнать больше →</div>
      </div>

      {/* Карточка 6 */}
      <div className="flex-shrink-0 sm:flex-shrink sm:w-auto w-[280px] bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition duration-300">
        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
          <span className="text-2xl">☁️</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Облачные решения</h3>
        <p className="text-gray-600 mb-4">
          Надежная инфраструктура и облачные сервисы.
        </p>
        <div className="text-blue-600 font-medium">Узнать больше →</div>
      </div>
    </div>

    {/* Индикатор скролла только для мобильных */}
    <div className="sm:hidden text-center mt-6">
      <p className="text-gray-500 text-sm">← Прокрутите в сторону →</p>
    </div>
  </div>
</section>
      {/* Секция с двумя колонками */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Левая колонка - Текст */}
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Инновационный подход к решению ваших задач
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы создаем современные решения, которые помогают бизнесу расти и развиваться. 
                Наша команда экспертов готова предложить вам лучшие практики и технологии.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Более 500 компаний уже доверили нам свои проекты и достигли впечатляющих результатов.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Профессиональная команда разработчиков</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Современные технологии и подходы</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Поддержка 24/7 и быстрое реагирование</span>
                </div>
              </div>
              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition duration-200">
                Узнать больше
              </button>
            </div>

            {/* Правая колонка - Картинка */}
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Современные технологии" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                {/* Декоративный элемент */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-600 rounded-2xl opacity-10"></div>
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-green-600 rounded-2xl opacity-10"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3 Колонки - Возможности */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши возможности</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Все что нужно для успешного старта и роста вашего проекта
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Колонка 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Быстрый старт</h3>
              <p className="text-gray-600 mb-6">
                Начните работу сразу после регистрации. Интуитивный интерфейс и подробная документация.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Мгновенная настройка</li>
                <li>• Готовые шаблоны</li>
                <li>• Техническая поддержка 24/7</li>
              </ul>
            </div>

            {/* Колонка 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Умная аналитика</h3>
              <p className="text-gray-600 mb-6">
                Подробные отчеты и аналитика для принятия взвешенных бизнес-решений.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Real-time статистика</li>
                <li>• Детальные отчеты</li>
                <li>• Прогнозы и тренды</li>
              </ul>
            </div>

            {/* Колонка 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Безопасность</h3>
              <p className="text-gray-600 mb-6">
                Максимальная защита ваших данных с использованием современных технологий шифрования.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• SSL сертификаты</li>
                <li>• Резервное копирование</li>
                <li>• Защита от DDoS атак</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам довольных клиентов по всему миру
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg text-lg font-medium transition duration-200">
            Создать аккаунт бесплатно
          </button>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Колонка 1 - О компании */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
                <span className="text-xl font-bold">Golova</span>
              </div>
              <p className="text-gray-400 mb-4">
                Инновационные решения для современного бизнеса
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">FB</a>
                <a href="#" className="text-gray-400 hover:text-white transition">TW</a>
                <a href="#" className="text-gray-400 hover:text-white transition">IG</a>
                <a href="#" className="text-gray-400 hover:text-white transition">IN</a>
              </div>
            </div>

            {/* Колонка 2 - Продукт */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Возможности</a></li>
                <li><a href="#" className="hover:text-white transition">Цены</a></li>
                <li><a href="#" className="hover:text-white transition">Документация</a></li>
                <li><a href="#" className="hover:text-white transition">Обновления</a></li>
              </ul>
            </div>

            {/* Колонка 3 - Компания */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">О нас</a></li>
                <li><a href="#" className="hover:text-white transition">Блог</a></li>
                <li><a href="#" className="hover:text-white transition">Карьера</a></li>
                <li><a href="#" className="hover:text-white transition">Контакты</a></li>
              </ul>
            </div>

            {/* Колонка 4 - Поддержка */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition">Сообщество</a></li>
                <li><a href="#" className="hover:text-white transition">Статус системы</a></li>
                <li><a href="#" className="hover:text-white transition">Связаться с нами</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Golova. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App