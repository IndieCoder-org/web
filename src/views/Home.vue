<template>
  <div class="h-screen w-full bg-blue-secondary">

    <div class="mx-auto w-11/12 md:w-4/5 lg:w-1/2 pt-20">

      <div class="w-20 md:w-32 lg:w-40 p-2 rounded-3xl">
        <img src="../assets/logo.svg" alt="logo">
      </div>

      <div class="py-2">
        <p class="text-3xl md:text-5xl lg:text-6xl text-white-primary font-black">
          Community for Indie Coders to
            <span class="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
              {{value}}
            </span>
          </p>
      </div>
      <div class="pt-1 mt-10 bg-red-primary"></div>
      <div>
        <p class="text-3xl md:text-5xl lg:text-7xl text-white-primary font-black text-center italic pt-10">Comming Soon!</p>
      </div>

      <div class="flex justify-center mt-5 text-red-primary">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </span>
        <address>
          <a href="mailto:indie.coder.info@gmail.com">indie.coder.info@gmail.com</a>
        </address>
      </div>

    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Home', 
  data() {
    return {
      words: ['meet', 'collaborate', 'share ideas'],
      value: 'meet',
      counter: 0,
      index: 0,
      interval: 0
    }
  },
  mounted() {
    this.showWord()
  },
  methods: {
    showWord() {
      this.interval = setInterval(() => {
        this.index = ++this.counter % this.words.length;
        this.value = this.words[this.index]
      }, 1000)
    }
    
  }
}
</script>