const bouquetes = [
	// mock de lo que responde el back-end
	{
		id: 1,
		titulo: 'SWEET HEART',
		precio: 129.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2Fsweet%20heart.png?alt=media&token=7ebfa982-39ab-4ccb-90e2-6cbeacb27072',
		descripcion: [
			'BOX IN FORM OF HEART',
			'ROSES',
			'WINE BOTTLE',
			'FERRERO ROCHER',
			'CARD WITH PERSONAL MESSAGE',
		],
		categoria: 'Gif-ross-express',
	},
	{
		id: 2,
		titulo: 'LUXURY ROSS',
		precio: 79.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FLUXURY%20ROSS%202.jpg?alt=media&token=5a261024-447f-44ba-bd1f-27d21f3af4c9',
		descripcion: ['ROSES X 15', 'FERRERO ROCHER X 1', 'PERSONALIZED CARD'],
		categoria: 'Gif-ross-express',
	},
	{
		id: 3,
		titulo: 'HAPPY ROSS EXPRESS',
		precio: 129.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FHAPPY%20ROSS%20EXPRESS%201.jpg?alt=media&token=5799e288-2fe8-4232-a45f-0a943bad59fe',
		descripcion: [
			'ROSES X 12',
			'COVERED STRAWBERRIES',
			'CHOCOLATE',
			'BUBBLE BALLOON X 1',
			'PERSONALIZED CARD',
		],
		categoria: 'Gif-ross-express',
	},
	{
		id: 4,
		titulo: 'LUXURY ROSS',
		precio: 210.0,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FLUXURY%20ROSS%20B%201.jpg?alt=media&token=517f9893-4bff-4f79-8d3b-4ebea3515526',
		descripcion: [
			'BOX WITH MESSAGE',
			'MINI BOTTLE OF WINE',
			'HEART OF ROSES',
			'CHOCOLATES',
			'CARDS WITH SOUNDED PERSONAL MESSAGE',
		],
		categoria: 'Gif-ross-express',
	},
	{
		id: 5,
		titulo: 'LOVE BOX',
		precio: 185.0,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FLOVE%20BOX.jpg?alt=media&token=4b25591c-b9e9-406b-8801-c873d74c2093',
		descripcion: [
			'BOX WITH MESSAGE',
			'DECORATION WITH ROSES AND CHOCOLATES',
			'PERSONALIZED CARD',
		],
		categoria: 'Gif-ross-express',
	},
	{
		id: 6,
		titulo: 'DELUXE BOX',
		precio: 220.0,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FDELUXE%20BOX.jpg?alt=media&token=68a1f517-dabc-4b67-9996-0ffc721efbff',
		descripcion: [
			'WINE BOTTLE',
			'HEART OF ROSES',
			'FERRERO CHOCOLATES',
			'TWO MARKED GLASSES',
		],
		categoria: 'Gif-ross-express',
	},
	{
		id: 7,
		titulo: 'PREMIUM WISKEY BOX',
		precio: 159.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FPREMIUM%20WISKEY%20BOX.jpg?alt=media&token=2ea50594-ed7d-425b-b7e4-97583d4027b7',
		descripcion: [
			'HALF BOTTLE OF WHISKEY',
			'HEART OF ROSES',
			'CHOCOLATES',
			'PERSONALIZED CARD AND RIBBON',
		],
		categoria: 'Gif-ross-express',
	},
	{
		id: 8,
		titulo: 'BUCKET OF ROSES',
		precio: 89.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FBUCKET%20OF%20ROSES%201.jpg?alt=media&token=2b4c5678-4133-416f-87cc-31cac9470724',
		descripcion: [
			'12 ROSES',
			'12 DECORATED STRAWBERRIES (APPROXIMATELY)',
			'CARD',
			'BALLOONS WITH HELIUM',
		],
		categoria: 'Gif-ross-express',
	},
	{
		id: 9,
		titulo: 'PINK LUXURY BOX',
		precio: 109.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FPINK%20LUXURY%20BOX%203.jpg?alt=media&token=ce7e6762-8d04-46d8-9dda-5843b7ac4a2c',
		descripcion: ['ROSES', 'FERRERO ROCHER', 'BOTTLE OF WINE OR CHAMPAGNE'],
		categoria: 'Gif-ross-express',
	},
	{
		id: 10,
		titulo: 'DELUXE BASKET',
		precio: 59.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FDELUXE%20BASKET.jpg?alt=media&token=174b4dbe-4791-4a8a-b81d-1cfabe266b20',
		descripcion: ['6 PACK OF BEERS', '12 ASSORTED CHOCOLATES', 'THREE ROSES'],
		categoria: 'Gif-ross-express',
	},
	{
		id: 11,
		titulo: 'PREMIUM ROSES',
		precio: 89.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FPREMIUM%20ROSES.jpg?alt=media&token=6f2f1dfe-1ad2-44c2-a117-15592fa3c34d',
		descripcion: [
			'HEART SHAPE BOX',
			'ROSES APPROXIMATELY 40.',
			'BUTTERFLIES',
			'BUBBLE BALLOON',
		],
		categoria: 'Gif-ross-express',
	},
	{
		id: 12,
		titulo: 'DELUXE WOOD ROSES',
		precio: 89.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FDELUXE%20WOOD%20ROSES%201.jpg?alt=media&token=675a332f-5bca-4110-be27-5c2bb561423a',
		descripcion: ['WOODEN BOX', 'ASSORTED ROSES', 'SUNFLOWER'],
		categoria: 'Gif-ross-express',
	},
	{
		id: 13,
		titulo: 'SWEET HEART',
		precio: 109.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FSWEET%20HEART%201.jpg?alt=media&token=fe0927e7-abb7-4781-b790-568e0b36bc51',
		descripcion: [
			'HEART BOX',
			'FERRERO CHOCOLATES',
			'ROSES',
			'STRAWBERRIES WITH CHOCOLATES',
		],
		categoria: 'Gif-ross-express',
	},
	{
		id: 14,
		titulo: 'BOUQUET CORAZON',
		precio: 89.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FBOUQUET%20CORAZON%201.jpg?alt=media&token=e7e1205d-9dd5-46ce-8934-ed498a631469',
		descripcion: [
			'HEART BOX OR BOX IN CIRCLE',
			'ROSES',
			'STRAWBERRIES WITH CHOCOLATES OR CHOCOLATES',
			'PERSONALIZED CARD',
		],
		categoria: 'Gif-ross-express',
	},
	{
		id: 15,
		titulo: 'BOX ROSA',
		precio: 85.0,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FSWEET%20HEART.jpg?alt=media&token=1907dcba-5c12-4275-93b1-be107e5e178c',
		descripcion: [
			'15 ROSES',
			'BOTTLE OF WINE OR CHAMPAGNE',
			'PERSONALIZED CARD',
		],
		categoria: 'Gif-ross-express',
	},
	{
		id: 16,
		titulo: 'DELUXE BASKET',
		precio: 59.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FDELUXE%20BASKET.jpg?alt=media&token=174b4dbe-4791-4a8a-b81d-1cfabe266b20',
		descripcion: ['6 PACK OF BEERS', '12 ASSORTED CHOCOLATES', 'THREE ROSES'],
		categoria: 'Gif-ross-express',
	},
	{
		id: 17,
		titulo: 'VIP BOX EXPRESS',
		precio: 169.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FVIP%20BOX%20EXPRESS%201.jpg?alt=media&token=0a7b25ed-db90-4434-acbb-0071f1b44810',
		descripcion: [
			'CUSTOMIZE 3 OPTIONS ACCORDING TO TASTE',
			'WOODEN BOX DECORATED ACCORDING TO THE OCCASION',
			'BUCHANS 12 YEARS',
			'OLD PARR 12 YEARS',
			'PATRON SILVER TEQUILA',
			'CABERNET SAUVIGNON OR WHITE',
			'WINE VODKA',
			'FERRERO ROCHER, PEANUTS, ROSES',
			'CRYSTAL GLASS',
			'ALMONDS',
		],
		categoria: 'Vip-Box-Express',
	},
	{
		id: 18,
		titulo: 'PREMIUM PINCHER EXPRESS',
		precio: 179.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FPREMIUM%20PINCHER%20EXPRESS.jpg?alt=media&token=2d6ac8d7-3b35-4a48-bc2d-feabba58b959',
		descripcion: [
			'ALUMINUM BUCKET',
			'BEER X 4',
			'OLD PARR OR BUCHANAN 12 YEARS',
			'MINI NUTELLA X 4',
			'HANUTA X 1',
			'BALLOON WITH MESSAGE',
			'PERSONALIZED CARD',
		],
		categoria: 'Kit-Cervecero',
	},
	{
		id: 19,
		titulo: 'BEER PINCHER EXPRESS',
		precio: 139.99,
		imagen:
			'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FPREMIUM%20PINCHER%20EXPRESS%202.jpg?alt=media&token=62afc0d1-b2d9-4501-a755-be6a5f797bc2',
		descripcion: [
			'ALUMINUM BUCKET',
			'BEER X 4',
			'PEANUT JAR',
			'MINI NUTELLA X 4',
			'HANUTA X 1',
			'BALLOON WITH MESSAGE',
			'PERSONALIZED CARD',
		],
		categoria: 'Kit-Cervecero',
	},
];

export default bouquetes;
