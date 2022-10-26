const userName = prompt ("Inserisci il tuo nome")
const userSurname = prompt ("Inserisci il tuo cognome")
const userColor = prompt ("Inserisci il tuo colore preferito")

const userna = document.getElementById("usernamecon");
// userna.innerHTML = userName

const usersurna = document.getElementById("usersurnamecon");
// usersurna.innerHTML = userSurname

const usercolorh = document.getElementById("usercolorcon");
// usercolorh.innerHTML = userColor

console.log(userName);
console.log(userSurname);
console.log(userColor);

const fraseDef = document.getElementById("frasecomplex");
fraseDef.innerHTML = `${userName}${userSurname}${userColor}21`;
