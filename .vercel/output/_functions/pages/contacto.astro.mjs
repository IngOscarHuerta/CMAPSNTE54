import { e as createComponent, k as renderComponent, r as renderTemplate, l as Fragment, h as addAttribute, u as unescapeHTML, m as maybeRenderHead } from '../chunks/astro/server_CYR-SPP9.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CP_Vns0i.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  const oficinaPrincipal = {
    titulo: "Oficina Principal",
    ubicacion: "Hermosillo, Sonora. M\xE9xico",
    detalles: [
      {
        icon: "location",
        titulo: "Direcci\xF3n",
        texto: "Obreg\xF3n 62 Col. Centro Hermosillo Sonora, M\xE9xico C.P. 83000"
      },
      { icon: "phone", titulo: "Tel\xE9fono", texto: "(662) 259 9900" },
      { icon: "mail", titulo: "Correo", texto: "contacto@cmapsnte54.com.mx" },
      { icon: "time", titulo: "Horario", texto: "Lunes a Viernes: 8am - 3pm" }
    ]
  };
  const sucursales = [
    {
      ciudad: "AGUA PRIETA",
      direccion: "Calle 7 entre 8 y 9 S/N Col. Centro",
      telefono: "(633) 338 48 84"
    },
    {
      ciudad: "\xC1LAMOS",
      direccion: "Carlos A. Rivero S/N Int. Centro de Maestros Col. Los Guayparines",
      telefono: "(647) 428 09 50",
      horario: "L-V: 8am \u2013 2pm"
    },
    {
      ciudad: "ALTAR",
      direccion: "Francisco I. Madero #7 entre F\xE9lix G\xF3mez y Morelos Col. Centro",
      telefono: "(637) 374 06 99",
      horario: "L-V: 8am \u2013 1pm"
    },
    {
      ciudad: "CABORCA",
      direccion: "Calle 11 #152 entre avenida L y M Col. Centro",
      telefono: "(637) 372 19 27",
      horario: "L-V: 8am \u2013 3pm"
    },
    {
      ciudad: "CANANEA",
      direccion: "Av. Ju\xE1rez y 5ta oeste S/N. Col. Centro",
      telefono: "(645) 332 06 78",
      horario: "L-V: 8am \u2013 3pm"
    },
    {
      ciudad: "CASA DE D\xCDA MAGISTERIAL",
      direccion: "Av. Saturnino Campoy y calle Del Maestro S/N. Col. Magisterial",
      telefono: "(662) 212 36 80",
      horario: "L-V: 8am \u2013 3pm"
    },
    {
      ciudad: "GUAYMAS",
      direccion: "Calle 20 Y Av. 10 #200 Col. Centro",
      telefono: "(622) 222 98 96",
      horario: "L-V: 8am \u2013 3pm"
    },
    {
      ciudad: "HUATABAMPO",
      direccion: "Calle Profesor Germ\xE1n Ibarra Ibarra S/N entre \xC1vila Camacho y Obreg\xF3n Col. Centro",
      telefono: "(647) 426 33 40",
      horario: "L-V: 8am \u2013 3pm"
    },
    {
      ciudad: "HU\xC9PAC",
      direccion: "Calle Hidalgo #10 Int. Esc. Primaria 10 de Mayo Col. Centro",
      telefono: "(623) 231 51 46",
      horario: "L-V: 8am \u2013 2pm"
    },
    {
      ciudad: "HU\xC1SABAS",
      direccion: "Rep\xFAblica de Chile y Profesor Juli\xE1n Moreno S/N Col. Centro",
      telefono: "(634) 343 55 33",
      horario: "L-V: 8am \u2013 2pm"
    },
    {
      ciudad: "MAGDALENA",
      direccion: "Av. Benito Ju\xE1rez #311 Col. Centro",
      telefono: "(632) 322 80 55",
      horario: "L-V: 8am \u2013 3pm"
    },
    {
      ciudad: "MOCTEZUMA",
      direccion: "Calle Rito esq. Ave. Miguel Alem\xE1n S/N Col. Centro",
      telefono: "(634) 243 04 58",
      horario: "L-V: 8am \u2013 2pm"
    },
    {
      ciudad: "NACOZARI",
      direccion: "Calle del Seguro Social S/N Esc. Jes\xFAs Garc\xEDa #1",
      telefono: "(634) 342 03 78",
      horario: "L-V: 8am \u2013 1pm"
    },
    {
      ciudad: "NAVOJOA",
      direccion: "Blvd. Julio Mart\xEDnez Bracamonte y Ceisd #27 Fracc. Acarandas",
      telefono: "(642) 421 53 51",
      horario: "L-V: 8am \u2013 3pm"
    },
    {
      ciudad: "NOGALES",
      direccion: "Calle Chimeneas #340 y Lago de Moreno Col. Las Praderas",
      telefono: "(631) 312 93 70",
      horario: "L-V: 8am \u2013 3pm"
    },
    {
      ciudad: "OBREG\xD3N",
      direccion: "Blvd. Casa Blanca #2701 Col. Casa Blanca",
      telefono: "(644) 431 20 89",
      horario: "L-V: 8am \u2013 3pm"
    },
    {
      ciudad: "PUERTO PE\xD1ASCO",
      direccion: "Av. Sim\xF3n Morua y San Luis Esc. Primaria L\xE1zaro C\xE1rdenas Col. Centro",
      telefono: "(638) 383 57 87",
      horario: "L-V: 8am \u2013 2pm"
    },
    {
      ciudad: "SAHUARIPA",
      direccion: "Av. Rafael V. Meneses Esq. Morelos #20 Col. Centro",
      telefono: "(634) 343 03 58"
    },
    {
      ciudad: "SAN LUIS RIO COLORADO",
      direccion: "Av. Carranza y Calle 18 #1801 Col. Residencias",
      telefono: "(653) 534 54 93"
    },
    {
      ciudad: "SANTA ANA",
      direccion: "Calle Serna y Agust\xEDn Rodr\xEDguez #201 Col. La Granja",
      telefono: "(641) 324 32 47",
      horario: "L-V: 8am \u2013 3pm"
    },
    {
      ciudad: "SONOYTA",
      direccion: "Calle Reforma y Jes\xFAs Garc\xEDa #15 Col. Centro",
      telefono: "(651) 512 02 19"
    },
    {
      ciudad: "URES",
      direccion: "Calle Jes\xFAs Garc\xEDa Morales #26 Entre \xC1lvaro Obreg\xF3n y Enrique Quijada Col. Centro",
      telefono: "(623) 232 02 08",
      horario: "L-V: 8am \u2013 1pm"
    },
    {
      ciudad: "VILLA JU\xC1REZ",
      direccion: "Calle Gregorio Torres y 16 de Septiembre S/N. Int. Secundaria Estatal #28 Col. Centro",
      telefono: "(647) 482 04 28",
      horario: "L-V: 8am \u2013 2pm"
    }
  ];
  const icon = (name, extraClass = "", size = 4) => {
    const base = `class="w-${size} h-${size} ${extraClass}" fill="currentColor"`;
    switch (name) {
      case "location":
        return `<svg ${base} viewBox="0 0 20 20"><path fill-rule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clip-rule="evenodd"/></svg>`;
      case "phone":
        return `<svg ${base} viewBox="0 0 20 20"><path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clip-rule="evenodd"/></svg>`;
      case "time":
        return `<svg ${base} viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z" clip-rule="evenodd"/></svg>`;
      case "mail":
        return `<svg ${base} viewBox="0 0 24 24"><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"/><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"/></svg>`;
      default:
        return "";
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contacto - CMAP SNTE 54", "description": "Cont\xE1ctanos en cualquiera de nuestras Sucursales.", "ogImage": "/og/acerca.jpg" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<div class="container mx-auto px-4 py-12 max-w-7xl"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">\n\xBFEn qu\xE9 podemos ayudarte?\n</h1> <p class="text-xl text-gray-600">\nEstamos a tus \xF3rdenes en las siguientes oficinas\n</p> </header> <section class="rounded-xl shadow-lg p-8 mb-12 text-white bg-cmap-verde"> <h2 class="text-3xl font-bold mb-1">', '</h2> <p class="text-white/85 mb-6">', '</p> <div class="grid md:grid-cols-2 gap-6"> ', ' </div> </section> <section> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-gray-900 mb-2">\nNuestras Sucursales\n</h2> <p class="text-gray-600">Presencia en todo el estado de Sonora</p> </div> <div id="grid-sucursales" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> ', ' </div> </section> </div>  <div id="detalle-overlay" class="fixed inset-0 z-[80] hidden flex items-center justify-center backdrop-blur-sm perspective-3d"> <div id="detalle-modal" class="w-full max-w-md mx-4 bg-white rounded-2xl shadow-2xl p-6 opacity-0 preserve-3d backface-hidden" style="transform: rotateY(-90deg);"> <div class="flex items-start justify-between mb-4"> <div> <h3 id="detalle-ciudad" class="text-2xl font-bold text-gray-900"></h3> <p id="detalle-direccion" class="text-sm text-gray-600 whitespace-pre-line"></p> </div> <button id="btn-cerrar" class="cursor-pointer ml-4 text-gray-500 hover:text-gray-900" type="button" aria-label="Cerrar">\u2715</button> </div> <div class="grid grid-cols-2 gap-3"> <a id="btn-marcar" href="#" class="inline-flex items-center justify-center px-4 py-2 rounded-xl font-semibold text-white bg-[color:var(--color-cmap-verde-600)] hover:brightness-110 text-center">Marcar</a> <a id="btn-mapa" href="#" target="_blank" rel="noopener" class="inline-flex items-center justify-center px-4 py-2 rounded-xl font-semibold text-gray-900 border border-gray-300 hover:bg-gray-50 text-center">Mapa</a> </div> </div> </div> <script>\n    const $ = (sel, el = document) => el.querySelector(sel);\n    let activeCard = null;\n\n    // Overlay helpers\n    const showOverlay = (overlay) => {\n      overlay.classList.remove("hidden");\n      overlay.classList.add("flex");\n      overlay.style.backgroundColor = "rgba(0,0,0,0)";\n    };\n    const fadeOverlayTo = (overlay, alpha, ms = 550) => {\n      overlay.style.transition = `background-color ${ms}ms cubic-bezier(.2,.7,.2,1)`;\n      overlay.style.backgroundColor = `rgba(0,0,0,${alpha})`;\n    };\n\n    // Paso 1: look modal + ligero tilt (SIN scale del card)\n    function phase1(card, done) {\n      card.classList.add("card-phase1");\n      const kin = card.querySelector(".card-kin");\n      kin?.classList.add("kin-tilt");\n      kin?.querySelector(".card-content")?.classList.add("content-tilt");\n      requestAnimationFrame(() => requestAnimationFrame(() => done(1)));\n    }\n\n    // Paso 2: mover al centro (solo translate)\n    function phase2(card, done) {\n      const rect = card.getBoundingClientRect();\n      const targetLeft = Math.round((innerWidth - rect.width) / 2);\n      const targetTop = Math.round((innerHeight - rect.height) / 2);\n      const tx = targetLeft - Math.round(rect.left);\n      const ty = targetTop - Math.round(rect.top);\n\n      card.style.setProperty("--tx", `${tx}px`);\n      card.style.setProperty("--ty", `${ty}px`);\n      card.classList.add("card-phase2");\n\n      card.addEventListener("transitionend", function onEnd(e) {\n        if (e.propertyName !== "transform") return;\n        card.removeEventListener("transitionend", onEnd);\n        done();\n      });\n    }\n\n    // Apertura: flip-swap\n    function flipSwap(card, modal, overlay) {\n      const wrapper = card.querySelector(".card-kin");\n      const content = card.querySelector(".card-content");\n      if (!wrapper || !content) return;\n\n      wrapper.classList.add("kin-flip-out");\n      content.classList.add("content-flip-out");\n\n      wrapper.addEventListener("transitionend", function onEnd(e) {\n        if (e.propertyName !== "transform") return;\n        wrapper.removeEventListener("transitionend", onEnd);\n\n        // Oculta el card y alista el modal\n        card.style.visibility = "hidden";\n\n        const rect = card.getBoundingClientRect();\n        const targetW = Math.min(520, innerWidth - 32);\n        const scaleStart = rect.width / targetW;\n\n        modal.style.transition = "none";\n        modal.style.opacity = "1";\n        modal.style.transformOrigin = "center center";\n        modal.style.transform = `scale(${scaleStart}) rotateY(-90deg)`;\n        modal.getBoundingClientRect();\n\n        modal.style.transition = "transform 360ms cubic-bezier(.2,.7,.2,1)";\n        modal.style.transform = `scale(${Math.max(1, scaleStart)}) rotateY(4deg)`;\n        fadeOverlayTo(overlay, 0.5, 360);\n\n        setTimeout(() => {\n          modal.style.transition = "transform 120ms cubic-bezier(.2,.7,.2,1)";\n          modal.style.transform = "scale(1) rotateY(0deg)";\n        }, 360);\n      });\n    }\n\n    // ===== Cierre inverso mejorado =====\n    function animateCloseReverse(card, modal, overlay) {\n      // 1) Girar modal a -90\xB0, pero mantener overlay oscuro (NO ocultar a\xFAn)\n      modal.style.transition =\n        "transform 240ms cubic-bezier(.2,.7,.2,1), opacity 180ms ease";\n      modal.style.transform = "scale(1) rotateY(-90deg)";\n      modal.style.opacity = "0";\n\n      const onModalEnd = (e) => {\n        if (e.propertyName !== "transform") return;\n        modal.removeEventListener("transitionend", onModalEnd);\n\n        // No ocultamos overlay todav\xEDa; permanece con fondo oscuro hasta el final\n        modal.style.transition = "none";\n        modal.style.transform = "rotateY(-90deg)";\n        // Mostrar el card nuevamente\n        if (!card) return;\n        card.style.visibility = "";\n\n        const wrapper = card.querySelector(".card-kin");\n        const content = card.querySelector(".card-content");\n        if (!wrapper || !content) return;\n\n        // 2) Flip back: 90\xB0 -> 12\xB0 (quitamos clases de flip, conservamos tilt)\n        const onFlipBackEnd = (ev) => {\n          if (ev.propertyName !== "transform") return;\n          wrapper.removeEventListener("transitionend", onFlipBackEnd);\n\n          // 3) Viaje de regreso: quitar translate (card-phase2)\n          const onTravelBackEnd = (ev2) => {\n            if (ev2.propertyName !== "transform") return;\n            card.removeEventListener("transitionend", onTravelBackEnd);\n\n            // 4) Quitar tilt y sombras finales (remover phase1)\n            wrapper.classList.remove("kin-tilt");\n            content.classList.remove("content-tilt");\n\n            // 5) Desvanecer overlay AHORA y ocultarlo al terminar\n            fadeOverlayTo(overlay, 0, 220);\n            setTimeout(() => {\n              overlay.classList.add("hidden");\n              // Reset modal a estado base\n              modal.style.opacity = "0";\n              modal.style.transform = "rotateY(-90deg)";\n              // Limpieza de variables y clases en card\n              card.classList.remove("card-phase1");\n              card.style.removeProperty("--tx");\n              card.style.removeProperty("--ty");\n              activeCard = null;\n            }, 230);\n          };\n\n          card.addEventListener("transitionend", onTravelBackEnd, {\n            once: true,\n          });\n          // Remover card-phase2 \u2192 regresa a su lugar\n          card.classList.remove("card-phase2");\n        };\n\n        wrapper.addEventListener("transitionend", onFlipBackEnd, {\n          once: true,\n        });\n        // Quitar flip-out para regresar a 12\xB0 (contenido tambi\xE9n regresa)\n        wrapper.classList.remove("kin-flip-out");\n        content.classList.remove("content-flip-out");\n        // content-tilt permanece hasta el paso 4 para mantener legible el contenido\n      };\n\n      modal.addEventListener("transitionend", onModalEnd);\n    }\n\n    function setupSucursalModal() {\n      const overlay = $("#detalle-overlay");\n      const modal = $("#detalle-modal");\n      const btnCerrar = $("#btn-cerrar");\n      const btnMarcar = $("#btn-marcar");\n      const btnMapa = $("#btn-mapa");\n      const lblCiudad = $("#detalle-ciudad");\n      const lblDir = $("#detalle-direccion");\n      const grid = $("#grid-sucursales");\n      if (!overlay || !modal || !grid) return;\n\n      const closeModal = () => {\n        if (activeCard) {\n          animateCloseReverse(activeCard, modal, overlay);\n        } else {\n          // Fallback simple\n          modal.style.transition = "opacity 180ms ease, transform 180ms ease";\n          modal.style.opacity = "0";\n          modal.style.transform = "scale(0.98) rotateY(0deg)";\n          fadeOverlayTo(overlay, 0, 180);\n          setTimeout(() => {\n            overlay.classList.add("hidden");\n            modal.style.transition = "none";\n            modal.style.opacity = "0";\n            modal.style.transform = "rotateY(-90deg)";\n          }, 200);\n        }\n      };\n\n      if (grid.dataset.bound !== "1") {\n        grid.addEventListener("click", (e) => {\n          const card = e.target.closest?.(".card-sucursal");\n          if (!card || activeCard) return;\n          activeCard = card;\n\n          const ciudad = card.getAttribute("data-ciudad") || "";\n          const direccion = card.getAttribute("data-direccion") || "";\n          const telefono = card.getAttribute("data-telefono") || "";\n          lblCiudad.textContent = ciudad;\n          lblDir.textContent = direccion || "";\n\n          if (telefono) {\n            const telSan = telefono.replace(/[^0-9+]/g, "");\n            btnMarcar.href = `tel:${telSan}`;\n            btnMarcar.classList.remove("pointer-events-none", "opacity-50");\n          } else {\n            btnMarcar.href = "#";\n            btnMarcar.classList.add("pointer-events-none", "opacity-50");\n          }\n          if (direccion) {\n            const q = encodeURIComponent(\n              `${direccion} ${ciudad} Sonora, M\xE9xico`,\n            );\n            btnMapa.href = `https://www.google.com/maps/search/?api=1&query=${q}`;\n            btnMapa.classList.remove("pointer-events-none", "opacity-50");\n          } else {\n            btnMapa.href = "#";\n            btnMapa.classList.add("pointer-events-none", "opacity-50");\n          }\n\n          showOverlay(overlay);\n          fadeOverlayTo(overlay, 0.45, 400);\n\n          // Apertura: Phase1 \u2192 Phase2 \u2192 FlipSwap\n          phase1(card, () => {\n            phase2(card, () => {\n              flipSwap(card, modal, overlay);\n            });\n          });\n        });\n        grid.dataset.bound = "1";\n      }\n\n      btnCerrar?.addEventListener("click", closeModal);\n      overlay.addEventListener("click", (e) => {\n        if (e.target === overlay) closeModal();\n      });\n      document.addEventListener("keydown", (e) => {\n        if (e.key === "Escape" && !overlay.classList.contains("hidden"))\n          closeModal();\n      });\n    }\n\n    document.addEventListener("astro:page-load", setupSucursalModal);\n    if (\n      document.readyState === "complete" ||\n      document.readyState === "interactive"\n    )\n      setupSucursalModal();\n    else document.addEventListener("DOMContentLoaded", setupSucursalModal);\n  <\/script>  '], ["  ", '<div class="container mx-auto px-4 py-12 max-w-7xl"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">\n\xBFEn qu\xE9 podemos ayudarte?\n</h1> <p class="text-xl text-gray-600">\nEstamos a tus \xF3rdenes en las siguientes oficinas\n</p> </header> <section class="rounded-xl shadow-lg p-8 mb-12 text-white bg-cmap-verde"> <h2 class="text-3xl font-bold mb-1">', '</h2> <p class="text-white/85 mb-6">', '</p> <div class="grid md:grid-cols-2 gap-6"> ', ' </div> </section> <section> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-gray-900 mb-2">\nNuestras Sucursales\n</h2> <p class="text-gray-600">Presencia en todo el estado de Sonora</p> </div> <div id="grid-sucursales" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> ', ' </div> </section> </div>  <div id="detalle-overlay" class="fixed inset-0 z-[80] hidden flex items-center justify-center backdrop-blur-sm perspective-3d"> <div id="detalle-modal" class="w-full max-w-md mx-4 bg-white rounded-2xl shadow-2xl p-6 opacity-0 preserve-3d backface-hidden" style="transform: rotateY(-90deg);"> <div class="flex items-start justify-between mb-4"> <div> <h3 id="detalle-ciudad" class="text-2xl font-bold text-gray-900"></h3> <p id="detalle-direccion" class="text-sm text-gray-600 whitespace-pre-line"></p> </div> <button id="btn-cerrar" class="cursor-pointer ml-4 text-gray-500 hover:text-gray-900" type="button" aria-label="Cerrar">\u2715</button> </div> <div class="grid grid-cols-2 gap-3"> <a id="btn-marcar" href="#" class="inline-flex items-center justify-center px-4 py-2 rounded-xl font-semibold text-white bg-[color:var(--color-cmap-verde-600)] hover:brightness-110 text-center">Marcar</a> <a id="btn-mapa" href="#" target="_blank" rel="noopener" class="inline-flex items-center justify-center px-4 py-2 rounded-xl font-semibold text-gray-900 border border-gray-300 hover:bg-gray-50 text-center">Mapa</a> </div> </div> </div> <script>\n    const $ = (sel, el = document) => el.querySelector(sel);\n    let activeCard = null;\n\n    // Overlay helpers\n    const showOverlay = (overlay) => {\n      overlay.classList.remove("hidden");\n      overlay.classList.add("flex");\n      overlay.style.backgroundColor = "rgba(0,0,0,0)";\n    };\n    const fadeOverlayTo = (overlay, alpha, ms = 550) => {\n      overlay.style.transition = \\`background-color \\${ms}ms cubic-bezier(.2,.7,.2,1)\\`;\n      overlay.style.backgroundColor = \\`rgba(0,0,0,\\${alpha})\\`;\n    };\n\n    // Paso 1: look modal + ligero tilt (SIN scale del card)\n    function phase1(card, done) {\n      card.classList.add("card-phase1");\n      const kin = card.querySelector(".card-kin");\n      kin?.classList.add("kin-tilt");\n      kin?.querySelector(".card-content")?.classList.add("content-tilt");\n      requestAnimationFrame(() => requestAnimationFrame(() => done(1)));\n    }\n\n    // Paso 2: mover al centro (solo translate)\n    function phase2(card, done) {\n      const rect = card.getBoundingClientRect();\n      const targetLeft = Math.round((innerWidth - rect.width) / 2);\n      const targetTop = Math.round((innerHeight - rect.height) / 2);\n      const tx = targetLeft - Math.round(rect.left);\n      const ty = targetTop - Math.round(rect.top);\n\n      card.style.setProperty("--tx", \\`\\${tx}px\\`);\n      card.style.setProperty("--ty", \\`\\${ty}px\\`);\n      card.classList.add("card-phase2");\n\n      card.addEventListener("transitionend", function onEnd(e) {\n        if (e.propertyName !== "transform") return;\n        card.removeEventListener("transitionend", onEnd);\n        done();\n      });\n    }\n\n    // Apertura: flip-swap\n    function flipSwap(card, modal, overlay) {\n      const wrapper = card.querySelector(".card-kin");\n      const content = card.querySelector(".card-content");\n      if (!wrapper || !content) return;\n\n      wrapper.classList.add("kin-flip-out");\n      content.classList.add("content-flip-out");\n\n      wrapper.addEventListener("transitionend", function onEnd(e) {\n        if (e.propertyName !== "transform") return;\n        wrapper.removeEventListener("transitionend", onEnd);\n\n        // Oculta el card y alista el modal\n        card.style.visibility = "hidden";\n\n        const rect = card.getBoundingClientRect();\n        const targetW = Math.min(520, innerWidth - 32);\n        const scaleStart = rect.width / targetW;\n\n        modal.style.transition = "none";\n        modal.style.opacity = "1";\n        modal.style.transformOrigin = "center center";\n        modal.style.transform = \\`scale(\\${scaleStart}) rotateY(-90deg)\\`;\n        modal.getBoundingClientRect();\n\n        modal.style.transition = "transform 360ms cubic-bezier(.2,.7,.2,1)";\n        modal.style.transform = \\`scale(\\${Math.max(1, scaleStart)}) rotateY(4deg)\\`;\n        fadeOverlayTo(overlay, 0.5, 360);\n\n        setTimeout(() => {\n          modal.style.transition = "transform 120ms cubic-bezier(.2,.7,.2,1)";\n          modal.style.transform = "scale(1) rotateY(0deg)";\n        }, 360);\n      });\n    }\n\n    // ===== Cierre inverso mejorado =====\n    function animateCloseReverse(card, modal, overlay) {\n      // 1) Girar modal a -90\xB0, pero mantener overlay oscuro (NO ocultar a\xFAn)\n      modal.style.transition =\n        "transform 240ms cubic-bezier(.2,.7,.2,1), opacity 180ms ease";\n      modal.style.transform = "scale(1) rotateY(-90deg)";\n      modal.style.opacity = "0";\n\n      const onModalEnd = (e) => {\n        if (e.propertyName !== "transform") return;\n        modal.removeEventListener("transitionend", onModalEnd);\n\n        // No ocultamos overlay todav\xEDa; permanece con fondo oscuro hasta el final\n        modal.style.transition = "none";\n        modal.style.transform = "rotateY(-90deg)";\n        // Mostrar el card nuevamente\n        if (!card) return;\n        card.style.visibility = "";\n\n        const wrapper = card.querySelector(".card-kin");\n        const content = card.querySelector(".card-content");\n        if (!wrapper || !content) return;\n\n        // 2) Flip back: 90\xB0 -> 12\xB0 (quitamos clases de flip, conservamos tilt)\n        const onFlipBackEnd = (ev) => {\n          if (ev.propertyName !== "transform") return;\n          wrapper.removeEventListener("transitionend", onFlipBackEnd);\n\n          // 3) Viaje de regreso: quitar translate (card-phase2)\n          const onTravelBackEnd = (ev2) => {\n            if (ev2.propertyName !== "transform") return;\n            card.removeEventListener("transitionend", onTravelBackEnd);\n\n            // 4) Quitar tilt y sombras finales (remover phase1)\n            wrapper.classList.remove("kin-tilt");\n            content.classList.remove("content-tilt");\n\n            // 5) Desvanecer overlay AHORA y ocultarlo al terminar\n            fadeOverlayTo(overlay, 0, 220);\n            setTimeout(() => {\n              overlay.classList.add("hidden");\n              // Reset modal a estado base\n              modal.style.opacity = "0";\n              modal.style.transform = "rotateY(-90deg)";\n              // Limpieza de variables y clases en card\n              card.classList.remove("card-phase1");\n              card.style.removeProperty("--tx");\n              card.style.removeProperty("--ty");\n              activeCard = null;\n            }, 230);\n          };\n\n          card.addEventListener("transitionend", onTravelBackEnd, {\n            once: true,\n          });\n          // Remover card-phase2 \u2192 regresa a su lugar\n          card.classList.remove("card-phase2");\n        };\n\n        wrapper.addEventListener("transitionend", onFlipBackEnd, {\n          once: true,\n        });\n        // Quitar flip-out para regresar a 12\xB0 (contenido tambi\xE9n regresa)\n        wrapper.classList.remove("kin-flip-out");\n        content.classList.remove("content-flip-out");\n        // content-tilt permanece hasta el paso 4 para mantener legible el contenido\n      };\n\n      modal.addEventListener("transitionend", onModalEnd);\n    }\n\n    function setupSucursalModal() {\n      const overlay = $("#detalle-overlay");\n      const modal = $("#detalle-modal");\n      const btnCerrar = $("#btn-cerrar");\n      const btnMarcar = $("#btn-marcar");\n      const btnMapa = $("#btn-mapa");\n      const lblCiudad = $("#detalle-ciudad");\n      const lblDir = $("#detalle-direccion");\n      const grid = $("#grid-sucursales");\n      if (!overlay || !modal || !grid) return;\n\n      const closeModal = () => {\n        if (activeCard) {\n          animateCloseReverse(activeCard, modal, overlay);\n        } else {\n          // Fallback simple\n          modal.style.transition = "opacity 180ms ease, transform 180ms ease";\n          modal.style.opacity = "0";\n          modal.style.transform = "scale(0.98) rotateY(0deg)";\n          fadeOverlayTo(overlay, 0, 180);\n          setTimeout(() => {\n            overlay.classList.add("hidden");\n            modal.style.transition = "none";\n            modal.style.opacity = "0";\n            modal.style.transform = "rotateY(-90deg)";\n          }, 200);\n        }\n      };\n\n      if (grid.dataset.bound !== "1") {\n        grid.addEventListener("click", (e) => {\n          const card = e.target.closest?.(".card-sucursal");\n          if (!card || activeCard) return;\n          activeCard = card;\n\n          const ciudad = card.getAttribute("data-ciudad") || "";\n          const direccion = card.getAttribute("data-direccion") || "";\n          const telefono = card.getAttribute("data-telefono") || "";\n          lblCiudad.textContent = ciudad;\n          lblDir.textContent = direccion || "";\n\n          if (telefono) {\n            const telSan = telefono.replace(/[^0-9+]/g, "");\n            btnMarcar.href = \\`tel:\\${telSan}\\`;\n            btnMarcar.classList.remove("pointer-events-none", "opacity-50");\n          } else {\n            btnMarcar.href = "#";\n            btnMarcar.classList.add("pointer-events-none", "opacity-50");\n          }\n          if (direccion) {\n            const q = encodeURIComponent(\n              \\`\\${direccion} \\${ciudad} Sonora, M\xE9xico\\`,\n            );\n            btnMapa.href = \\`https://www.google.com/maps/search/?api=1&query=\\${q}\\`;\n            btnMapa.classList.remove("pointer-events-none", "opacity-50");\n          } else {\n            btnMapa.href = "#";\n            btnMapa.classList.add("pointer-events-none", "opacity-50");\n          }\n\n          showOverlay(overlay);\n          fadeOverlayTo(overlay, 0.45, 400);\n\n          // Apertura: Phase1 \u2192 Phase2 \u2192 FlipSwap\n          phase1(card, () => {\n            phase2(card, () => {\n              flipSwap(card, modal, overlay);\n            });\n          });\n        });\n        grid.dataset.bound = "1";\n      }\n\n      btnCerrar?.addEventListener("click", closeModal);\n      overlay.addEventListener("click", (e) => {\n        if (e.target === overlay) closeModal();\n      });\n      document.addEventListener("keydown", (e) => {\n        if (e.key === "Escape" && !overlay.classList.contains("hidden"))\n          closeModal();\n      });\n    }\n\n    document.addEventListener("astro:page-load", setupSucursalModal);\n    if (\n      document.readyState === "complete" ||\n      document.readyState === "interactive"\n    )\n      setupSucursalModal();\n    else document.addEventListener("DOMContentLoaded", setupSucursalModal);\n  <\/script>  '])), maybeRenderHead(), oficinaPrincipal.titulo, oficinaPrincipal.ubicacion, oficinaPrincipal.detalles.map((d) => {
    let href = null;
    if (d.icon === "location") {
      const q = encodeURIComponent(
        `${d.texto.replace(/\n/g, " ")} ${oficinaPrincipal.ubicacion}`
      );
      href = `https://www.google.com/maps/search/?api=1&query=${q}`;
    } else if (d.icon === "phone") {
      const tel = (d.texto || "").replace(/[^0-9+]/g, "");
      href = tel ? `tel:${tel}` : null;
    } else if (d.icon === "mail") {
      const email = (d.texto || "").trim();
      href = email ? `mailto:${email}` : null;
    }
    const classes = "rounded-lg p-4 backdrop-blur-sm " + (href ? "bg-white/10 hover:bg-white/15 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/70" : "bg-white/10");
    const inner = renderTemplate`<div class="flex items-start"> <div> <div class="flex items-center gap-2"> <span aria-hidden="true" class="shrink-0">${unescapeHTML(icon(d.icon, "text-white", 6))}</span> <h3 class="font-bold mb-0.5">${d.titulo}</h3> </div> <p class="whitespace-pre-line text-white/90 text-sm mt-0.5"> ${d.texto} </p> </div> </div>`;
    return href ? renderTemplate`<a${addAttribute(classes, "class")}${addAttribute(href, "href")}${addAttribute(href.startsWith("http") ? "_blank" : void 0, "target")}${addAttribute(href.startsWith("http") ? "noopener" : void 0, "rel")}${addAttribute(d.titulo, "aria-label")}> ${inner} </a>` : renderTemplate`<div${addAttribute(classes, "class")}${addAttribute(d.titulo, "aria-label")}> ${inner} </div>`;
  }), sucursales.map((s) => {
    const tieneDireccion = !!(s.direccion && s.direccion.trim());
    const tieneTelefono = !!(s.telefono && s.telefono.trim());
    const tieneHorario = !!(s.horario && s.horario.trim());
    return renderTemplate`<div class="card-sucursal group relative bg-white rounded-2xl p-0 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[color:var(--color-cmap-verde-600)] h-full cursor-pointer"${addAttribute(s.ciudad, "data-ciudad")}${addAttribute(s.direccion || "", "data-direccion")}${addAttribute(s.telefono || "", "data-telefono")}> <div class="card-kin rounded-2xl p-6"> <div class="card-content"> <h3 class="text-2xl font-bold text-gray-900 mb-4"> ${s.ciudad} </h3> <div class="space-y-3 mb-2"> ${tieneDireccion && renderTemplate`<div class="flex items-center gap-3"> <div class="w-6 h-6 rounded-full bg-cmap-naranja flex items-center justify-center flex-shrink-0"> <span>${unescapeHTML(icon("location", "text-white"))}</span> </div> <p class="text-sm text-gray-700">${s.direccion}</p> </div>`} ${tieneTelefono && renderTemplate`<div class="flex items-center gap-3"> <div class="w-6 h-6 rounded-full bg-[color:var(--color-cmap-verde-600)] flex items-center justify-center flex-shrink-0"> <span>${unescapeHTML(icon("phone", "text-white"))}</span> </div> <p class="text-sm text-gray-700">${s.telefono}</p> </div>`} ${tieneHorario && renderTemplate`<div class="flex items-center gap-3"> <div class="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0"> <span>${unescapeHTML(icon("time", "text-white"))}</span> </div> <p class="text-sm text-gray-700">${s.horario}</p> </div>`} </div> </div> </div>  </div>`;
  })), "seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo" }, { "default": ($$result3) => renderTemplate`  <meta name="robots" content="index,follow"> ` })}` })}`;
}, "C:/Users/CMAP54/source/repos/cmapsnte54/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/CMAP54/source/repos/cmapsnte54/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
