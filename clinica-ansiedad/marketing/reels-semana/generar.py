"""Genera un HTML por reel a partir de la plantilla y de un JSON de guiones.

Uso:
  python3 generar.py            -> castellano: dias.json -> reels-semana/<slug>/reel.html
  python3 generar.py ca         -> catalán: ../catala/reels/reels.json -> ../catala/reels/<slug>/reel.html
"""
import json
import pathlib
import shutil
import sys

AQUI = pathlib.Path(__file__).parent
PLANTILLA = (AQUI.parent / "reel-angustia-ia" / "reel.html").read_text(encoding="utf-8")

IDIOMAS = {
    "es": {
        "datos": AQUI / "dias.json",
        "salida": AQUI,
        "lang": "es",
        "sufijo_dia": "Para pensar",
        "donde": "Maresme · Presencial y online · Català / Castellano",
        "cta": "Pide tu primera consulta",
    },
    "ca": {
        "datos": AQUI.parent / "catala" / "reels" / "reels.json",
        "salida": AQUI.parent / "catala" / "reels",
        "lang": "ca",
        "sufijo_dia": "Per pensar",
        "donde": "Maresme · Presencial i en línia · Català / Castellà",
        "cta": "Demana la teva primera visita",
        "portada": "consulta",
    },
}

# Portada alternativa: foto de la consulta (diván y sillón) enmarcada arriba y el texto debajo,
# fuera de la franja inferior y la columna derecha que tapan los botones de Reels/TikTok.
PORTADA_CONSULTA = """
  #s1 { background: linear-gradient(180deg, var(--cream) 0%, var(--sage-soft) 100%); }
  #s1 .photo { inset:auto; left:40px; right:40px; top:330px; height:514px; border-radius:18px;
    background: url(../consulta.jpg) center/cover; box-shadow: 0 30px 60px rgba(26,58,72,.25);
    transform-origin: 50% 50%; animation: zoomPortada 4.8s linear both; }
  @keyframes zoomPortada { from { transform: scale(1);} to { transform: scale(1.03);} }
  #s1 .shade { display:none; }
  #s1 .hook { top:930px; }
  /* Variante: el bloque destacado en la tercera línea y una frase de apoyo bajo el titular. */
  #s1 h1.acento-3 span:nth-child(2) { background: var(--navy); color:#fff; }
  #s1 h1.acento-3 span:nth-child(3) { background:#E7A977; color: var(--navy); }
  #s1 .sub { font-size:40px; line-height:1.3; color: var(--navy); margin-top:22px; max-width:880px; animation: fade .8s 1.2s both; }
"""


def cierre(t):
    return f"""
<section class="scene" id="s6">
  <div class="wrap">
    <div class="avatar"><div></div></div>
    <img class="logo" src="../logo.png" alt="">
    <div class="who">Joan Ramon Soto · Psicoanalista</div>
    <div class="where">{t["donde"]}</div>
    <div class="cta">{t["cta"]}</div>
    <div class="web">clinicadelansiedad.com · 613 916 079</div>
  </div>
</section>
"""


def cuerpo(d, t):
    h1, s2, s3, s4, s5 = d["h1"], d["s2"], d["s3"], d["s4"], d["s5"]
    kicker = d.get("kicker") or f'{d["dia"]} · {t["sufijo_dia"]}'
    clase = ' class="acento-3"' if d.get("acento") == 3 else ""
    sub = f'\n    <p class="sub">{d["sub"]}</p>' if d.get("sub") else ""
    return f"""
<section class="scene" id="s1">
  <div class="photo"></div>
  <div class="shade"></div>
  <div class="logo"><img src="../logo.png" alt=""></div>
  <div class="hook">
    <div class="kicker">{kicker}</div>
    <h1{clase}><span>{h1[0]}</span><span>{h1[1]}</span><span>{h1[2]}</span></h1>{sub}
  </div>
  <div class="sig">Joan Ramon Soto · Psicoanalista</div>
</section>

<section class="scene" id="s2">
  <div class="center">
    <div class="label">{s2[0]}</div>
    <div class="rule"></div>
    <h2>{s2[1]}</h2>
    <p>{s2[2]}</p>
  </div>
</section>

<section class="scene" id="s3">
  <div class="center">
    <div class="label">{s3[0]}</div>
    <div class="line a">{s3[1]}</div>
    <div class="line"><span class="b">{s3[2]}</span></div>
    <div class="line c">{s3[3]}</div>
  </div>
</section>

<section class="scene" id="s4">
  <div class="center">
    <div class="intro">{s4[0]}</div>
    <div class="q q1">{s4[1]}</div>
    <div class="q q2">{s4[2]}</div>
    <div class="q q3">{s4[3]}</div>
  </div>
</section>

<section class="scene" id="s5">
  <div class="center">
    <div class="t1">{s5[0]}</div>
    <div class="t2">{s5[1]}</div>
  </div>
</section>
{cierre(t)}"""


def main():
    t = IDIOMAS[sys.argv[1] if len(sys.argv) > 1 else "es"]
    cabecera, resto = PLANTILLA.split("<body>", 1)
    script = resto[resto.index("<script>"):]
    cabecera = cabecera.replace("url(foto.png)", "url(../foto.png)")
    cabecera = cabecera.replace('<html lang="es">', f'<html lang="{t["lang"]}">')
    if t.get("portada") == "consulta":
        cabecera = cabecera.replace("</style>", PORTADA_CONSULTA + "</style>")
    salida = t["salida"]
    for imagen in ("foto.png", "logo.png"):
        if not (salida / imagen).exists():
            shutil.copy(AQUI / imagen, salida / imagen)
    for d in json.loads(t["datos"].read_text(encoding="utf-8")):
        html = cabecera.replace("<title>Reel angustia IA</title>", f"<title>Reel {d['dia']}</title>")
        html += "<body>\n" + cuerpo(d, t) + "\n" + script
        destino = salida / d["slug"]
        destino.mkdir(exist_ok=True)
        (destino / "reel.html").write_text(html, encoding="utf-8")
        print(destino.name)


if __name__ == "__main__":
    main()
