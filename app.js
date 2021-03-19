let userName = 'Crisitina';

let userQuestion =  `cum crede-ți ce procent din cursanți vor ajunge pînă la sfîrșit de curs?`;

let randomNumber = Math.floor(Math.random() * 9);

let eightBall = "E timpu sa faci un rewiew la cod";

userName ? console.log(`Salut ${userName}!`): console.log('Salut draga user necunoscut!');

if (userName) {
    console.log(`Dragă ${userName} ${userQuestion}`);
} else {
    console.log('Vino să faci parte din echipa noastră!');
}

switch (randomNumber) {
    case 0 :
        eightBall = 'Nici unu';
        break;
    case 1 :
        eightBall = '5% +';
        break;
    case 2 :
        eightBall = 'Toți';
        break;
    case 3 :
        eightBall = '50% +';
        break;
    case 4 :
        eightBall = '90% +';
        break;
    case 5 :
            eightBall = 'Nu am nici cea mai mică ideie';
        break;
    case 6 :
            eightBall = 'Ne stăruim cît mai mulți';
        break;
    case 7 :
            eightBall = 'Vom ajunge și vom vedea';
        break;
    default:
        console.log('8 Ball ERROR');
    }
if (userName) {
    console.log(eightBall);
} else {
    console.log('https://boogeek.com');
}
