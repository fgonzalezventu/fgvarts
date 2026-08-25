const artworks = [

    {
        id:25,
        title: "Golem, Earth Humanoid",
        image: "025 golem.jpg",
        number: "025 / 357",
        collection: "Spirits of the Universe",
        elements: ["Earth","Guardian"],
        created: "December 2021",
        category: "Humanoid",
        description: "The mountain beings, born from dirt and clay, imitated their creators, yet they grew enormous and roamed the world, forging the first paths. Over time, they became empty, mindless shells, used to build the empires of man."
    },

    {
        id:36,
        title: "Plastan, Poison Animaloid",
        image: "036 plastan.jpg",
        number: "036 / 357",
        collection: "Spirits of the Universe",
        elements: ["Poison","Beast"],
        created: "December 2025",
        category: "Animaloid",
        description: "Born from the sewers, these creatures crawl everywhere, ceaselessly. They infest impoverished homes, threatening both children and the elderly. Vile wretches, they do not hesitate to inflict harm to steal what they desire."
    },

    {
        id:41,
        title: "Electrofagus, Electricity Zoavatar",
        image: "041 electrofago.jpg",
        number: "041 / 357",
        collection: "Spirits of the Universe",
        elements: ["Beast","Electricity"],
        created: "November 2025",
        category: "Zoavatar",
        description: "These creatures command the powers of electricity and inhabit the environment best suited to them: the sea. They multiply everywhere, infesting every corner of the ocean, and attack ships in groups to reclaim what they consider their own."
    },

    {
        id:59,
        title: "Ruka-Vat, Barrier Power",
        image: "059 barrera.jpg",
        number: "059 / 357",
        collection: "Spirits of the Universe",
        elements: ["Electricity","Intellect"],
        created: "November 2023",
        category: "Power",
        description: "Materializing the intangibility of the mind is a complex skill that requires great mental control and immense dexterity. But whoever achieves it is able to separate the body from all existing danger."
    },

    {
        id:73,
        title: "Pak-Shaghat, Paralisis Power",
        image: "073 paralisis.jpg",
        number: "073 / 357",
        collection: "Spirits of the Universe",
        elements: ["Instinct","Electricity"],
        created: "September 2024",
        category: "Power",
        description: "The art of paralysis has an electrochemical principle, which seeks to negate all of the victim's senses. A macabre skill that eliminates all survival instincts, leaving the prey at the mercy of the mercenary's sword."
    },

    {
        id:77,
        title: "Akad, Thorn Power",
        image: "077 puas.jpg",
        number: "077 / 357",
        collection: "Spirits of the Universe",
        elements: ["Instinct","Poison"],
        created: "December 2021",
        category: "Power",
        description: "Thorns are one of nature's sharpest and lethal weapons. Not only can they pierce the toughest, most resilient skin, but they can also poison your body with no chance of escape, a prison within yourself."
    },

    {
        id:113,
        title: "Kaanch, Glass Spirit",
        image: "113 vidrio.jpg",
        number: "113 / 357",
        collection: "Spirits of the Universe",
        elements: ["Fire","Earth"],
        created: "December 2020",
        category: "Spirit",
        description: "Fire turned to crystal; earth transformed into a reflection of the sky. Through heat, earthen minerals can be transmuted into a molten flow, creating an amplifier of that incandescent power and a blade's edge to cut down one's enemies."
    },

    {
        id:117,
        title: "Gaish, Gas Spirit",
        image: "117 gas.jpg",
        number: "117 / 357",
        collection: "Spirits of the Universe",
        elements: ["Fire","Air"],
        created: "June 2022",
        category: "Spirit",
        description: "Silent and flammable. It emerges from the depths of the earth, rising toward the horizon, unstoppable. It harbors fire as its deadliest weapon, granting it complete mastery over that element, at the cost of its own existence."
    },

    {
        id:118,
        title: "Sharab, Alcohol Spirit",
        image: "118 alcohol.jpg",
        number: "118 / 357",
        collection: "Spirits of the Universe",
        elements: ["Fire","Poison"],
        created: "April 2023",
        category: "Spirit"
    },

    {
        id:119,
        title: "Dhona, Magma Spirit",
        image: "119 magma.jpg",
        number: "119 / 357",
        collection: "Spirits of the Universe",
        elements: ["Fire","Metal"],
        created: "September 2022",
        category: "Spirit"
    },

    {
        id:120,
        title: "Shora, Saltpeter Spirit",
        image: "120 salitre.jpg",
        number: "120 / 357",
        collection: "Spirits of the Universe",
        elements: ["Earth","Fire"],
        created: "October 2025",
        category: "Spirit"
    },

    {
        id:122,
        title: "Haddi, Bone Spirit",
        image: "122 hueso.jpg",
        number: "122 / 357",
        collection: "Spirits of the Universe",
        elements: ["Earth","Nature"],
        created: "November 2021",
        category: "Spirit"
    },

    {
        id:123,
        title: "Mitte, Clay Spirit",
        image: "123 arcilla.jpg",
        number: "123 / 357",
        collection: "Spirits of the Universe",
        elements: ["Earth","Water"],
        created: "July 2024",
        category: "Spirit"
    },

    {
        id:124,
        title: "Ret, Sand Spirit",
        image: "124 arena.jpg",
        number: "124 / 357",
        collection: "Spirits of the Universe",
        elements: ["Earth","Air"],
        created: "February 2021",
        category: "Spirit"
    },

    {
        id:126,
        title: "Java-Haraat, Gem Spirit",
        image: "126 gemas.jpg",
        number: "126 / 357",
        collection: "Spirits of the Universe",
        elements: ["Earth","Metal"],
        created: "December 2022",
        category: "Spirit"
    },
   
    {
        id:127,
        title: "Plajmaa, Plasma Spirit",
        image: "127 plasma.jpg",
        number: "127 / 357",
        collection: "Spirits of the Universe",
        elements: ["Electricity","Fire"],
        created: "April 2022",
        category: "Spirit"
    },

    {
        id:130,
        title: "Namak, Salt Spirit",
        image: "130 sal.jpg",
        number: "130 / 357",
        collection: "Spirits of the Universe",
        elements: ["Electricity","Water"],
        created: "August 2023",
        category: "Spirit"
    },

    {
        id:133,
        title: "Chumbak, Magnet Spirit",
        image: "133 iman.jpg",
        number: "133 / 357",
        collection: "Spirits of the Universe",
        elements: ["Electricity","Metal"],
        created: "August 2025",
        category: "Spirit"
    },

    {
        id:134,
        title: "Koyal, Coal Spirit",
        image: "134 carbon.jpg",
        number: "134 / 357",
        collection: "Spirits of the Universe",
        elements: ["Nature","Fire"],
        created: " 2021",
        category: "Spirit"
    },

    {
        id:135,
        title: "Lakadi, Wood Spirit",
        image: "135 madera.jpg",
        number: "135 / 357",
        collection: "Spirits of the Universe",
        elements: ["Nature","Earth"],
        created: "October 2021",
        category: "Spirit"
    },

    {
        id:137,
        title: "Shaival, Seaweed Spirit",
        image: "137 algas.jpg",
        number: "137 / 357",
        collection: "Spirits of the Universe",
        elements: ["Nature","Water"],
        created: "September 2021",
        category: "Spirit"
    },

    {
        id:138,
        title: "Kapas, Cotton Spirit",
        image: "138 algodon.jpg",
        number: "138 / 357",
        collection: "Spirits of the Universe",
        elements: ["Nature","Air"],
        created: "May 2022",
        category: "Spirit"
    },


    {
        id:139,
        title: "Kusum, Flower Spirit",
        image: "139 flores.jpg",
        number: "139 / 357",
        collection: "Spirits of the Universe",
        elements: ["Nature","Poison"],
        created: "March 2021",
        category: "Spirit"
    },

    {
        id:140,
        title: "Khun, Blood Spirit",
        image: "140 sangre.jpg",
        number: "140 / 357",
        collection: "Spirits of the Universe",
        elements: ["Nature","Metal"],
        created: "May 2021",
        category: "Spirit"
    },

    {
        id:141,
        title: "Vhap, Steam Spirit",
        image: "141 vapor.jpg",
        number: "141 / 357",
        collection: "Spirits of the Universe",
        elements: ["Water","Fire"],
        created: "July 2021",
        category: "Spirit"
    },

    {
        id:142,
        title: "Munga, Coral Spirit",
        image: "142 coral.jpg",
        number: "142 / 357",
        collection: "Spirits of the Universe",
        elements: ["Water","Earth"],
        created: "August 2022",
        category: "Spirit"
    },

    {
        id:144,
        title: "Tel, Oil Spirit",
        image: "144 aceite.jpg",
        number: "144 / 357",
        collection: "Spirits of the Universe",
        elements: ["Water","Nature"],
        created: "September 2022",
        category: "Spirit"
    },

    {
        id:145,
        title: "Hima-Pat, Snow Spirit",
        image: "145 nieve.jpg",
        number: "145 / 357",
        collection: "Spirits of the Universe",
        elements: ["Water","Air"],
        created: "October 2020",
        category: "Spirit",
        description: "Behold the relentless frost and the desolate cold. There will be no warning; when fate decrees it, it will extinguish the very last remnant of warmth from your body, burying your name beneath its frozen tomb."
    },

    {
        id:147,
        title: "Barph, Ice Spirit",
        image: "147 hielo.jpg",
        number: "147 / 357",
        collection: "Spirits of the Universe",
        elements: ["Water","Metal"],
        created: "October 2022",
        category: "Spirit"
    },

    {
        id:148,
        title: "Raakh, Ash Spirit",
        image: "148 ceniza.jpg",
        number: "148 / 357",
        collection: "Spirits of the Universe",
        elements: ["Air","Fire"],
        created: "March 2022",
        category: "Spirit"
    },

    {
        id:149,
        title: "Dhul, Dust Spirit",
        image: "149 polvo.jpg",
        number: "149 / 357",
        collection: "Spirits of the Universe",
        elements: ["Air","Earth"],
        created: "November 2022",
        category: "Spirit"
    },

    {
        id:150,
        title: "Bavandar, Tornado Spirit",
        image: "150 tornado.jpg",
        number: "150 / 357",
        collection: "Spirits of the Universe",
        elements: ["Air","Electricity"],
        created: "December 2024",
        category: "Spirit"
    },

    {
        id:151,
        title: "Majak, Scent Spirit",
        image: "151 aroma.jpg",
        number: "151 / 357",
        collection: "Spirits of the Universe",
        elements: ["Air","Nature"],
        created: "June 2021",
        category: "Spirit"
    },

    {
        id:152,
        title: "Baadal, Cloud Spirit",
        image: "152 nube.jpg",
        number: "152 / 357",
        collection: "Spirits of the Universe",
        elements: ["Air","Water"],
        created: "March 2024",
        category: "Spirit"
    },

    {
        id:153,
        title: "Dhuan, Smoke Spirit",
        image: "153 humo.jpg",
        number: "153 / 357",
        collection: "Spirits of the Universe",
        elements: ["Air","Poison"],
        created: "June 2021",
        category: "Spirit"
    },

    {
        id:156,
        title: "Pitroliyam, Petroleum Spirit",
        image: "156 petroleo.jpg",
        number: "156 / 357",
        collection: "Spirits of the Universe",
        elements: ["Poison","Earth"],
        created: "June 2023",
        category: "Spirit"
    },

    {
        id:158,
        title: "Kukura-Mutta, Mushroom Spirit",
        image: "158 hongos.jpg",
        number: "158 / 357",
        collection: "Spirits of the Universe",
        elements: ["Poison","Nature"],
        created: "January 2021",
        category: "Spirit",
        description: "It lies in wait amidst a deathly silence, a motionless shadow that defies time. When its trap snaps shut, it seizes absolute control of the victim's mind, eradicating their consciousness. There is no salvation; once you succumb, you cease to exist."
    },

    {
        id:159,
        title: "Viranjit, Bleach Spirit",
        image: "159 lejia.jpg",
        number: "159 / 357",
        collection: "Spirits of the Universe",
        elements: ["Poison","Water"],
        created: "April 2024",
        category: "Spirit"
    },

    {
        id:161,
        title: "Aml, Acid Spirit",
        image: "161 acido.jpg",
        number: "161 / 357",
        collection: "Spirits of the Universe",
        elements: ["Poison","Metal"],
        created: "June 2025",
        category: "Spirit"
    },

    {
        id:163,
        title: "Chattan, Rock Spirit",
        image: "163 roca.jpg",
        number: "163 / 357",
        collection: "Spirits of the Universe",
        elements: ["Metal","Earth"],
        created: "June 2024",
        category: "Spirit"
    },

    {
        id:166,
        title: "Mishran, Amalgam Spirit",
        image: "166 amalgama.jpg",
        number: "166 / 357",
        collection: "Spirits of the Universe",
        elements: ["Metal","Water"],
        created: "April 2025",
        category: "Spirit"
    },

    {
        id:182,
        title: "Píesis, Pressure Arcane",
        image: "182 presion.jpg",
        number: "182 / 357",
        collection: "Spirits of the Universe",
        elements: ["Science","Air"],
        created: "March 2023",
        category: "Arcane"
    },

    {
        id:184,
        title: "Corrosum, Corrosion Arcane",
        image: "184 corrosion.jpg",
        number: "184 / 357",
        collection: "Spirits of the Universe",
        elements: ["Science","Metal"],
        created: "December 2025",
        category: "Arcane"
    },

    {
        id:195,
        title: "Ekhos, Sound Talisman",
        image: "195 sonido.jpg",
        number: "195 / 357",
        collection: "Spirits of the Universe",
        elements: ["Air","Science"],
        created: "May 2021",
        category: "Talisman"
    },

    {
        id:199,
        title: "Acies, Steel Talisman",
        image: "199 acero.jpg",
        number: "199 / 357",
        collection: "Spirits of the Universe",
        elements: ["Metal","Science"],
        created: "August 2024",
        category: "Talisman"
    },

    {
        id:201,
        title: "Agni, Fire Prime Spirit",
        image: "201 fuego.jpg",
        number: "201 / 357",
        collection: "Spirits of the Universe",
        elements: ["Fire"],
        created: "May 2026",
        category: "Prime Spirit"
    },

    {
        id:202,
        title: "Prithvi, Earth Prime Spirit",
        image: "202 tierra.jpg",
        number: "202 / 357",
        collection: "Spirits of the Universe",
        elements: ["Earth"],
        created: "July 2026",
        category: "Prime Spirit"
    },

    {
        id:203,
        title: "Vidyut, Electricity Prime Spirit",
        image: "203 electricidad.jpg",
        number: "203 / 357",
        collection: "Spirits of the Universe",
        elements: ["Electricity"],
        created: "July 2026",
        category: "Prime Spirit"
    },

    {
        id:204,
        title: "Prakrti, Nature Prime Spirit",
        image: "204 naturaleza.jpg",
        number: "204 / 357",
        collection: "Spirits of the Universe",
        elements: ["Nature"],
        created: "March 2026",
        category: "Prime Spirit"
    },

    {
        id:205,
        title: "Jal, Water Prime Spirit",
        image: "205 agua.jpg",
        number: "205 / 357",
        collection: "Spirits of the Universe",
        elements: ["Water"],
        created: "June 2026",
        category: "Prime Spirit"
    },

    {
        id:206,
        title: "Vaayu, Air Prime Spirit",
        image: "206 aire.jpg",
        number: "206 / 357",
        collection: "Spirits of the Universe",
        elements: ["Air"],
        created: "April 2026",
        category: "Prime Spirit"
    },

    {
        id:208,
        title: "Dhatuu, Metal Prime Spirit",
        image: "208 metal.jpg",
        number: "208 / 357",
        collection: "Spirits of the Universe",
        elements: ["Metal"],
        created: "August 2026",
        category: "Prime Spirit"
    },

    {
        id:265,
        title: "Calens, Dawn of Heat",
        image: "265 calor.jpg",
        number: "265 / 357",
        collection: "Spirits of the Universe",
        elements: ["Fire","Light"],
        created: "July 2025",
        category: "Dawn"
    },

    {
        id:269,
        title: "Ausel, Dawn of Aurora",
        image: "269 aurora.jpg",
        number: "269 / 357",
        collection: "Spirits of the Universe",
        elements: ["Electricity","Light"],
        created: "December 2023",
        category: "Dawn"
    },

    {
        id:287,
        title: "Ba'al Zebub, Calamity of Gluttony",
        image: "287 gula.jpg",
        number: "287 / 357",
        collection: "Spirits of the Universe",
        elements: ["Darkness","Poison"],
        created: "February 2025",
        category: "Calamity"
    }
];