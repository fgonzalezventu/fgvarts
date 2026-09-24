const artworks = [

    {
        id:25,
        title: "Golem, Humanoide de Tierra",
        image: "025 golem.jpg",
        number: "025 / 357",
        collection: "Espíritus del Universo",
        elements: ["Tierra","Guardián"],
        created: "Diciembre 2021",
        category: "Humanoide",
        description: "Los colosos nacidos del barro y la roca abrieron los primeros caminos del mundo. Pero perdieron su rumbo, convirtiéndose en cascarones inconscientes, esclavizados para construir los imperios del hombre, a cambio de tierra sin valor."
    },

    {
        id:36,
        title: "Plastan, Animaloide de Veneno",
        image: "036 plastan.jpg",
        number: "036 / 357",
        collection: "Espíritus del Universo",
        elements: ["Veneno","Bestia"],
        created: "Diciembre 2025",
        category: "Animaloide",
        description: "Formados en las cloacas, estas criaturas reptan por doquier y sin descanso. Infectan los hogares empobrecidos, amenazando tanto a niños como ancianos. Seres malvivientes, no dudan en hacer daño para robar lo que desean."
    },

    {
        id:41,
        title: "Electrofagus, Zoavatar de Electricidad",
        image: "041 electrofago.jpg",
        number: "041 / 357",
        collection: "Espíritus del Universo",
        elements: ["Bestia","Electro"],
        created: "Noviembre 2025",
        category: "Zoavatar",
        description: "Estas criaturas dominan la electricidad y habitan el entorno más adecuado para ellas: el mar. Se multiplican por doquier, infestando cada rincón del océano, atacando a los barcos para reclamar lo que consideran suyo."
    },

    {
        id:59,
        title: "Ruka-Vat, Poder de Barrera",
        image: "059 barrera.jpg",
        number: "059 / 357",
        collection: "Espíritus del Universo",
        elements: ["Electro","Intelecto"],
        created: "Noviembre 2023",
        category: "Poder",
        description: "Materializar la intangibilidad de la mente es una habilidad compleja que requiere un gran control mental y una enorme destreza. Pero quien lo logra, es capaz de separar el cuerpo de todo peligro existente."
    },

    {
        id:73,
        title: "Pak-Shaghat, Poder de Parálisis Power",
        image: "073 paralisis.jpg",
        number: "073 / 357",
        collection: "Espíritus del Universo",
        elements: ["Instinto","Electro"],
        created: "Septiembre 2024",
        category: "Poder",
        description: "La arte de la parálisis tiene un principio electroquímico, que busca negar todos los sentidos de la víctima. Una habilidad macabra que elimina todos los instintos de supervivencia, dejando a la presa a la merced de la espada del mercenario."
    },

    {
        id:77,
        title: "Akad, Poder de Espinas",
        image: "077 puas.jpg",
        number: "077 / 357",
        collection: "Espíritus del Universo",
        elements: ["Instinto","Veneno"],
        created: "Diciembre 2021",
        category: "Poder",
        description: "Las espinas son de las armas más afiladas y letales de la naturaleza. No tan solo pueden atravesar la piel más endurecida y tenaz, sino que también pueden envenenar tu cuerpo sin oportunidad de escape, una cárcel dentro de uno mismo."
    },

    {
        id:113,
        title: "Kaanch, Espíritu de Vidrio",
        image: "113 vidrio.jpg",
        number: "113 / 357",
        collection: "Espíritus del Universo",
        elements: ["Fuego","Tierra"],
        created: "Diciembre 2020",
        category: "Espíritu",
        description: "El fuego hecho cristal, la tierra convertida en reflejo del cielo. Usando calor es posible convertir a los minerales de tierra en flujo caliente, creando un amplificador de aquella potencia incandescente y en el filo que cortara a sus enemigos."
    },

    {
        id:117,
        title: "Gaish, Espíritu de Gas",
        image: "117 gas.jpg",
        number: "117 / 357",
        collection: "Espíritus del Universo",
        elements: ["Fuego","Aire"],
        created: "Junio 2022",
        category: "Espíritu",
        description: "Silencioso e inflamable. Emerge desde las profundidades del suelo, elevándose hasta el horizonte, sin nada que lo detenga. Atesora el fuego como el arma más letal, permitiéndole su dominio completo, al coste de su propia existencia."
    },

    {
        id:118,
        title: "Sharab, Espíritu de Alcohol",
        image: "118 alcohol.jpg",
        number: "118 / 357",
        collection: "Espíritus del Universo",
        elements: ["Fuego","Veneno"],
        created: "Abril 2023",
        category: "Espíritu",
        description: "Un espíritu amargo y toxico, sin embargo, ha otorgado felicidad y delirio a generaciones, creando frenéticas realidades que se estrellan a la mañana siguiente. Aquello coincide con su inflamabilidad, expandiéndose ante la mínima chispa."
    },

    {
        id:119,
        title: "Dhona, Espíritu de Magma",
        image: "119 magma.jpg",
        number: "119 / 357",
        collection: "Espíritus del Universo",
        elements: ["Fuego","Metal"],
        created: "Septiembre 2022",
        category: "Espíritu",
        description: "El coloso de los volcanes tiene el poder de calcinar todo a su paso, dictando una condena lenta pero segura. Su furia se extiende más aun al arrojar proyectiles de roca e incandescencia, capaces de aniquilar lo que sea a su voluntad."
    },

    {
        id:120,
        title: "Shora, Espíritu de Salitre",
        image: "120 salitre.jpg",
        number: "120 / 357",
        collection: "Espíritus del Universo",
        elements: ["Tierra","Fuego"],
        created: "Octubre 2025",
        category: "Espíritu",
        description: "Un ser que se alimenta de la combustión y el calor, siendo capaz de provocar explosiones y llamas que arrasan con todo a su paso. Su presencia es un recordatorio del poder destructivo de la naturaleza, siendo usado en armas humanas."
    },

    {
        id:122,
        title: "Haddi, Espíritu de Hueso",
        image: "122 hueso.jpg",
        number: "122 / 357",
        collection: "Espíritus del Universo",
        elements: ["Tierra","Natural"],
        created: "Noviembre 2021",
        category: "Espíritu",
        description: "El recordatorio tangible de la inevitabilidad de la muerte. Su presencia evoca respeto y temor, la conexión entre el mundo físico y el espiritual. Sin embargo, su fortaleza es lo que permite que las criaturas no sean simples masas deformes."
    },

    {
        id:123,
        title: "Mitte, Espíritu de Arcilla",
        image: "123 arcilla.jpg",
        number: "123 / 357",
        collection: "Espíritus del Universo",
        elements: ["Tierra","Agua"],
        created: "Julio 2024",
        category: "Espíritu",
        description: "A pesar de su aspecto viscoso y desagradable, es la base de la vida en humedales y pantanos, dotando tanto de agua como de soporte a estos ecosistemas. Sin embargo, no es un ente agradable; puede atraparte lentamente, arrastrándote hacia el olvido."
    },

    {
        id:124,
        title: "Ret, Espíritu de Arena",
        image: "124 arena.jpg",
        number: "124 / 357",
        collection: "Espíritus del Universo",
        elements: ["Tierra","Aire"],
        created: "Febrero 2021",
        category: "Espíritu",
        description: "Los pequeños granos que conforman la arena viajan sin cesar de orilla en orilla, esperando a llegar al lugar que siempre han añorado. Sin embargo, cuando se elevan en el viento, son capaces de sepultar hasta el más temible de los enemigos."
    },

    {
        id:126,
        title: "Java-Haraat, Espíritu de Gema",
        image: "126 gemas.jpg",
        number: "126 / 357",
        collection: "Espíritus del Universo",
        elements: ["Tierra","Metal"],
        created: "Diciembre 2022",
        category: "Espíritu"
    },
   
    {
        id:127,
        title: "Plajmaa, Espíritu de Plasma",
        image: "127 plasma.jpg",
        number: "127 / 357",
        collection: "Espíritus del Universo",
        elements: ["Electro","Fuego"],
        created: "Abril 2022",
        category: "Espíritu"
    },

    {
        id:130,
        title: "Namak, Espíritu de Sal",
        image: "130 sal.jpg",
        number: "130 / 357",
        collection: "Espíritus del Universo",
        elements: ["Electro","Agua"],
        created: "Agosto 2023",
        category: "Espíritu"
    },

    {
        id:133,
        title: "Chumbak, Espíritu de Imán",
        image: "133 iman.jpg",
        number: "133 / 357",
        collection: "Espíritus del Universo",
        elements: ["Electro","Metal"],
        created: "Agosto 2025",
        category: "Espíritu"
    },

    {
        id:134,
        title: "Koyal, Espíritu de Carbón",
        image: "134 carbon.jpg",
        number: "134 / 357",
        collection: "Espíritus del Universo",
        elements: ["Natural","Fuego"],
        created: "Junio 2021",
        category: "Espíritu"
    },

    {
        id:135,
        title: "Lakadi, Espíritu de Madera",
        image: "135 madera.jpg",
        number: "135 / 357",
        collection: "Espíritus del Universo",
        elements: ["Natural","Tierra"],
        created: "Octubre 2021",
        category: "Espíritu"
    },

    {
        id:137,
        title: "Shaival, Espíritu de Algas",
        image: "137 algas.jpg",
        number: "137 / 357",
        collection: "Espíritus del Universo",
        elements: ["Natural","Agua"],
        created: "Septiembre 2021",
        category: "Espíritu"
    },

    {
        id:138,
        title: "Kapas, Espíritu de Algodón",
        image: "138 algodon.jpg",
        number: "138 / 357",
        collection: "Espíritus del Universo",
        elements: ["Natural","Aire"],
        created: "Mayo 2022",
        category: "Espíritu"
    },


    {
        id:139,
        title: "Kusum, Espíritu de Flores",
        image: "139 flores.jpg",
        number: "139 / 357",
        collection: "Espíritus del Universo",
        elements: ["Natural","Veneno"],
        created: "Marzo 2021",
        category: "Espíritu"
    },

    {
        id:140,
        title: "Khun, Espíritu de Sangre",
        image: "140 sangre.jpg",
        number: "140 / 357",
        collection: "Espíritus del Universo",
        elements: ["Natural","Metal"],
        created: "Mayo 2021",
        category: "Espíritu"
    },

    {
        id:141,
        title: "Vhap, Espíritu de Vapor",
        image: "141 vapor.jpg",
        number: "141 / 357",
        collection: "Espíritus del Universo",
        elements: ["Agua","Fuego"],
        created: "Julio 2021",
        category: "Espíritu"
    },

    {
        id:142,
        title: "Munga, Espíritu de Coral",
        image: "142 coral.jpg",
        number: "142 / 357",
        collection: "Espíritus del Universo",
        elements: ["Agua","Tierra"],
        created: "Agosto 2022",
        category: "Espíritu"
    },

    {
        id:144,
        title: "Tel, Espíritu de Aceite",
        image: "144 aceite.jpg",
        number: "144 / 357",
        collection: "Espíritus del Universo",
        elements: ["Agua","Natural"],
        created: "Septiembre 2022",
        category: "Espíritu"
    },

    {
        id:145,
        title: "Hima-Pat, Espíritu de Nieve",
        image: "145 nieve.jpg",
        number: "145 / 357",
        collection: "Espíritus del Universo",
        elements: ["Agua","Aire"],
        created: "Octubre 2020",
        category: "Espíritu",
        description: "Contemplativo y paciente, así es el frío desolador de la nieve que cae desde las alturas. No habrá aviso; cuando el destino lo dicte, extinguirá hasta el último remanente de calor de tu cuerpo, sepultando tu nombre bajo su helada tumba."
    },

    {
        id:147,
        title: "Barph, Espíritu de Hielo",
        image: "147 hielo.jpg",
        number: "147 / 357",
        collection: "Espíritus del Universo",
        elements: ["Agua","Metal"],
        created: "Octubre 2022",
        category: "Espíritu"
    },

    {
        id:148,
        title: "Raakh, Espíritu de Ceniza",
        image: "148 ceniza.jpg",
        number: "148 / 357",
        collection: "Espíritus del Universo",
        elements: ["Aire","Fuego"],
        created: "Marzo 2022",
        category: "Espíritu"
    },

    {
        id:149,
        title: "Dhul, Espíritu de Polvo",
        image: "149 polvo.jpg",
        number: "149 / 357",
        collection: "Espíritus del Universo",
        elements: ["Aire","Tierra"],
        created: "Noviembre 2022",
        category: "Espíritu"
    },

    {
        id:150,
        title: "Bavandar, Espíritu de Tornado",
        image: "150 tornado.jpg",
        number: "150 / 357",
        collection: "Espíritus del Universo",
        elements: ["Aire","Electro"],
        created: "Diciembre 2024",
        category: "Espíritu"
    },

    {
        id:151,
        title: "Majak, Espíritu de Aroma",
        image: "151 aroma.jpg",
        number: "151 / 357",
        collection: "Espíritus del Universo",
        elements: ["Aire","Natural"],
        created: "Junio 2021",
        category: "Espíritu"
    },

    {
        id:152,
        title: "Baadal, Espíritu de Nube",
        image: "152 nube.jpg",
        number: "152 / 357",
        collection: "Espíritus del Universo",
        elements: ["Aire","Agua"],
        created: "Marzo 2024",
        category: "Espíritu"
    },

    {
        id:153,
        title: "Dhuan, Espíritu de Humo",
        image: "153 humo.jpg",
        number: "153 / 357",
        collection: "Espíritus del Universo",
        elements: ["Aire","Veneno"],
        created: "Junio 2021",
        category: "Espíritu"
    },

    {
        id:156,
        title: "Pitroliyam, Espíritu de Petróleo",
        image: "156 petroleo.jpg",
        number: "156 / 357",
        collection: "Espíritus del Universo",
        elements: ["Veneno","Tierra"],
        created: "Junio 2023",
        category: "Espíritu"
    },

    {
        id:158,
        title: "Kukura-Mutta, Espíritu de Hongo",
        image: "158 hongos.jpg",
        number: "158 / 357",
        collection: "Espíritus del Universo",
        elements: ["Veneno","Natural"],
        created: "Enero 2021",
        category: "Espíritu",
        description: "Asecha en un silencio sepulcral, una parsimoniosa mole que desafía al tiempo. Cuando su trampa se cierra, reclama el control absoluto de la mente de su víctima, extirpando su conciencia. No hay salvación; una vez sucumbes, dejas de existir."
    },

    {
        id:159,
        title: "Viranjit, Espíritu de Lejía",
        image: "159 lejia.jpg",
        number: "159 / 357",
        collection: "Espíritus del Universo",
        elements: ["Veneno","Agua"],
        created: "Abril 2024",
        category: "Espíritu"
    },

    {
        id:161,
        title: "Aml, Espíritu de Ácido",
        image: "161 acido.jpg",
        number: "161 / 357",
        collection: "Espíritus del Universo",
        elements: ["Veneno","Metal"],
        created: "Junio 2025",
        category: "Espíritu"
    },

    {
        id:163,
        title: "Chattan, Espíritu de Roca",
        image: "163 roca.jpg",
        number: "163 / 357",
        collection: "Espíritus del Universo",
        elements: ["Metal","Tierra"],
        created: "Junio 2024",
        category: "Espíritu"
    },

    {
        id:166,
        title: "Mishran, Espíritu de Amalgama",
        image: "166 amalgama.jpg",
        number: "166 / 357",
        collection: "Espíritus del Universo",
        elements: ["Metal","Agua"],
        created: "Abril 2025",
        category: "Espíritu"
    },

    {
        id:182,
        title: "Píesis, Arcano de Presión",
        image: "182 presion.jpg",
        number: "182 / 357",
        collection: "Espíritus del Universo",
        elements: ["Ciencia","Aire"],
        created: "Marzo 2023",
        category: "Arcano"
    },

    {
        id:184,
        title: "Corrosum, Arcano de Corrosión",
        image: "184 corrosion.jpg",
        number: "184 / 357",
        collection: "Espíritus del Universo",
        elements: ["Ciencia","Metal"],
        created: "Diciembre 2025",
        category: "Arcano"
    },

    {
        id:195,
        title: "Ekhos, Talismán de Sonido",
        image: "195 sonido.jpg",
        number: "195 / 357",
        collection: "Espíritus del Universo",
        elements: ["Aire","Ciencia"],
        created: "Mayo 2021",
        category: "Talismán"
    },

    {
        id:199,
        title: "Acies, Talismán de Acero",
        image: "199 acero.jpg",
        number: "199 / 357",
        collection: "Espíritus del Universo",
        elements: ["Metal","Ciencia"],
        created: "Agosto 2024",
        category: "Talismán"
    },

    {
        id:201,
        title: "Agni, Primordial del Fuego",
        image: "201 fuego.jpg",
        number: "201 / 357",
        collection: "Espíritus del Universo",
        elements: ["Fuego"],
        created: "Mayo 2026",
        category: "Primordial"
    },

    {
        id:202,
        title: "Prithvi, Primordial de la Tierra",
        image: "202 tierra.jpg",
        number: "202 / 357",
        collection: "Espíritus del Universo",
        elements: ["Tierra"],
        created: "Julio 2026",
        category: "Espíritu Primordial"
    },

    {
        id:203,
        title: "Vidyut, Primordial de la Electricidad",
        image: "203 electricidad.jpg",
        number: "203 / 357",
        collection: "Espíritus del Universo",
        elements: ["Electro"],
        created: "Julio 2026",
        category: "Primordial"
    },

    {
        id:204,
        title: "Prakrti, Primordial de la Naturaleza",
        image: "204 naturaleza.jpg",
        number: "204 / 357",
        collection: "Espíritus del Universo",
        elements: ["Natural"],
        created: "Marzo 2026",
        category: "Primordial"
    },

    {
        id:205,
        title: "Jal, Primordial del Agua",
        image: "205 agua.jpg",
        number: "205 / 357",
        collection: "Espíritus del Universo",
        elements: ["Agua"],
        created: "Junio 2026",
        category: "Primordial"
    },

    {
        id:206,
        title: "Vaayu, Primordial del Aire",
        image: "206 aire.jpg",
        number: "206 / 357",
        collection: "Espíritus del Universo",
        elements: ["Aire"],
        created: "Abril 2026",
        category: "Primordial"
    },

    {
        id:207,
        title: "Zahar, Primordial del Veneno",
        image: "207 veneno.jpg",
        number: "207 / 357",
        collection: "Espíritus del Universo",
        elements: ["Veneno"],
        created: "Septiembre 2026",
        category: "Primordial"
    },

    {
        id:208,
        title: "Dhatuu, Primordial del Metal",
        image: "208 metal.jpg",
        number: "208 / 357",
        collection: "Espíritus del Universo",
        elements: ["Metal"],
        created: "Agosto 2026",
        category: "Primordial"
    },

    {
        id:265,
        title: "Calens, Albor de Calor",
        image: "265 calor.jpg",
        number: "265 / 357",
        collection: "Espíritus del Universo",
        elements: ["Fuego","Luz"],
        created: "Julio 2025",
        category: "Albor"
    },

    {
        id:269,
        title: "Ausel, Albor de Aurora",
        image: "269 aurora.jpg",
        number: "269 / 357",
        collection: "Espíritus del Universo",
        elements: ["Electro","Luz"],
        created: "Diciembre 2023",
        category: "Albor"
    },

    {
        id:287,
        title: "Ba'al Zebub, Calamidad de Gula",
        image: "287 gula.jpg",
        number: "287 / 357",
        collection: "Espíritus del Universo",
        elements: ["Oscuridad","Veneno"],
        created: "Febrero 2025",
        category: "Calamidad"
    }
];