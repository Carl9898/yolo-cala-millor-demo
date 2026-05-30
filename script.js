/* ------------------------------------------------------------------
   YOLO — Cala Millor
   Data verified from Facebook, Instagram, Google Maps reviews,
   Cala Millor Guru article, and OCR of own menu photo (Kuchenkarte).
   No invented prices.
------------------------------------------------------------------- */

// ---------- EMPFEHLUNGEN (Items aus Reviews + Insta-Highlights, OHNE Preise) ----------
const RECS = [
  { de:{n:"Schnitzel mit Bratkartoffeln", d:"Unser Klassiker. Würden die meisten Wirtshäuser in Deutschland nicht besser hinbekommen."}, en:{n:"Schnitzel with Bratkartoffeln", d:"Our classic. Even most pubs in Germany couldn't do it better."}, es:{n:"Schnitzel con patatas salteadas", d:"Nuestro clásico. La mayoría de tabernas alemanas no lo harían mejor."} },
  { de:{n:"Currywurst mit hausgemachter Soße", d:"Klassisch. Soße kommt aus unserer Küche."}, en:{n:"Currywurst with house sauce", d:"Classic. Sauce made in-house."}, es:{n:"Currywurst con salsa casera", d:"Clásico. La salsa la hacemos nosotros."} },
  { de:{n:"Vegetarischer Wok", d:"Hochgelobt von vielen Gästen. Auch vegane Variante möglich."}, en:{n:"Vegetarian Wok", d:"Highly praised by guests. Vegan option available."}, es:{n:"Wok vegetariano", d:"Muy elogiado. Opción vegana disponible."} },
  { de:{n:"Clubsandwich", d:"Unser Klassiker für den kleinen oder großen Hunger."}, en:{n:"Club sandwich", d:"Classic for small or big appetites."}, es:{n:"Club sandwich", d:"Clásico para hambres pequeñas o grandes."} },
  { de:{n:"Tapas-Auswahl", d:"Wechselnde Auswahl. Beim spanischen Abend gibt es ein Tapasbuffet."}, en:{n:"Tapas selection", d:"Rotating selection. On Spanish nights, a tapas buffet."}, es:{n:"Selección de tapas", d:"Selección rotativa. Las noches españolas ofrecemos buffet."} },
  { de:{n:"Saisonale Spezialitäten", d:"Pfifferlinge, Spargel und mehr — je nach Saison. Aktuelles auf unserem Facebook."}, en:{n:"Seasonal specials", d:"Chanterelles, asparagus and more. See our Facebook for current dishes."}, es:{n:"Especialidades de temporada", d:"Setas, espárragos y más. Mira nuestro Facebook para lo actual."} }
];

// ---------- KUCHENKARTE (aus OCR der eigenen Karte, mit echten Preisen) ----------
const CAKES = [
  { de:{n:"Apfeltarte mit Sahne",d:"Apfel hat Vitamine :-)"}, en:{n:"Apple tart with cream",d:"Apple has vitamins :-)"}, es:{n:"Tarta de manzana con nata",d:"La manzana tiene vitaminas :-)"}, p:"7,90 €" },
  { de:{n:"Schokobombe mit Sahne",d:"Schokoküchlein mit flüssigem Kern"}, en:{n:"Chocolate bomb with cream",d:"Chocolate cake with liquid core"}, es:{n:"Bomba de chocolate con nata",d:"Bizcochito con corazón líquido"}, p:"4,90 €" },
  { de:{n:"Mandelkuchen mit Kirschen und Sahne",d:"Und nochmal Vitamine"}, en:{n:"Almond cake with cherries and cream",d:"More vitamins"}, es:{n:"Bizcocho de almendra con cerezas y nata",d:"Y otra vez vitaminas"}, p:"6,90 €" },
  { de:{n:"Zitronen-Baiser-Törtchen mit Sahne",d:"Ein Klassiker — bei uns am besten"}, en:{n:"Lemon meringue tartlet with cream",d:"A classic — at ours, the best"}, es:{n:"Tartaleta de limón y merengue con nata",d:"Un clásico — donde nosotros, el mejor"}, p:"6,90 €" },
  { de:{n:"Feigentörtchen mit Sahne",d:"Haselnussgebäck mit Mandel- und Pistaziencreme, dazu geröstete Feigen"}, en:{n:"Fig tartlet with cream",d:"Hazelnut pastry with almond & pistachio cream and roasted figs"}, es:{n:"Tartaleta de higos con nata",d:"Pastel de avellana con crema de almendra y pistacho, higos asados"}, p:"6,90 €" },
  { de:{n:"Mangotörtchen mit Sahne",d:"Butterbiskuit mit Mangowürfeln und Karamellsauce"}, en:{n:"Mango tartlet with cream",d:"Butter biscuit with mango cubes and caramel sauce"}, es:{n:"Tartaleta de mango con nata",d:"Bizcocho mantequilla con dados de mango y salsa de caramelo"}, p:"6,90 €" },
  { de:{n:"Knuspriges Schoko-Karamell-Törtchen mit Sahne",d:"Knuspriger Streuselboden, Vollmilchschokoladenmousse, mit Schokolade überzogen und einem Karamellkern"}, en:{n:"Crunchy chocolate-caramel tartlet with cream",d:"Crunchy crumb base, milk chocolate mousse, chocolate coating, caramel core"}, es:{n:"Tartaleta crujiente choco-caramelo con nata",d:"Base crujiente, mousse de chocolate con leche, cobertura de chocolate y corazón de caramelo"}, p:"8,90 €" },
  { de:{n:"Knuspriges Joghurt-Erdbeer-Törtchen mit Sahne",d:"Keksboden in weißer Schokolade, Joghurtmousse, Erdbeermarmelade, mit Pistazienspänen dekoriert"}, en:{n:"Crunchy yoghurt-strawberry tartlet with cream",d:"Cookie base in white chocolate, yoghurt mousse, strawberry jam, pistachio shavings"}, es:{n:"Tartaleta crujiente yogur-fresa con nata",d:"Base de galleta con chocolate blanco, mousse de yogur, mermelada de fresa y pistacho"}, p:"8,90 €" }
];

// ---------- I18N ----------
const I18N = {
  de: {
    "nav.menu":"Empfehlungen","nav.cakes":"Kuchen","nav.story":"Über uns","nav.visit":"Besuch",
    "cta.reserve":"Reservieren",
    "hero.eyebrow":"Cala Millor · Mallorca",
    "hero.title":"Frisch gekocht. Mit viel Liebe.",
    "hero.sub":"Deutsche Küche in einer kleinen Seitenstraße von Cala Millor — gemütlich, ehrlich, jeden Abend frisch zubereitet.",
    "hero.reserve":"Tisch reservieren",
    "hero.hours":"Mi – So · 17:30 – 22:30",
    "hero.rating":"★ 4,9 bei Google · 433 Bewertungen",
    "story.kicker":"Über uns",
    "story.title":"Klein, gemütlich, ehrlich gekocht.",
    "story.p1":"Das YOLO liegt etwas abseits vom Geschehen, in einer kleinen Seitenstraße Richtung Strandpromenade. Innen rustikale weiße Tische, eine Bruchsteinwand, eine kleine Theke. Draußen komplett überdachte Terrasse.",
    "story.p2":"Wir kochen frisch und mit viel Liebe — Schnitzel, Currywurst hausgemacht, vegetarischer Wok, Tapas und wechselnde Tagesgerichte. Dazu Kuchen aus eigener Backstube. Für Gäste, die etwas Vertrautes wollen.",
    "story.statRating":"433 Google-Bewertungen",
    "story.statFb":"83 Facebook-Bewertungen",
    "story.statPrice":"pro Person",
    "menu.kicker":"Empfehlungen",
    "menu.title":"Was unsere Gäste lieben.",
    "menu.note":"Wechselnde Tagesgerichte werden zu Wochenbeginn auf unserer Facebook-Seite angekündigt. Die komplette Karte gibt es vor Ort.",
    "cakes.kicker":"Kuchen & Süßes",
    "cakes.title":"Backen ist aus Teig geformte Liebe.",
    "cakes.extra":"Zusätzlich mit einer Kugel Vanilleeis +2,00 €",
    "visit.kicker":"Besuch",
    "visit.title":"C/ de Ca s'Hereu, 15 — Cala Millor",
    "visit.hoursLabel":"Öffnungszeiten",
    "visit.hoursDays":"Mittwoch bis Sonntag",
    "visit.hoursClosed":"Montag & Dienstag geschlossen",
    "visit.addressLabel":"Adresse",
    "visit.contactLabel":"Kontakt",
    "visit.callCta":"Anrufen zum Reservieren",
    "footer.tag":"Frisch gekocht, mit viel Liebe.",
    "footer.findUs":"Wo wir sind",
    "footer.hours":"Öffnungszeiten",
    "footer.hoursLine":"Mi – So · 17:30 – 22:30",
    "footer.closed":"Mo & Di geschlossen",
    "footer.contact":"Kontakt"
  },
  en: {
    "nav.menu":"Recommendations","nav.cakes":"Cakes","nav.story":"About","nav.visit":"Visit",
    "cta.reserve":"Book",
    "hero.eyebrow":"Cala Millor · Mallorca",
    "hero.title":"Freshly cooked. With lots of love.",
    "hero.sub":"German cooking in a small side street of Cala Millor — cozy, honest, freshly prepared every evening.",
    "hero.reserve":"Book a table",
    "hero.hours":"Wed – Sun · 17:30 – 22:30",
    "hero.rating":"★ 4.9 on Google · 433 reviews",
    "story.kicker":"About",
    "story.title":"Small, cozy, honest cooking.",
    "story.p1":"YOLO is tucked away in a small side street heading to the seafront. Inside: rustic white tables, a natural-stone wall, a small bar. Outside: a fully covered terrace.",
    "story.p2":"We cook fresh and with a lot of love — Schnitzel, home-made Currywurst, vegetarian Wok, tapas and changing daily specials. Plus cakes from our own oven. For guests who want something familiar.",
    "story.statRating":"433 Google reviews",
    "story.statFb":"83 Facebook reviews",
    "story.statPrice":"per person",
    "menu.kicker":"Recommendations",
    "menu.title":"What our guests love.",
    "menu.note":"Changing daily specials are announced on our Facebook page at the start of each week. The full menu is available at the restaurant.",
    "cakes.kicker":"Cakes & Sweets",
    "cakes.title":"Baking is love shaped from dough.",
    "cakes.extra":"With a scoop of vanilla ice cream +2.00 €",
    "visit.kicker":"Visit",
    "visit.title":"C/ de Ca s'Hereu, 15 — Cala Millor",
    "visit.hoursLabel":"Hours",
    "visit.hoursDays":"Wednesday to Sunday",
    "visit.hoursClosed":"Monday & Tuesday closed",
    "visit.addressLabel":"Address",
    "visit.contactLabel":"Contact",
    "visit.callCta":"Call to book",
    "footer.tag":"Freshly cooked, with love.",
    "footer.findUs":"Find us",
    "footer.hours":"Hours",
    "footer.hoursLine":"Wed – Sun · 17:30 – 22:30",
    "footer.closed":"Mon & Tue closed",
    "footer.contact":"Contact"
  },
  es: {
    "nav.menu":"Recomendaciones","nav.cakes":"Tartas","nav.story":"Sobre nosotros","nav.visit":"Visita",
    "cta.reserve":"Reservar",
    "hero.eyebrow":"Cala Millor · Mallorca",
    "hero.title":"Cocinado al momento. Con mucho cariño.",
    "hero.sub":"Cocina alemana en una pequeña calle de Cala Millor — acogedor, honesto, recién preparado cada tarde.",
    "hero.reserve":"Reservar mesa",
    "hero.hours":"Mié – Dom · 17:30 – 22:30",
    "hero.rating":"★ 4,9 en Google · 433 reseñas",
    "story.kicker":"Sobre nosotros",
    "story.title":"Pequeño, acogedor, cocinado de verdad.",
    "story.p1":"YOLO está en una callejuela tranquila hacia el paseo marítimo. Dentro: mesas blancas rústicas, una pared de piedra natural, una pequeña barra. Fuera: terraza completamente cubierta.",
    "story.p2":"Cocinamos al momento y con mucho cariño — Schnitzel, Currywurst casera, wok vegetariano, tapas y platos del día. Además, tartas de nuestra propia pastelería. Para quien busca algo familiar y honesto.",
    "story.statRating":"433 reseñas Google",
    "story.statFb":"83 reseñas Facebook",
    "story.statPrice":"por persona",
    "menu.kicker":"Recomendaciones",
    "menu.title":"Lo que más gusta a nuestros clientes.",
    "menu.note":"Los platos del día se anuncian a principios de semana en nuestro Facebook. La carta completa, en el restaurante.",
    "cakes.kicker":"Tartas y dulces",
    "cakes.title":"Hornear es amor en forma de masa.",
    "cakes.extra":"Con una bola de helado de vainilla +2,00 €",
    "visit.kicker":"Visita",
    "visit.title":"C/ de Ca s'Hereu, 15 — Cala Millor",
    "visit.hoursLabel":"Horario",
    "visit.hoursDays":"Miércoles a domingo",
    "visit.hoursClosed":"Lunes y martes cerrado",
    "visit.addressLabel":"Dirección",
    "visit.contactLabel":"Contacto",
    "visit.callCta":"Llamar para reservar",
    "footer.tag":"Cocinado al momento, con cariño.",
    "footer.findUs":"Dónde estamos",
    "footer.hours":"Horario",
    "footer.hoursLine":"Mié – Dom · 17:30 – 22:30",
    "footer.closed":"Lun y mar cerrado",
    "footer.contact":"Contacto"
  }
};

// ---------- STATE ----------
let currentLang = 'de';

// ---------- I18N ----------
function applyI18n(lang){
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = I18N[lang] && I18N[lang][key];
    if (val) el.textContent = val;
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('is-active', b.dataset.lang === lang);
  });
  renderRecs();
  renderCakes();
}

// ---------- RENDERERS ----------
function renderRecs(){
  const grid = document.getElementById('recGrid');
  if (!grid) return;
  grid.innerHTML = RECS.map(r => {
    const t = r[currentLang] || r.de;
    return `<article class="rec-card"><h3>${t.n}</h3><p>${t.d}</p></article>`;
  }).join('');
}

function renderCakes(){
  const panel = document.getElementById('cakePanels');
  if (!panel) return;
  panel.innerHTML = CAKES.map(it => {
    const t = it[currentLang] || it.de;
    return `
      <div class="menu-item">
        <div class="menu-item-head">
          <span class="menu-item-name">${t.n}</span>
          <span class="menu-item-price">${it.p}</span>
        </div>
        ${t.d ? `<p class="menu-item-desc">${t.d}</p>` : ''}
      </div>`;
  }).join('');
}

// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.addEventListener('click', () => applyI18n(b.dataset.lang));
  });

  const nav = document.createElement('nav');
  nav.className = 'mobile-nav';
  nav.innerHTML = `
    <a href="#empfehlungen" data-i18n="nav.menu">Empfehlungen</a>
    <a href="#kuchen" data-i18n="nav.cakes">Kuchen</a>
    <a href="#historia" data-i18n="nav.story">Über uns</a>
    <a href="#visitanos" data-i18n="nav.visit">Besuch</a>
    <a href="tel:+34643820006" class="btn btn-primary" data-i18n="cta.reserve">Reservieren</a>
  `;
  document.body.appendChild(nav);
  const toggle = document.getElementById('navToggle');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.classList.remove('is-open');
    document.body.style.overflow = '';
  }));

  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  document.getElementById('year').textContent = new Date().getFullYear();

  applyI18n('de');
});
