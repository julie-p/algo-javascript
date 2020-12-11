function digital_root(n) {
    let root = () => { 
        //Split le nb donné pour récuper chaque nb individuellement, 
        //map sur chaque et 
        //reduce (applique une fonction à un accumulateur et à chaque valeur du tableau (de gauche à droite) pour la réduire à une seule valeur.)
        return String(n).split('').map(Number).reduce((x, y) => x + y);
    }
    return  n <= 9 ? root(n) : digital_root(root()); //Si n est < ou = à 9 on le return, sinon on fait la somme des nbs
}; 

console.log(digital_root(16));
console.log(digital_root(4321));
console.log(digital_root(26061990));

/* function friend(friends) {
    Voir ligne 28
    //Nouvel array pour push les amis qui passent le test
    let realFriends = [];
    for (var i = 0; i < friends.length; ++i) { //On boucle s/ la longueur de friends
        if (friends[i].length === 4) { //push dans le nouvel array chaque ami avec 4 lettres au prénom 
            realFriends.push(friends[i]);
        }
    }
    return realFriends;
}; */

function friend(friends) {
    //filtre & return tous les amis dont le nom est = à 4 lettres
    return friends.filter(e => e.length === 4);
};

console.log(friend(["Ryan", "Kieran", "Mark"]))
console.log(friend(["Julie", "Lily", "Aéhufehziurk"]))
console.log(friend(["Anna", "John", "azrgbthyj"]))


//Du + grand au + petit
function descendingOrder(n) {
    //Transforme en string 
    //Transforme en array 
    //Sort array dans ordre ascendant
    //Reverse 
    //Transforme array en string 
    //Transforme en integer
    return parseInt(n.toString().split("").sort().reverse().join(""));
};

console.log(descendingOrder(987654321));
console.log(descendingOrder(123456789));
console.log(descendingOrder(78592218579));

//Challenge anagrammes
let table = [
    "ordre",
    "donner",
    "recevoir",
    "roder",
    "dorer",
    "plaisir",
    "aaaaa"
];

let testWord = "ordre";

let anagrammeTable = table.filter(word => {
    if (word.length !== testWord.length) {
        return false;
    }

    let sortedWord = word.split('').sort().join('');
    let sortedTestWord = testWord.split('').sort().join('');

    if (sortedWord === sortedTestWord) {
        return true;
    }
});

console.log(anagrammeTable);

//Challenge palindrome
let tableWord = [
    "bonjour",
    "kayak",
    "salut",
    "ressasser",
    "toto",
    "javascript",
    "été",
    "algo"
];

let palindrome = tableWord.filter(word => {
    let originalWord = word.split('').join('');

    let reverseOriginalWord = word.split('').reverse().join('');

    if (originalWord === reverseOriginalWord) {
        return true;
    };
});

console.log(palindrome);

const prenoms = ["john", "vanessa", "FRANCK"];

//Mettre les 1res lettres en MAJ et le reste en MIN
for (var i = 0; i < prenoms.length; ++i) {
    prenoms[i] = prenoms[i].charAt(0).toUpperCase() + prenoms[i].slice(1).toLowerCase()
};

console.log(prenoms);

//Trouver dans l'array les nbs qui apparaissent un nb de fois impair
/* function findOdd(A) {
    //Var counter = 0
    //Boucle sur la longueur de A par i 
    //Boucle sur la longueur de A par j
    //si A[i] === A[j]
    //counter ++

    //Si count % 2 != 0
    //return A[i]
    let counter = 0;
    for (let i = 0; i < A.length; ++i) {
        for (let j = 0; j < A[i].length; ++j) {
            if (A[i] === A[j]) {
                counter++;
            }
        }
        if (counter % 2 != 0) {
            return A[i];
        }
    }
}; */

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

console.log(findOdd([2, 2, 2, 3, 4, 5, 5]));


//Somme des deux plus petits entiers positifs
/* function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a, b) => a - b);
    return numbers[0] + numbers[1];
}; */

/* function sumTwoSmallestNumbers(arr) {
    arr = arr.sort((a, b) => a - b);
    let i = 0;
    while (arr[i] < 0) i++;
    return arr[i] + arr[i+1];
}; */

function printerError(s) {
    let count = 0; //var count à zéro pour compter le nb d'erreurs
    for (let i = 0; i < s.length; ++i) { //boucle sur s
      if (s[i] > "m") { //si les lettres présentes dans la string sont > à m
        count++; // incrémente count de 1 
      }
    }
    return count + "/" + s.length; //return le nb d'erreur et le nb de valeurs dans la string
};

console.log(printerError("aaaaaaaaaaaiiiiiiggggmmoopsz"));

function sumOfEveryNumber(number) {
    let num = () => {
        return String(number).split('').map(Number).reduce((x, y) => x + y);
    }
    return number <= 9 ? num() : sumOfEveryNumber(num());
};

console.log(sumOfEveryNumber(26061990));

String.prototype.toMaj = function () { 
    return this.split(" ").map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
};

let str = "Beau comme la rencontre fortuite sur une table de dissection d'une machine à coudre et d'un parapluie.";
let phrase = "Now is the winter of our discontent\n"+"Made glorious summer by this sun of York";

let names = ["julie", "alma", "gaspard"];
for (let i = 0; i < names.length; ++i) {
    names[i] = names[i].toMaj();
}; 

console.log(str.toMaj());
console.log(phrase.toMaj());
console.log(names);

function printerError(e) {
    let count = 0;
    for (let i = 0; i < e.length; ++i) {
        if (e[i] > "m") {
            count++;
        }
    }
    return count + '/' + e.length;
}

console.log(printerError('aaaaabbeeejjmoooopwx'));
console.log(printerError('aaaaaaaaeeeeeeiibm'));

/* function mesAmis(amis) {
    let count = [];
    for (let i = 0; i < amis.length; ++i) {
        if (amis[i].length === 4) {
            count.push(amis[i]);
        }
    }
    return count;
}; */

function mesAmis(amis) {
    return amis.filter(e => e.length === 4);
};

console.log(mesAmis(["Julie", "John", "Alma"]));

function plusGrandAuPlusPetit(n) {
    return parseInt(String(n).split('').sort().reverse().join(''));
};

console.log(plusGrandAuPlusPetit(123456789));

let tableau = [
    "ordre",
    "donner",
    "recevoir",
    "roder",
    "dorer",
    "plaisir",
    "aaaaa"
];

let motTest = "ordre";

let anagrammes = tableau.filter((word) => {
    if (word.length != motTest.length) {
        return false;
    }

    let anagramme = word.split('').sort().join('');
    let mot = motTest.split('').sort().join('');

    if (anagramme === mot) {
        return true;
    }
});

console.log(anagrammes);

function XO(str) {
    //string en minuscule, split et compare si le nb de x = nb de o
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
};

console.log(XO('xo'));
console.log(XO('xoXO'));
console.log(XO('xoXOx'));

var myText = "Si tu travailles avec un marteau-piqueur pendant un tremblement de terre, désynchronise-toi, sinon tu travailles pour rien";

var myTextSplit = myText.split(' ');
var countWord = myTextSplit.length;

var countWordFiltered = myTextSplit.filter((word) => word.length > 2);

console.log(countWordFiltered);

//Modifier le tableau d’objets ci-dessous pour modifier le format du numéro de téléphone, créer un type de contact admin et supprimer les doublons:
var contacts = [
    {
        prenom : 'john',
        telephone : '0611223344',
        admin: false

    },
    {
        prenom : 'elisa',
        telephone : '0655667799',
        admin: false
    },
    {
        prenom : 'franck',
        telephone : '0612345678',
        admin: false
    },
    {
        prenom : 'elisa',
        telephone : '0612345678',
        admin: false
    }
 ];

var tabFinal = [];

for (var i = 0; i < contacts.length; i++) {
    contacts[i].telephone = '+33'+ contacts[i].telephone.substr(1);
    
    if(contacts[i].prenom === 'john') {
        contacts[i].admin = true;
    }

    const found = tabFinal.find(element => element.prenom === contacts[i].prenom);
    if (found === undefined) {
        tabFinal.push(contacts[i]);
    }
};

console.log(tabFinal);

//---------------------------------------------------
var shopping = [
    { product : "Livre", unitPrice : 10.99, quantity:1},
    { product : "CD", unitPrice : 15.99, quantity:1},
    { product : "DVD", unitPrice : 23, quantity:3}
];
    
var shopping2 =  [
    { product : "Livre", unitPrice : 10, quantity:1},
    { product : "CD", unitPrice : 5, quantity:2},
    { product : "DVD", unitPrice : 25, quantity:1}
];

let total1 = 0;
let total2 = 0;

function fdp() {
    for (let i = 0; i < shopping.length; ++i) {
        total1 += shopping[i].unitPrice * shopping[i].quantity;
    };

    for (let i = 0; i < shopping2.length; ++i) {
        total2 += shopping2[i].unitPrice * shopping2[i].quantity;
    };

    if ( total1 > 60 ) {
        return total1 + " : " + "frais de port gratuits";
    } else if ( total2 > 60 ) {
        return total2 + " : " + "frais de port gratuis";
    };
};

console.log(fdp());

function getCount(str) {
    let voyellesCount = 0;
    let voyelles = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < voyelles.length; j++) {
            if (str[i] === voyelles[j]) {
                voyellesCount++;
            }
        }
    }
    return voyellesCount;
};

console.log(getCount("Je m'appelle Julie"));

//------------------------------
function sortArray(array) {
    const odd = array.filter((x) => x % 2 != 0).sort((a,b) => a - b); //Range tous les impairs par ordre croissant
    return array.map((x) => x % 2 != 0 ? odd.shift() : x); //Remplace tous les impairs de array par ceux de odds
};

console.log(sortArray([5, 3, 2, 8, 1, 4]));

//Palindrome - Free Code Camp
function palindromeFunction(str) {
    var re = /[^A-Za-z0-9]/g;
    var regexStr = str.toLowerCase().replace(re, '');
    var reverseStr = regexStr.split('').reverse().join('');
    return reverseStr === regexStr;
};
  
console.log(palindromeFunction("eye"));

//Convert to roman number - Free Code Camp 
function convertToRoman(num) {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
        roman = '',
        i;
    for ( i in lookup ) {
        while ( num >= lookup[i] ) {
            roman += i;
            num -= lookup[i];
        }
    }
    return roman;
};
   
console.log(convertToRoman(36));

function convertToNum(roman) {
    var lookup = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
    var num = roman.split('');
    var sum = 0, i;

    //Boucle sur num
    for (var i = 0; i < num.length; i++) {
        if (lookup[num[i]] < lookup[num[i + 1]]) {
            sum += lookup[num[i + 1]] - lookup[num[i]];
            i ++;
        } else {
            sum += lookup[num[i]];
        }
    }
    return sum;
};

console.log(convertToNum('XXI'));
console.log(convertToNum('IV'));

//Convert string to binary
/* function textToBin(text) {
    return (
        Array
            .from(text)//Récupère le texte
            .reduce((acc, char) => acc.concat(char.charCodeAt().toString(2)), [])//Converti chaque caractère à son char code 
            .map(bin => '0'.repeat(8 - bin.length) + bin )//Retourne l'array avec les 0
            .join(' ')//Retourne en string séparée de " "
    )
}; */

function text2Binary(string) {
    return string.split('').map(char => { //Récupère chaque char et map
        return char.charCodeAt(0).toString(2); //converti chaque char et récupère le Ascii Code en décimal puis transforme en binaire
    }).join(' '); //transforme le tout en string
};

console.log(text2Binary("Un magicien n'est jamais en retard, ni en avance d'ailleurs. Il arrive précisément à l'heure prévue."));

//Telephone number validation
function telephoneCheck(str) {
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
};
  
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("0a-33-44444"));

//Trouve le seul nb impair ou pair de l'array
function findOutlier(int){
    var even = int.filter(a => a % 2 == 0);
    var odd = int.filter(a => a % 2 !== 0);
    return even.length == 1 ? even[0] : odd[0];
};

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([23, 35, 81, 99, 7, 26]));

//Trouve les values uniques des arrays
const arrayOne = [1, 4, 5, 7, 3, 8, 1, 9];
const arrayTwo = [3, 7, 1, 12, 9, 5, 24, 16];

function diffArrayInt(array1, array2) {
  const newArr = [];
  // Combine les deux arrays et les réarrangent par ordre croissant
  const orderedArr = [...array1, ...array2].sort();

  // Boucle sur la nouvelle array
  orderedArr.map((item, index) => {
    // Si l'élément n'est pas répété == unique
    if (item !== orderedArr[index - 1] && item !== orderedArr[index + 1]) {
      //Push unique élément dans tableau vide
      newArr.push(item);
    }
  });
  // 6. Return the array with unique numbers
  return newArr;
};

console.log(diffArrayInt(arrayOne, arrayTwo));

const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false
      }
    };
    return num > 1
};


//Prends les mots de 4 lettres ou plus d'une string et les reverse
/* function spinWords(str) {
    let strArr = str.split(' ');
    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i].length >= 5)
        strArr[i] = strArr[i].split('').reverse().join('');
    }
    return strArr.join(' ');
}; */

function spinWords(words){
    return words.split(' ').map(function (word) {
        return (word.length > 4) ? word.split('').reverse().join('') : word;
        }).join(' ');
};

console.log(spinWords("This is a test"));
console.log(spinWords("This is an other test"));
console.log(spinWords("Okay this is the last test I promise"));

//Tribonacci
function tribonacci(s, n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push((i < 3) ? s[i] : arr[i - 1] + arr[i - 2] + arr[i - 3]);
    }
    return arr;
};

//FizzBuzz
//Print nb de 1 à 100. Multiples de 3, print "Fizz", multipes de 5, print "Buzz".
//Pour les nbs multiples de 3 ET 5, print "FizzBuzz"
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
};


//Decoding Binary Message
function binary2Text(message) {
    return message
            .split(' ')
            .map(b => parseInt(b, 2))
            .map(num => String.fromCharCode(num))
            .join('');
};

console.log(binary2Text("1010101 1101110 100000 1101101 1100001 1100111 1101001 1100011 1101001 1100101 1101110 100000 1101110 100111 1100101 1110011 1110100 100000 1101010 1100001 1101101 1100001 1101001 1110011 100000 1100101 1101110 100000 1110010 1100101 1110100 1100001 1110010 1100100 101100 100000 1101110 1101001 100000 1100101 1101110 100000 1100001 1110110 1100001 1101110 1100011 1100101 100000 1100100 100111 1100001 1101001 1101100 1101100 1100101 1110101 1110010 1110011 101110 100000 1001001 1101100 100000 1100001 1110010 1110010 1101001 1110110 1100101 100000 1110000 1110010 11101001 1100011 1101001 1110011 11101001 1101101 1100101 1101110 1110100 100000 11100000 100000 1101100 100111 1101000 1100101 1110101 1110010 1100101 100000 1110000 1110010 11101001 1110110 1110101 1100101 101110"));
