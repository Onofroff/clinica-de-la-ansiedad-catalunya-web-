"""Convierte los artículos .md en una página HTML para copiar y pegar en Contentful."""
import html
import pathlib
import re

AQUI = pathlib.Path(__file__).parent


def inline(texto):
    t = html.escape(texto, quote=False)
    t = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", t)
    return re.sub(r"\*(.+?)\*", r"<em>\1</em>", t)


def cuerpo_html(md):
    out, lista, parrafo = [], False, []

    def cerrar():
        nonlocal lista, parrafo
        if parrafo:
            out.append("<p>" + "<br>".join(inline(l) for l in parrafo) + "</p>")
            parrafo = []
        if lista:
            out.append("</ul>")
            lista = False

    for linea in md.splitlines():
        if not linea.strip():
            cerrar()
        elif linea.startswith("## "):
            cerrar()
            out.append(f"<h2>{inline(linea[3:])}</h2>")
        elif linea.startswith("- "):
            if parrafo:
                cerrar()
            if not lista:
                out.append("<ul>")
                lista = True
            out.append(f"<li>{inline(linea[2:])}</li>")
        else:
            parrafo.append(linea)
    cerrar()
    return "\n".join(out)


def leer(ruta):
    _, cabecera, cuerpo = ruta.read_text(encoding="utf-8").split("---\n", 2)
    campos = dict(l.split(": ", 1) for l in cabecera.strip().splitlines())
    return campos, cuerpo.strip()


def campo(nombre, valor):
    return (f'<div class="campo"><span class="nombre">{nombre}</span>'
            f'<div class="valor">{html.escape(valor)}</div></div>')


articulos = []
for ruta in sorted(AQUI.glob("*.md")):
    c, cuerpo = leer(ruta)
    articulos.append(f"""
<article>
  <p class="reel">Acompaña al reel: {html.escape(c['reel'])}</p>
  {campo('Título (titulo)', c['titulo'])}
  {campo('Slug (slug)', c['slug'])}
  {campo('Categoría (categoria)', c['categoria'])}
  {campo('Meta descripción (metaDescripcion) · ' + str(len(c['metaDescripcion'])) + ' caracteres', c['metaDescripcion'])}
  {campo('Dirección cuando esté publicado', 'https://www.clinicadelansiedad.com/es/blog/' + c['slug'])}
  <span class="nombre">Contenido (contenido) · selecciona desde aquí hasta el final y pega en Contentful</span>
  <div class="contenido">{cuerpo_html(cuerpo)}</div>
</article>""")

(AQUI / "articulos-para-contentful.html").write_text(f"""<!doctype html>
<html lang="es"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Artículos para Contentful</title>
<style>
  body {{ font-family: Inter, system-ui, sans-serif; background: #F3F7F4; color: #1A3A48; margin: 0; padding: 32px 16px; line-height: 1.6; }}
  main {{ max-width: 760px; margin: 0 auto; }}
  h1 {{ font-size: 28px; }}
  article {{ background: #fff; border-radius: 12px; padding: 28px; margin: 32px 0; box-shadow: 0 4px 20px rgba(26,58,72,.08); }}
  .reel {{ color: #6C9D8B; font-weight: 600; text-transform: uppercase; letter-spacing: .08em; font-size: 13px; margin: 0 0 16px; }}
  .campo {{ margin-bottom: 14px; }}
  .nombre {{ display: block; font-size: 12px; font-weight: 600; color: #6C9D8B; text-transform: uppercase; letter-spacing: .06em; }}
  .valor {{ background: #F3F7F4; padding: 8px 12px; border-radius: 6px; user-select: all; }}
  .contenido {{ border-top: 2px solid #DCE8E1; margin-top: 8px; padding-top: 8px; }}
  .contenido h2 {{ font-size: 22px; margin-top: 28px; }}
</style></head>
<body><main>
<h1>Artículos para el blog</h1>
<p>Para cada artículo: crea una entrada nueva de tipo blogPost en Contentful, copia cada campo en el suyo
(un clic sobre el recuadro selecciona el texto) y pega el contenido en el editor de texto enriquecido.
Añade una imagen destacada y la fecha de publicación antes de publicar.</p>
{''.join(articulos)}
</main></body></html>
""", encoding="utf-8")
print(len(articulos), "artículos")
