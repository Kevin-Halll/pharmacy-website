"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var product_1 = require("../src/app/product");
var database = { products: [], orders: [], transactions: [], users: [] };
// Data Entry Begin
database.products = [
    // {
    //     id: number,
    //     name: string,
    //     description: string,
    //     category: 'appetizer' | 'entree' | 'dessert' | 'side' | 'beverage',
    //     imageUrl: "https://source.unsplash.com/1600x900/?food",
    //     price: number,
    //     quantity: number,
    //     ratings: [///]
    // }
    {
        id: 1,
        name: 'Impirial Vegetable Egg Rolls',
        description: "Impirial Vegetable Egg Rolls wrapped in a light, paper-thin wrapper that fries to a crispy crunch.",
        category: product_1.Category.APPETIZER,
        imageUrl: 'https://i.pinimg.com/originals/7f/80/c1/7f80c1d0485aec58952dcccb8c0a58ca.jpg',
        price: 1200,
        quantity: 100,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 2,
        name: 'Chicken Gyoza (Steamed or Fried)',
        description: "Our traditional gyoza start with house-made dough, thinly rolled and filled with fresh, savoury ingredients. From there, we steam each batch to seal in the juicy perfection. Great as an appetizer or served as an accompaniment to your favourite noodles.",
        category: product_1.Category.ENTREE,
        imageUrl: 'https://d2kmm3vx031a1h.cloudfront.net/9tPrSnzpQ2uY0fAca10I_20160413_130243-01.jpeg',
        price: 1900,
        quantity: 200,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 3,
        name: 'Spring rolls',
        description: 'There are few Asian foods that are as widely known and loved as the spring roll. Originating in China, spring rolls were an integral part of Spring Festival celebrations. Carrying forward these traditions, our secret family recipe uses the freshest ingredients and our light and crispy wrapper to form a winning combination.',
        category: product_1.Category.APPETIZER,
        imageUrl: 'https://www.summfoods.com/wp-content/uploads/2022/03/SR-plate-Homepage.png',
        price: 1200,
        quantity: 100,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 4,
        name: 'Pork Potstickers',
        description: "These pork Potstickers are filled with green onions and cilantro to the garlic and ginger, the filling is so flavorful and so tender. To top it off, I drizzle some soy sauce, sesame seeds and green onions. The filling is just so stinkin' perfect, a dipping sauce is not even needed!",
        category: product_1.Category.APPETIZER,
        imageUrl: 'https://s23209.pcdn.co/wp-content/uploads/2018/08/Pork-PotstickersIMG_5864.jpg',
        price: 1300,
        quantity: 100,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 5,
        name: 'Lobster and Shrimp Spring Roll',
        description: 'These seafood rolls are a combination of lobster and shrimp tossed in an herb butter and celery salt.',
        category: product_1.Category.APPETIZER,
        imageUrl: 'https://i.pinimg.com/originals/00/91/dc/0091dc687e15bbe42a7255bf50e1e253.jpg',
        price: 1900,
        quantity: 100,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 6,
        name: 'Ice Creams and Sorbets',
        description: 'Cool, sweet and refreshing, sorbets are perhaps best-known as delicious palate-cleansers',
        category: product_1.Category.DESSERT,
        imageUrl: 'https://taogroup.com/wp-content/uploads/2020/02/Mochi-Tao-Uptown-2.jpg',
        price: 1500,
        quantity: 500,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 7,
        name: 'Seasonal Fresh Fruit',
        description: "Eating fruit and vegetables when they’re in season is great for your wallet and great for the planet. Everything tastes so much fresher, too, with vegetables at their most tender and fruits at their most plump and juicy.",
        category: product_1.Category.DESSERT,
        imageUrl: 'http://www.fillmyrecipebook.com/wp-content/uploads/2017/08/fruit-salad_-700x575.jpg',
        price: 1100,
        quantity: 100,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 8,
        name: 'Banana Pudding',
        description: 'Banana pudding is a pudding generally consisting of layers of sweet vanilla flavored custard, cookies (usually vanilla wafers or ladyfingers) and sliced fresh bananas placed in a dish and served, topped with whipped cream or meringue.',
        category: product_1.Category.DESSERT,
        imageUrl: 'https://i.pinimg.com/originals/ad/36/b1/ad36b1f0104b963a31666243a53d5571.jpg',
        price: 1000,
        quantity: 1000,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 9,
        name: ' Lamb Loins',
        description: 'Lamb is such a special treat! We serve lamb at least a few times per year! If you find a lamb saddle, or the whole loin, including the bone, it will be much cheaper per pound! And it is easy to remove the bone.',
        category: product_1.Category.ENTREE,
        imageUrl: 'https://i.pinimg.com/originals/0d/d5/e0/0dd5e0f2a15276f8d5f174569de22972.jpg',
        price: 100,
        quantity: 500,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 10,
        name: 'RUM CAKE',
        description: "For dessert, serve up a slice of this famous Jamaican pastry. Made with rum and infused with a buttery syrup, it's a sweet taste of the Caribbean.",
        category: product_1.Category.DESSERT,
        imageUrl: 'https://izzycooking.com/wp-content/uploads/2021/03/Rum-Cake-768x1152.jpg',
        price: 1500,
        quantity: 500,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 11,
        name: 'Beef Fillet',
        description: "A little crispy on the outside and extremely tender and juicy on the inside, this steak goes along with a side of baby carrots, poached mushrooms, sweet corn, and celeriac mash",
        category: product_1.Category.ENTREE,
        imageUrl: 'https://www.foodstory.net/wp-content/uploads/2020/10/Beef-Fine-Dining-Presentation.jpg',
        price: 900,
        quantity: 100,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 12,
        name: 'Pork Rolls',
        description: "Crispy on the outside and tender on the inside, this crunchy pork roll with sweet potatoes and red cabbage salad is every steak lover's dream",
        category: product_1.Category.ENTREE,
        imageUrl: 'https://www.foodstory.net/wp-content/uploads/2020/10/Crounchy-Pork-Roll.jpg',
        price: 100,
        quantity: 200,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 13,
        name: 'Vietnamese Chicken Salad',
        description: 'Vietnamese Chicken Salad is made by combining chopped vegetables dressed and wisked with lime juice, garlic, rice wine vinegar, sriracha, chili flakes, soy sauce/fish sauce and sesame oil',
        category: product_1.Category.APPETIZER,
        imageUrl: 'https://15n8co16xmh449rucu1nqnfd-wpengine.netdna-ssl.com/wp-content/uploads/2016/01/IMG_0673.jpg',
        price: 2400,
        quantity: 100,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 14,
        name: 'Kung Pao Chicken',
        description: 'Traditionally, this Chinese chicken dish is a dry-stir fry not a lot of sauce is added into Kung Pao chicken. However, with the amount of flavour explosions happening in this dish, you don’t miss OR want any more sauce. ',
        category: product_1.Category.ENTREE,
        imageUrl: 'https://sm.askmen.com/askmen_in/photo/default/final4_avqf.jpg',
        price: 2500,
        quantity: 100,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 15,
        name: 'Tuna Poke',
        description: 'On the US West Coast, it is one of the “musts” of fashionable eating. The worldwide success of raw fish continues in the form of Hawaiian "poke" recipe, a salad from the Hawaii islands. ',
        category: product_1.Category.ENTREE,
        imageUrl: 'https://i.pinimg.com/originals/a0/f6/c5/a0f6c55444c69bef69c2f66739ceca61.png',
        price: 2900,
        quantity: 300,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 16,
        name: ' Crying Tiger Hanger Steak',
        description: "No, you're not eating a tiger, but this dish definitely has a catchy name!  The Thai name translates to 'Crying Tiger', and it got this name because the dipping sauce is suppose to be so spicy that it'll make a tiger cry. ",
        category: product_1.Category.ENTREE,
        imageUrl: 'https://austinot.com/wp-content/uploads/2017/09/Tiger-Cry.jpg',
        price: 3200,
        quantity: 90,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 17,
        name: 'Jerk Shrimp',
        description: 'Seafood lovers are sure to love this spicy, sweet Jerk Shrimp recipe. Plump, juicy shrimp are seasoned with an authentic jerk seasoning blend, then seared to perfection. How about a zesty summer salad featuring Jamaican jerk shrimp?',
        category: product_1.Category.ENTREE,
        imageUrl: 'https://www.kpseafood.com/wordpress/wp-content/uploads/2018/12/jerkshrimp.jpg',
        price: 1500,
        quantity: 100,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 18,
        name: 'Jamaican Blue mountain Coffee',
        description: "Coffee lovers favorite hot beverage in jamaica, The Blue Mountain Coffee",
        category: product_1.Category.BEVERAGE,
        imageUrl: 'http://georgiafoodies.com/wp-content/uploads/2020/04/2020-02-25-12-58-55-971.jpg',
        price: 600,
        quantity: 200,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 19,
        name: 'Ginger Beer',
        description: 'Jamaican ginger beer is sweet and refreshing with the fiery kick of ginger. Use fresh ginger for a delicious non-alcoholic drink that can be enjoyed by the whole family.',
        category: product_1.Category.BEVERAGE,
        imageUrl: 'https://izzycooking.com/wp-content/uploads/2021/03/Ginger-Beer-683x1024.jpg',
        price: 110,
        quantity: 100,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 20,
        name: 'Hot Chocolate Tea',
        description: "It doesn't get more authentic than this! Jamaican hot chocolate is made using real cacao for a rich, smooth taste. Stir in cinnamon and nutmeg for a cup of hot cocoa tha's far from average.",
        category: product_1.Category.BEVERAGE,
        imageUrl: 'https://i.pinimg.com/originals/45/e7/94/45e794e5536ee3d218984ddd741b6f04.jpg',
        price: 150,
        quantity: 300,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 21,
        name: 'Jamaican Sorrel',
        description: "This drink is traditionally enjoyed by Jamaicans during Christmas, but can be enjoyed all year long. This unique beverage is similar to cranberry juice in color with a unique, sour, berry-like taste. Add sweetener and ginger for a refreshing Jamaican drink.",
        category: product_1.Category.BEVERAGE,
        imageUrl: 'https://www.hotelthechamps.com/wp-content/uploads/2019/12/AINSLEYS_CARIBBEAN_KITCHEN_Ep8_03-scaled.jpg',
        price: 140,
        quantity: 200,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 22,
        name: 'Black Sea Bass',
        description: 'A favorite fish in some of the finest dining rooms in the country, fresh black sea bass has great flavor and texture. Its tender, mouthwatering fillets fit formal occasions,',
        category: product_1.Category.ENTREE,
        imageUrl: 'https://i1.wp.com/berriesandspice.com/wp-content/uploads/2016/11/Berries_and_Spice-Very-Simple-Herbal-Curry-with-Sea-Bass-and-Lemon-Rice_.jpg?fit=3790%2C2527&ssl=1',
        price: 2300,
        quantity: 250,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 23,
        name: 'Wagyu Beef Tenderlion',
        description: 'One of our most popular cuts of Wagyu, the tenderloin is by far, as it name implies, the most tender cut of the steer, even more so thanks to the privileged genetics of Kobe cattle, which gives it extra buttery softness.',
        category: product_1.Category.ENTREE,
        imageUrl: 'https://www.finedininglovers.com/sites/g/files/xknfdk626/files/styles/article_1200_800/public/2019-12/Dry-aged-striploin-with-seaweed-kabocha-pumpkin-and-steak-sauce-by-Richard-Ekkebus.jpg.webp?itok=MAoaEx5J',
        price: 4900,
        quantity: 100,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 24,
        name: 'Fish Escovitch',
        description: 'The making of the Jamaican Fish Escovitch dish begins with a fried whole fish, usually Red Snapper. It is then topped with pickled vegetables, including carrots, onions, peppers, pimentos and chayote. Jamaican Fish Escovitch is often paired with bammy (see Jamaican side dishes, further down this article), and inspiration for this dish is said to have been brought to the island with Spanish Jewish settlers hundreds of years ago. Eating this meal, the day after it is prepared is recommended by some, so the flavors have some time to sink in. This is a popular Easter lunch inclusion in Jamaica.',
        category: product_1.Category.ENTREE,
        imageUrl: 'https://www.beaches.com/blog/content/images/2020/03/Jamaican-Fish-Escovitch.jpg',
        price: 1000,
        quantity: 30,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 25,
        name: 'Black Forest',
        description: 'One look at this cake and its decadence is evident: every bite will unleash layers of chocolatey goodness. We are, of course, referring to the Black Forest Cake from Germany, one of the most popular and beloved cakes around the globe.',
        category: product_1.Category.DESSERT,
        imageUrl: 'http://chefeddy.com/wp-content/uploads/2011/06/DSC_0578-Copy.jpg',
        price: 100,
        quantity: 90,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 26,
        name: 'Gizzada',
        description: 'A dessert that consists of a pastry shell with a sweet and slightly spicy coconut filling. Its characteristic feature is its pinched crust, which gives the name “gizzada” or “pinch-me-round.” Thought to be of Portuguese or Jewish origin.',
        category: product_1.Category.DESSERT,
        imageUrl: 'https://onthegas.org/wp-content/uploads/2019/07/jamaican-gizzada-bite-300x200.jpg',
        price: 100,
        quantity: 50,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 27,
        name: 'Heineken',
        description: 'Cold, fresh, high quality Heineken. Enjoyed near and far since 1873.',
        category: product_1.Category.BEVERAGE,
        imageUrl: 'https://www.heineken.com/media-eu/01pfxdqq/heineken-original-bottle.png?anchor=center&mode=crop&width=712&height=1068&quality=85',
        price: 300,
        quantity: 100,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 28,
        name: 'Mannish Water',
        description: 'A thin, brown soup consisting of goat meat, breadfruit, onions, tomatoes, flour, and fresh herb. Dumplings, potatoes, and yams are sometimes added to the dish for an extra kick of flavor.',
        category: product_1.Category.APPETIZER,
        imageUrl: 'https://cdn.tasteatlas.com//images/dishes/d19d6c03d9c94dc0af2f54ed1aaf0186.jpg?w=905&h=510',
        price: 400,
        quantity: 100,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 29,
        name: 'Red Stripe',
        description: 'enjoy a cold bottle of red stripe',
        category: product_1.Category.ENTREE,
        imageUrl: 'https://trulyexperiences.com/blog/wp-content/uploads/2022/02/AdobeStock_282953128_Editorial_Use_Only-768x512.jpeg',
        price: 350,
        quantity: 100,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 30,
        name: 'Mackerel Run Down (run-dun)',
        description: 'Run-Down refers to fish stew in Jamaica, and this is another mouthwatering dish you’re not going to be able to get enough of. The stew comes together with garlic, onions, tomatoes, hot peppers, spices and carefully cut pieces of fish. Mackerel is a popular choice for fish stew, though cod is sometimes used. The process of preparation involves slow cooking in coconut milk, and in the end the fish stew is served with dumplings and green bananas that have been boiled down to the perfect consistency. You’ll know the dish is ready when the fish starts falling apart, and the stew is thick and creamy',
        category: product_1.Category.SIDE,
        imageUrl: 'https://www.beaches.com/blog/content/images/2021/05/Run-Down-Run-Dun-Jamaican-Food.jpg',
        price: 700,
        quantity: 300,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 31,
        name: 'Festival',
        description: "It'll be a festival in your mouth with this treat that usually comes alongside jerk chicken meals or fried fish, and other dishes. It is made with cornmeal, sugar, flour, spices, milk or water. The combined ingredients are fried until golden brown, and the result can be compared to that of floats sold in other Caribbean countries, just in a cylindrical shape.",
        category: product_1.Category.SIDE,
        imageUrl: 'https://www.beaches.com/blog/content/images/2020/03/Jamaican-Festival.jpg',
        price: 100,
        quantity: 300,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 32,
        name: 'Peanut Drops',
        description: 'Peanut drops are popular Jamaican snacks made by boiling roasted peanuts and minced ginger in water with brown sugar. The peanuts are boiled until the water evaporates and the sugar becomes sticky like caramel. Peanut drops are left to cool and harden before they are ready to be served and consumed.',
        category: product_1.Category.DESSERT,
        imageUrl: 'https://cdn.tasteatlas.com//images/dishes/fc9d1afb26ec47d0b53e469a7c20fd82.jpg?w=905&h=510',
        price: 100,
        quantity: 90,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 33,
        name: 'Yellow HeartBreadfruit',
        description: 'Breadfruit is amazing, and there are just so many ways to prepare it. It is referred to as a ground provision in the Caribbean. In Jamaica, some residents believe breadfruits were brought to the island in 1793 from Tahiti. Breadfruit is classified as a fruit, but it falls into the starch category in the Caribbean. Preparation methods for breadfruit in Jamaica include grilling, baking, or making it into a puree. Breadfruit is highly nutritious, and very tasty.',
        category: product_1.Category.SIDE,
        imageUrl: 'https://www.beaches.com/blog/content/images/2020/03/Jamaican-Breadfruit.jpg',
        price: 100,
        quantity: 100,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 34,
        name: 'Peppered Shrimp',
        description: 'Peppered shrimps is a popular Jamaican street food item consisting of shrimps with a spicy kick and tons of flavor. They are usually cooked in a skillet with garlic, hot pepper, butter, and thyme, absorbing all of the flavors in the process.',
        category: product_1.Category.APPETIZER,
        imageUrl: 'https://cdn.tasteatlas.com//Images/Dishes/c5e9e201b9ad4ce99fca5fa71b22ce82.jpg?w=905&h=510',
        price: 400,
        quantity: 100,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 35,
        name: 'bigga',
        description: 'jamaican favorate soft drink',
        category: product_1.Category.BEVERAGE,
        imageUrl: 'https://www.bestwaywholesale.co.uk/img/products/1000/5/766200501425.jpg',
        price: 100,
        quantity: 50,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 36,
        name: 'Chicken Foot Soup',
        description: 'Soups in Jamaica are thick and often served as complete meals mainly for lunch. This tasty soup is prepared using chicken feet, pumpkin, chochos, turnips, carrots, yellow yam, and flour dumplings, and seasoned with a soup mix and a medley of herbs and spices.',
        category: product_1.Category.APPETIZER,
        imageUrl: 'https://www.chefspencil.com/wp-content/uploads/jamaican-chicken-soup.jpg.webp',
        price: 300,
        quantity: 50,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 37,
        name: 'Smirnoff Ice',
        description: 'a sweet crispt alcoholic drink',
        category: product_1.Category.BEVERAGE,
        imageUrl: 'https://cms.diageohorizon.com/Horizon_Bold/LOCAL/PR1772/235/smirnoff-ice-original.png',
        price: 500,
        quantity: 90,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 38,
        name: "Belvedere 'Smogory Forest' single estaste rye (vodka)",
        description: 'Bold, savory Belvedere Single Estate Rye Smogóry Forest is made from Dankowskie Diamond Rye grown exclusively in Western Poland. It is rich and mellow with initial impressions of salted caramel, cereal and a touch of honey. Persistent with delicate notes of toasted bread, white pepper and fudge',
        category: product_1.Category.BEVERAGE,
        imageUrl: 'https://imgs.search.brave.com/Ww4tDH7Sb8YjT0W9DzrRPiVii1HKGV-PMgXLl_Jftik/rs:fit:600:504:1/g:ce/aHR0cDovL2N1aXNp/bmUtZXQtZGVzLXRl/bmRhbmNlcy5jb20v/d29yZHByZXNzL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE4LzA0/L0JlbHZlZGVyZS12/b2RrYS1TaW5nbGUt/RXN0YXRlLVJ5ZS5q/cGc',
        price: 1900,
        quantity: 30,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 39,
        name: 'Terrazas de los andes grand cabernet sauvignon (red wine)',
        description: 'This wine is very fruity, round which gives a velvety sensation in the mouth. I really think it is an entire different experience compared to Cabernet coming from colder areas, or less continental areas And it goes beautifully with Asian gastronomy and spices in general.',
        category: product_1.Category.BEVERAGE,
        imageUrl: 'https://imgs.search.brave.com/XN_eZKtfecaLCBgcMvFSF4X1MQyZgYE_CE4cR_DRpSU/rs:fit:316:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/YnU0MGdTbGlYalpf/dnlGM3pvZGxRSGFM/SCZwaWQ9QXBp',
        price: 2100,
        quantity: 30,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 40,
        name: 'Bud Light',
        description: 'Bud Light is a premium beer with incredible drinkability that has made it a top selling American beer that everybody knows and loves. This light beer is brewed using a combination of barley malts, rice and a blend of premium aroma hop varieties.',
        category: product_1.Category.BEVERAGE,
        imageUrl: 'https://imgs.search.brave.com/wcOYz09WkK4tlqCTupYM40hnDb3QwZc5MVx5cwTXI-c/rs:fit:1080:1080:1/g:ce/aHR0cHM6Ly9qYWNr/cXVpbm5zcHViLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wNC9CdWQtTGln/aHQtMS5wbmc',
        price: 200,
        quantity: 100,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 41,
        name: 'Bammy',
        description: 'Bammy is a flatbread made from cassava and was a staple among the Tainos. It is made mainly in rural areas and sold in markets, stores, and by street vendors. No fish dish is complete without it.',
        category: product_1.Category.SIDE,
        imageUrl: 'https://www.chefspencil.com/wp-content/uploads/Bammy.jpg.webp',
        price: 300,
        quantity: 30,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 42,
        name: 'jamaica chicken patty',
        description: 'When in Jamaica, a visit to a patty shop is a must. Jamaican chicken patties are made with a crispy, golden flaky pastry filled with seasoned meat.',
        category: product_1.Category.APPETIZER,
        imageUrl: 'https://imgs.search.brave.com/cBxzHDIfnvtBMmYR9xwbCHsmXU5TyFTs8pyRpq5TsJg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/amFtYWljYW5wcm9k/dWN0cy5jb20uYXUv/d3AtY29udGVudC91/cGxvYWRzLzIwMTYv/MDgvUDQyNjAwMjEt/ZTE0NzEwMTY4ODgy/MDcuanBn',
        price: 200,
        quantity: 30,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 43,
        name: 'jamaica cheese patty',
        description: 'When in Jamaica, a visit to a patty shop is a must. Jamaican cheese patties are made with a crispy, golden flaky pastry filled with seasoned meat.',
        category: product_1.Category.APPETIZER,
        imageUrl: 'https://imgs.search.brave.com/Awfsjru-0quf4WXf1osax53jqugls_ei3paELohycmM/rs:fit:500:342:1/g:ce/aHR0cHM6Ly93d3cu/dGFzdGVlamFtYWlj/YS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTgvMDIvQmVl/Zi1XaXRoLUNoZWVz/ZS1QYXR0eS5wbmc',
        price: 200,
        quantity: 30,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 44,
        name: 'Water',
        description: 'wata with wow',
        category: product_1.Category.BEVERAGE,
        imageUrl: 'https://loshusansupermarket.com/product_images/p/910/600_Dry_copy__01203_zoom.jpg',
        price: 100,
        quantity: 100,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 45,
        name: 'True Juice',
        description: 'Juices are made from the finest fruits and vegetables produced locally and blended to perfection to provide only the best product for you.wat',
        category: product_1.Category.BEVERAGE,
        imageUrl: 'https://imgs.search.brave.com/O9Q2B-kjEhGGRjlWoWds5A9cVrmLxlqQWEakB20Kfmk/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/cHh3bTNQdXhNNkpW/T2lNejZ4Y013SGFI/YSZwaWQ9QXBp',
        price: 200,
        quantity: 100,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 46,
        name: 'Coconut Water',
        description: 'Drained form a juicy cocunut carefully natured in the cool island of Jamaica',
        category: product_1.Category.BEVERAGE,
        imageUrl: 'https://imgs.search.brave.com/RJpbjuAhXZ8h4XoX0A0TysfcdQwv_axyiCHKT_HU3xk/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5k/cmlua2JhaS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTQv/MDgvc2h1dHRlcnN0/b2NrXzE2NTY4OTc0/MS5qcGc',
        price: 200,
        quantity: 100,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 47,
        name: 'BBQ Chicken',
        description: 'Chicken carefully season in jamaican sesoning and dipped in bbq sauce, then baked to perfection',
        category: product_1.Category.ENTREE,
        imageUrl: 'https://sweetandsavorymeals.com/wp-content/uploads/2019/02/Baked-BBQ-Chicken-2.jpg',
        price: 900,
        quantity: 20,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 48,
        name: 'Stew Pork',
        description: 'Pork stew might not be the first thing that comes to mind when you think of stew recipes. Tons of tender, juicy pork chunks and bacon ensure meat in every bite, and all of your favorite veggies are here in abundance. ',
        category: product_1.Category.ENTREE,
        imageUrl: 'https://www.gonnawantseconds.com/wp-content/uploads/2020/01/Pork-Stew-011-768x512.jpg',
        price: 1000,
        quantity: 90,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 49,
        name: 'stew beef',
        description: 'This classic French beef stew, otherwise known as Beef Bourguignon, is the ultimate cold weather comfort food.Chunks of well-marbled beef are seared in a hot pan, and then gently braised with garlic and onions in a rich wine-based broth. After a few hours in the oven, the meat becomes meltingly tender and enveloped in a deeply-flavored sauce.',
        category: product_1.Category.ENTREE,
        imageUrl: 'https://static01.nyt.com/images/2021/01/15/dining/15COOKING-OLD-BEEF-STEW2/15COOKING-OLD-BEEF-STEW2-articleLarge-v2.jpg',
        price: 600,
        quantity: 90,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 50,
        name: 'Crab Rangoon',
        description: 'The crab rangoon is filled with cream cheese but has all the complicated flavors of Asian spices to give it a unique and addicting taste.',
        category: product_1.Category.ENTREE,
        imageUrl: 'https://thekitchencommunity.org/wp-content/uploads/2022/02/15_chinese-recipes-500x750.jpg',
        price: 900,
        quantity: 50,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 51,
        name: 'Chocolate Banana Bread',
        description: 'Chocolate and banana make a perfect combination and the result is a bread that is not too dense and will keep you going back for more.',
        category: product_1.Category.DESSERT,
        imageUrl: "https://mycookprocessor.com/wp-content/uploads/2016/03/Chocolate-Banana-Bread-1080x724.jpg",
        price: 500,
        quantity: 50,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 52,
        name: 'Oreo Cheesecake Bars',
        description: "Oreos. Cheesecake. Chocolate. Pretty top combination right there. I was super worried these would be way to rich but they were right on the mark.",
        category: product_1.Category.DESSERT,
        imageUrl: 'https://i.pinimg.com/originals/13/0a/0c/130a0c48dd6ce6cd3647853448145ccc.jpg',
        price: 700,
        quantity: 50,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 53,
        name: 'Potato Bake',
        description: "Potatos baked in cheese and cream to perfection",
        category: product_1.Category.APPETIZER,
        imageUrl: 'https://mycookprocessor.com/wp-content/uploads/2017/09/Potato-Bake-1080x720.jpg',
        price: 700,
        quantity: 50,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 54,
        name: 'Crispy Tasmanian Sea Trout Sushi',
        description: "Petuna's Tasmanian Ocean Trout has a creamy, velvet-like texture with excellent mouth feel. Even though it looks like salmon it tastes similar to trout but with its own unique umami flavor.",
        category: product_1.Category.APPETIZER,
        imageUrl: 'http://jesswords.com/wp-content/uploads/2014/07/20140705_182021.jpg',
        price: 1700,
        quantity: 50,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 55,
        name: 'Sweet Corn VeloutÉ',
        description: "Potatos baked in cheese and cream to perfection",
        category: product_1.Category.APPETIZER,
        imageUrl: 'https://cdn.shopify.com/s/files/1/0015/5068/0152/products/image_c93d31c7-920d-4eef-80a9-7c9fe65300ab.jpg?v=1629904135',
        price: 2700,
        quantity: 50,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 56,
        name: 'Black Truffle',
        description: "In the age-old battle between black and white truffles, there are opinions as there are stars in the sky. But if you love the earthy, chocolatey flavor of black truffles, well, you’ve come to the right place! There’s a reason these are called black diamonds that enveloping aroma, that intense flavor that coats a dish and your sense alike.",
        category: product_1.Category.SIDE,
        imageUrl: 'https://caputos.com/wp-content/uploads/2016/07/IMG_5189_Large__89183.jpg',
        price: 15000,
        quantity: 50,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 57,
        name: 'Yellowfin Tuna Ribbons',
        description: "The fish is immaculately fresh and tender but with a selicate bie, almost like aldente pasta",
        category: product_1.Category.APPETIZER,
        imageUrl: 'https://3.bp.blogspot.com/-OZjhn7qJR-M/Umc_bQqGXlI/AAAAAAAAGPM/Cxk8tGQ2ra0/s1600/Tuna+Ribbons+-+JG.JPG',
        price: 700,
        quantity: 50,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 58,
        name: 'King Crab Dumplings',
        description: "Dumplings are tasty, delicious steamed treats that is perfect for sharing with others! in this recipe, the filling is made with King Crab and served with a spicy chili sauce.",
        category: product_1.Category.DESSERT,
        imageUrl: 'https://harusushi.com/wp-content/uploads/2016/05/king-crab-dumplings.jpg',
        price: 1000,
        quantity: 50,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 59,
        name: 'Grenache 16',
        description: "Domaine La Colombette, `Notorious Pink`, France 2018",
        category: product_1.Category.BEVERAGE,
        imageUrl: 'https://4.bp.blogspot.com/-t3eDHCG2O_w/WiNOgAfSr6I/AAAAAAAAYNs/IGU2o7fvb2gOhceUbFxBBHleceT51_3LACK4BGAYYCw/s1600/IMG_0104.jpg',
        price: 10000,
        quantity: 50,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
    {
        id: 60,
        name: 'CÔtes De Provence 20',
        description: "Whispering Angel, Chateau d'Esclans, France 2020",
        category: product_1.Category.BEVERAGE,
        imageUrl: 'https://lacavesud.com/wp-content/uploads/2020/04/CBD5BD7F-C6F6-40C1-9983-8DFF41439542_1_201_a-scaled.jpeg',
        price: 10000,
        quantity: 50,
        ratings: __spreadArray([], (function () {
            var buffer = [];
            for (var i = 0; i < 5; i++) {
                buffer.push(Math.round(Math.random() * 3) + 2);
            }
            return buffer;
        })(), true)
    },
];
database.orders = [
// {
//     id: number;
//     orders: Product[];
//     order_note: string;
// }
];
database.transactions = [
// {
//     id: number;
//     user_id: string;
//     payment_method: string;
//     payment_amount: number;
//     delivery: boolean;
//     address: Address;
// }
];
database.users = [
// {
//     id: number;
//     email: string;
//     delivery_address: Address;
//     card: Card;
// }
];
// Data Entry End
console.log(JSON.stringify(database, undefined, 2));
