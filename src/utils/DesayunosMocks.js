const desayunos = [
	// mock de lo que responde el back-end
	{
		id: 1,
		titulo: 'DELUXE LOVE TRAY',
		precio: 139.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/DELUXE%20LOVE%20TRAY.jpg?alt=media&token=613ebced-b072-4b66-9e86-001e679fa78f',
		descripcion: [
			'BOTTLE OF WINE IN AN ALUMINUM BUCKET',
			'WINE GLASSES X 2',
			'PORTRAIT AND A MUG',
			'YOGURT WITH CEREAL',
			'ARRANGEMENT OF ROSES',
			'WOODEN TRAY DECORATED WITH TABLECLOTH AND CARD',
			'5 METALLIC BALLOONS WITH HELIUM',
		],

		categoria: 'Express-Breakfast',
	},
	{
		id: 2,
		titulo: 'SWEET LOVE TRAY',
		precio: 139.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/SWEET%20LOVE%20TRAY.jpg?alt=media&token=350f4026-7dc9-440e-ae0d-71bdffd7f902',
		descripcion: [
			'GLASS TRAY',
			'MINI CHAMPAGNE',
			'NUTELLA OR STRARBUCKS COFFEE',
			'PANCAKE X 4 WITH STRAWBERRIES',
			'PORTRAIT DOOR',
			'YOGURT WITH GRANOLA',
			'ORANGE JUICE',
			'BISCUITS',
			'FERRERO ROCHER CHOCOLATE',
			'5 METALLIC BALLOONS WITH HELIUM',
		],
		categoria: 'Express-Breakfast',
	},
	{
		id: 3,
		titulo: 'SWEET TRAY',
		precio: 139.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/SWEET%20TRAY.jpg?alt=media&token=c81d6b0b-801a-48ce-a077-e8561fc41250',
		descripcion: [
			'WOODEN TRAY',
			'BOW OF BALLOONS',
			'MINI BOUQUET OF FLOWERS',
			'PARFAIT (CEREAL, YOGURT, STRAWBERRIES)',
			'SANDWICH (HAM, CHEESE, MIXED LETTUCE, TOMATO) OR (WAFFLES WITH FRUIT AND SYRUP)',
			'MINI NUTELLA',
			'CHOCOLATES',
			'NUTS',
			'ORANGE JUICE',
			'MARKED CUP',
			'STARBUCKS COFFEE',
			'PERSONALIZED CARD',
		],
		categoria: 'Love-Tray',
	},
	{
		id: 4,
		titulo: 'DELUXE CAKE TRAY',
		precio: 149.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/DELUXE%20CAKE%20TRAY%201.jpg?alt=media&token=cbc6e701-6049-467f-b532-59b5af060e41',
		descripcion: [
			'DECORATED AND PERSONALIZED TRAY WITH MESSAGE IN THE BACKGROUND',
			'MINI PROSECCO',
			'ORANGE JUICE',
			'MARKED CUP',
			'STARBUCKS COLD COFFEE',
			'WAFFLES WITH STRAWBERRIES AND BLUEBERRIES',
			'SYRUP',
			'NUTELLA',
			'2 CLUB SANDWICH (HAM, CHEESE, TOMATE, MIX OF LETTUCE)',
			'MINI CAKE',
			'PARFAIT (GREEK YOGURT, STRAWBERRIES, BLUEBERRIES, KIWI)',
			'CHOCOLATES',
			'FLOWER BOUQUET',
			'CARD',
			'BUBBLE BALLOON X 1 OR 4 BALLOONS',
			'WITH HELIUM',
		],
		categoria: 'Deluxe-Cake-Tray',
	},
	{
		id: 5,
		titulo: 'ANIVERSARY TRAY',
		precio: 139.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/ANIVERSARY%20TRAY%202.jpg?alt=media&token=f835a34e-26c4-47aa-963e-5b60539b8f40',
		descripcion: [
			'WOODEN TRAY',
			'BOW OF BALLOONS',
			'MINI BOUQUET OF FLOWERS',
			'PARFAIT (CEREAL, YOGURT, STRAWBERRIES)',
			'SANDWICH (HAM, CHEESE, MIX OF LETTUCE, TOMATO) OR (WAFFLES WITH FRUITS AND SYRUP)',
			'MINI NUTELLA',
			'CHOCOLATES',
			'NUTS',
			'ORANGE JUICE',
			'MARKED CUP',
			'STARBUCKS COFFEE',
			'PERSONALIZED CARD',
			'PHOTOGRAPHS',
			'HELIUM BALLOONS',
		],
		categoria: 'Luxury-Tray-Express',
	},
	{
		id: 6,
		titulo: 'CELEBRATION TRAY',
		precio: 149.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/CELEBRATION%20TRAY%202.jpg?alt=media&token=19aea308-98aa-4ba4-ac4d-b072d0228746',
		descripcion: [
			'MINI CAKE',
			'LARGE BOTTLE OF WINE OR CHAMPAGNE',
			'TWO MARKED GLASSES',
			'BOX OF DECORATED STRAWBERRIES',
			'FLOWER BOUQUET',
			'FERREROS X 6',
			'CHARCUTERY (PROSCIUTTO, CHEESE)',
		],
		categoria: 'Luxury-Tray-Express',
	},
	{
		id: 7,
		titulo: 'DELUXE MINI TRAY',
		precio: 89.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/DELUXE%20MINI%20TRAY%201.jpg?alt=media&token=2250b7c8-209a-44aa-ac1e-6e8ec6b24416',
		descripcion: [
			'DELUXE MINI TRAY',
			'HAM AND CHEESE SANDWICH',
			'ORANGE JUICE',
			'MINI BOUQUET OF FLOWERS',
			'FRUITS',
			'MINI NUTELLA',
			'BALLOON BOUQUET',
			'MESSAGE AND PERSONALIZED CARD',
		],
		categoria: 'Luxury-Tray-Express',
	},
	{
		id: 8,
		titulo: 'LOVE FOR TWO',
		precio: 189.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/LOVE%20FOR%20TWO.jpg?alt=media&token=324e958e-cffa-42f1-a19b-84adefffe1a4',
		descripcion: [
			'WRAPS X 4 (HAM AND CHEESE, LETTUCE, TOMATO AND HOUSE SAUCE) AND MINI WAFFLES',
			'FRUIT SALAD TWO APPLE, STRAWBERRIES AND GRAPES',
			'2 PREMIUM INSTANT JUAN VALDEZ COFFEE OR COFFEE',
			'INSTANT STARBUCKS',
			'2 ORANGE JUICES',
			'FERRERO ROCHER CHOCOLATES',
			'MINI BOX WITH ARRANGEMENT OF 9 ROSES',
			'2 WELLS, LONG TRAY DECORATED WITH TABLECLOTH BOW, BUBBLE BALLOON AND PERSONALIZED CARD',
		],
		categoria: 'Luxury-Tray-Express',
	},
	{
		id: 9,
		titulo: 'SWEET BURBUJA',
		precio: 89.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/SWEET%20BURBUJA%201.jpg?alt=media&token=5605a4c7-4b5c-4f1b-8281-8ec29ddebf4b',
		descripcion: [
			'HAM AND CHEESE SANDWICH',
			'ORANGE JUICE OR SANGRIA',
			'WAFERS',
			'HERSHEY´S CHOCOLATE',
			'BUBBLE BALLOON WITH MESSAGE',
			'WOODEN BASE WITH TABLECLOTH',
			'YOGURT',
			'PERSONALIZED CARD',
		],
		categoria: 'Kit-Burbuja-Express',
	},
	{
		id: 10,
		titulo: 'DELUXE MUGS BURBUJA',
		precio: 89.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/DELUXE%20MUGS%20BURBUJA.jpg?alt=media&token=878ee808-2b41-4399-b20e-1a704eb787ae',
		descripcion: [
			'WOOD BASE',
			'ORANGE JUICE',
			'HAM AND CHEESE SANDWICH',
			'YOGURT WITH CEREAL',
			'BUCKET',
			'MANGO OR APPLE BOX',
			'WAFER X 2',
			'SMALL BALLOONS X 3, X 1 BUBBLE',
			'PERSONALIZED CARD',
		],
		categoria: 'Kit-Burbuja-Express',
	},
	{
		id: 11,
		titulo: 'PREMIUM TEENS EXPRESS',
		precio: 109.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/PREMIUM%20TEENS%20EXPRESS%201.jpg?alt=media&token=518f1e82-d8cb-48f9-9809-a62f2954469d',
		descripcion: [
			'WOODEN TRAY WITH RAINBOW',
			'BALLOONS AND BUBBLE BALLOON X 1',
			'HAM AND CHEESE SANDWICH',
			'BROWNIS BOX',
			'ORANGE JUICE',
			'YOGURT WITH CEREAL',
			'OREO COOKIES',
			'APPLE',
			'PERSONALIZED CARD',
			'BALLOON WITH MESSAGE',
			'OPTIONAL BOTTLE OF WINE OR HATSUTE',
			'2 PRINTED PHOTOS',
		],
		categoria: 'Teens',
	},
	{
		id: 12,
		titulo: 'ESPECIAL MOMENTS TEENS',
		precio: 89.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/PREMIUM%20TEENS%20EXPRESS%202.jpg?alt=media&token=6d08de17-c929-4f26-877f-14f5bf0ee44d',
		descripcion: [
			'HAM AND CHEESE SANDWICH',
			'ORANGE JUICE',
			'MINI PRINGLES',
			'FRUITS',
			'MINI NUTELLA',
			'LOLLIPOPS',
			'HATSU TEA OR BOTTLE OF WINE (OPTIONAL)',
			'BALLOON BOUQUET',
			'MESSAGE CARD CUSTOMIZED',
		],
		categoria: 'Teens',
	},
	{
		id: 13,
		titulo: 'ESPECIAL THEME BIRTHDAY',
		precio: 89.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/ESPECIAL%20THEME%20BIRTHDAY%201.jpg?alt=media&token=85be42d0-9c45-4a54-aa72-3a13fb880fba',
		descripcion: [
			'WOODEN BASKET',
			'THEMED CUSTOM FAVORITE CHOSEN BY YOU',
			'TWO THEMED BALLOONS',
			'FAVORITE HAM AND CHEESE SANDWICH',
			'YOGURT WITH CEREAL',
			'THEMATIC GLASS',
			'KINDER SURPRISE',
			'TABLECLOTH',
			'ORANGE JUICE',
			'MINI PRINGLES',
			'THEMATIC STICKERS',
			'CARD WITH MESSAGE PERSONALIZED',
		],
		categoria: 'Kids',
	},
	{
		id: 14,
		titulo: 'BREAKFAST SPECIAL',
		precio: 89.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/BREAKFAST%20SPECIAL.jpg?alt=media&token=1e308c3e-32b4-47fb-b557-808c39bd031d',
		descripcion: [
			'PERSONALIZED CARD',
			'FAVORITE CHARACTER BALLOON',
			'HAM AND CHEESE SANDWICH OR WAFFLES',
			'YOGURT WITH CEREAL',
			'CUPCAKES X 3',
			'ANIMATED GLASS',
			'CHIPS',
			'NESQUIK',
		],
		categoria: 'Kids',
	},
	{
		id: 15,
		titulo: 'DELUXE SWEET BIRTHDAY',
		precio: 89.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/DELUXE%20SWEET%20BIRTHDAY.jpg?alt=media&token=197c1f35-b136-4369-900b-fe4c1abc13fc',
		descripcion: [
			'WOODEN OR GLASS TRAY',
			'BASKET WITH CHOCOLATES',
			'STRAWBERRIES COVERED WITHCOFFEE OR WHITE CHOCOLATE',
			'BOX WITH ROSES X 8',
			'RAINBOW BALLOONS',
			'CUSTOM CAKE',
			'(FAVORITE CHARACTER) PERSONALIZED CARD',
		],
		categoria: 'Kids',
	},
	{
		id: 16,
		titulo: 'PICNIC BIRTHDAY',
		precio: 69.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/PICNIC%20BIRTHDAY.jpg?alt=media&token=6f7e9c89-8d61-4457-8f88-faa4c90bc472',
		descripcion: [
			'ORANGE JUICE',
			'YOGURT WITH CEREAL',
			'RITZ CRACKERS BISCUITS',
			'DECORATED BOX WITH MESSAGE',
			'2 WRAP WITH HAM AND LETTUCE',
			'FRUIT BOX: GRAPES AND STRAWBERRIES',
			'TABLECLOTH AND METALLIC BALLOON WITH MESSAGE',
		],
		categoria: 'Picnic-Box-Express',
	},
	{
		id: 17,
		titulo: 'EXPRESS PICNIC',
		precio: 69.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/EXPRESS%20PICNIC.jpg?alt=media&token=6adf3b1a-dbd1-4310-9ddb-e759942ddb29',
		descripcion: [
			'MINI BROWNIES',
			'ORANGE JUICE',
			'HOUSE SAUCE',
			'HAM AND CHEESE CROISSANT WITH LETTUCE',
			'ALMENTA OR PEANUTS IN PACKAGING',
			'JAR WITH FRUITS',
			'LITTLE CARDBOARD BOX WITH 3 BALLOONS',
			'TABLECLOTH AND PERSONALIZED CARD',
		],
		categoria: 'Picnic-Box-Express',
	},
	{
		id: 18,
		titulo: 'LUXURY PICNIC',
		precio: 149.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/LUXURY%20PICNIC.jpg?alt=media&token=089480ae-d6d2-4345-a370-d954fae54bc7',
		descripcion: [
			'WOODEN BOX PERSONALIZED WITH THE NAME',
			'HAM AND CHEESE SANDWICH LETTUCE AND TOMATO, HOUSE SAUCE.',
			'CHARCUTERIA CHEESE PLATE',
			'SALAMI, CHEESE AND HAM',
			'FRUIT BOWL',
			'ORANGE JUICE',
			'STARBUCKS COFFEE',
			'FERRERO CHOCOLATES X3',
			'BOTTLE OF WINE OR CHAMPAGNE',
			'GLASS OF WINE BRAND',
			'PERSONALIZED CARD',
			'BUBBLE BALLOON',
		],
		categoria: 'Picnic-Box-Express',
	},
	{
		id: 19,
		titulo: 'FITNESS BOX',
		precio: 139.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/FITNESS%20BOX%201.jpg?alt=media&token=9109667b-41a0-44ec-9c75-4b5a4316f435',
		descripcion: [
			'GREEN JUICE (APPLE, MANGO, BROCCOLI, SPINACH, GINGER, PINEAPPLE,KIWI)',
			'NATURAL ORANGE JUICE',
			'SANDWICH (INTEGRAL BREAD, TURKEY HAM, CHEESE, MIX OF LETTUCE, TOMATO)',
			'GREEK YOGURT BOWL, CHIA SEEDS, STRAWBERRIES, KIWI, GRANOLA',
			'POWER CRUSH PROTEIN BAR',
			'WHOLE MUFFIN',
			'NUTS',
			'LOW SUGAR COCOA BAR',
			'CUTLERY',
			'WOODEN BOX AND SIGN',
			'SUCCULENT',
			'CARD',
			'BALLOONS',
		],
		categoria: 'Picnic-Box-Express',
	},
	{
		id: 20,
		titulo: `HAPPY FATHER'S DAY
       BOX EXPRESS`,
		precio: 89.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/HAPPY%20FATHER_S%20DAY%20-%20BOX%20EXPRESS.jpg?alt=media&token=44f55c2d-3927-4476-9b97-bdd368c025fa',
		descripcion: [
			'PIROULINE WAFERS',
			'MEDIUM WOODEN BOX',
			'YOGURT WITH CEREAL',
			'3 SMALL BALLOONS, 1 LARGE',
			'HAM AND CHEESE SANDWICH',
			'BEER X 1',
			'DECORATIVE PLANT',
			'PERSONALIZED CARD',
		],
		categoria: 'Special-Fathers-Day',
	},
	{
		id: 21,
		titulo: `SWEET TRAY HAPPY FATHER'S DAY`,
		precio: 129.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/SWEET%20TRAY%20HAPPY%20FATHER_S%20DAY.jpg?alt=media&token=6f6d797b-6c16-41e7-bdc3-e38ac90df236',
		descripcion: [
			'DECORATED BREAKFAST TRAY WITH 3 BALLOONS',
			'1 SIMPLE FLORAL ARRANGEMENT',
			'JP CHENET BOTTLE',
			'HAM AND CHEESE SANDWICH',
			'CEREAL CONTAINER, YOGURT CONTAINER',
			'MINI BEOWNIE',
			'BOX WITH HANDLE, HATSU TE',
			'PRINGLE POTATOES (175GR)',
			'PEANUTS, M&M CHOCOLATES',
			'PERSONALIZED CARD OF THE DAY OF DAD',
		],
		categoria: 'Special-Fathers-Day',
	},
	{
		id: 22,
		titulo: `MINI BEST DAD`,
		precio: 89.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/MINI%20BEST%20DAD.jpg?alt=media&token=113e451b-b21f-4645-858d-75ff2929519a',
		descripcion: [
			'DECORATIVE BOX',
			'LATEX BALLOONS',
			'BALLOONS WITH HELIUM',
			'CLUB SANDWICH (HAM, CHEESE, MIX OF LETTUCE, TOMATO, RANCH SAUCE, GRANOLA, STRAWBERRIES, BLUEBERRIES, YOGURT)',
			'FERRERO CHOCOLATES',
			'BISCUITS',
			'ORANGE JUICE',
			'TWO CROWNS',
			'STARBUCKS COLD COFFEE',
			'CUTLERY',
			'CARD',
		],
		categoria: 'Special-Fathers-Day',
	},
	{
		id: 23,
		titulo: `EXPRESS NEWS DAD`,
		precio: 79.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/EXPRESS%20NEWS%20DAD%201.jpg?alt=media&token=59151edd-6fa0-43cf-9b56-94ccd5062e9e',
		descripcion: [
			'CARTON BOX NEWS',
			'2 CLUB SANDWICH (HAM, CHEESE, MIX OF LETTUCE, TOMATO)',
			'WAFFLES WITH STRAWBERRIES AND BLUEBERRIES',
			'(YOGURT, STRAWBERRIES AND BLUEBERRIES)',
			'SYRUP',
			'NUTELLA',
			'FERRERO CHOCOLATES',
			'CHOCOLATE CHIPS BISCUITS',
			'3 MINI CUPCAKES',
			'ORANGE JUICE',
			'SLICED CHEESE AND PROCIUTTO',
			'CARD',
		],
		categoria: 'Special-Fathers-Day',
	},
	{
		id: 24,
		titulo: `PREMIUN BEST DAD`,
		precio: 159.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/PREMIUN%20BEST%20DAD.jpg?alt=media&token=95066828-a5db-4e0e-a07f-8bbdd4dc1f1f',
		descripcion: [
			'WOODEN TRAY',
			'HELIUM BALLOONS X4',
			'BOW OF BALLOONS',
			'MINI CAKE WITH MINI LIQUOR',
			'PARFAIT (CEREAL, YOGURT, STRAWBERRIES)',
			'2 SANDWICH (HAM, CHEESE, MIX OF LETTUCE, TOMATO)',
			'FERRERO CHOCOLATES X3',
			'ORANGE JUICE',
			'MARKED BEER GLASS',
			'2 CORONA BEERS',
			'1 MINI CHAMPAGNE',
			'STARBUCKS COFFEE',
			'CARD',
		],
		categoria: 'Special-Fathers-Day',
	},
	{
		id: 25,
		titulo: `PREMIUM BEST MOM`,
		precio: 139.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/PREMIUM%20BEST%20MOM.jpg?alt=media&token=e605db88-ec8a-4357-a0c9-0da83acafb14',
		descripcion: [
			'WOODEN TRAY WITH ARCH',
			'FLOWER BOUQUET',
			'TABLECLOTH',
			'ORANGE JUICE',
			'STARBUCKS COFFEE',
			'BOWL WITH FRUITS',
			'CEREAL',
			'YOGURT',
			'CLASSIC SANDWICH OR WAFFLES.',
			'ARCH OF BALLOONS',
			'CUSTOM MUGS',
			'CARD WITH PERSONALIZED MESSAGE',
		],
		categoria: 'Special-Mothers-Day',
	},
	{
		id: 26,
		titulo: `DELUXE BEST MOM`,
		precio: 139.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/DELUXE%20BEST%20MOM.jpg?alt=media&token=ca8f6345-ad10-461f-b574-8d86107cb4ff',
		descripcion: [
			'WOODEN BOX WITH FLOWERS',
			'TABLECLOTH',
			'ORANGE JUICE',
			'GLASS GLASS WITH FRUITS',
			'CEREAL BISCUITS',
			'YOGURT WITH GRANOLA',
			'CLASSIC SANDWICH OR WAFFLES.',
			'2 BALLOONS WITH HELIUM',
			'CARD WITH PERSONALIZED MESSAGE',
		],
		categoria: 'Special-Mothers-Day',
	},
	{
		id: 27,
		titulo: `MINI SWEET MOM`,
		precio: 79.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/MINI%20SWEET%20MOM%201.jpg?alt=media&token=ab68b4e3-67eb-4e08-8814-78c5015934df',
		descripcion: [
			'MARKED WOODEN BOX',
			'CLUB SANDWICH (HAM, CHEESE, TOMATO, MIX OF LETTUCE, RANCH SAUCE, PARMESAN CHEESE)',
			'YOGURT, STRAWBERRIES, GRANOLA',
			'ORANGE JUICE',
			'FERRERO CHOCOLATES',
			'CUTLERY',
			'BALLOON ARCH WITH BUTTERFLY',
			'MINI BOUQUET OF FLOWERS',
			'CARD',
		],
		categoria: 'Special-Mothers-Day',
	},
	{
		id: 28,
		titulo: `MINI SAN VALENTINE`,
		precio: 89.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/MINI%20SAN%20VALENTINE.jpg?alt=media&token=40a10209-2c93-4ae3-8d76-fc5118b7b551',
		descripcion: [
			'MARKED WOODEN BOX',
			'ARCH OF BALLOONS',
			'2 CLUB SANDWICH',
			'(HAM, CHEESE, TOMATO, MIX OF LETTUCE, RANCH SAUCE, PARMESAN CHEESE)',
			'PARFAIT (YOGURT, STRAWBERRIES, GRANOLA)',
			'ORANGE JUICE',
			'PIROULINE BOX',
			'FERRERO CHOCOLATE X 6',
			'CUTLERY',
			'PERSONALIZED CARD',
		],
		categoria: 'Special-Valentines-Day',
	},
	{
		id: 29,
		titulo: `LUXURY MY VALENTÍNE`,
		precio: 149.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/LUXURY%20MY%20VALENTÍNE%201.jpg?alt=media&token=31a21e03-3742-4673-8eb4-efef37f21b93',
		descripcion: [
			'BLACK OR WHITE WOODEN TRAY',
			'HELIUM BALLOONS X6',
			'PUT WITH MESSAGE',
			'PARFAIT (CEREAL, YOGURT, STRAWBERRIES)',
			'2 SANDWICH (HAM, CHEESE, MIX OF LETTUCE, TOMATO) OR WAFFLES WITH NUTELLA',
			'FERRERO CHOCOLATES X3',
			'ORANGE JUICE',
			'NUTS',
			'PIROULINO BOX',
			'CUTLERY',
			'MARKED WINE GLASS',
			'MINI CHAMPAGNE',
			'3 CORONA BEERS',
			'STARBUCKS COFFEE',
			'PERSONALIZED CARD',
		],
		categoria: 'Special-Valentines-Day',
	},
	{
		id: 30,
		titulo: `MY VALENTÍNE MINI BOX`,
		precio: 69.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/MY%20VALENTÍNE%20MINI%20BOX.jpg?alt=media&token=d4ad8bf7-b913-4b05-8374-84e6fff6738d',
		descripcion: [
			'MARKED BOX WITH SPECIAL MESSAGE',
			'2 CLUB SANDWICH (HAM, CHEESE, TOMATO, MIX OF LETTUCE, RANCH SAUCE, PARMESAN CHEESE)',
			'PARFAIT (YOGURT, STRAWBERRIES, GRANOLA)',
			'ORANGE JUICE',
			'M&M BOX',
			'COOKIES WITH CHIPS',
			'CUTLERY',
			'PERSONALIZED CARD',
			'HELIUM BALLOONS X2',
		],
		categoria: 'Special-Valentines-Day',
	},
];

export default desayunos;