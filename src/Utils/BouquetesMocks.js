const bouquetes = [
    //mock de lo que responde el back-end
    {
        id: 1,
        titulo: 'SWEET HEART',
        precio: 129.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2Fsweet%20heart.png?alt=media&token=7ebfa982-39ab-4ccb-90e2-6cbeacb27072',
        descripcion: `CAJA EN FORMA DE CORAZÓN

        ROSAS
        
        BOTELLA DE VINO
        FERRERO ROCHER
        
        TARJETA CON MENSAJE PERSONAL`,
        categoria: 'Gif-ross-express'
    },
    {
        id: 2,
        titulo: 'LUXURY ROSS',
        precio: 79.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FLUXURY%20ROSS%202.jpg?alt=media&token=5a261024-447f-44ba-bd1f-27d21f3af4c9',
        descripcion: `ROSAS X 15

        FERRERO ROCHER X 1
        TARJETA PERSONALIZADA`,
        categoria: 'Gif-ross-express'
    },
    {
        id: 3,
        titulo: 'HAPPY ROSS EXPRESS',
        precio: 129.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FHAPPY%20ROSS%20EXPRESS%201.jpg?alt=media&token=5799e288-2fe8-4232-a45f-0a943bad59fe',
        descripcion: `ROSAS X 12

        FRESAS CUBIERTAS DE
        
        CHOCOLATE
        
        GLOBO BURBUJA X 1
        TARJETA PERSONALIZADA`,
        categoria: 'Gif-ross-express'
    },
    {
        id: 4,
        titulo: 'LUXURY ROSS',
        precio: 210.00,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FLUXURY%20ROSS%20B%201.jpg?alt=media&token=517f9893-4bff-4f79-8d3b-4ebea3515526',
        descripcion: `CAJA CON MENSAJE
        MINI BOTELLA DE VINO
        CORAZON DE ROSAS
        
        CHOCOLATES
        
        TARJETAS CON MENSAJE PER-
        SONALIZADO`,
        categoria: 'Gif-ross-express'
    },
    {
        id: 5,
        titulo: 'LOVE BOX',
        precio: 185.00,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FLOVE%20BOX.jpg?alt=media&token=4b25591c-b9e9-406b-8801-c873d74c2093',
        descripcion: `CAJA CON MENSAJE

        DECORACIÓN CON ROSAS Y
        
        CHOCOLATES
        
        TARJETA PERSONALIZADA`,
        categoria: 'Gif-ross-express'
    },
    {
        id: 6,
        titulo: 'DELUXE BOX',
        precio: 220.00,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FDELUXE%20BOX.jpg?alt=media&token=68a1f517-dabc-4b67-9996-0ffc721efbff',
        descripcion: `BOTELLA DE VINO
        CORAZON DE ROSAS
        CHOCOLATES FERRERO
        DOS COPAS MARCADAS`,
        categoria: 'Gif-ross-express'
    },
    {
        id: 7,
        titulo: 'PREMIUM WISKEY BOX',
        precio: 159.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FPREMIUM%20WISKEY%20BOX.jpg?alt=media&token=2ea50594-ed7d-425b-b7e4-97583d4027b7',
        descripcion: `MEDIA BOTELLA DE

        WISKEY
        
        CORAZÓN DE ROSAS
        
        CHOCOLATES
        
        TARJETA PERSONALIZADA
        
        Y CINTA`,
        categoria: 'Gif-ross-express'
    },
    {
        id: 8,
        titulo: 'BUCKET OF ROSES',
        precio: 89.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FBUCKET%20OF%20ROSES%201.jpg?alt=media&token=2b4c5678-4133-416f-87cc-31cac9470724',
        descripcion: `12 ROSAS

        12 FRESAS DECORADAS
        (APROXIMADAMENTE)
        
        TARJETA
        
        GLOBOS CON HELIO`,
        categoria: 'Gif-ross-express'
    },
    {
        id: 9,
        titulo: 'PINK LUXURY BOX',
        precio: 109.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FPINK%20LUXURY%20BOX%203.jpg?alt=media&token=ce7e6762-8d04-46d8-9dda-5843b7ac4a2c',
        descripcion: `ROSAS

        FERRERO ROCHER
        BOTELLA DE VINO O
        
        CHAMPAGNE`,
        categoria: 'Gif-ross-express'
    },
    {
        id: 10,
        titulo: 'DELUXE BASKET',
        precio: 59.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FDELUXE%20BASKET.jpg?alt=media&token=174b4dbe-4791-4a8a-b81d-1cfabe266b20',
        descripcion: `6 PACK DE CERVEZAS
        12 CHOCOLATES SURTIDOS
        
        TRES ROSAS`,
        categoria: 'Gif-ross-express'
    },
    {
        id: 11,
        titulo: 'PREMIUM ROSES',
        precio: 89.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FPREMIUM%20ROSES.jpg?alt=media&token=6f2f1dfe-1ad2-44c2-a117-15592fa3c34d',
        descripcion: `CAJA EN FORMA CORAZÓN
        ROSAS APROXIMADAMENTE 40.
        
        MARIPOSAS
        
        GLOBO BURBUJA`,
        categoria: 'Gif-ross-express'
    },
    {
        id: 12,
        titulo: 'DELUXE WOOD ROSES',
        precio: 89.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FDELUXE%20WOOD%20ROSES%201.jpg?alt=media&token=675a332f-5bca-4110-be27-5c2bb561423a',
        descripcion: `CAJA DE MADERA
        ROSAS SURTIDAS
        GIRASOL`,
        categoria: 'Gif-ross-express'
    },
    {
        id: 13,
        titulo: 'SWEET HEART',
        precio: 109.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FSWEET%20HEART%201.jpg?alt=media&token=fe0927e7-abb7-4781-b790-568e0b36bc51',
        descripcion: `CAJA DE CORAZON
        CHOCOLATES FERRERO
        
        ROSAS
        
        FRESAS CON CHOCOLATES`,
        categoria: 'Gif-ross-express'
    },
    {
        id: 14,
        titulo: 'BOUQUET CORAZON',
        precio: 89.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FBOUQUET%20CORAZON%201.jpg?alt=media&token=e7e1205d-9dd5-46ce-8934-ed498a631469',
        descripcion: `CAJA DE CORAZON O CAJA EN

        CÍRCULO
        ROSAS
        
        FRESAS CON CHOCOLATES O
        
        CHOCOLATES
        
        TARJETA PERSONALIZADA`,
        categoria: 'Gif-ross-express'
    },
    {
        id: 15,
        titulo: 'BOX ROSA',
        precio: 85.00,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FSWEET%20HEART.jpg?alt=media&token=1907dcba-5c12-4275-93b1-be107e5e178c',
        descripcion: `15 ROSAS

        BOTELLA DE VINO O
        
        CHAMPAGNE
        
        TARJETA PERSONALIZADA`,
        categoria: 'Gif-ross-express'
    },
    {
        id: 16,
        titulo: 'DELUXE BASKET',
        precio: 59.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FDELUXE%20BASKET.jpg?alt=media&token=174b4dbe-4791-4a8a-b81d-1cfabe266b20',
        descripcion: `6 PACK DE CERVEZAS
        12 CHOCOLATES SURTIDOS
        
        TRES ROSAS`,
        categoria: 'Gif-ross-express'
    },
    {
        id: 17,
        titulo: 'VIP BOX EXPRESS',
        precio: 169.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FVIP%20BOX%20EXPRESS%201.jpg?alt=media&token=0a7b25ed-db90-4434-acbb-0071f1b44810',
        descripcion: `PERSONALIZÁ 3 OPCIONES DE ACUERDO AL GUSTO
        CAJA DE MADERA DECORADA DE ACUERDO A LA OCASIÓN
        BUCHANANS 12 YEARS
        OLD PARR 12 YEAR
        TEQUILA PATRON SILVER
        CABERNET SAUVIGNON OR WHITE
        WINE VODKA
        FERRERO ROCHER, MANÍ, ROSAS
        VASO DE CRISTAL
        ALMENDRAS`,
        categoria: 'Vip-Box-Express'
    },
    {
        id: 18,
        titulo: 'PREMIUM PINCHER EXPRESS',
        precio: 179.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FPREMIUM%20PINCHER%20EXPRESS.jpg?alt=media&token=2d6ac8d7-3b35-4a48-bc2d-feabba58b959',
        descripcion: `BUCKET DE ALUMINIO

        CERVEZA X 4
        OLD PARR OR BUCHANAN 12 YEAR
        MINI NUTELLA X 4
        HANUTA X 1
        GLOBO CON MENSAJE
        TARJETA PERSONALIZADA`,
        categoria: 'Kit-Cervecero'
    },
    {
        id: 19,
        titulo: 'BEER PINCHER EXPRESS',
        precio: 139.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/bouquets%2FPREMIUM%20PINCHER%20EXPRESS%202.jpg?alt=media&token=62afc0d1-b2d9-4501-a755-be6a5f797bc2',
        descripcion: `BUCKET DE ALUMINIO
        CERVEZA X 4
        FRASCO DE MANÍ
        MINI NUTELLA X 4
        HANUTA X 1
        GLOBO CON MENSAJE
        TARJETA PERSONALIZADA`,
        categoria: 'Kit-Cervecero'
    },
  ]
  
    
  export default bouquetes