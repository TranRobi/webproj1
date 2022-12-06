let testsuly = Number(prompt("Testsúlya"))
let etkezesek = Number(prompt("Étkezések száma"))
let ml = Number(prompt("Most megevett ml"))


let testsuly_hat = testsuly / 6
let etkezes = testsuly_hat / etkezesek
let kellmeg = etkezes - ml

document.write(`Testsúlya: ${testsuly}, etkezések száma: ${etkezesek}, Evett eddig mlban ${ml}, testsúly hatoda: ${testsuly_hat}, 1 étkezésre szánt mennyiség ${etkezes}, ennyi kellene még ${kellmeg} `)
document.write("<br>")
document.write(`Ennyi kell még ${etkezes+(kellmeg/(etkezesek-1))} a következő étkezésben`)

if(etkezes < ml){
    document.write("<br>")
    document.write("Túl ette magát")
}