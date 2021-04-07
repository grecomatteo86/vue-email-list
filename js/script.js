var app = new Vue (
  {
    el:"#app",
    data:{
      mail:'',
      mailArray:[]
    },
    mounted:function(){

      // METHOD 1 WITH SELF

      // var self = this;
      //
      // for ( i = 0; i < 10; i++) {
      //   axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      //   .then(function (response) {
      //     self.mailArray.push(response.data.response);
      //     console.log(self.mailArray);
      //   });
      // }


      // METHOD 2 WITH ARROW FUNCTION

      for ( i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then ( (response) => {

          this.mailArray.push(response.data.response);
          console.log(this.mailArray);

        });

      }


    }
  }
)
