<template>
  <div class="bg-blue-secondary">
    <div class="grid grid-cols-2 gap-10 w-11/12 md:w-4/5 mx-auto py-20">
      <div class="col-span-2 md:col-span-1">
        <h3 class="text-4xl text-red-primary font-black py-2">
          Create
          <span class="text-sm text-white-primary">
            your account
          </span>
        </h3>
        <form v-on:submit.prevent="register">
          <div class="py-2">
            <input type="email" placeholder="*Email Addres" class="input-style" v-model="email" />
            <p v-if="this.invalid_emails.includes(this.email)" 
              class="text-red-primary text-sm pt-1">
              This email is already in use.
            </p>
          </div>
          
          <div class="py-2">
            <input type="password" placeholder="*Password" class="input-style" v-model="password"/>
          </div>
          <div class="py-2">
            <input type="password" placeholder="Re-write Password" class="input-style" v-model="confirm_password"/>
            <p v-if="this.password.length > 0 && this.confirm_password.length > 0 && this.password !== this.confirm_password"
              class="text-red-primary text-sm pt-1">
              Passwords must match!
            </p>
          </div>
          <div class="py-2 flex">
            <input type="text" placeholder="First Name" class="input-style mr-2" v-model="first_name" />
            <input type="text" placeholder="Last Name" class="input-style" v-model="last_name" />
          </div>
          <div class="py-2">
            <input type="text" placeholder="*Nick Name" class="input-style" v-model="nick_name" />
            <p v-if="this.nick_name.length === 0"
              class="text-red-primary text-sm pt-1">
              * required fields
            </p>
          </div>
          <button type="submit" class="btn-secondary my-2">Create An Account</button>
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
  name: 'Register',

  data() {
    return {
      email: "",
      first_name: "",
      last_name: "",
      nick_name: "",
      password: "",
      confirm_password: "",
      invalid_emails: []
    }
  }, 

  mounted() {
    document.title = 'Indie Coder | Register'
  },

  methods: {

    register() {
      if (this.invalid_emails.includes(this.email) ||
          this.password !== this.confirm_password) {
        return;
      }

      let payload = {
          email: this.email,
          first_name: this.first_name,
          last_name: this.last_name,
          password: this.password,
          nick_name: this.nick_name,
      }

      axios.post("/users/register",
        JSON.stringify(payload),
        {
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(() => {
          this.$router.push("/log-in");
        })
        .catch(
          error => {
          if (error.response.status == 400 && "email" in error.response.data) {
            if (error.response.data.email.includes("user with this email address already exists.")) {
              this.invalid_emails.push(this.email);
            }
          }
        });
    },
  }
}
</script>
