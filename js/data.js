let products= [
    // jackets
    {
    "name": "Columbia Ascender Soft shell",
    "description": "Крутое описание куртки.",
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
        "description": "Крутое описание куртки.",
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
        "description": "Крутое описание куртки.",
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
        "description": "Крутое описание куртки.",
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
        "description": "Крутое описание куртки.",
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
        "description": "Крутое описание футболки.",
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
        "description": "Крутое описание футболки.",
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
        "description": "Крутое описание футболки.",
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
        "description": "Крутое описание футболки.",
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
        "description": "Крутое описание футболки.",
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
        "description": "Крутое описание футболки.",
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
        "description": "Крутое описание футболки.",
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
        "description": "Крутое описание футболки.",
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
        "description": "Крутое описание кроссовок.",
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
        "description": "Крутое описание кроссовок.",
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
        "description": "Крутое описание кроссовок.",
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
        "description": "Крутое описание кроссовок.",
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
        "description": "Крутое описание кроссовок.",
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
        "description": "Крутое описание товара.",
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
        "description": "Крутое описание товара.",
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
        "description": "Крутое описание товара.",
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
        "description": "Крутое описание товара.",
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
        "description": "Крутое описание товара.",
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
        "description": "Крутое описание товара.",
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
        "description": "Крутое описание товара.",
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
        "description": "Крутое описание товара.",
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
        "description": "Крутое описание товара.",
        "price": "1020.00",
        "colors": {
            "gray": "assets/products/sport-products/BikeTr-kettler-axos-cycle-m.jpg"
        },
        "type": "Велотренажеры",
        "typePage": "Спорттовары",
        "size": []
    }
   ];