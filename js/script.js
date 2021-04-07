var app = new Vue (
  {
    el:"#app",
    data:{
      mail:'',
      mailArray:[]
    },
    mounted:function(){

      var self = this;

      for ( i = 0; i < 10; i++) {

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function (response) {

          self.mailArray.push(response.data.response);
          console.log(self.mailArray);

          
        });

      }



    }
  }
)
