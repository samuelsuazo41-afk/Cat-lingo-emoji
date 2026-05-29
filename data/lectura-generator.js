function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generarTextLectura(nivell, lang) {
  const D = LECTURA_CONTENT[nivell];
  let parts = [];
  parts.push(rand(D.intros));
  for(let i=0; i<3; i++) {
    let frase = rand(D.subjectes) + " + rand(D.accions) + " + rand(D.objectes) + " + rand(D.llocs) + ".";
    parts.push(frase);
  }
  parts.push(rand(D.connectors) + ", " + rand(D.subjectes).toLowerCase() + " + rand(D.estats) + ".");
  parts.push(rand(D.tancaments));
  return parts.join(" ");
}
