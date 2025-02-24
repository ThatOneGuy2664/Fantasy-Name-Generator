const prefixes = [
    "Xa", "Ny", "Ze", "Va", "Tor", "Ja", "Na", "Ma", "Pa", "Ra", "Ka", "Lo", "El", "Ri", "Da", "Thal",
    "Gre", "Zan", "Kel", "Vor", "Ty", "Lun", "Sha", "Dru", "Gal", "Eld", "Fen", "Syl", "Aer", "Mor",
    "Stron", "Hel", "Oli", "Trev", "Gor", "Wil", "Bran", "Xel", "Or", "Drak", "Vel", "Kry", "Jor",
    "Mar", "Car", "Bar", "Om", "Ero", "Thorne", "Ald", "Vey", "Vay", "Po" 
]; // 53

const suffixes = [
    "ron", "mir", "lith", "dar", "zath", "ion", "mar", "vyn", "thar", "wen", "thos", "ius", "bor",
    "gorn", "ther", "anor", "driel", "wyn", "kash", "morn", "zian", "dros", "stel", "vaar", "mire",
    "quinn", "sol", "grim", "thul", "renn", "sarn", "mont", "thorn", "balt", "grev", "azir", "yx",
    "varis", "phyr", "tarr", "sael", "rith", "kael", "zanth", "thren", "tannis", "kis", "dal", "dyn",
    "arion", "zyrr", "rix"
]; // 50

function generateName() {
    return prefixes[Math.floor(Math.random() * prefixes.length)] +
           suffixes[Math.floor(Math.random() * suffixes.length)];
}

document.getElementById("name-btn").addEventListener("click", function() {
    document.getElementById("name-display").innerText = generateName();
});
