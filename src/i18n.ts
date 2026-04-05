import { createI18n } from "vue-i18n";

const messages = {
  es: {
    nav: {
      home: "Inicio",
      menu: "Menú",
      gallery: "Galería",
      about: "Nosotros",
      contact: "Contacto",
      reserve: "Reservar",
    },
    footer: {
      explore: "Explora",
      menu: "Menú",
      contact: "Contacto",
      gallery: "Galería",
      about: "Nosotros",
      reserve: "Reservaciones",
      follow: "Síguenos",
      rights: "Todos los derechos reservados",
      privacy: "Política de Privacidad",
    },
    reserve: {
      title: "Reserva tu experiencia",
      text: "Vive una experiencia gastronómica única en CULTIVO. Reserva tu mesa fácilmente en línea o contáctanos directamente.",
      button: "Reservar en OpenTable",
      buttonWhatsapp: "Reservar por WhatsApp",
    },
    menu: {
      title: "Menú de degustación",
    },
    gallery: {
      title: "Galería",
    },
    contact: {
      locationTitle: "Ubicación",
      streetName: "Calle. 15 Sur 909,",
      city: "Barrio de Santiago, Puebla, México",
      buttonMaps: "Ver en Google Maps",
      scheduleTitle: "Horario",
      schedule: "Martes a sábado: 14:00 - 22:00",
      closed: "Domingo y lunes: Cerrado",
      contactTitle: "Contacto",
      txtPhone: "Tel:",
      phone: "+52 222 365 5208",
    },
    about: {
      title1: "Nosotros",
      text1_1:
        "Somos un restaurante de cocina estacional que construye, a través del tiempo, una narrativa culinaria para cada temporada. Nuestros menús degustación buscan expresar con detalle la esencia que se vive en México a lo largo del año, interpretando los cambios naturales y culturales que definen cada momento.",
      text1_2:
        "Trabajamos con ingredientes de origen responsable y aplicamos técnicas que permiten el aprovechamiento integral del producto, reduciendo así nuestro impacto ambiental y promoviendo una cocina consciente y respetuosa con el entorno.",
      text1_3:
        "La coctelería es desarrollada por RIEGO, nuestro bar dentro de Cultivo, donde, siguiendo la misma línea conceptual, se crean propuestas estacionales que dialogan con la cocina y enriquecen la experiencia gastronómica.",
      title2: "El menú",
      text2_1:
        "El menú se concibe como una narrativa que explora la riqueza natural y cultural de México en cada estación, guiada por ingredientes en su mejor momento. A través de él, buscamos revalorar elementos que han quedado en el olvido dentro de nuestra cocina nacional, devolviéndoles protagonismo y significado.",
      text2_2:
        "Asimismo, proponemos una nueva mirada sobre lo que comemos, integrando emoción y sensibilidad mediante una narrativa cuidada y el uso preciso de la técnica en cada paso del recorrido. Cada plato forma parte de una historia que se desarrolla de manera armónica, invitando al comensal a vivir una experiencia con identidad, memoria y expresión contemporánea.",
      title3: "RIEGO",
      text3_1:
        "RIEGO se concibe como nuestro bar y, al mismo tiempo, como un laboratorio dedicado a la exploración de la parte líquida. Desde este espacio desarrollamos experiencias que acompañan tanto nuestra coctelería como los maridajes del menú, ampliando la narrativa gastronómica desde la bebida.",
      text3_2:
        "Nuestra coctelería se fundamenta en la estacionalidad, buscando capturar cada momento del año en un trago y trasladarlo al comensal a través de aromas, texturas y sabores.",
      text3_3:
        "El maridaje, por su parte, integra destilados y licores elaborados por nosotros mismos, concebidos para resaltar los ingredientes en distintas expresiones. Con ello, procuramos construir un diálogo armónico entre lo que se come y lo que se bebe, logrando un encuentro preciso y equilibrado en cada paso de la experiencia.",
    },
    privacy: {
      title: "Política de Privacidad",
      welcomeText: "Bienvenido a ",
      text1:
        "Su privacidad es importante para nosotros. Queremos que sepa que este sitio web es únicamente informativo y no recopila información personal de sus visitantes.",
      title2: "Información que mostramos",
      text2: "Nuestro sitio incluye las siguientes secciones:",
      list1: "Inicio:",
      list2: "Menú:",
      list3: "Galería:",
      list4: "Nosotros:",
      list5: "Contacto:",
      list6: "Reservar:",
      list7: "Redes sociales:",
      textList1: "Imagen de presentación del restaurante.",
      textList2: "Información sobre los platillos de la temporada.",
      textList3: "Dirección física y otros datos de ubicación.",
      textList4: "Fotografías de nuestros platillos.",
      textList5: "Información sobre nuestra filosofía y concepto.",
      textList6: "Enlaces para hacer reservaciones vía WhatsApp o OpenTable.",
      textList7: "Enlaces a nuestras cuentas públicas.",
      title3: "Datos personales",
      text3:
        "No solicitamos ni almacenamos datos personales de nuestros visitantes. Las reservas a través de WhatsApp u OpenTable se gestionan en sus respectivas plataformas, no en nuestro sitio.",
      title4: "Cookies y seguimiento",
      text4:
        "Nuestro sitio no utiliza cookies ni tecnologías de seguimiento. No recopilamos información sobre su navegación o comportamiento en línea.",
      title5: "Enlaces externos",
      text5:
        "Nuestro sitio puede contener enlaces a plataformas externas como WhatsApp y OpenTable para facilitar las reservas. Estas plataformas pueden recopilar información de acuerdo con sus propias políticas de privacidad. Le recomendamos revisar las políticas de privacidad de estas plataformas para entender cómo manejan su información.",
      title6: "Contacto",
      text6:
        "Si tiene alguna pregunta o inquietud sobre nuestra política de privacidad, no dude en contactarnos a través de la sección de contacto en nuestro sitio web.",
    },
  },
  en: {
    nav: {
      home: "Home",
      menu: "Menu",
      gallery: "Gallery",
      about: "About Us",
      contact: "Contact",
      reserve: "Reserve",
    },
    footer: {
      explore: "Explore",
      menu: "Menu",
      contact: "Contact",
      gallery: "Gallery",
      about: "About Us",
      reserve: "Reserve",
      follow: "Follow Us",
      rights: "All rights reserved",
      privacy: "Privacy Policy",
    },
    reserve: {
      title: "Book Your Experience",
      text: "Experience a unique gastronomic journey at CULTIVO. Easily book your table online or contact us directly.",
      button: "Book on OpenTable",
      buttonWhatsapp: "Book via WhatsApp",
    },
    menu: {
      title: "Tasting Menu",
    },
    gallery: {
      title: "Gallery",
    },
    contact: {
      locationTitle: "Location",
      streetName: "Street. 15 Sur 909,",
      city: "Barrio de Santiago, Puebla, México",
      buttonMaps: "View on Google Maps",
      scheduleTitle: "Schedule",
      schedule: "Tuesday to Saturday: 14:00 - 22:00",
      closed: "Sunday and Monday: Closed",
      contactTitle: "Contact",
      txtPhone: "Tel:",
      phone: "+52 222 365 5208",
    },
    about: {
      title1: "About Us",
      text1_1:
        "We are a seasonal cuisine restaurant that builds, over time, a culinary narrative for each season. Through our tasting menus, we aim to express in detail the essence experienced in Mexico throughout the year, interpreting the natural and cultural changes that define each moment.",
      text1_2:
        "We work with responsibly sourced ingredients and apply techniques that allow for the full utilization of the product, thereby reducing our environmental impact and promoting conscious and respectful cooking.",
      text1_3:
        "The cocktail program is developed by RIEGO, our bar within Cultivo, where, following the same conceptual line, seasonal proposals are created that dialogue with the cuisine and enrich the gastronomic experience.",
      title2: "The Menu",
      text2_1:
        "The menu is conceived as a narrative that explores the natural and cultural richness of Mexico in each season, guided by ingredients at their peak. Through it, we seek to revalue elements that have been forgotten within our national cuisine, giving them prominence and meaning.",
      text2_2:
        "Likewise, we propose a new perspective on what we eat, integrating emotion and sensitivity through a carefully crafted narrative and the precise use of technique at each step of the journey. Each dish is part of a story that unfolds harmoniously, inviting the diner to experience an identity, memory, and contemporary expression.",
      title3: "RIEGO",
      text3_1:
        "RIEGO is conceived as our bar and, at the same time, as a laboratory dedicated to the exploration of the liquid part. From this space, we develop experiences that accompany both our cocktails and the menu pairings, expanding the gastronomic narrative from the drink.",
      text3_2:
        "Our cocktail program is based on seasonality, seeking to capture each moment of the year in a drink and convey it to the diner through aromas, textures, and flavors.",
      text3_3:
        "The pairing, in turn, integrates spirits and liqueurs made by ourselves, designed to highlight the ingredients in different expressions. With this, we aim to build a harmonious dialogue between what is eaten and what is drunk, achieving a precise and balanced encounter at each step of the experience.",
    },
    privacy: {
      title: "Privacy Policy",
      welcomeText: "Welcome to ",
      text1:
        "Your privacy is important to us. We want you to know that this website is for informational purposes only and does not collect personal information from its visitors.",
      title2: "Information We Display",
      text2: "Our site includes the following sections:",
      list1: "Home:",
      list2: "Menu:",
      list3: "Gallery:",
      list4: "About Us:",
      list5: "Contact:",
      list6: "Reservations:",
      list7: "Social Media:",
      textList1: "Restaurant presentation image.",
      textList2: "Information about the seasonal dishes.",
      textList3: "Physical address and other location details.",
      textList4: "Photographs of our dishes.",
      textList5: "Information about our philosophy and concept.",
      textList6: "Links to make reservations via WhatsApp or OpenTable.",
      textList7: "Links to our public accounts.",
      title3: "Personal Data",
      text3:
        "We do not request or store personal data from our visitors. Reservations through WhatsApp or OpenTable are managed on their respective platforms, not on our site.",
      title4: "Cookies and Tracking",
      text4:
        "Our site does not use cookies or tracking technologies. We do not collect information about your browsing or online behavior.",
      title5: "External Links",
      text5:
        "Our site may contain links to external platforms such as WhatsApp and OpenTable to facilitate reservations. These platforms may collect information according to their own privacy policies. We recommend reviewing the privacy policies of these platforms to understand how they handle your information.",
      title6: "Contact",
      text6:
        "If you have any questions or concerns about our privacy policy, please feel free to contact us through the contact section on our website.",
    },
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: "es",
  fallbackLocale: "es",
  messages,
});
