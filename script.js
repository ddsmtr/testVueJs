(function(){
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
