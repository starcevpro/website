<template>
  <div class="container mx-auto px-4 py-8">
    <div class="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div class="w-full max-w-5xl h-96 prose relative">
        <img
          ref="profileImage"
          src="@/assets/me.png"
          class="absolute h-full right-0 scale-[200%] -z-10"
          alt=""
          @load="calculateImagePosition"
        />
        <div>
          <h1 class="text-primary-500 text-6xl font-black" ref="typeHello"></h1>
          <h2 class="text-5xl font-thin" ref="typeIam"></h2>
          <div class="my-10"></div>
          <h4 class="font-semibold" ref="firstFade" :style="{ opacity: 0 }">
            {{ $t('home.create')}}
          </h4>
          <p class="text-base/40 font-light max-w-[60%]" ref="secondFade" :style="{ opacity: 0 }">
            {{ $t('home.develop')}}
          </p>
          <div class="my-10"></div>
          <div ref="thirdFade" :style="{ opacity: 0 }">
            <SkillsList />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="absolute left-10 bottom-10 flex gap-5 items-end"
       ref="rightBlocks" :style="{ opacity: 0, transform: 'translatey(100px)' }">
    <div class="w-0.5 h-96 bg-primary-500 rounded-full"></div>
    <div class="w-0.5 h-48 bg-primary-500 rounded-full"></div>
    <div class="w-0.5 h-24 bg-primary-500 rounded-full"></div>
  </div>

  <div class="absolute right-10 top-10 bottom-10 flex gap-5 items-start"
       ref="leftBlocks" :style="{ opacity: 0, transform: 'translatey(-100px)' }">
    <div class="w-0.5 h-24 bg-primary-500 rounded-full"></div>
    <div class="w-0.5 h-48 bg-primary-500 rounded-full"></div>
    <div class="h-full w-0.5 flex flex-col justify-between">
      <div class="w-full h-[40%] bg-primary-500 rounded-full"></div>
      <div class="relative w-full h-[50%] bg-primary-500 rounded-full"
           ref="scrollDownBlock" :style="{ opacity: 0 }">
        <div class="absolute rotate-90 whitespace-nowrap top-10 -left-[60px] text-primary-500 uppercase font-extrabold text-xs w-24">{{ $t('scrollDown')}}</div>
        <div class="absolute -bottom-[2.5px] -left-[9.5px] w-0.5 -rotate-[30deg] rounded-full h-10 bg-primary-500"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import SkillsList from '@/components/SkillsList.vue'
import TypeIt from 'typeit'
import gsap from 'gsap'

export default {
  components: { SkillsList },
  mounted() {
    this.calculateImagePosition()
    window.addEventListener('resize', this.calculateImagePosition)
    // Первая строка
    new TypeIt(this.$refs.typeHello, {
      speed: 100,
      cursor: false,
      afterComplete: () => {
        this.startSecondLine()
      },
    })
      .type(this.$t('home.typeHello'))
      .go()
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.calculateImagePosition)
  },
  methods: {
    startSecondLine() {
      new TypeIt(this.$refs.typeIam, {
        speed: 100,
        afterComplete: () => {
          this.fadeBlocks()
        },
      })
        .type(this.$t('home.typeIam'))
        .go()
    },
    fadeBlocks() {
      gsap.to(this.$refs.firstFade, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        onComplete: () => {
          gsap.to(this.$refs.secondFade, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            onComplete: () => {
              gsap.to(this.$refs.thirdFade, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
              })
              gsap.to(this.$refs.leftBlocks, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
              })
              gsap.to(this.$refs.rightBlocks, {
                opacity: 1,
                y: 0,
                duration: 1,
                onComplete: () => {
                  setTimeout(() => {
                    gsap.to(this.$refs.scrollDownBlock, {
                      opacity: 1,
                      y: 0,
                      duration: 1,
                      ease: 'power2.out',
                    })
                  }, 1000)
                },
                ease: 'power2.out',
              })
            },
          })
        },
      })
    },
    calculateImagePosition() {
      const img = this.$refs.profileImage
      if (img) {
        const rect = img.getBoundingClientRect()
        this.$mitt.emit('image-position-changed', rect.left)
      }
    },
  },
}
</script>
