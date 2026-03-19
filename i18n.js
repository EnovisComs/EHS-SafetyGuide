/* ============================================================
   i18n.js — ES / EN
   ============================================================ */

/* ---- Helper: construye un span de palabra normal ---- */
const w = (text) => `<span class="intro-word">${text}</span>`;

/* ---- Helper: construye un span de palabra CLAVE (con underline) ---- */
const wk = (text, suffix = '') =>
    `<span class="intro-word intro-word--key">${text}<span class="intro-underline"></span>${suffix}</span>`;


/* ============================================================
   INTRO HTML por idioma
   Cada cambio de idioma reconstruye el <p class="intro-text">
   completo preservando la estructura de spans que necesita GSAP.
   ============================================================ */
const introHTML = {
    es: [
        w('Es'), w('un'), w('placer'), w('recibirlo'), w('en'), w('nuestras'), w('instalaciones.'),
        w('Su'), w('seguridad'), w('y'), w('bienestar'), w('son'), w('nuestra'),
        wk('prioridad'), '.',
        w('Esta'), w('guía'), w('le'), w('proporciona'), w('información'), w('esencial'),
        w('sobre'), w('nuestras'),
        wk('normas'),
        w('de'),
        wk('seguridad', ','),
        w('procedimientos'), w('de'),
        wk('emergencia'),
        w('y'), w('estándares'),
        wk('ambientales', '.'),
        w('Por'), w('favor,'), w('tómese'), w('un'), w('momento'), w('para'),
        w('familiarizarse'), w('con'), w('estas'),
        wk('directrices', '.'),
    ].join(' '),

    en: [
        w('It'), w('is'), w('a'), w('pleasure'), w('to'), w('welcome'), w('you'), w('to'), w('our'), w('facilities.'),
        w('Your'), w('safety'), w('and'), w('well-being'), w('are'), w('our'),
        wk('priority'), '.',
        w('This'), w('guide'), w('provides'), w('essential'), w('information'), w('about'),
        w('our'),
        wk('safety'),
        wk('rules', ','),
        w('emergency'),
        wk('procedures'),
        w('and'),
        wk('environmental', '.'),
        w('standards.'),
        w('Please'), w('take'), w('a'), w('moment'), w('to'), w('familiarize'),
        w('yourself'), w('with'), w('these'),
        wk('guidelines', '.'),
    ].join(' '),
};


/* ============================================================
   DICCIONARIO
   ============================================================ */
const translations = {

    /* ---- ESPAÑOL ---- */
    es: {
        "page.title": "EHS - Enovis | Guía para Visitantes",

        "nav.home": "Inicio",
        "nav.norms": "Normas de Acceso",
        "nav.guidelines": "Lineamientos",
        "nav.emergency": "Plan de Emergencias",
        "nav.environment": "Medio Ambiente",
        "nav.downloads": "Descargas",
        "nav.contact": "Contacto",

        "hero.subtitle": "EHS | Environmental Health & Safety",

        "norms.title": "Normas de Acceso",
        "norms.badge.title": "Registro de Gafete",
        "norms.badge.1": "Diríjase a caseta para registro",
        "norms.badge.2": "Porte su gafete visible",
        "norms.badge.3": "Devuélvalo al salir",
        "norms.inspection.title": "Inspección",
        "norms.inspection.1": "Permita inspección de persona",
        "norms.inspection.2": "Revisión de pertenencias",
        "norms.inspection.3": "Inspección de vehículo si aplica",
        "norms.restrictions.title": "Restricciones",
        "norms.restrictions.1": "No fotografías ni videos",
        "norms.restrictions.2": "No alimentos en áreas operativas",
        "norms.restrictions.3": "No lentes oscuros ni gorras",
        "norms.prohibitions.title": "Prohibiciones",
        "norms.prohibitions.1": "No fumar",
        "norms.prohibitions.2": "Drogas y alcohol",
        "norms.prohibitions.3": "Armas de fuego",
        "norms.prohibitions.4": "Armas blancas",
        "norms.attire.title": "Vestimenta",
        "norms.attire.1": "Lentes obligatorios",
        "norms.attire.2": "No shorts",
        "norms.attire.3": "No ropa holgada",
        "norms.attire.4": "No accesorios colgantes",
        "norms.attire.5": "Calzado cerrado",

        "safety.title": "En Enovis<br>la Seguridad<br>es Primero",

        "guidelines.title": "Lineamientos generales de seguridad",
        "guidelines.epp.title": "EPP por Áreas",
        "guidelines.permit.title": "Permiso de trabajos de alto riesgo",
        "guidelines.classification.title": "Clasificación de trabajos de alto riesgo",
        "guidelines.cta": "Ver más +",

        /* Modal EPP */
        "modal.epp.title": "EPP por Áreas",
        "modal.epp.intro": "El EPP es obligatorio en todo momento dentro de planta. Porta siempre el equipo requerido según el área que visitas.",
        "modal.epp.th1": "Área",
        "modal.epp.th2": "EPP Requerido",
        "modal.epp.area1": "Almacén",
        "modal.epp.area2": "Maquinado",
        "modal.epp.area3": "Moldeo",
        "modal.epp.area4": "Chattanooga",
        "modal.epp.area5": "Electroterapia",
        "modal.epp.a1t1": "Calzado de seguridad",
        "modal.epp.a1t2": "Chaleco",
        "modal.epp.a1t3": "Casco",
        "modal.epp.a2t1": "Tapones auditivos",
        "modal.epp.a2t2": "Calzado de seguridad",
        "modal.epp.a2t3": "Lentes",
        "modal.epp.a3t1": "Calzado de seguridad",
        "modal.epp.a3t2": "Lentes",
        "modal.epp.a4t1": "Calzado de seguridad",
        "modal.epp.a4t2": "Lentes",
        "modal.epp.a5t1": "Bata azul",
        "modal.epp.a5t2": "Lentes",

        /* Modal Permiso */
        "modal.permiso.title": "Permiso de Trabajos de Alto Riesgo",
        "modal.permiso.intro": "Aplica a mantenimiento, facilities, proveedores y contratistas que realicen trabajos de alto riesgo.",
        "modal.permiso.tipos": "Tipos de trabajos",
        "modal.permiso.tag1": "⚗️ Sustancias químicas",
        "modal.permiso.tag2": "⚡ Instalaciones eléctricas",
        "modal.permiso.tag3": "🏗️ Equipos de elevación",
        "modal.permiso.tag4": "🔧 Herramientas manuales",
        "modal.permiso.tag5": "🛢️ Fluidos peligrosos",
        "modal.permiso.tag6": "🔒 Espacios confinados",
        "modal.permiso.tag7": "📐 Alturas",
        "modal.permiso.note": "⚠️ Los trabajos en caliente tienen un procedimiento separado.",
        "modal.permiso.previos": "Requisitos previos",
        "modal.permiso.previos.1": "Enviar DC-3, SUA/seguro vigente y plan de trabajo.",
        "modal.permiso.previos.2": "Registrar al personal externo en bitácora de visitas.",
        "modal.permiso.durante": "Durante el trabajo",
        "modal.permiso.durante.1": "Presentar credencial y solicitar permiso en Caseta 1.",
        "modal.permiso.durante.2": "Personal externo debe ir acompañado.",
        "modal.permiso.durante.3": "Portar credencial de contratista en todo momento.",
        "modal.permiso.warning": "Cualquier incumplimiento impedirá la autorización del permiso o será cancelado si se detectan actos inseguros.",

        /* Modal Clasificación */
        "modal.clas.title": "Clasificación de Trabajos de Alto Riesgo",
        "modal.clas.c1.title": "⚗️ Sustancias Químicas y Fluidos Peligrosos",
        "modal.clas.c1.1": "Enviar hoja de datos de seguridad (HDS).",
        "modal.clas.c1.2": "Identificación de riesgos.",
        "modal.clas.c1.3": "Guantes, mascarilla, lentes y equipo de emergencia.",
        "modal.clas.c2.title": "⚡ Instalaciones Eléctricas",
        "modal.clas.c2.1": "Notificar a Facilities.",
        "modal.clas.c2.2": "Aplicar sistema LOTO.",
        "modal.clas.c2.3": "Guantes dieléctricos, casco y calzado adecuado.",
        "modal.clas.c3.title": "🏗️ Equipos de Elevación",
        "modal.clas.c3.1": "Validar autorización para operar.",
        "modal.clas.c3.2": "Establecer zonas seguras y señalización.",
        "modal.clas.c3.3": "Chaleco de seguridad y calzado antiderrapante.",
        "modal.clas.c4.title": "🔧 Herramientas Manuales",
        "modal.clas.c4.1": "Inspección previa.",
        "modal.clas.c4.2": "Mantener herramientas en buen estado.",
        "modal.clas.c4.3": "Lentes, calzado y chaleco de seguridad.",
        "modal.clas.c5.title": "🔒 Espacios Confinados",
        "modal.clas.c5.1": "Vigilante en contacto con el trabajador.",
        "modal.clas.c5.2": "Monitoreo de atmósfera y oxígeno.",
        "modal.clas.c5.3": "Arnés y ventilación adecuada.",
        "modal.clas.c6.title": "📐 Trabajos en Alturas",
        "modal.clas.c6.1": "Evaluación médica previa.",
        "modal.clas.c6.2": "Arnés, líneas de vida y puntos de anclaje.",
        "modal.clas.c6.3": "Área despejada (3 metros).",
        "modal.clas.warning": "Al finalizar, el área debe quedar limpia y segura. Entregar el permiso en Caseta 1 para validación.",

        "emergency.title": "Planes de Emergencias",
        "emergency.subtitle": "Su seguridad y bienestar son nuestra prioridad. Conozca los procedimientos ante una emergencia.",
        "emergency.fire.title": "Incendio",
        "emergency.fire.1": "Escuche la alarma de emergencia",
        "emergency.fire.2": "Siga indicaciones de brigadas",
        "emergency.fire.3": "Evacúe por salida más cercana",
        "emergency.fire.4": "Diríjase al punto de reunión (Caseta 1)",
        "emergency.fire.5": "No regrese hasta indicación",
        "emergency.earthquake.title": "Sismo",
        "emergency.earthquake.1": "Mantenga la calma",
        "emergency.earthquake.2": "Resguárdese en zonas seguras",
        "emergency.earthquake.3": "Aléjese de ventanas",
        "emergency.earthquake.4": "Espere indicaciones de brigadas",
        "emergency.earthquake.5": "Evacúe cuando finalice o suene alarma",
        "emergency.earthquake.6": "Diríjase al punto de reunión",
        "emergency.accident.title": "Accidente",
        "emergency.accident.1": "Informe a su anfitrión inmediatamente",
        "emergency.accident.2": "Acérquese a servicio médico",
        "emergency.accident.3": "Llame al número de emergencia",
        "emergency.accident.label": "Emergencia Médica",

        "environment.title": "Medio<br>Ambiente",
        "env.energy.title": "Ahorre energía y agua",
        "env.energy.desc": "Cierre las llaves al no usarlas y apague equipos que no estén en operación.",
        "env.lights.title": "Apague luces innecesarias",
        "env.lights.desc": "Al salir de una sala o área vacía, apague la iluminación para reducir el consumo energético.",
        "env.recycle.title": "Reduzca, reutilice, recicle",
        "env.recycle.desc": "Use los contenedores de reciclaje disponibles. Separe papel, plástico, metal y residuos generales.",
        "env.print.title": "Imprima solo lo necesario",
        "env.print.desc": "Prefiera documentos digitales. Si imprime, use las dos caras del papel.",
        "env.smoke.title": "Lugar libre de humo",
        "env.smoke.desc": "Nuestras instalaciones son 100% libres de humo. Está prohibido fumar dentro del recinto.",
        "env.batteries.title": "Eco-pilas",
        "env.batteries.desc": "Contamos con contenedores especiales para el reciclaje de baterías y pilas. Encuéntralos en las áreas comunes.",

        "downloads.title": "Descarga la Guía",
        "downloads.subtitle": "Revisa la guía de visitantes en tu idioma.",
        "downloads.spanish": "Español",
        "downloads.english": "English",
        "downloads.guide": "Guía para Visitantes",
        "downloads.guide.en": "Visitor Guidelines",

        "footer.contact": "CONTACTO",
        "footer.website": "Sitio Web Enovis",
        "footer.legal": "Legal",
        "footer.security.policy": "Política de Seguridad",
        "footer.privacy": "Política de Privacidad",
        "footer.terms": "Términos y Condiciones",
        "footer.copyright": "© 2026 Enovis Corporation. Todos los derechos reservados.",
    },


    /* ---- ENGLISH ---- */
    en: {
        "page.title": "EHS - Enovis | Visitor Guidelines",

        "nav.home": "Home",
        "nav.norms": "Access Rules",
        "nav.guidelines": "Guidelines",
        "nav.emergency": "Emergency Plan",
        "nav.environment": "Environment",
        "nav.downloads": "Downloads",
        "nav.contact": "Contact",

        "hero.subtitle": "EHS | Environmental Health & Safety",

        "norms.title": "Access Rules",
        "norms.badge.title": "Badge Registration",
        "norms.badge.1": "Go to the security booth to register",
        "norms.badge.2": "Wear your badge visibly at all times",
        "norms.badge.3": "Return it when you leave",
        "norms.inspection.title": "Inspection",
        "norms.inspection.1": "Allow personal inspection",
        "norms.inspection.2": "Belongings may be reviewed",
        "norms.inspection.3": "Vehicle inspection if applicable",
        "norms.restrictions.title": "Restrictions",
        "norms.restrictions.1": "No photos or videos",
        "norms.restrictions.2": "No food in operational areas",
        "norms.restrictions.3": "No dark glasses or caps",
        "norms.prohibitions.title": "Prohibitions",
        "norms.prohibitions.1": "No smoking",
        "norms.prohibitions.2": "Drugs and alcohol",
        "norms.prohibitions.3": "Firearms",
        "norms.prohibitions.4": "Bladed weapons",
        "norms.attire.title": "Dress Code",
        "norms.attire.1": "Safety glasses required",
        "norms.attire.2": "No shorts",
        "norms.attire.3": "No loose clothing",
        "norms.attire.4": "No hanging accessories",
        "norms.attire.5": "Closed-toe shoes",

        "safety.title": "At Enovis<br>Safety<br>Comes First",

        "guidelines.title": "General Safety Guidelines",
        "guidelines.epp.title": "PPE by Area",
        "guidelines.permit.title": "High-Risk Work Permit",
        "guidelines.classification.title": "High-Risk Work Classification",
        "guidelines.cta": "Learn more +",

        /* Modal EPP */
        "modal.epp.title": "PPE by Area",
        "modal.epp.intro": "PPE is mandatory at all times inside the plant. Always wear the required equipment for the area you are visiting.",
        "modal.epp.th1": "Area",
        "modal.epp.th2": "Required PPE",
        "modal.epp.area1": "Warehouse",
        "modal.epp.area2": "Machining",
        "modal.epp.area3": "Molding",
        "modal.epp.area4": "Chattanooga",
        "modal.epp.area5": "Electrotherapy",
        "modal.epp.a1t1": "Safety footwear",
        "modal.epp.a1t2": "Safety vest",
        "modal.epp.a1t3": "Hard hat",
        "modal.epp.a2t1": "Ear plugs",
        "modal.epp.a2t2": "Safety footwear",
        "modal.epp.a2t3": "Safety glasses",
        "modal.epp.a3t1": "Safety footwear",
        "modal.epp.a3t2": "Safety glasses",
        "modal.epp.a4t1": "Safety footwear",
        "modal.epp.a4t2": "Safety glasses",
        "modal.epp.a5t1": "Blue lab coat",
        "modal.epp.a5t2": "Safety glasses",

        /* Modal Permit */
        "modal.permiso.title": "High-Risk Work Permit",
        "modal.permiso.intro": "Applies to maintenance, facilities, suppliers and contractors performing high-risk work.",
        "modal.permiso.tipos": "Types of work",
        "modal.permiso.tag1": "⚗️ Chemical substances",
        "modal.permiso.tag2": "⚡ Electrical installations",
        "modal.permiso.tag3": "🏗️ Lifting equipment",
        "modal.permiso.tag4": "🔧 Hand tools",
        "modal.permiso.tag5": "🛢️ Hazardous fluids",
        "modal.permiso.tag6": "🔒 Confined spaces",
        "modal.permiso.tag7": "📐 Heights",
        "modal.permiso.note": "⚠️ Hot work has a separate procedure.",
        "modal.permiso.previos": "Prior requirements",
        "modal.permiso.previos.1": "Submit DC-3, valid SUA/insurance and work plan.",
        "modal.permiso.previos.2": "Register external staff in the visitor log.",
        "modal.permiso.durante": "During the work",
        "modal.permiso.durante.1": "Present ID and request permit at Booth 1.",
        "modal.permiso.durante.2": "External personnel must be accompanied.",
        "modal.permiso.durante.3": "Wear contractor badge at all times.",
        "modal.permiso.warning": "Any non-compliance will prevent permit authorization or result in cancellation if unsafe acts are detected.",

        /* Modal Classification */
        "modal.clas.title": "High-Risk Work Classification",
        "modal.clas.c1.title": "⚗️ Chemical Substances & Hazardous Fluids",
        "modal.clas.c1.1": "Submit safety data sheet (SDS).",
        "modal.clas.c1.2": "Hazard identification.",
        "modal.clas.c1.3": "Gloves, mask, goggles and emergency equipment.",
        "modal.clas.c2.title": "⚡ Electrical Installations",
        "modal.clas.c2.1": "Notify Facilities.",
        "modal.clas.c2.2": "Apply LOTO system.",
        "modal.clas.c2.3": "Dielectric gloves, hard hat and proper footwear.",
        "modal.clas.c3.title": "🏗️ Lifting Equipment",
        "modal.clas.c3.1": "Validate operating authorization.",
        "modal.clas.c3.2": "Establish safe zones and signage.",
        "modal.clas.c3.3": "Safety vest and non-slip footwear.",
        "modal.clas.c4.title": "🔧 Hand Tools",
        "modal.clas.c4.1": "Prior inspection.",
        "modal.clas.c4.2": "Keep tools in good condition.",
        "modal.clas.c4.3": "Goggles, footwear and safety vest.",
        "modal.clas.c5.title": "🔒 Confined Spaces",
        "modal.clas.c5.1": "Attendant in contact with the worker.",
        "modal.clas.c5.2": "Atmosphere and oxygen monitoring.",
        "modal.clas.c5.3": "Harness and adequate ventilation.",
        "modal.clas.c6.title": "📐 Working at Heights",
        "modal.clas.c6.1": "Prior medical evaluation.",
        "modal.clas.c6.2": "Harness, lifelines and anchor points.",
        "modal.clas.c6.3": "Clear area (3 meters).",
        "modal.clas.warning": "When finished, the area must be left clean and safe. Return the permit to Booth 1 for validation.",

        "emergency.title": "Emergency Plans",
        "emergency.subtitle": "Your safety and well-being are our priority. Know the procedures in case of an emergency.",
        "emergency.fire.title": "Fire",
        "emergency.fire.1": "Listen for the emergency alarm",
        "emergency.fire.2": "Follow brigade instructions",
        "emergency.fire.3": "Evacuate through the nearest exit",
        "emergency.fire.4": "Go to the meeting point (Booth 1)",
        "emergency.fire.5": "Do not return until instructed",
        "emergency.earthquake.title": "Earthquake",
        "emergency.earthquake.1": "Stay calm",
        "emergency.earthquake.2": "Take shelter in safe zones",
        "emergency.earthquake.3": "Stay away from windows",
        "emergency.earthquake.4": "Wait for brigade instructions",
        "emergency.earthquake.5": "Evacuate when shaking stops or alarm sounds",
        "emergency.earthquake.6": "Go to the meeting point",
        "emergency.accident.title": "Accident",
        "emergency.accident.1": "Notify your host immediately",
        "emergency.accident.2": "Go to medical services",
        "emergency.accident.3": "Call the emergency number",
        "emergency.accident.label": "Medical Emergency",

        "environment.title": "Environment",
        "env.energy.title": "Save energy and water",
        "env.energy.desc": "Turn off faucets when not in use and shut down idle equipment.",
        "env.lights.title": "Turn off unnecessary lights",
        "env.lights.desc": "When leaving an empty room, turn off the lights to reduce energy consumption.",
        "env.recycle.title": "Reduce, reuse, recycle",
        "env.recycle.desc": "Use the recycling containers. Sort paper, plastic, metal, and general waste.",
        "env.print.title": "Print only what you need",
        "env.print.desc": "Prefer digital documents. If you print, use both sides of the paper.",
        "env.smoke.title": "Smoke-free facility",
        "env.smoke.desc": "Our facility is 100% smoke-free. Smoking is prohibited inside the premises.",
        "env.batteries.title": "Battery Recycling",
        "env.batteries.desc": "We have special containers for batteries in the common areas throughout the facility.",

        "downloads.title": "Download the Guide",
        "downloads.subtitle": "Get the visitor guide in your language.",
        "downloads.spanish": "Español",
        "downloads.english": "English",
        "downloads.guide": "Visitor Guidelines",
        "downloads.guide.en": "Visitor Guidelines",

        "footer.contact": "CONTACT",
        "footer.website": "Enovis Website",
        "footer.legal": "Legal",
        "footer.security.policy": "Safety Policy",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms & Conditions",
        "footer.copyright": "© 2026 Enovis Corporation. All rights reserved.",
    }
};


/* ============================================================
   Motor
   ============================================================ */
const i18n = {

    current: localStorage.getItem("enovis-lang")
        || (navigator.language.startsWith("en") ? "en" : "es"),

    apply(lang) {
        const dict = translations[lang];
        if (!dict) return;

        this.current = lang;
        localStorage.setItem("enovis-lang", lang);

        /* 1. Todos los [data-i18n] estándar */
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const val = dict[el.getAttribute("data-i18n")];
            if (val !== undefined) el.innerHTML = val;
        });

        /* 2. Hero title (sin data-i18n en el HTML) */
        const heroTitle = document.querySelector(".hero-title");
        if (heroTitle) {
            heroTitle.innerHTML = lang === "en"
                ? "Safety Guide for Visitors"
                : "Guía de Seguridad para Visitantes";
        }

        /* 3. Intro — reconstruye el <p> completo con los spans correctos.
              GSAP en main.js vuelve a leer .intro-word después del cambio,
              por lo que ScrollTrigger.refresh() al final resincroniza. */
        const introP = document.querySelector(".intro-text");
        if (introP && introHTML[lang]) {
            introP.innerHTML = introHTML[lang];
        }

        /* 4. Modales sin data-i18n en títulos */
        [
            ["modal-epp-title", "modal.epp.title"],
            ["modal-permiso-title", "modal.permiso.title"],
            ["modal-clas-title", "modal.clas.title"],
        ].forEach(([id, key]) => {
            const el = document.getElementById(id);
            if (el && dict[key]) el.innerHTML = dict[key];
        });

        /* 5. Contenido de modales Permiso y Clasificación (sin data-i18n) */
        this._modalPermiso(dict);
        this._modalClas(dict);

        /* 6. <title> */
        if (dict["page.title"]) document.title = dict["page.title"];

        /* 7. lang attr */
        document.documentElement.setAttribute("lang", lang);

        /* 8. Botones toggle */
        document.querySelectorAll(".lang-btn").forEach(btn => {
            const active = btn.dataset.lang === lang;
            btn.classList.toggle("lang-btn--active", active);
            btn.setAttribute("aria-pressed", String(active));
        });

        /* 9. Refresca ScrollTrigger para que recalcule los nuevos spans */
        if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();

        document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
    },

    _modalPermiso(dict) {
        const m = document.getElementById("modal-permiso");
        if (!m) return;
        const $ = (sel) => m.querySelector(sel);
        const set = (sel, key) => { const el = $(sel); if (el && dict[key]) el.innerHTML = dict[key]; };

        set(".modal-intro", "modal.permiso.intro");
        set(".modal-section-label:not(.modal-section-label--red)", "modal.permiso.tipos");
        set(".modal-note", "modal.permiso.note");
        set(".modal-warning", "modal.permiso.warning");

        const tags = m.querySelectorAll(".permit-tags-wrap .epp-tag");
        [1, 2, 3, 4, 5, 6, 7].forEach((n, i) => {
            if (tags[i]) tags[i].innerHTML = dict[`modal.permiso.tag${n}`] || tags[i].innerHTML;
        });

        const redLabels = m.querySelectorAll(".modal-section-label--red");
        if (redLabels[0]) redLabels[0].innerHTML = dict["modal.permiso.previos"] || redLabels[0].innerHTML;
        if (redLabels[1]) redLabels[1].innerHTML = dict["modal.permiso.durante"] || redLabels[1].innerHTML;

        const cols = m.querySelectorAll(".permit-col");
        [[0, "previos"], [1, "durante"]].forEach(([ci, prefix]) => {
            if (!cols[ci]) return;
            cols[ci].querySelectorAll("li").forEach((li, i) => {
                const val = dict[`modal.permiso.${prefix}.${i + 1}`];
                if (val) li.innerHTML = val;
            });
        });
    },

    _modalClas(dict) {
        const m = document.getElementById("modal-clasificacion");
        if (!m) return;
        const warning = m.querySelector(".modal-warning");
        if (warning) warning.innerHTML = dict["modal.clas.warning"] || warning.innerHTML;

        m.querySelectorAll(".clas-card").forEach((card, i) => {
            const n = i + 1;
            const title = card.querySelector(".clas-card__title");
            if (title) title.innerHTML = dict[`modal.clas.c${n}.title`] || title.innerHTML;
            card.querySelectorAll("li").forEach((li, j) => {
                const val = dict[`modal.clas.c${n}.${j + 1}`];
                if (val) li.innerHTML = val;
            });
        });
    },

    init() {
        document.querySelectorAll(".lang-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                if (btn.dataset.lang !== this.current) this.apply(btn.dataset.lang);
            });
        });
        this.apply(this.current);
    }
};

document.addEventListener("DOMContentLoaded", () => i18n.init());