'use strict';
(() => {
  const translations = {
  "01 / DE CAJA A ORGANIZADOR": "01 / FROM BOX TO ORGANIZER",
  "02 / IDEAS DE USO": "02 / WAYS TO USE IT",
  "03 / NUESTRO PROPÓSITO": "03 / OUR PURPOSE",
  "04 / COLABORACIONES": "04 / COLLABORATIONS",
  "05 / LO QUE QUIERES SABER": "05 / WHAT YOU WANT TO KNOW",
  "6 compartimentos": "6 compartments",
  "6 de 6 espacios": "6 of 6 spaces",
  "A tu manera": "Your way",
  "Abre, pliega, encaja y organiza.": "Open, fold, fit and organize.",
  "Accesorios": "Accessories",
  "Ahora,": "Now,",
  "Antes de": "Before you",
  "Arma tu caja": "Assemble your box",
  "Caja de cartón abierta y vacía": "An open, empty cardboard box",
  "Caja de zapatos visible": "Shoebox visible",
  "Calcetines": "Socks",
  "Calcetines y accesorios pequeños y livianos. El organizador tiene seis compartimentos.": "Socks and small, lightweight accessories. The organizer has six compartments.",
  "Calcetines, accesorios y esas pequeñas cosas que quieres tener a mano. Encuentra un lugar para cada una.": "Socks, accessories and the little things you like to keep close. Find a place for each one.",
  "Características del diseño": "Design features",
  "Cartón de 1 mm": "1 mm cardboard",
  "Cartón desplegado con sus líneas de pliegue": "Unfolded cardboard showing its fold lines",
  "Cero pegamento.": "Zero glue.",
  "Colaboraciones": "Collaborations",
  "Comparar la caja de zapatos con el organizador": "Compare the shoebox with the organizer",
  "Comprueba que las divisiones queden asentadas y que la base se mantenga plana.": "Check that the dividers sit securely and the base stays flat.",
  "Conoce": "Get to know",
  "Conserva el cartón de la caja: será parte de su segunda vida.": "Keep the cardboard: it will become part of the box’s second life.",
  "Cómo se arma": "How to assemble",
  "DISEÑO QUE SIGUE CONTIGO": "DESIGN THAT STAYS WITH YOU",
  "Dale forma": "Shape",
  "Dale forma a": "Shape",
  "Desliza y descubre la transformación.": "Slide to discover the transformation.",
  "Desplázate para seguir el armado, paso a paso.": "Scroll to follow the assembly, step by step.",
  "Después, organiza tu clóset.": "Then, it organizes your closet.",
  "Detalle de la caja de cartón con el logotipo RE:BOX impreso en la tapa": "A close-up of the cardboard box with the RE:BOX logo printed on the lid",
  "Diseñados para una segunda vida.": "Designed for a second life.",
  "Diseñamos la caja": "We design the box",
  "Diseñar empaques de calzado que protejan el producto y sigan siendo útiles después de abrirlos, convirtiéndose en objetos de organización.": "To design footwear packaging that protects the product and stays useful after opening, becoming an organizer.",
  "Dos vidas.": "Two lives.",
  "EL EMPAQUE TAMBIÉN": "PACKAGING CAN HAVE",
  "Empaques de calzado.": "Footwear packaging.",
  "Empaques diseñados para seguir contigo": "Packaging designed to stay with you",
  "Encaje entre pestaña y ranura de cartón": "A cardboard tab fitting into a slot",
  "Espacio 1: calcetines. Vaciar espacio.": "Compartment 1: socks. Empty compartment.",
  "Espacio 2: calcetines. Vaciar espacio.": "Compartment 2: socks. Empty compartment.",
  "Espacio 3: calcetines. Vaciar espacio.": "Compartment 3: socks. Empty compartment.",
  "Espacio 4: calcetines. Vaciar espacio.": "Compartment 4: socks. Empty compartment.",
  "Espacio 5: calcetines. Vaciar espacio.": "Compartment 5: socks. Empty compartment.",
  "Espacio 6: calcetines. Vaciar espacio.": "Compartment 6: socks. Empty compartment.",
  "Espacio {n}: accesorios. Vaciar espacio.": "Compartment {n}: accessories. Empty compartment.",
  "Espacio {n}: calcetines. Vaciar espacio.": "Compartment {n}: socks. Empty compartment.",
  "Espacio {n}: vacío. Llenar espacio.": "Compartment {n}: empty. Fill compartment.",
  "Explora los seis espacios del organizador": "Explore the organizer’s six compartments",
  "GUÍA DE TRANSFORMACIÓN": "ASSEMBLY GUIDE",
  "Guárdalo en un lugar seco, evita el contacto con líquidos y no sobrecargues las divisiones. Así podrás seguir aprovechando su segunda vida.": "Keep it in a dry place, avoid contact with liquids and do not overload the compartments. That way, you can keep enjoying its second life.",
  "Haz espacio": "Make room",
  "Ideas de uso": "Ways to use it",
  "Ideas para organizar tu caja": "Ideas for organizing your box",
  "Identifica los pliegues, las pestañas y las ranuras. La vista desplegada te ayuda a reconocer cómo se relacionan las partes de la caja.": "Identify the folds, tabs and slots. The unfolded view shows how the parts of the box fit together.",
  "Ir al contenido": "Skip to content",
  "LA COLABORACIÓN": "THE COLLABORATION",
  "La caja está hecha de cartón de 1 mm y no utiliza pegamento. Cuando ya no puedas reutilizarlo, consulta las condiciones de recepción de cartón de tu punto de reciclaje.": "The box is made from 1 mm cardboard and uses no glue. When you can no longer reuse it, check the cardboard acceptance guidelines at your local recycling point.",
  "La caja termina.": "The box ends.",
  "La caja termina. Su uso continúa.": "The box ends. Its use goes on.",
  "La caja utiliza pliegues y encajes a presión, sin adhesivos.": "The box uses folds and press-fit tabs, with no adhesives.",
  "La identidad de BESTIAS se encuentra con una estructura RE:BOX pensada para seguir siendo útil. El diseño no termina con la entrega.": "The identity of BESTIAS meets a RE:BOX structure designed to stay useful. The design does not end with delivery.",
  "Manos colocando divisiones para formar seis espacios": "Hands positioning dividers to create six compartments",
  "Manos plegando una pared de cartón": "Hands folding a cardboard wall",
  "Mantenla seca y úsala con objetos livianos para cuidar el cartón.": "Keep it dry and use it for lightweight items to care for the cardboard.",
  "Mitad caja, mitad organizador": "Half shoebox, half organizer",
  "Más de una vida.": "More than one life.",
  "Navegación principal": "Main navigation",
  "Nuestra misión": "Our mission",
  "Nuestra visión": "Our vision",
  "Ordena tu espacio.": "Organizes your space.",
  "Organiza calcetines o accesorios pequeños en cada espacio. Tu caja ya tiene un nuevo lugar en el clóset.": "Arrange socks or small accessories in each compartment. Your box now has a new place in your closet.",
  "Organizador terminado con calcetines en seis compartimentos": "The finished organizer with socks in its six compartments",
  "Organizador visible": "Organizer visible",
  "Orienta los divisores y únelos mediante sus ranuras. Ubícalos dentro de la base para formar los seis compartimentos.": "Line up the dividers and slot them together. Place them inside the base to create the six compartments.",
  "PASO": "STEP",
  "PASO 01": "STEP 01",
  "PASO 02": "STEP 02",
  "PASO 03": "STEP 03",
  "PASO 04": "STEP 04",
  "PASO 05": "STEP 05",
  "PASO 06": "STEP 06",
  "PENSAR MÁS ALLÁ DE LA CAJA": "THINKING BEYOND THE BOX",
  "PRIMERA VIDA": "FIRST LIFE",
  "PUEDE TENER OTRO DESTINO.": "ANOTHER PURPOSE, TOO.",
  "Pequeñas respuestas para cuidar": "A few answers to care for",
  "Primero protege tus zapatos.": "First, it protects your shoes.",
  "Primero protege tus zapatos. Después, organiza tu clóset. Conoce la guía de transformación de RE:BOX.": "First, it protects your shoes. Then, it organizes your closet. Discover the RE:BOX assembly guide.",
  "Protege tus zapatos.": "Protects your shoes.",
  "Que la segunda vida sea parte del diseño de cada empaque y que conservar una caja resulte tan natural como abrirla.": "To make a second life part of every package’s design, so keeping a box feels as natural as opening it.",
  "RE:BOX como caja de zapatos cerrada": "RE:BOX as a closed shoebox",
  "RE:BOX como organizador de seis compartimentos con calcetines": "RE:BOX as a six-compartment organizer holding socks",
  "RE:BOX diseña el empaque reutilizable. BESTIAS aporta su identidad al encuentro: una caja de zapatos que sigue siendo útil después de abrirla.": "RE:BOX designs the reusable packaging. BESTIAS brings its identity to the collaboration: a shoebox that stays useful after opening.",
  "RE:BOX · DISEÑADA PARA QUEDARSE": "RE:BOX · DESIGNED TO STAY",
  "RE:BOX — Tu caja tiene otra vida": "RE:BOX — Your box has a second life",
  "RE:BOX, inicio": "RE:BOX, home",
  "RE:BOX, volver al inicio": "RE:BOX, back to the top",
  "Recorre la guía a tu ritmo.": "Follow the guide at your own pace.",
  "Retira los zapatos y deja la caja vacía sobre una superficie plana y despejada.": "Remove the shoes and place the empty box on a clear, flat surface.",
  "Revisa la forma de la base antes de continuar con los encajes.": "Check the shape of the base before securing the tabs.",
  "Revisa que las pestañas estén alineadas con sus ranuras. Si algún encaje está suelto, presiónalo suavemente para sostener las paredes.": "Check that the tabs line up with their slots. If a tab is loose, press it gently into place to secure the walls.",
  "SEGUNDA VIDA": "SECOND LIFE",
  "Seis espacios.": "Six spaces.",
  "Seleccionar idioma": "Select language",
  "Si tu caja llegó armada, comprueba que la base esté plana y las paredes firmes. Si está desplegada, dobla las paredes por las líneas marcadas.": "If your box came assembled, check that the base is flat and the walls are secure. If it is unfolded, fold the walls along the marked lines.",
  "Si una pieza ofrece resistencia, revisa su orientación antes de forzarla.": "If a piece resists, check its orientation before pushing it further.",
  "Sin pegamento": "No glue",
  "Somos ReBox": "About ReBox",
  "Su uso continúa.": "Its use goes on.",
  "TU ORDEN EMPIEZA AQUÍ": "YOUR ORGANIZED SPACE STARTS HERE",
  "Toca cada espacio para llenarlo o vaciarlo.": "Tap each compartment to fill or empty it.",
  "Todo parte": "It all starts",
  "Transforma tu caja": "Transform your box",
  "Transforma tu caja de zapatos en un organizador de seis compartimentos. Descubre su segunda vida y aprende a armarla con RE:BOX.": "Turn your shoebox into a six-compartment organizer. Discover its second life and learn how to assemble it with RE:BOX.",
  "Tu caja se queda.": "Your box stays.",
  "Tu caja tiene": "Your box has",
  "Tu manera de usarlos.": "Your way to use them.",
  "Tus zapatos salen.": "Your shoes come out.",
  "UNA CAJA, MUCHAS POSIBILIDADES": "ONE BOX, MANY POSSIBILITIES",
  "Ubica las piezas de las divisiones y sigue las marcas del cartón.": "Find the divider pieces and follow the markings on the cardboard.",
  "Un empaque pensado para quedarse.": "Packaging designed to stay.",
  "Un encaje.": "A simple fit.",
  "Una caja.": "One box.",
  "Una caja. Dos vidas.": "One box. Two lives.",
  "Una misma idea.": "One shared idea.",
  "Vaciar organizador": "Empty organizer",
  "Volver a la guía": "Back to the guide",
  "Volver arriba": "Back to top",
  "a la base.": "the base.",
  "con tu caja.": "with your box.",
  "darle otra vida.": "give it a second life.",
  "hazla tuya.": "make it yours.",
  "otra vida.": "a second life.",
  "para seis.": "for six.",
  "que quieres conservar.": "you want to keep.",
  "su segunda vida.": "its second life.",
  "sus pliegues.": "the folds.",
  "una buena idea.": "a good idea.",
  "{box} % caja de zapatos, {organizer} % organizador": "{box}% shoebox, {organizer}% organizer",
  "{n} de 6 espacios": "{n} of 6 spaces",
  "¿Cómo cuido el cartón?": "How do I care for the cardboard?",
  "¿Necesito pegamento?": "Do I need glue?",
  "¿Qué pasa cuando ya no lo use?": "What happens when I no longer use it?",
  "¿Qué puedo guardar?": "What can I store?"
};
  let language = 'en';
  const textRecords = [];
  const attributeRecords = [];
  document.querySelectorAll('[data-language-copy]').forEach(element => {
    const keys = JSON.parse(element.dataset.languageCopy);
    Object.entries(keys).forEach(([index, key]) => {
      const node = element.childNodes[Number(index)];
      if (!node || node.nodeType !== Node.TEXT_NODE) return;
      textRecords.push({node, key, leading: node.nodeValue.match(/^\s*/u)[0], trailing: node.nodeValue.match(/\s*$/u)[0]});
    });
  });
  document.querySelectorAll('[data-language-attrs]').forEach(element => {
    Object.entries(JSON.parse(element.dataset.languageAttrs)).forEach(([attribute, key]) => attributeRecords.push({element, attribute, key}));
  });

  function translate(key, values = {}) {
    const text = language === 'en' ? translations[key] || key : key;
    return text.replace(/\{(\w+)\}/g, (match, name) => values[name] === undefined ? match : String(values[name]));
  }

  function setLanguage(nextLanguage) {
    if (!['en', 'es'].includes(nextLanguage)) return;
    language = nextLanguage;
    document.documentElement.lang = language;
    textRecords.forEach(({node, key, leading, trailing}) => { node.nodeValue = leading + translate(key) + trailing; });
    attributeRecords.forEach(({element, attribute, key}) => { element.setAttribute(attribute, translate(key)); });
    document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
    document.dispatchEvent(new CustomEvent('rebox:languagechange', {detail:{language}}));
  }

  window.ReboxLanguage = {translate, setLanguage, get language() { return language; }};
  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  // Every fresh page load starts in English. The browser's locale is not used.
  setLanguage('en');
})();
