/**
 * Catálogo de fotos del sitio.
 *
 * Las fotos viven en /public/img/instagram/, /public/img/team/ y /public/img/hero/.
 * Aquí solo declaramos las URLs públicas que los componentes consumen.
 *
 * Para sumar fotos nuevas:
 *   1. Copiar el archivo a la carpeta correspondiente bajo /public/img/...
 *   2. Optimizar a WebP ≤ 1600px en el lado largo, calidad 80–85.
 *   3. Añadir el path aquí (string).
 */

const ig = (n: string) => `/img/instagram/${n}-ig.webp`;

/* ──────────────── Curaduría por slot ──────────────── */
/* 04 → poster oficial "Exclusividad solo para hombres" */
/* 05 → interior del local (Containers City)             */
/* 02 → cliente con capa editorial de dólares            */
/* 06 → cerveza de barril como cortesía                  */
/* 03 → retrato del barbero (Leo)                        */
/* 01 → equipo posando en el local                       */

export const galleryPhotos: string[] = [
  ig("04"),
  ig("05"),
  ig("02"),
  ig("06"),
  ig("03"),
  ig("01"),
];

/** Hero — protagonista (formato 16:10 ancho). */
export const heroPrimary: string = ig("05");

/** Hero — secundaria (vertical/cuadrada). */
export const heroSecondary: string = ig("03");

/** Equipo — retratos. Cuando lleguen fotos profesionales del equipo,
 *  ponerlas en /public/img/team/<slug>.webp y reemplazar este array. */
export const teamPhotos: string[] = [ig("03"), ig("02"), ig("05")];

/** Indica si ya tenemos fotos reales (siempre true ahora). */
export const hasRealPhotos: boolean = true;
