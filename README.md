# Oveja Negra Studio — Landing

Sitio web premium para Oveja Negra Studio (Armenia, Quindío). Astro 6 + Tailwind v4, dark-first, tipografía editorial, animaciones premium.

## Stack

- **Astro 6** (modo estático, View Transitions, prefetch en viewport)
- **Tailwind CSS v4** (con `@theme` tokens en `src/styles/global.css`)
- **@astrojs/sitemap** (SEO)
- **Fonts**: Fraunces (display serif), Inter (sans), JetBrains Mono (mono técnico)

## Requisitos

- Node **≥ 22.12** (este repo se desarrolló con `v22.22.2`)
- pnpm 10+

```sh
nvm install 22 && nvm use 22
```

## Comandos

| Comando         | Acción                                                |
| :-------------- | :---------------------------------------------------- |
| `pnpm install`  | Instala dependencias                                  |
| `pnpm dev`      | Servidor de desarrollo en `localhost:4321`            |
| `pnpm build`    | Build de producción a `./dist/`                       |
| `pnpm preview`  | Preview del build                                     |
| `pnpm astro check` | Verificación de tipos                              |

## Estructura

```
src/
├── components/        # Secciones (Hero, Services, Team, …)
├── data/site.ts       # Contenido (servicios, equipo, contacto)
├── layouts/Base.astro # Layout base con SEO, fuentes y reveals
├── pages/index.astro  # Homepage
└── styles/global.css  # Tokens (@theme), utilidades, animaciones
```

## Editar contenido

Todo el contenido editable está en **`src/data/site.ts`** (servicios, precios, equipo, horarios, redes, dirección). Sin tocar componentes se puede ajustar todo el copy.

## Notas de diseño

- Paleta dark con acentos cálidos en oro (`--color-gold #c9a35b`).
- Tipografía editorial fluida (serif variable Fraunces).
- `data-reveal` activa fade-in al scroll. `data-parallax` aplica desplazamiento sutil. Ambos respetan `prefers-reduced-motion`.
- Las imágenes son placeholders de Unsplash. Sustitúyelas por fotos reales de la barbería en `/public/img/` y actualiza las rutas.

## Próximos pasos

1. Cambiar imágenes por fotografía real del local y del equipo.
2. Confirmar precios y servicios reales con el cliente.
3. Diseñar e implementar el módulo de reservas propio (reemplazo de beunik.co) — fase 2.
4. Configurar dominio y deploy (Vercel / Netlify / Cloudflare Pages).
