
let userName = 'Cristina'; //Modify here!

let randomNumber = Math.floor(Math.random() * 8); //here too

if (userName === "Cristina") {

    let userQuestion =  'Cum crede-ți ce procent din cursanți vor ajunge pînă la sfîrșit de curs?';

    let eightBall = "E timpu sa faci un rewiew la cod";

    console.log(`Salut dragă ${userName} !`);

    console.log(userQuestion);

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
    console.log(eightBall);

} else if (!userName) {

    console.log('Salut draga USER\nVino sa faci parte din echipa noastra\nclick aici: https://boogeek.com');

} else {
    let userQuestion =  'How do you think we will live better in the next 10 years?';

    let eightBall = "it's time to code review";

    console.log(`Hello dear ${userName} !`);

    console.log(userQuestion);

    switch (randomNumber) {
        case 0 :
            eightBall = 'It is certain';
            break;
        case 1 :
            eightBall = 'It is decidedly so';
            break;
        case 2 :
            eightBall = 'Reply hazy try again';
            break;
        case 3 :
            eightBall = 'Cannot predict now';
            break;
        case 4 :
            eightBall = 'Do not count on it';
            break;
        case 5 :
                eightBall = 'My sources say no';
            break;
        case 6 :
                eightBall = 'Mey be';
            break;
        case 7 :
                eightBall = 'Signs point to yes';
            break;
        default:
            console.log('8 Ball ERROR');
        }
    console.log(eightBall);
    
}