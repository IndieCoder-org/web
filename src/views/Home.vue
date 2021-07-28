<template>
  <div class="h-screen w-full bg-blue-secondary">

    <div class="mx-auto w-11/12 md:w-4/5 lg:w-1/2 pt-20">

      <div class="w-20 md:w-32 lg:w-40 bg-white-primary p-2 rounded-3xl">
        <img src="../assets/logo.svg" alt="logo">
      </div>

      <div class="py-2">
        <p class="text-3xl md:text-5xl lg:text-7xl text-white-primary font-black">
          Community for Indie Coder to
            <span class="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
              {{value}}
            </span>
          </p>
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
