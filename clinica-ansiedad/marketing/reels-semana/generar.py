"""Genera un HTML por día a partir de la plantilla del reel y de dias.json.

Uso: python3 generar.py  ->  crea <slug>/reel.html para cada día.
"""
import json
import pathlib
import re

AQUI = pathlib.Path(__file__).parent
PLANTILLA = (AQUI.parent / "reel-angustia-ia" / "reel.html").read_text(encoding="utf-8")

CIERRE = """
<section class="scene" id="s6">
  <div class="wrap">
    <div class="avatar"><div></div></div>
    <img class="logo" src="../logo.png" alt="">
    <div class="who">Joan Ramon Soto · Psicoanalista</div>
    <div class="where">Maresme · Presencial y online · Català / Castellano</div>
    <div class="cta">Pide tu primera consulta</div>
    <div class="web">clinicadelansiedad.com · 613 916 079</div>
  </div>
</section>
"""


def cuerpo(d):
    h1, s2, s3, s4, s5 = d["h1"], d["s2"], d["s3"], d["s4"], d["s5"]
    return f"""
<section class="scene" id="s1">
  <div class="photo"></div>
  <div class="shade"></div>
  <div class="logo"><img src="../logo.png" alt=""></div>
  <div class="hook">
    <div class="kicker">{d["dia"]} · Para pensar</div>
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
{CIERRE}"""


def main():
    cabecera, resto = PLANTILLA.split("<body>", 1)
    script = resto[resto.index("<script>"):]
    cabecera = cabecera.replace("url(foto.png)", "url(../foto.png)")
    for d in json.loads((AQUI / "dias.json").read_text(encoding="utf-8")):
        html = cabecera.replace("<title>Reel angustia IA</title>", f"<title>Reel {d['dia']}</title>")
        html += "<body>\n" + cuerpo(d) + "\n" + script
        destino = AQUI / d["slug"]
        destino.mkdir(exist_ok=True)
        (destino / "reel.html").write_text(html, encoding="utf-8")
        print(destino.name)


if __name__ == "__main__":
    main()
