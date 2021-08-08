<template>
  <div class="bg-blue-secondary">
    <div class="grid grid-cols-2 gap-10 w-11/12 md:w-4/5 mx-auto py-20">
      <div class="col-span-2 md:col-span-1 my-16">
        <h3 class="text-4xl text-red-primary font-black py-2">
          Log In 
          <span class="text-sm text-white-primary">
            to your account
          </span>
        </h3>
        <form v-on:submit.prevent="loginLocal">
          <div class="py-2">
            <input type="email" placeholder="Email Addres" class="input-style" v-model="email" />
          </div>
          <div class="py-2">
            <input type="password" placeholder="Password" class="input-style" v-model="password"/>
          </div>
          <button type="submit" class="btn-secondary my-2">Log In</button>
        </form>
      </div>
      <div class="col-span-2 md:col-span-1 mx-auto">
        <div>
          <img class="w-60 md:w-80 mx-auto" src="../../assets/logo.svg" alt="logo">
        </div>
        <div>
          <h2 class="text-white-primary text-4xl md:text-6xl font-black text-center py-3">Indie Coder</h2>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LogIn',

  data() {
    return {
      email: "",
      password: ""
    }
  }, 

  mounted() {
    document.title = 'Indie Coder | Log In'
  },

  methods: {
    loginLocal() {
      this.login(this.email, this.password);
      this.$router.push("/");
    },

    refresh_token() {
      axios
        .post("/token/refresh/",
          JSON.stringify({
          refresh: localStorage.getItem("refresh_token")
        }),
        {
          headers: {
              'Content-Type': 'application/json'
        }
        })
        .then((response) => {
          localStorage.access_token = response.data.access;
        });
    },

    login(email, password) {
      let payload = {
          email: email,
          password: password
      }
      axios.post("/token/",
        JSON.stringify(payload),
        {
        headers: {
            'Content-Type': 'application/json'
        }
        }).then((response) => {
        localStorage.access_token = response.data.access;
        localStorage.refresh_token = response.data.refresh;
        localStorage.time_set = Date.now();
        window.location.reload()
      });
    },
  }
}
</script>
