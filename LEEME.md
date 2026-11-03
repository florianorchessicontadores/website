# Florián Orchessi & Asociados — Sitio web estático

## Probar en tu computadora
Abre `index.html` con doble clic (o usa la extensión "Live Server" de VS Code).

## Publicar en GitHub Pages
1. Sube TODO el contenido de esta carpeta a tu repositorio (reemplaza los archivos anteriores).
2. En GitHub: Settings → Pages → Source: "Deploy from a branch" → rama `main`, carpeta `/ (root)` → Save.
3. Espera 1–2 minutos y abre la URL que GitHub te muestra.
4. Reemplaza la URL de ejemplo en SEO (una sola vez), desde la carpeta del proyecto:
   `sed -i 's#https://TU-USUARIO.github.io/TU-REPOSITORIO/#https://TU-URL-REAL/#g' *.html sitemap.xml robots.txt`
   (o usa "Buscar y reemplazar" en tu editor sobre esa cadena).

## Pendientes que requieren tu confirmación
- WhatsApp: se usa +51 996 002 469 en todo el sitio. Si el principal es 949 943 032, reemplaza `51996002469` por `51949943032`.
- Formulario de contacto: usa FormSubmit hacia info@florianorchessi.com. Al primer envío llegará un correo de activación a esa casilla; hasta activarlo, los mensajes no se entregan.
- "Más de 18 años": cifra tomada del contenido original de la web.
- Fotografías: provienen de tu brochure. Puedes cambiarlas por fotos propias o licenciadas reemplazando los archivos de `assets/images/` con el mismo nombre.
