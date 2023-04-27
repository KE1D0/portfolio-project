const verbArray = ["eпотреблять","делаться","любить", "смотреть","шагать","использовать"]
const nounArray = ["птицу","сигарету","дом", "собаку","доход","начальник"]
const nameArray = ["Каспарс","Ракан","Ильфак", "Александр","Калмыш","Цемах"]
const surnameArray = ["Лобанов","Бузони","Кравченко", "Гольдбаум","Онашвили","Мухамеджанов"]
const adjectiveArray = ["Неподвижный","Партийный","Странный", "Страшный","Мертвый","Божий"]
function getRandomAdjactive(){
    let adjective = ''
    for(let i=0; i<1; i++){
        const randomAdjectiveIndex=Math.floor(Math.random()* adjectiveArray.length);
        adjective += adjectiveArray[randomAdjectiveIndex];
    }
    return `${adjective} `;
}
function getRandomVerb(){
    let verb = ''
    for(let i=0; i<1; i++){
        const randomVerbIndex=Math.floor(Math.random()* verbArray.length);
        verb += verbArray[randomVerbIndex];
    }
    return `${verb} `;
}
function getRandomNoun(){
    let noun = ''
    for(let i=0; i<1; i++){
        const randomNounIndex=Math.floor(Math.random()* nounArray.length);
        noun += nounArray[randomNounIndex];
    }
    return `${noun} `;
}
function fillQuota(quotaIndex){
    document.querySelector('.quota').innerHTML = quotaIndex;
}
function getRandomName(){
    let name =''
    for(let i=0; i<1; i++){
        const randomNameIndex=Math.floor(Math.random()* nameArray.length);
        name += nameArray[randomNameIndex];
    }
    return `${name} `;
}
function getRandomSurname(){
    let surname =''
    for(let i=0;i<1;i++){
        const randomSurnameIndex=Math.floor(Math.random()* surnameArray.length);
        surname += surnameArray[randomSurnameIndex];
    }
    return `${surname} `;
}
function fillName(nameIndex){
    document.querySelector('.nameOfPerson').innerHTML = nameIndex;

}
function fillSurname(surnameIndex){
    document.querySelector('.surnameOfPerson').innerHTML = surnameIndex;

}
function quotaRandomizer(){
    const nameIndex = getRandomName();
    const surnameIndex = getRandomSurname();
    const quotaIndex= getRandomAdjactive() + getRandomNoun() + getRandomVerb();
    fillName(nameIndex);
    fillSurname(surnameIndex);
    fillQuota(quotaIndex);
}
const changeQuota = document.querySelector('.changeQuota button');
changeQuota.addEventListener('click', quotaRandomizer);