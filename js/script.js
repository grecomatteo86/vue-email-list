var app = new Vue (
  {
    el:"#app",
    data:{
      mail:'',
      mailArray:[]
    },
    mounted:function(){

      var self = this;

      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(function (response) {
        // const result = response.data;
        console.log(response.data.response);
        self.mail = response.data.response;

        for ( i = 0; i < 10; i++) {
          self.mailArray.push(response.data.response);
          console.log(self.mailArray);
        }

      });
    }
  }
)
