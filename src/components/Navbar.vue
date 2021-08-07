<template>
  <nav>
  <div class="bg-blue-primary p-1 shadow-md ">
    <div class="bg-blue-secondary w-11/12 md:w-4/5 mx-auto rounded-full p-1">
      <div class="flex justify-between">

        <!-- Home page router -->
        <div>
          <router-link to="/">
            <img class="w-10" src="../assets/logo.svg" alt="logo" route="/">
          </router-link>
        </div>

        <!-- User first name and log out buttom -->
        <div class="my-2" v-if="user.first_name">
          <span></span>
          <a class="btn-primary">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </span>
            <span> {{user.first_name}}</span>
          </a>
          <a class="btn-secondary" @click="logout()">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd" />
              </svg>
            </span>
            <span> Log Out</span>
          </a>
        </div>

        <!-- Register and Login Buttons -->
        <div class="my-2" v-else>
          <span></span>
          <router-link class="btn-primary" to="/register">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
              </svg>
            </span>
            <span> Register</span>
          </router-link>
          <router-link class="btn-secondary" to="/log-in">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            </span>
            <span> Log In</span>
          </router-link>
        </div>

      </div>
    </div>
  </div>
</nav>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Navbar', 

  data() {
    return {
      user: [],
    }
  },

  methods: {

    logout() {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("time_set");
      window.location.reload()
    },

    loadUserData() {
      axios
        .get("/user/",
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.access_token
            }
          })
          .then(response => {
          this.user = response.data;
          })
      },

  },

  mounted() {
    this.loadUserData()
  }
}
</script>
