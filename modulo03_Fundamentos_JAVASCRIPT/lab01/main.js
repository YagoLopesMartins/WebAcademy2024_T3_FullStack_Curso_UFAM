const customName    = document.getElementById('customname');
const randomize     = document.querySelector('.randomize');
const story         = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "GreenEats foi :insertx: por um grupo de amigos apaixonados "
                  +"por alimentação saudável e sustentável. "
                  +"Eles queriam abordar os desafios :inserty: pela indústria "
                  +"alimentícia em relação à sustentabilidade ambiental e à saúde "
                  +"dos :insertz:. Com isso em mente, criaram o GreenEats com o objetivo de oferecer refeições saudáveis, "
                  +"frescas e ecologicamente :insertx:. ";

const insertX = ["fundada", "criada", "descontinuada"];
const insertY = ["enfrentados","bloqueados", "manipulados"];
const insertZ = ["consumidores","programadores JS", "pelos alunos do WebAcademy"];

randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Yago', name)
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;

    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

