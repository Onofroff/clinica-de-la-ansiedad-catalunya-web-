"""Genera los textos de Instagram, TikTok y Facebook para cada reel.

Uso:
  python3 generar.py     -> castellano: textos.json -> textos-redes.html / .txt
  python3 generar.py ca  -> catalán: ../catala/textos-xarxes/textos.json -> textos-xarxes.html / .txt
"""
import html
import json
import pathlib
import sys

AQUI = pathlib.Path(__file__).parent
RESERVA = "https://clinicadelaansiedad.setmore.com"
IDIOMAS = {
    "es": {
        "carpeta": AQUI, "nombre": "textos-redes", "lang": "es",
        "firma": "Joan Ramon Soto · Psicoanalista (COPC 3852)\n📍 Canet de Mar, Maresme · también online\n🗣️ Català / Castellano",
        "bio": "🔗 Primera consulta: enlace en la bio",
        "tiktok": "Joan Ramon Soto · Psicoanalista · Maresme y online\n👉 Primera consulta: enlace en el perfil",
        "facebook": "📅 Pide tu primera consulta: ",
        "caracteres": "caracteres", "copiar": "Copiar", "copiado": "¡Copiado!",
        "titulo": "Textos para Instagram, TikTok y Facebook",
        "ayuda": "Pulsa «Copiar» y pega el texto al publicar cada reel. En Instagram y TikTok el enlace va en el perfil; en Facebook el enlace del texto sí se puede pulsar.",
    },
    "ca": {
        "carpeta": AQUI.parent / "catala" / "textos-xarxes", "nombre": "textos-xarxes", "lang": "ca",
        "firma": "Joan Ramon Soto · Psicoanalista (COPC 3852)\n📍 Canet de Mar, Maresme · també en línia\n🗣️ Català / Castellà",
        "bio": "🔗 Primera visita: enllaç a la bio",
        "tiktok": "Joan Ramon Soto · Psicoanalista · Maresme i en línia\n👉 Primera visita: enllaç al perfil",
        "facebook": "📅 Demana la teva primera visita: ",
        "caracteres": "caràcters", "copiar": "Copiar", "copiado": "Copiat!",
        "titulo": "Textos per a Instagram, TikTok i Facebook",
        "ayuda": "Prem «Copiar» i enganxa el text quan publiquis cada reel. A Instagram i TikTok l'enllaç va al perfil; a Facebook l'enllaç del text sí que es pot prémer.",
    },
}
L = IDIOMAS[sys.argv[1] if len(sys.argv) > 1 else "es"]


def textos(r):
    instagram = "\n\n".join([
        r["gancho"], r["cuerpo"], "💬 " + r["pregunta"],
        L["firma"] + "\n" + L["bio"],
        " ".join(r["ig"]),
    ])
    tiktok = "\n\n".join([
        r["tiktok"],
        L["tiktok"],
        " ".join(r["tt"]),
    ])
    enlace = f"{RESERVA}?utm_source=facebook&utm_medium=social&utm_content={r['utm']}"
    facebook = "\n\n".join([
        r["facebook"], L["firma"], L["facebook"] + enlace, " ".join(r["fb"]),
    ])
    return {"Instagram": instagram, "TikTok": tiktok, "Facebook": facebook}


reels = json.loads((L["carpeta"] / "textos.json").read_text(encoding="utf-8"))
txt, tarjetas = [], []
for r in reels:
    t = textos(r)
    txt.append("=" * 60 + "\n" + r["reel"].upper() + "\n" + "=" * 60)
    bloques = []
    for red, texto in t.items():
        txt.append(f"\n--- {red} ({len(texto)} {L["caracteres"]}) ---\n{texto}\n")
        bloques.append(
            f'<div class="red"><div class="cab"><span>{red} · {len(texto)} {L["caracteres"]}</span>'
            f'<button onclick="copiar(this)">{L["copiar"]}</button></div>'
            f'<pre>{html.escape(texto)}</pre></div>')
    tarjetas.append(f'<section><h2>{html.escape(r["reel"])}</h2>{"".join(bloques)}</section>')

(L["carpeta"] / (L["nombre"] + ".txt")).write_text("\n".join(txt), encoding="utf-8")
(L["carpeta"] / (L["nombre"] + ".html")).write_text(f"""<!doctype html>
<html lang="{L['lang']}"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{L['titulo']}</title>
<style>
  body {{ font-family: Inter, system-ui, sans-serif; background: #F3F7F4; color: #1A3A48; margin: 0; padding: 32px 16px; }}
  main {{ max-width: 760px; margin: 0 auto; }}
  section {{ background: #fff; border-radius: 12px; padding: 24px; margin: 28px 0; box-shadow: 0 4px 20px rgba(26,58,72,.08); }}
  h2 {{ margin: 0 0 12px; font-size: 22px; }}
  .red {{ margin-top: 18px; }}
  .cab {{ display: flex; justify-content: space-between; align-items: center; font-size: 13px; font-weight: 600; color: #6C9D8B; text-transform: uppercase; letter-spacing: .06em; }}
  button {{ background: #1A3A48; color: #fff; border: 0; border-radius: 999px; padding: 8px 18px; font: inherit; text-transform: none; letter-spacing: 0; cursor: pointer; }}
  pre {{ white-space: pre-wrap; font-family: inherit; background: #F3F7F4; padding: 14px; border-radius: 8px; line-height: 1.5; margin: 8px 0 0; }}
</style></head>
<body><main>
<h1>{L['titulo']}</h1>
<p>{L['ayuda']}</p>
{''.join(tarjetas)}
</main>
<script>
function copiar(b) {{
  const t = b.closest('.red').querySelector('pre').innerText;
  navigator.clipboard.writeText(t).then(() => {{ b.textContent = '{L['copiado']}'; setTimeout(() => b.textContent = '{L['copiar']}', 1500); }});
}}
</script>
</body></html>
""", encoding="utf-8")
print("ok")
