# Imágenes del sitio

El loader (`src/data/photos.ts`) escanea estas carpetas en build-time. **Arrastra fotos y aparecen solas en el sitio.** No hay que tocar código.

```
public/img/
├── instagram/   ← galería principal + bento del hero (12 max)
├── hero/        ← (opcional) sustituye solo el hero
└── team/        ← retratos del equipo
```

## Reglas

- Formatos: `.jpg`, `.jpeg`, `.png`, `.webp`.
- Orden = orden alfabético del nombre. Si quieres controlarlo, prefija con `01-`, `02-`, …
- Tamaño recomendado: **1600 px en el lado largo**, calidad 80–85.
- La galería usa las primeras 6 fotos de `instagram/`. Si hay menos de 6, mantiene los placeholders de Unsplash hasta tener material real.
- Para el equipo: pon una foto por barbero, en el orden del array `team` en `src/data/site.ts`.

## Para descargar las fotos del Instagram (@ovejanegra.studio_94)

Instagram bloquea scraping anónimo desde 2024. Tres caminos prácticos, ordenados de mejor a peor:

1. **Web (más rápido, 5–10 min)**
   - Abre cada post en `https://www.instagram.com/p/<código>/`
   - Pega la URL en `https://snapinsta.app/` o `https://fastdl.app/` → descarga.
   - Renombra `01-corte.jpg`, `02-barba.jpg`, etc. y arrástralas a `public/img/instagram/`.

2. **App móvil**
   - Instala "Repost for Instagram" o "FastSave" desde la tienda de tu teléfono.
   - Comparte cada post → guardar en galería → AirDrop/Drive a tu Mac.

3. **Pídele al cliente las originales**
   - Lo más profesional: la mayoría de barberías guardan las fotos en alta resolución antes de subirlas a IG (las de IG pierden calidad).
   - Si Leo te pasa la carpeta original, las usas directo.
