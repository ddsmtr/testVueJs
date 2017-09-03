(function(){
  //--------------------------------------
  //--------------------------------------
  //Ура, счетчик, нормааааас. Замыкания))))
  let func = function(){
    let count = 1;
    return function(){
      //count++;
      console.log(++count);
    }
  };
  //var timerId = setInterval(func(), 2000);
  //---------------------------------------
  //---------------------------------------

  // 1. Создаём новый объект XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
  xhr.open('POST', ' test.txt', false);

  // 3. Отсылаем запрос
  xhr.send();

  // 4. Если код ответа сервера не 200, то это ошибка
  if (xhr.status != 200) {
    // обработать ошибку
    alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
  } else {
    // вывести результат
    console.log( xhr.responseText ); // responseText -- текст ответа.
  }

  var app = new Vue({
      el: '#test',
      data: {
        message: 'Hello Vue.js!',
        seen: true,
      }
  });
  var para = new Vue({
    el: "#paraid",
    data: {
      para: "Text",
    },
    methods: {
      ReverseMessage: function(){
        this.para = this.para.split('').reverse().join('');
      },  
    }
  });
  var inp = new Vue({
    el:"#test_input",
    data: {
      message: "Hello Vue!"
    },
  });
  var testfor = new Vue({
    el:"#new",
    data: {
      myarray: [
        {text: "Oleg"},
        {text: "Nastenka"},
        {text: "Slastenka"},
      ],
    },
  });

  var a = document.getElementById("pp");
  a.addEventListener("mouseover", function(){
    app.seen = false;
    a.style.backgroundColor="blue";
  });
  //a.addEventListener("mouseout", function(){
  //  app.seen = true;
  //  a.style.backgroundColor="red";
  //});
})();
