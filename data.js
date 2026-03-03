const crochetPattern = {
  title: "Miffy Patrón Crochet",
  blocks: [
    // -------------------- Good To Know --------------------
    { type: "subtitle", content: "Good to know (Información Importante)" },

    {
      type: "list",
      items: [
        {
          text: "For the body, we will start making the separate parts like Arms and Ears.",
          translation:
            "Para el cuerpo, comenzaremos haciendo las partes separadas como los brazos y las orejas.",
        },
        {
          text: "You can use any color of your choice to make the body. I used light peach (skin like color) in my tutorial.",
          translation:
            "Puedes usar cualquier color que prefieras para el cuerpo. En mi tutorial utilicé un tono durazno claro (color piel).",
        },
      ],
    },

    // -------------------- Arms --------------------
    { type: "subtitle", content: "Arms (Brazos)" },

    {
      type: "list",
      items: [
        {
          text: "Starting with a magic ring.",
          translation: "Comienza con un anillo mágico.",
        },
      ],
    },

    { type: "paragraph", content: "R1 8sc in mr [8]" },
    { type: "paragraph", content: "R2 (3sc, 1inc) *2 [10]" },
    { type: "paragraph", content: "R3-R8 10sc (6 rounds) [10]" },

    {
      type: "list",
      items: [
        {
          text: "Do not stuff the arms.",
          translation: "No rellenes los brazos.",
        },
        {
          text: "Close the arms by crocheting into opposite stitches together. You will get 4sc from this.",
          translation:
            "Cierra los brazos tejiendo los puntos opuestos juntos. Obtendrás 4sc de esto.",
        },
      ],
    },

    // -------------------- Ears --------------------
    { type: "subtitle", content: "Ears (Orejas)" },

    {
      type: "list",
      items: [
        {
          text: "Start with a magic ring.",
          translation: "Comienza con un anillo mágico.",
        },
      ],
    },

    { type: "paragraph", content: "R1 8sc in mr [8]" },
    { type: "paragraph", content: "R2 (1sc, 1inc) *4 [12]" },
    { type: "paragraph", content: "R3-R9 12sc (7 rounds) [12]" },

    {
      type: "list",
      items: [
        {
          text: "Stuff the ears and cut the yarn, leaving a long tail.",
          translation:
            "Rellena las orejas y corta el hilo, dejando una hebra larga.",
        },
      ],
    },

    // -------------------- Legs --------------------
    { type: "subtitle", content: "Legs (Piernas)" },

    {
      type: "list",
      items: [
        {
          text: "Start with a magic ring.",
          translation: "Comienza con un anillo mágico.",
        },
      ],
    },

    { type: "paragraph", content: "R1 8sc in mr [8]" },
    { type: "paragraph", content: "R2 8inc [16]" },
    { type: "paragraph", content: "R3 16sc [16]" },
    { type: "paragraph", content: "R4 4sc, 4dec, 4sc [12]" },
    { type: "paragraph", content: "R5 4sc, 2dec, 4sc [10]" },
    { type: "paragraph", content: "R6 10sc [10]" },

    {
      type: "list",
      items: [
        {
          text: "After round 6, make **3 more sc** and cut the yarn.",
          translation:
            "Después de la ronda 6, haz **3 puntos bajos más** y corta el hilo.",
        },
        {
          text: "Make the second leg repeating all the rounds including 3 more sc at the end, but DO NOT cut the yarn. (as we are joining two legs!)",
          translation:
            "Haz la segunda pierna repitiendo todas las rondas incluyendo 3 puntos bajos adicionales al final, pero NO cortes el hilo. (¡ya que estamos uniendo dos piernas!)",
        },
      ],
    },

    // -------------------- Joining --------------------
    {
      type: "subtitle",
      content:
        "Joining the Legs and Continuing to the Body (Uniendo las piernas y continuando con el cuerpo)",
    },

    {
      type: "list",
      items: [
        {
          text: "We will start counting again from R1 starting from the joining round.",
          translation:
            "Volveremos a contar desde R1 comenzando desde la ronda de unión.",
        },
        {
          text: "Mark the 6th sc on the 1st leg, counting backwards from where we cut the yarn.",
          translation:
            "Marca el 6º punto bajo en la 1ª pierna, contando hacia atrás desde donde cortamos el hilo.",
        },
      ],
    },

    {
      type: "paragraph",
      content:
        "R1 Ch1 (on the 2nd leg ), Starting from the sc marked on the 1st leg, 1sc into each stitch of the 1st leg, 1sc on the upper loop of the ch, 1sc into each stitch of the 2nd leg, 1sc on the lower loop of the ch. [22]",
      translation:
        "R1 Ch1 (en la 2ª pierna), comenzando desde el sc marcado en la 1ª pierna, 1sc en cada punto de la 1ª pierna, 1sc en el bucle superior de la ch, 1sc en cada punto de la 2ª pierna, 1sc en el bucle inferior de la ch. [22]",
    },

    { type: "paragraph", content: "R2 (10sc, 1inc) *2 [24]" },
    { type: "paragraph", content: "R3 (5sc, 1inc) *4 [28]" },
    { type: "paragraph", content: "R4-R8 28sc (5 rounds) [28]" },
    { type: "paragraph", content: "R9 (5sc, 1dec) *4 [24]" },
    {
      type: "list",
      items: [
        {
          text: "We are joining the hands in R10!",
          translation: "¡Estamos uniendo las manos en la R10!",
        },
      ],
    },
    {
      type: "paragraph",
      content:
        "R10 4sc, 4sc (together with hand), 8sc, 4sc (together with hand), 4sc [24]",
    },
    { type: "paragraph", content: "R11 (2sc, 1dec) *6 [18]" },

    {
      type: "list",
      items: [
        {
          text: "Starting from R12 to the end, we are making the head!",
          translation:
            "¡Desde la R12 hasta el final, estamos haciendo la cabeza!",
        },
      ],
    },

    { type: "paragraph", content: "R12 18inc [36]" },
    { type: "paragraph", content: "R13 (8sc, 1inc) *4 [40]" },
    { type: "paragraph", content: "R14-R21 40sc (8 rounds) [40]" },
    { type: "paragraph", content: "R22 (3sc, 1dec) *8 [32]" },
    { type: "paragraph", content: "R23 (1sc, 1dec, 1sc) *8 [24]" },
    { type: "paragraph", content: "R24 (1sc, 1dec) *8 [16]" },
    { type: "paragraph", content: "R25 8dec [8]" },

    {
      type: "list",
      items: [
        {
          text: "Using the black yarn, embroider the eyes on R17 with 7sc apart between two eyes.",
          translation:
            "Usando hilo negro, borda los ojos en la R17 dejando 7sc de separación entre ambos ojos.",
        },
        {
          text: "Embroider the mouth one row down the eyes in the middle.",
          translation:
            "Borda la boca una fila debajo de los ojos, en el centro.",
        },
      ],
    },

    // -------------------- Overalls --------------------
    { type: "subtitle", content: "Overalls (Jardinera)" },

    {
      type: "list",
      items: [
        {
          text: "You can use any color of your choice to make the overalls. I used light blue color in my tutorial.",
          translation:
            "Puedes usar cualquier color de tu elección para hacer la jardinera. Yo utilicé color azul claro en mi tutorial.",
        },
        {
          text: "Make sure to use the same type of yarn you used for the body to make the overalls as well.",
          translation:
            "Asegúrate de usar el mismo tipo de hilo que utilizaste para el cuerpo para hacer la jardinera también.",
        },
        {
          text: "We use joined rounds for this overall, meaning to connect with a slst at the end of each round and start every new round with a Ch. Ch1 and slst are NOT included in our total stitch count",
          translation:
            "Usamos rondas cerradas para esta jardinera, lo que significa que conectamos con un slst al final de cada ronda y comenzamos cada nueva ronda con un Ch. Ch1 y slst NO están incluidos en el conteo total de puntos.",
        },
      ],
    },

    {
      type: "paragraph",
      content: "Start with a slip knot and make 29ch.",
      translation: "Comienza con un slip knot y haz 29ch.",
    },

    {
      type: "paragraph",
      content:
        "R1 Starting from the 2nd ch from the hook, 1sc into each ch, make a slst (into the 1st sc of R1) [28]",
      translation:
        "R1 Comenzando desde el 2º ch desde el gancho, 1sc en cada ch, haz un slst (en el 1º sc de R1) [28]",
    },

    {
      type: "paragraph",
      content: "R2-R3 Ch1, 28sc, 1slst (2 rounds) [28]",
    },

    {
      type: "list",
      items: [
        {
          text: "After R3, we will divide two sections and work on the 1st trouser, then the 2nd trouser. We will start counting again from R1 for each trouser.",
          translation:
            "Después de R3, dividiremos en dos secciones y trabajaremos primero la primera pierna del pantalón y luego la segunda. Volveremos a contar desde R1 para cada pierna.",
        },
      ],
    },

    { type: "subtitle", content: "1st Trouser (Primera pierna del pantalón)" },

    {
      type: "paragraph",
      content:
        "R1 Continuing from the R3, Ch1, 14sc, Ch4, 1slst into the 1st sc [14sc, 4ch]",
      translation:
        "R1 Continuando desde la R3, Ch1, 14sc, Ch4, 1slst en el 1er sc [14sc, 4ch]",
    },

    {
      type: "paragraph",
      content: "R2 Ch1, 14sc, 4sc (on upper loops of the ch), 1slst [18]",
      translation:
        "R2 Ch1, 14sc, 4sc (en los bucles superiores de la ch), 1slst [18]",
    },
    {
      type: "paragraph",
      content: "R3 - R4 Ch1, 18sc, 1slst (2 rounds) [18]",
    },

    {
      type: "list",
      items: [
        {
          text: "Cut the yarn and weave in the end.",
          translation: "Corta el hilo y esconde la hebra.",
        },
      ],
    },

    { type: "subtitle", content: "2nd Trouser (Segunda pierna del pantalón)" },

    {
      type: "list",
      items: [
        {
          text: "Start from the stitch next to the slst of R3!",
          translation: "Comienza desde el punto junto al slst de R3.",
        },
      ],
    },

    { type: "paragraph", content: "R1 Ch1, 1sc, 4sc on ch, 13sc, 1slst [18]" },

    { type: "paragraph", content: "R2-R4 Ch1, 18sc, 1slst (3 rounds) [18]" },

    {
      type: "list",
      items: [
        {
          text: "Cut the yarn and weave in the end",
          translation: "Corta el hilo y esconde la hebra.",
        },
      ],
    },

    // -------------------- Bib --------------------
    { type: "subtitle", content: "Bib (Peto de la jardinera)" },

    {
      type: "list",
      items: [
        {
          text: "Put the overalls onto your plushie to find the 6 middle stitches on the very first row we started out. We are crocheting the bib directly onto that first row.",
          translation:
            "Coloca la jardinera en tu peluche para localizar los 6 puntos centrales de la primera fila con la que comenzamos. Vamos a tejer el peto directamente sobre esa primera fila.",
        },
      ],
    },

    { type: "paragraph", content: "R1 Ch1, 6sc [6]" },
    { type: "paragraph", content: "R2-R3 Ch1, Turn, 6sc (2 rounds) [6]" },

    {
      type: "list",
      items: [
        {
          text: "Cut yarn.",
          translation: "Corta el hilo.",
        },
      ],
    },

    // -------------------- Edging --------------------
    { type: "subtitle", content: "Edging and Straps (Borde y Tirantes)" },

    {
      type: "list",
      items: [
        {
          text: "Crochet along the three sides of the bib to make the edges look neater and also, to add the straps.",
          translation:
            "Teje a lo largo de los tres lados del peto para que los bordes se vean más prolijos y, además, para añadir los tirantes.",
        },
      ],
    },

    {
        type: "paragraph",
        content: "Starting from the bottom of the 1st row of the bib, 3sc (on 1st side), 17ch, 16sc, 6sc (on the last row of the bib), 17ch, 16sc, 3sc (on the last side).",
        translation: "Comenzando desde la parte inferior de la 1ª fila del peto, 3sc (en el 1er lado), 17ch, 16sc, 6sc (en la última fila del peto), 17ch, 16sc, 3sc (en el último lado)."
      },

    {
      type: "list",
      items: [
        {
          text: "Cut the yarn and weave in the ends.",
          translation: "Corta el hilo y esconde las hebras.",
        },
      ],
    },
    // -------------------- Headphones --------------------
    { type: "subtitle", content: "Headphones (Audífonos)" },

    {
      type: "list",
      items: [
        {
          text: "Start with a magic ring, using any color of your choice.",
          translation: "Comienza con un anillo mágico, usando cualquier color que elijas.",
        },
      ],
    },

    { type: "paragraph", content: "R1 7sc in mr, 1slst [7]" },
    { type: "paragraph", content: "R2 Ch1, 7inc, 1slst [14]" },
    { type: "paragraph", content: "R3 BLO, Ch1, 14sc, 1slst [14]" },

    {
      type: "list",
      items: [
        {
          text: "Cut yarn. Make another piece and DO NOT cut the yarn.",
          translation: "Corta el hilo. Haz otra pieza y NO cortes el hilo.",
        },
        {
          text: "On 2nd piece: 15ch, 2slst onto the 1st piece, crochet along each ch we made with 1slst to come back to the 2nd piece.",
          translation:
            "En la segunda pieza: 15ch, 2slst sobre la primera pieza, teje a lo largo de cada ch que hicimos con 1slst para regresar a la segunda pieza.",
        },
        {
          text: "When you reach back to 2nd piece, make 1slst and cut the yarn.",
          translation:
            "Cuando regreses a la segunda pieza, haz 1slst y corta el hilo.",
        },
        {
          text: "Sew the headphone onto the head.",
          translation: "Cose los audífonos en la cabeza.",
        },
      ],
    },

    // -------------------- Tomato Headband --------------------
    { type: "subtitle", content: "Tomato Headband (Cinta de Tomate)" },

    {
      type: "list",
      items: [
        {
          text: "Start with a slip knot, using Red yarn.",
          translation: "Comienza con un slip knot, usando hilo rojo.",
        },
        {
          text: "Ch18",
        },
        {
          text: "R1 Starting from the 3rd ch from the hook, 16hdc. [16]",
          translation:
            "R1 Comenzando desde la 3ª ch desde el gancho, 16hdc. [16]",
        },
        {
          text: "R2 Ch2, Turn, 16hdc [16].",
        },
      ],
    },

    {
      type: "list",
      items: [
        {
          text: "Continue making 2sc on the side of each row, for a total of 4sc. Ch1, Turn, 2dec. Ch1, Turn, 1dec. Cut the yarn, leaving a long tail. Repeat the same step to the other side.",
          translation:
            "Continúa haciendo 2sc en el costado de cada fila, para un total de 4sc. Ch1, gira, 2dec. Ch1, gira, 1dec. Corta el hilo dejando una hebra larga. Repite el mismo paso en el otro lado.",
        },
      ],
    },

    // -------------------- Tomato Leaf --------------------
    { type: "subtitle", content: "Tomato Leaf (Hoja de tomate)" },

    {
      type: "paragraph",
      content: "Into mr, (ch3, 1slst, 1sc, 1slst into mr) *5",
      translation:
        "Dentro del anillo mágico, (ch3, 1slst, 1sc, 1slst dentro del anillo mágico) *5",
    },

    {
      type: "list",
      items: [
        {
          text: "Cut yarn, leaving a long tail.",
          translation: "Corta el hilo dejando una hebra larga.",
        },
        {
          text: "Sew the headband onto the head and then, the tomato leaf at the top.",
          translation:
            "Cose la cinta en la cabeza y luego la hoja de tomate en la parte superior.",
        },
      ],
    },
  ],
};

export default crochetPattern;
