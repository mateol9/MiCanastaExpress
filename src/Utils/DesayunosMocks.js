const desayunos = [
    //mock de lo que responde el back-end
    {
        id: 1,
        titulo: 'DELUXE LOVE TRAY',
        precio: 139.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/DELUXE%20LOVE%20TRAY.jpg?alt=media&token=613ebced-b072-4b66-9e86-001e679fa78f',
        descripcion: `BOTELLA DE VINO EN UN BUCKET DE ALUMINIO
        COPAS DE VINO X 2
        PORTARETRATO Y UN MUG
        YOGURT CON CEREAL
        ARREGLO DE ROSAS
        BANDEJA DE MADERA DECORADA CON MANTEL Y
        TARJETA
        5 GLOBOS METÁLICOS CON HELIO`,
        categoria: 'Express-Breakfast'
    },
    {
        id: 2,
        titulo: 'SWEET LOVE TRAY',
        precio: 139.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/SWEET%20LOVE%20TRAY.jpg?alt=media&token=350f4026-7dc9-440e-ae0d-71bdffd7f902',
        descripcion: `BANDEJA DE CRYSTAL
        MINI CHAMPAGNE
        NUTELLA O STRARBUCKS CAFÉ
        PANCAKE X 4 CON FRESAS
        PORTARETRATO
        YOGURT CON GRANOLA
        JUGO DE NARANJA
        GALLETAS
        FERRERO ROCHER CHOCOLATE
        5 GLOBOS METÁLICOS CON HELIO`,
        categoria: 'Express-Breakfast'
    },
    {
        id: 3,
        titulo: 'SWEET TRAY',
        precio: 139.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/SWEET%20TRAY.jpg?alt=media&token=c81d6b0b-801a-48ce-a077-e8561fc41250',
        descripcion: `BANDEJA DE MADERA
        ARCO DE GLOBOS
        MINI BOUQUET DE FLORES
        PARFAIT (CEREAL, YOGURT, FRESAS)
        SÁNDWICH (JAMÓN, QUESO, MIX DE LECHUGAS,
        TOMATE) O (WAFFLES CON FRUTAS Y SYRUP)
        MINI NUTELLA
        CHOCOLATES
        FRUTOS SECOS
        JUGO DE NARANJA
        COPA MARCADA
        CAFÉ STARBUCKS
        TARJETA PERSONALIZADA`,
        categoria: 'Love-Tray'
    },
    {
        id: 4,
        titulo: 'DELUXE CAKE TRAY',
        precio: 149.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/DELUXE%20CAKE%20TRAY%201.jpg?alt=media&token=cbc6e701-6049-467f-b532-59b5af060e41',
        descripcion: `TRAY DECORADA Y PERSONALIZADA
        CON MENSAJE EN EL FONDO
        MINI PROSECCO
        JUGO DE NARANJA
        COPA MARCADA
        CAFÉ FRIO STARBUCKS
        WAFFLES CON FRESAS Y ARÁNDANOS
        SYRUP
        NUTELLA
        2 SÁNDWICH CLUB (JAMÓN, QUESO,
        TOMÁTE, MIX DE LECHUGAS)
        MINI CAKE
        PARFAIT (YOGURT GRIEGO,FRESAS,
        ARÁNDANOS, KIWI)
        CHOCOLATES
        BOUQUET DE FLORES
        TARJETA
        GLOBO BURBUJA X 1 O 4 GLOBOS
        CON HELIO`,
        categoria: 'Deluxe-Cake-Tray'
    },
    {
        id: 5,
        titulo: 'ANIVERSARY TRAY',
        precio: 139.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/ANIVERSARY%20TRAY%202.jpg?alt=media&token=f835a34e-26c4-47aa-963e-5b60539b8f40',
        descripcion: `BANDEJA DE MADERA
        ARCO DE GLOBOS
        
        MINI BOUQUET DE FLORES
        
        PARFAIT (CEREAL, YOGURT, FRESAS)
        
        SÁNDWICH (JAMÓN, QUESO, MIX DE LE-
        CHUGAS, TOMATE) O (WAFFLES CON
        
        FRUTAS Y SYRUP)
        MINI NUTELLA
        CHOCOLATES
        FRUTOS SECOS
        JUGO DE NARANJA
        COPA MARCADA
        CAFÉ STARBUCKS
        
        TARJETA PERSONALIZADA
        
        FOTOGRAFÍAS
        GLOBOS HELIO`,
        categoria: 'Luxury-Tray-Express'
    },
    {
        id: 6,
        titulo: 'CELEBRATION TRAY',
        precio: 149.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/CELEBRATION%20TRAY%202.jpg?alt=media&token=19aea308-98aa-4ba4-ac4d-b072d0228746',
        descripcion: `MINI CAKE

        BOTELLA GRANDE DE VINO O
        
        CHAMPAGNE
        
        DOS COPAS MARCADAS
        BOX DE FRESAS DECORADAS
        
        BOUQUET DE FLORES
        FERREROS X 6
        
        CHARCUTERÍA (PROSCIUTTO, QUESO)`,
        categoria: 'Luxury-Tray-Express'
    },
    {
        id: 7,
        titulo: 'DELUXE MINI TRAY',
        precio: 89.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/DELUXE%20MINI%20TRAY%201.jpg?alt=media&token=2250b7c8-209a-44aa-ac1e-6e8ec6b24416',
        descripcion: `DELUXE MINI TRAY

        SANDUCHE DE JAMÓN Y QUESO
        
        JUGO DE NARANJA
        MINI BOUQUET DE FLORES
        
        FRUTAS
        
        MINI NUTELLA
        BOUQUET DE GLOBOS
        
        MENSAJE Y TARJETA PERSONALIZADA`,
        categoria: 'Luxury-Tray-Express'
    },
    {
        id: 8,
        titulo: 'LOVE FOR TWO',
        precio: 189.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/LOVE%20FOR%20TWO.jpg?alt=media&token=324e958e-cffa-42f1-a19b-84adefffe1a4',
        descripcion: `WRAPS X 4 (JAMÓN Y QUESO, LECHUGA, TOMATE Y

            SALSA DE LA CASA) Y MINI WAFFLES
            
            ENSALADA DE FRUTAS DOS MANZANA, FRESAS Y UVAS
            
            2 PREMIUM CAFÉ JUAN VALDEZ INSTANTANEO O CAFE
            
            STARBUCKS INSTANTANEO
            
            2 JUGOS DE NARANJA
            
            FERRERO ROCHER CHOCOLATES
            
            MINI CAJA CON ARREGLO DE 9 ROSAS
            
            2 POCILLOS, BANDEJA LARGA DECORADA CON MANTEL
            
            MOÑO, GLOBO BURBUJA Y TARJETA PERSONALIZADA`,
        categoria: 'Luxury-Tray-Express'
    },
    {
        id: 9,
        titulo: 'SWEET BURBUJA',
        precio: 89.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/SWEET%20BURBUJA%201.jpg?alt=media&token=5605a4c7-4b5c-4f1b-8281-8ec29ddebf4b',
        descripcion: `SANDUCHE DE JAMON Y QUESO
        JUGO DE NARANJA O SANGRÍA
        
        BARQUILLOS
        HERSHEY
         ́
        S CHOCOLATE
        
        GLOBO BURBUJA CON MENSAJE
        BASE DE MADERA CON MANTEL
        YOGURT
        TARJETA PERSONALIZADA`,
        categoria: 'Kit-Burbuja-Express'
    },
    {
        id: 10,
        titulo: 'DELUXE MUGS BURBUJA',
        precio: 89.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/DELUXE%20MUGS%20BURBUJA.jpg?alt=media&token=878ee808-2b41-4399-b20e-1a704eb787ae',
        descripcion: `BASE DE MADERA
        JUGO DE NARANJA
        
        SANDUCHE DE JAMÓN Y QUESO
        
        YOGURT CON CEREAL
        
        POCILLO
        
        CAJITA DE MANGO O MANZANA
        
        BARQUILLO X 2
        
        GLOBOS PEQUEÑOS X 3, X 1
        
        BURBUJA
        
        TARJETA PERSONALIZADA`,
        categoria: 'Kit-Burbuja-Express'
    },
    {
        id: 11,
        titulo: 'PREMIUM TEENS EXPRESS',
        precio: 109.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/PREMIUM%20TEENS%20EXPRESS%201.jpg?alt=media&token=518f1e82-d8cb-48f9-9809-a62f2954469d',
        descripcion: `BANDEJA DE MADERA CON ARCOIRIS DE

        GLOBOS Y GLOBO BURBUJA X 1
        
        SANDUCHE DE JAMON Y QUESO
        
        CAJA DE BROWNIS
        
        JUGO DE NARANJA
        
        YOGURT CON CEREAL
        
        GALLETAS OREO
        
        MANZANA
        
        TAJERTA PERSONALIZADA
        
        GLOBO CON MENSAJE
        
        OPCIONAL BOTELLA DE VINO
        
        O HATSU TE
        
        2 FOTOS IMPRESAS`,
        categoria: 'Teens'
    },
    {
        id: 12,
        titulo: 'ESPECIAL MOMENTS TEENS',
        precio: 89.99,
        imagen: 'wheyisolate.jpg',
        descripcion: `SANDUCHE DE JAMÓN Y QUESO

        JUGO DE NARANJA
        
        MINI PRINGLES
        
        FRUTAS
        
        MINI NUTELLA
        
        PIRULINES
        
        HATSU TE O BOTELLA DE VINO
        
        (OPCIONAL)
        
        BOUQUET DE GLOBOS
        
        MENSAJE
        
        TARJETA
        
        PERSONALIZADA`,
        categoria: 'Teens'
    },
    {
        id: 13,
        titulo: 'ESPECIAL THEME BIRTHDAY',
        precio: 89.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/ESPECIAL%20THEME%20BIRTHDAY%201.jpg?alt=media&token=85be42d0-9c45-4a54-aa72-3a13fb880fba',
        descripcion: `CANASTA DE MADERA
        PERSONALIZADA TEMÁTICA
        
        FAVORITA ELEGIDA POR USTED
        DOS GLOBOS TEMÁTICA
        
        FAVORITA
        SANDUCHE DE JAMÓN Y QUESO
        YOGURT CON CEREAL
        VASO TEMÁTICO
        KINDER SORPRESA
        MANTEL
        JUGO DE NARANJA
        MINI PRINGLES
        STICKERS TEMÁTICA
        TARJETA CON MENSAJE
        
        PERSONALIZADO`,
        categoria: 'Kids'
    },
    {
        id: 14,
        titulo: 'BREAKFAST SPECIAL',
        precio: 89.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/BREAKFAST%20SPECIAL.jpg?alt=media&token=1e308c3e-32b4-47fb-b557-808c39bd031d',
        descripcion: `TARJETA PERSONALIZADA

        GLOBO DE PERSONAJE FAVORITO
        
        SANDUCHE DE JAMON Y QUESO O
        
        WAFFLES
        
        YOGURT CON CEREAL
        
        PONQUESITOS X 3
        
        VASO ANIMADO
        
        CHIPS
        
        NESQUIK`,
        categoria: 'Kids'
    },
    {
        id: 15,
        titulo: 'DELUXE SWEET BIRTHDAY',
        precio: 89.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/DELUXE%20SWEET%20BIRTHDAY.jpg?alt=media&token=197c1f35-b136-4369-900b-fe4c1abc13fc',
        descripcion: `BANDEJA DE MADERA O CRYSTAL

        CANASTA CON CHOCOLATES
        
        FRESAS CUBIERTAS CON
        
        CHOCOLATE CAFÉ O BLANCO
        
        CAJITA CON ROSAS X 8
        
        ARCOIRIS DE GLOBOS
        
        TORTA PERSONALIZADA
        
        (PERSONAJE FAVORITO)
        
        TARJETA PERSONALIZADA`,
        categoria: 'Kids'
    },
    {
        id: 16,
        titulo: 'PICNIC BIRTHDAY',
        precio: 69.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/PICNIC%20BIRTHDAY.jpg?alt=media&token=6f7e9c89-8d61-4457-8f88-faa4c90bc472',
        descripcion: `JUGO DE NARANJA

        YOGURT CON CEREAL
        
        RITZ CRACKERS GALLETAS
        
        CAJA DECORADA CON MENSAJE
        
        2 WRAP CON JAMÓN Y LECHUGA
        
        CAJA DE FRUTAS: UVAS Y FRESAS
        
        MANTEL Y GLOBO METÁLICO CON MENSAJE`,
        categoria: 'Picnic-Box-Express'
    },
    {
        id: 17,
        titulo: 'EXPRESS PICNIC',
        precio: 69.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/EXPRESS%20PICNIC.jpg?alt=media&token=6adf3b1a-dbd1-4310-9ddb-e759942ddb29',
        descripcion: `MINI BROWNIES

        JUGO DE NARANJA
        
        SALSA DE LA CASA
        
        CROISSANT DE JAMÓN Y QUESO CON LECHUGA
        
        ALMENTRA O MANÍ EN EMPAQUE
        
        FRASCO CON FRUTAS
        
        CAJITA DE CARTÓN CON 3 GLOBOS
        
        MANTEL Y TARJETA PERSONALIZADA`,
        categoria: 'Picnic-Box-Express'
    },
    {
        id: 18,
        titulo: 'LUXURY PICNIC',
        precio: 149.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/LUXURY%20PICNIC.jpg?alt=media&token=089480ae-d6d2-4345-a370-d954fae54bc7',
        descripcion: `CAJA DE MADERA PERSONALIZADA CON EL NOMBRE
        SANDUCHE DE JAMÓN Y QUESO LECHUGA Y
        
        TOMATE, SALSA DE LA CASA.
        TABLA DE QUESOS CHARCUTERIA
        SALAMI, QUESO Y JAMÓN
        BOWL DE FRUTAS
        JUGO DE NARANJA
        STARBUCKS CAFÉ
        CHOCOLATES FERRERO X3
        BOTELLA DE VINO O CHAMPAGNE
        COPA DE VINO MARCA
        TARJETA PERSONALIZADA
        GLOBO BURBUJA`,
        categoria: 'Picnic-Box-Express'
    },
    {
        id: 19,
        titulo: 'FITNESS BOX',
        precio: 139.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/FITNESS%20BOX%201.jpg?alt=media&token=9109667b-41a0-44ec-9c75-4b5a4316f435',
        descripcion: `JUGO VERDE (MANZANA, MANGO, BRÓCOLI, ESPINACA, GINGER, PIÑA,
            KIWI)
            JUGO DE NARANJA NATURAL
            SÁNDWICH (PAN INTEGRAL, JAMÓN DE PAVO, QUESO, MIX DE
            LECHUGAS, TOMATE)
            BOWL YOGURT GRIEGO, SEMILLAS DE CHIA, FRESAS, KIWI, GRANOLA
            BARRA DE PROTEINA POWER CRUSH
            MUFFIN INTEGRAL
            FRUTOS SECOS
            BARRA DE CACAO BAJA EN AZÚCAR
            CUBIERTOS
            CAJA DE MADERA Y LETRERO
            SUCULENTA
            TARJETA
            GLOBOS`,
        categoria: 'Picnic-Box-Express'
    },
    {
        id: 20,
        titulo: `HAPPY FATHER'S DAY
        BOX EXPRESS`,
        precio: 89.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/HAPPY%20FATHER_S%20DAY%20-%20BOX%20EXPRESS.jpg?alt=media&token=44f55c2d-3927-4476-9b97-bdd368c025fa',
        descripcion: `PIROULINE BARQUILLOS

        CAJA DE MADERA MEDIANA
        
        YOGURT CON CEREAL
        
        3 GLOBOS PEQUEÑOS, 1 GRANDE
        
        SANDUCHE DE JAMON Y QUESO
        
        CERVEZA X 1
        
        PLANTA DECORATIVA
        
        TARJETA PERSONALIZADA`,
        categoria: 'Special-Fathers-Day'
    },
    {
        id: 21,
        titulo: `SWEET TRAY HAPPY FATHER'S DAY`,
        precio: 129.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/SWEET%20TRAY%20HAPPY%20FATHER_S%20DAY.jpg?alt=media&token=6f6d797b-6c16-41e7-bdc3-e38ac90df236',
        descripcion: `BANDEJA DE DESAYUNO DECORADA CON 3

        GLOBOS
        1 ARREGLO FLORAL SENCILLO
        BOTELLA DE JP CHENET
        SANDUCHE DE JAMON Y QUESO
        ENVASE DE CEREAL, ENVASE DE YOGURT
        MINI BEROWNIE
        CAJITA CON MANGO, HATSU TE
        PAPAS PRINGLES (175GR)
        MANÍ, M&M CHOCOLATES
        TARJETA PERSONALIZADA DEL DÍA DEL
        
        PADRE`,
        categoria: 'Special-Fathers-Day'
    },
    {
        id: 22,
        titulo: `MINI BEST DAD`,
        precio: 89.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/MINI%20BEST%20DAD.jpg?alt=media&token=113e451b-b21f-4645-858d-75ff2929519a',
        descripcion: `CAJA DECORATIVA
        GLOBOS LÁTEX
        GLOBOS CON HELIO
        SÁNDWICH CLUB (JAMÓN, QUESO, MIX DE
        LECHUGAS, TOMATE, SALSA RANCH) GRANOLA,
        FRESAS, ARÁNDANOS, YOGURT)
        CHOCOLATES FERRERO
        GALLETAS
        JUGO DE NARANJA
        DOS CORONITAS
        CAFÉ FRÍO STARBUCKS
        CUBIERTOS
        TARJETA`,
        categoria: 'Special-Fathers-Day'
    },
    {
        id: 23,
        titulo: `EXPRESS NEWS DAD`,
        precio: 79.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/EXPRESS%20NEWS%20DAD%201.jpg?alt=media&token=59151edd-6fa0-43cf-9b56-94ccd5062e9e',
        descripcion: `CAJA DE CARTÓN NOTICIAS

        2 SANDWICH CLUB ( JAMÓN, QUESO, MIX DE
        
        LECHUGAS, TOMATE)
        
        WAFFLES CON FRESAS Y ARÁNDANOS
        
        (YOGURT, FRESAS Y ARÁNDANOS)
        
        SYRUP
        
        NUTELLA
        
        CHOCOLATES FERRERO
        
        GALLETAS CHOCOLATE CHIPS
        
        3 MINI CUPCAKES
        
        JUGO DE NARANJA
        
        QUESO TAJADO Y PROCIUTTO
        
        TARJETA`,
        categoria: 'Special-Fathers-Day'
    },
    {
        id: 24,
        titulo: `PREMIUN BEST DAD`,
        precio: 159.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/PREMIUN%20BEST%20DAD.jpg?alt=media&token=95066828-a5db-4e0e-a07f-8bbdd4dc1f1f',
        descripcion: `BANDEJA DE MADERA

        GLOBOS HELIO X4
        
        ARCO DE GLOBOS
        
        MINI CAKE CON MINI LICOR
        
        PARFAIT (CEREAL, YOGURT, FRESAS)
        
        2 SÁNDWICH (JAMÓN, QUESO, MIX DE
        
        LECHUGAS,TOMATE)
        
        CHOCOLATES FERRERO X3
        
        JUGO DE NARANJA
        
        VASO CERVECERO MARCADO
        
        2 CERVEZAS CORONA
        
        1 MINI CHAMPAGNE
        
        CAFÉ STARBUCKS
        
        TARJETA`,
        categoria: 'Special-Fathers-Day'
    },
    {
        id: 25,
        titulo: `PREMIUM BEST MOM`,
        precio: 139.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/PREMIUM%20BEST%20MOM.jpg?alt=media&token=e605db88-ec8a-4357-a0c9-0da83acafb14',
        descripcion: `BANDEJA DE MADERA CON ARCO

        BOUQUET DE FLORES
        
        MANTEL
        
        JUGO DE NARANJA
        
        CAFÉ STARBUCKS
        
        BOWL CON FRUTAS
        
        CEREAL
        
        YOGURT
        
        SANDWICH CLÁSICO O WAFFLES.
        
        ARCO DE GLOBOS
        
        MUGS PERSONALIZADO
        
        TARJETA CON MENSAJE PERSONALIZADA`,
        categoria: 'Special-Mothers-Day'
    },
    {
        id: 26,
        titulo: `DELUXE BEST MOM`,
        precio: 139.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/DELUXE%20BEST%20MOM.jpg?alt=media&token=ca8f6345-ad10-461f-b574-8d86107cb4ff',
        descripcion: `CAJA DE MADERA CON FLORES

        MANTEL
        
        JUGO DE NARANJA
        
        VASO CRISTAL CON FRUTAS
        
        GALLETAS DE CEREAL
        
        YOGURT CON GRANOLA
        
        SANDWICH CLÁSICO
        
        O WAFFLES.
        
        2 GLOBOS CON HELIO
        
        TARJETA CON MENSAJE PERSONALIZADA`,
        categoria: 'Special-Mothers-Day'
    },
    {
        id: 27,
        titulo: `MINI SWEET MOM`,
        precio: 79.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/MINI%20SWEET%20MOM%201.jpg?alt=media&token=ab68b4e3-67eb-4e08-8814-78c5015934df',
        descripcion: `CAJA DE MADERA MARCADA

        SÁNDWICH CLUB(JAMÓN,QUESO,TOMATE,MIX DE
        
        LECHUGAS, SALSA RANCH, QUESO PARMESANO)
        
        YOGURT, FRESAS, GRANOLA
        
        JUGO DE NARANJA
        
        CHOCOLATES FERRERO
        
        CUBIERTOS
        
        ARCO DE GLOBOS CON MARIPOSA
        
        MINI BOUQUET DE FLORES
        
        TARJETA`,
        categoria: 'Special-Mothers-Day'
    },
    {
        id: 28,
        titulo: `MINI SAN VALENTINE`,
        precio: 89.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/MINI%20SAN%20VALENTINE.jpg?alt=media&token=40a10209-2c93-4ae3-8d76-fc5118b7b551',
        descripcion: `CAJA DE MADERA MARCADA

        ARCO DE GLOBOS
        
        2 SÁNDWICH CLUB
        
        (JAMÓN,QUESO,TOMATE,MIX DE LECHUGAS,
        
        SALSA RANCH, QUESO PARMESANO)
        
        PARFAIT (YOGURT, FRESAS, GRANOLA)
        
        JUGO DE NARANJA
        
        CAJA DE PIROULINE
        
        CHOCOLATES FERRERO X 6
        
        CUBIERTOS
        
        TARJETA PERSONALIZADA`,
        categoria: 'Special-Valentines-Day'
    },
    {
        id: 29,
        titulo: `LUXURY MY VALENTÍNE`,
        precio: 149.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/LUXURY%20MY%20VALENTÍNE%201.jpg?alt=media&token=31a21e03-3742-4673-8eb4-efef37f21b93',
        descripcion: `BANDEJA DE MADERA NEGRA O BLANCA

        GLOBOS HELIO X6
        PONQUÉ CON MENSAJE
        
        PARFAIT (CEREAL, YOGURT, FRESAS)
        2 SÁNDWICH (JAMÓN, QUESO, MIX DE
        LECHUGAS,TOMATE) O WAFFLES CON
        
        NUTELLA
        
        CHOCOLATES FERRERO X3
        JUGO DE NARANJA
        FRUTOS SECOS
        CAJA DE PIROULINO
        
        CUBIERTOS
        
        COPA DE VINO MARCADA
        
        MINI CHAMPAGNE
        3 CERVEZAS CORONA
        CAFÉ STARBUCKS
        TARJETA PERSONALIZADA`,
        categoria: 'Special-Valentines-Day'
    },
    {
        id: 30,
        titulo: `MY VALENTÍNE MINI BOX`,
        precio: 69.99,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/MY%20VALENTÍNE%20MINI%20BOX.jpg?alt=media&token=d4ad8bf7-b913-4b05-8374-84e6fff6738d',
        descripcion: `CAJA MARCADA

        CON MENSAJE ESPECIAL
        
        2 SÁNDWICH CLUB
        
        (JAMÓN,QUESO,TOMATE,MIX DE LECHUGAS,
        
        SALSA RANCH, QUESO PARMESANO)
        
        PARFAIT (YOGURT, FRESAS, GRANOLA)
        
        JUGO DE NARANJA
        
        CAJA DE M&M
        
        GALLETAS CON CHIPS
        
        CUBIERTOS
        
        TARJETA PERSONALIZADA
        
        GLOBOS HELIO X2`,
        categoria: 'Special-Valentines-Day'
    },
  ]
  
    
  export default desayunos
 