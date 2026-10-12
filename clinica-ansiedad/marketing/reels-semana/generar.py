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
    },
}


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
    return f"""
<section class="scene" id="s1">
  <div class="photo"></div>
  <div class="shade"></div>
  <div class="logo"><img src="../logo.png" alt=""></div>
  <div class="hook">
    <div class="kicker">{kicker}</div>
    <h1><span>{h1[0]}</span><span>{h1[1]}</span><span>{h1[2]}</span></h1>
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
