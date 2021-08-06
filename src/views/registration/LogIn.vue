<template>
  <div class="bg-blue-secondary">
    <h3 class="text-3xl text-white-primary font-black">Log In</h3>
    <form v-on:submit.prevent="loginLocal">
      <div class="form-group">
        <input type="email" class="form-control" id="emailInput" v-model="email" placeholder="Email">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" id="passwordInput" v-model="password" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-secondary">Log In</button>
    </form>
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
