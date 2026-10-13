"""Empaqueta los reels en catalán en un zip ordenado: una carpeta por día con
el vídeo, la portada y un único archivo con los textos de cada red (incluido Google).

Uso: python3 empaquetar.py <ruta-del-zip>
"""
import json
import pathlib
import sys
import zipfile

AQUI = pathlib.Path(__file__).parent
sys.path.insert(0, str(AQUI.parent / "textos-redes"))
sys.argv, args = sys.argv[:1] + ["ca"], sys.argv[1:]
import generar  # noqa: E402  (genera también textos-xarxes.html/.txt en catalán)

CARPETAS = ["0-IA", "1-Dilluns", "2-Dimarts", "3-Dimecres", "4-Dijous", "5-Divendres", "6-Dissabte", "7-Diumenge"]
FIRMA_GOOGLE = ("Joan Ramon Soto, psicoanalista (COPC 3852). Consulta presencial a Canet de Mar (Maresme) "
                "i en línia, en català i en castellà. Demana la teva primera visita.")

LLEGEIX = """CALENDARI DE LA SETMANA
=======================

Cada carpeta és un dia. A dins hi ha:
  - <dia>-video.mp4    -> el reel
  - <dia>-portada.png  -> la portada (per triar-la a Instagram)
  - <dia>-textos.txt   -> el text per a Instagram, TikTok, Facebook i Google
  - textos-tots.html   (a l'arrel) -> tots els textos amb botó «Copiar»

Cada arxiu porta el nom del dia: si els passes al mòbil no es barregen.

Com publicar cada dia:
  1. Obre la carpeta del dia.
  2. Puja el vídeo del dia a la xarxa.
  3. Obre el fitxer de textos del dia, copia la part d'aquella xarxa i enganxa-la.
  4. Marca el dia aquí sota quan estigui publicat.

[ ] 0-IA         (quan vulguis, fora de la setmana)
[ ] 1-Dilluns    Ansietat funcional
[ ] 2-Dimarts    Despertar a les 4
[ ] 3-Dimecres   Doomscrolling
[ ] 4-Dijous     Gelosia
[ ] 5-Divendres  Crisi de pànic
[ ] 6-Dissabte   Culpa per descansar
[ ] 7-Diumenge   Angoixa del diumenge

Recorda: afegeix música dins de l'app (els vídeos no tenen so).
A Google no hi posis hashtags ni el telèfon al text: fes servir el botó "Trucar".
"""


def main():
    destino = pathlib.Path(args[0])
    reels = sorted(p for p in (AQUI / "reels").iterdir() if p.is_dir())
    textos = json.loads((AQUI / "textos-xarxes" / "textos.json").read_text(encoding="utf-8"))
    with zipfile.ZipFile(destino, "w", zipfile.ZIP_DEFLATED) as z:
        z.writestr("LLEGEIX-ME.txt", LLEGEIX)
        z.write(AQUI / "textos-xarxes" / "textos-xarxes.html", "textos-tots.html")
        for carpeta, reel, r in zip(CARPETAS, reels, textos):
            t = generar.textos(r)
            google = r["facebook"] + "\n\n" + FIRMA_GOOGLE
            bloques = [f"===== {nombre.upper()} =====\n\n{texto}" for nombre, texto in
                       [("Instagram", t["Instagram"]), ("TikTok", t["TikTok"]),
                        ("Facebook", t["Facebook"]), ("Google (sense hashtags ni telèfon)", google)]]
            z.writestr(f"{carpeta}/{carpeta}-textos.txt", f"{r['reel']}\n\n" + "\n\n\n".join(bloques) + "\n")
            z.write(reel / f"reel-{reel.name}.mp4", f"{carpeta}/{carpeta}-video.mp4")
            z.write(reel / f"portada-{reel.name}.png", f"{carpeta}/{carpeta}-portada.png")
    print(destino)


if __name__ == "__main__":
    main()
