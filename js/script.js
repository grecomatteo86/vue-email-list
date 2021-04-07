var app = new Vue (
  {
    el:"#app",
    data:{
      
    },
    mounted:function(){

      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(function (response) {
        console.log(response.data.response);
        // const result = response.data;
      });
    }
  }
)
