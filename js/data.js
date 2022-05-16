let products= [
    // jackets
    {
    "name": "Columbia Ascender Soft shell",
    "description": "Мужская ветровка из ткани Softshell подойдет для походов.",
    "price": "59.99",
    "colors": {
        "black": "assets/products/jackets-m/ColumbiaAscenderSoftshell-black.jpg",
        "blue": "assets/products/jackets-m/ColumbiaAscenderSoftshell-blue.jpg",
    },
    "type": "Куртки",
    "typePage": "Мужчинам",
     "size": ["46", "48-50"]
    },
    {
        "name": "Kappa jacket",
        "description": "Ветровка Kappa с оригинальным дизайном — отличный выбор для ненастных дней.",
        "price": "89.99",
        "colors": {
            "black": "assets/products/jackets-m/Kappa-black.jpg",
        },
        "type": "Куртки",
        "typePage": "Мужчинам",
        "size": ["48", "50", "52-54"]
    },
    {
        "name": "Nike Run Stripe",
        "description": "Беги навстречу ветру в Nike Run Stripe. Легкая ветровка станет отличным выбором для тренировки в прохладную погоду.",
        "price": "79.99",
        "colors": {
            "black": "assets/products/jackets-m/NikeRunStripe-black.jpg",
        },
        "type": "Куртки",
        "typePage": "Мужчинам",
        "size": ["46", "48-50"]
    },
    {
        "name": "Columbia Park 2",
        "description": "Ветровка Columbia для комфортного отдыха на природе и походов.",
        "price": "49.99",
        "colors": {
            "white": "assets/products/jackets-w/ColumbiaPark2-white.jpg",
            "beige": "assets/products/jackets-w/ColumbiaPark2-beige.jpg",
        },
        "type": "Куртки",
        "typePage": "Женщинам",
        "size": ["46", "48"]
    },
    {
        "name": "Nike Dri-FIT",
        "description": "Раскрой свой потенциал вместе с Nike Dri-FIT! Технологичная ветровка с функциональным дизайном сделает твои пробежки в прохладную погоду комфортнее.",
        "price": "55.99",
        "colors": {
            "black": "assets/products/jackets-w/NikeDriFIT-black.jpg",
        },
        "type": "Куртки",
        "typePage": "Женщинам",
        "size": ["50"]
    }, // shirts
    {
        "name": "Nike Pro Dri",
        "description": "Легкая футболка Nike Pro для комфорта в самые жаркие моменты тренировки.",
        "price": "16.99",
        "colors": {
            "black": "assets/products/shirts-m/NikeProDri-black.jpg",
            "gray": "assets/products/shirts-m/NikeProDri-gray.jpg",
        },
        "type": "Футболки",
        "typePage": "Мужчинам",
        "size": ["46", "48-50", "54"]
    },
    {
        "name": "Puma ESS M",
        "description": "Футболка с вышитым логотипом PUMA на груди для яркого летнего образа в спортивном стиле.",
        "price": "26.99",
        "colors": {
            "black": "assets/products/shirts-m/PumaESS-black.jpg",
            "aqua": "assets/products/shirts-m/PumaESS-blue.jpg",
        },
        "type": "Футболки",
        "typePage": "Мужчинам",
        "size": ["48"]
    },
    {
        "name": "Puma RAD",
        "description": "Стильная футболка с логотипом PUMA для запоминающегося образа в спортивном стиле.",
        "price": "39.99",
        "colors": {
            "black": "assets/products/shirts-m/PumaRAD-black.jpg",
            "beige": "assets/products/shirts-m/PumaRAD-beige.jpg",
        },
        "type": "Футболки",
        "typePage": "Мужчинам",
        "size": ["42", "48"]
    },
    {
        "name": "Termit",
        "description": "Принтованная футболка Termit отлично впишется в летний образ.",
        "price": "39.99",
        "colors": {
            "black": "assets/products/shirts-m/Termit-black.jpg",
            "gray": "assets/products/shirts-m/Termit-gray.jpg",
            "white": "assets/products/shirts-m/Termit-white.jpg",
        },
        "type": "Футболки",
        "typePage": "Мужчинам",
        "size": ["36", "40"]
    },
    {
        "name": "Nike Dri",
        "description": "Теннисная футболка Nike Court Dri для чувства прохлады даже во время самых напряженных матчей.",
        "price": "16.99",
        "colors": {
            "white": "assets/products/shirts-w/NikeDri-white.jpg"
        },
        "type": "Футболки",
        "typePage": "Женщинам",
        "size": ["32", "38"]
    },
    {
        "name": "Nike Sportwear",
        "description": "Хлопковая футболка Nike с вышитым логотипом дополнит гардероб в спортивном стиле.",
        "price": "16.99",
        "colors": {
            "black": "assets/products/shirts-w/NikeSportwear-balck.jpg",
            "white": "assets/products/shirts-w/NikeSportwear-white.jpg"
        },
        "type": "Футболки",
        "typePage": "Женщинам",
        "size": ["38"]
    },
    {
        "name": "Puma ESS W",
        "description": "Футболка в спортивном стиле, декорированная принтом с логотипом PUMA.",
        "price": "26.99",
        "colors": {
            "white": "assets/products/shirts-w/PumaESS-white.jpg",
            "pink": "assets/products/shirts-w/PumaESS-pink.jpg",
        },
        "type": "Футболки",
        "typePage": "Женщинам",
        "size": ["40"]
    },
    {
        "name": "Puma Power Tape",
        "description": "Укороченная футболка PUMA, декорированная принтом с логотипом бренда, поможет создать стильный спортивный образ.",
        "price": "26.99",
        "colors": {
            "black": "assets/products/shirts-w/PumaPowerTape-black.jpg",
            "beige": "assets/products/shirts-w/PumaPowerTape-beige.jpg",
        },
        "type": "Футболки",
        "typePage": "Женщинам",
        "size": ["32","38", "40"]
    },// Shoes
    {
        "name": "Adidas Strutter",
        "description": "Кроссовки adidas Strutter с массивной подошвой позволят создать оригинальный образ в спортивном стиле. Модель гарантирует максимальный комфорт на протяжении всего дня.",
        "price": "36.99",
        "colors": {
            "white": "assets/products/shoes-m/AdidasStrutter-white.jpg"
        },
        "type": "Обувь",
        "typePage": "Мужчинам",
        "size": ["41", "42-43"]
    },
    {
        "name": "Nike Defy All Day",
        "description": "В кроссовках Nike Defy All Day ты можешь не бояться вызовов, которые приготовил для тебя новый день. Комфортная модель с продуманным дизайном — идеальный вариант для универсального образа в спортивном стиле.",
        "price": "16.99",
        "colors": {
            "black": "assets/products/shoes-m/NikeDefyAllDay-black.jpg",
            "white": "assets/products/shoes-m/NikeDefyAllDay-white.jpg"
        },
        "type": "Обувь",
        "typePage": "Мужчинам",
        "size": ["40", "42", "43"]
    },
    {
        "name": "Puma X-Ray",
        "description": "Удобные кроссовки X-Ray проникнуты идеей скорости. Они способны преобразить любой лук, сделав его стильным и динамичным.",
        "price": "26.99",
        "colors": {
            "black": "assets/products/shoes-m/PumaX-Ray-black.jpg",
            "white": "assets/products/shoes-m/PumaX-Ray-white.jpg"
        },
        "type": "Обувь",
        "typePage": "Мужчинам",
        "size": ["40","43"]
    },
    {
        "name": "Nike Wearallday",
        "description": "Nike Wearallday — это воплощение комфорта. Кроссовки полностью соответствуют своему названию — тебе будет в них комфортно на протяжении всего дня.",
        "price": "26.99",
        "colors": {
            "black": "assets/products/shoes-w/NikeWearallday-black.jpg"
        },
        "type": "Обувь",
        "typePage": "Женщинам",
        "size": ["39", "40"]
    },
    {
        "name": "Puma Runner",
        "description": "Классический силуэт кроссовок Runner, дополненный функциональной отделкой задника, не оставит равнодушным истинного ценителя спортивного стиля.",
        "price": "26.99",
        "colors": {
            "black": "assets/products/shoes-w/PumaRunner-black.jpg",
            "white": "assets/products/shoes-w/PumaRunner-white.jpg"
        },
        "type": "Обувь",
        "typePage": "Женщинам",
        "size": ["37", "38"]
    },// Sport-products
    {
        "name": "Гантель Kettler 15кг",
        "description": "Гантели весом 15 кг — оптимальный выбор для силовых упражнений и функциональных тренировок. Грузы имеют шестиугольную форму и покрытие из высокопрочного синтетического каучука, что обеспечивает стабильность гантели как на ровной, так и на наклонной поверхности пола.",
        "price": "312.00",
        "colors": {
            "black": "assets/products/sport-products/Dumbbell-kettler-15.jpg"
        },
        "type": "Гантели",
        "typePage": "Спорттовары",
        "size": ["15кг"]
    },
    {
        "name": "Гантель Demix 5кг",
        "description": "Гантель эргономичной формы со скругленными краями. Предназначена для безопасного использования и хранения в домашних условиях. Нескользящее неопреновое покрытие обеспечивает надежный хват гантелей во время занятий и амортизацию при соприкосновении с полом.",
        "price": "98.80",
        "colors": {
            "black": "assets/products/sport-products/Dumbbell-demix-5.jpg"
        },
        "type": "Гантели",
        "typePage": "Спорттовары",
        "size": ["5кг"]
    },
    {
        "name": "Гантель Demix 3кг",
        "description": "Гантель эргономичной формы со скругленными краями. Предназначена для безопасного использования и хранения в домашних условиях. Нескользящее неопреновое покрытие обеспечивает надежный хват гантелей во время занятий и амортизацию при соприкосновении с полом.",
        "price": "57.80",
        "colors": {
            "red": "assets/products/sport-products/Dumbbell-demix-3.jpg"
        },
        "type": "Гантели",
        "typePage": "Спорттовары",
        "size": ["5кг"]
    },
    {
        "name": "Беговая дорожка Olympia",
        "description": "Технологичная беговая дорожка Torneo — отличный выбор для комфортных и эффективных домашних тренировок.",
        "price": "2996.99",
        "colors": {
            "black": "assets/products/sport-products/Treadmill-olympia.jpg"
        },
        "type": "Беговые дорожки",
        "typePage": "Спорттовары",
        "size": []
    },
    {
        "name": "Беговая дорожка Torneo Nota",
        "description": "Беговая дорожка Torneo предоставляет расширенные возможности для эффективных домашних тренировок на мышцы ног и пресса.",
        "price": "2245.59",
        "colors": {
            "black": "assets/products/sport-products/Treadmill-torneoNota.jpg"
        },
        "type": "Беговые дорожки",
        "typePage": "Спорттовары",
        "size": []
    },
    {
        "name": "Велосипед горный Stern Energy 27,5",
        "description": "Велосипед Energy с алюминиевой рамой — отличный выбор для поклонников активного отдыха.",
        "price": "1105.00",
        "colors": {
            "black": "assets/products/sport-products/bike-stern-energy-27,5'.jpg"
        },
        "type": "Велосипеды",
        "typePage": "Спорттовары",
        "size": ["150-165", "165-175"]
    },
    {
        "name": "Велосипед горный Dynamic 26",
        "description": "Горный велосипед Stern станет удачным выбором для новичков в велоспорте.",
        "price": "972.00",
        "colors": {
            "black": "assets/products/sport-products/bike-stern-dynamic-26'.jpg"
        },
        "type": "Велосипеды",
        "typePage": "Спорттовары",
        "size": ["150-165", "175-185"]
    },
    {
        "name": "Велотренажер магнитный NordicTrack GX 2.7 U",
        "description": "Велотренажер NordicTrack GX 2.7 U для эффективных и комфортных тренировок.",
        "price": "1678.00",
        "colors": {
            "black": "assets/products/sport-products/BikeTr-nordicTrack-gx-u.jpg"
        },
        "type": "Велотренажеры",
        "typePage": "Спорттовары",
        "size": []
    },
    {
        "name": "Велотренажер магнитный Kettler Axos Cycle M",
        "description": "Простой и надежный велотренажер отлично подходит для кардиотренировок. Занятия укрепляют мышцы ног и пресса и повышают аэробную выносливость. Широкое и мягкое прорезиненное сиденье обеспечивает комфорт во время занятий.",
        "price": "1020.00",
        "colors": {
            "gray": "assets/products/sport-products/BikeTr-kettler-axos-cycle-m.jpg"
        },
        "type": "Велотренажеры",
        "typePage": "Спорттовары",
        "size": []
    }
   ];