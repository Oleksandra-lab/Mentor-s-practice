const translations = [
    {
      original: "hello",
      translation: "привіт",
    },
    {
      original: "flower",
      translation: "квітка",
    },
    {
      original: "apple",
      translation: "яблуко",
    },
  ];
  
  function getTranslation(word) {}
//   Розроби функціонал для вивчення нових англійський слів. У тебе є масив об'єктів translations, де кожен об'єкт це слово (оригінал та переклад).

const list = document.querySelector(".list")

console.log(list);

const engBtn = document.querySelector(".js-eng")
const ukrBtn = document.querySelector(".js-ukr")

function getEnglishVersion() {
    [...list.children].forEach((element, idx)  => {
      element.textContent = translations[idx].original
      // element.classList.remove("active")
    })
    engBtn.disabled = true;
    ukrBtn.disabled = false;
}
getEnglishVersion()



function getUkrainianVersion(){
  [...list.children].forEach((element, idx)  => {
      element.textContent = translations[idx].translation
      // element.classList.add("active")
    })
    ukrBtn.disabled = true;
    engBtn.disabled = false;
}

engBtn.addEventListener("click", getEnglishVersion)
ukrBtn.addEventListener('click', getUkrainianVersion)