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

        <!-- Register and Login Buttons -->
        <div class="my-2">
          <span></span>
          <a class="btn-primary">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
              </svg>
            </span>
            <span> Register</span>
          </a>
          <a class="btn-secondary">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            </span>
            <span> Log In</span>
          </a>
        </div>

      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar', 

  props: {
    user: Object
  }
}
</script>
