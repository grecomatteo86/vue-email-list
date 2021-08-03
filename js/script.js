var app = new Vue (
  {
    el:"#app",
    data:{
      mail:'',
      mailArray:[]
    },
    mounted:function(){
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
