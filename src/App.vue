<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

  <div class="card">
    <div class="card-back">
      <div class="line-numbers">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div><code><span class="variable">this</span><span>.</span><span class="function">aboutMe </span><span class="operator">= </span><span>{</span>
      <div class="indent"> <span class="property">name</span><span class="operator">: </span><span class="string">'Евгений Старцев'</span><span>,</span></div>
      <div class="indent"> <span class="property">title</span><span class="operator">: </span><span class="string">'Middle backend/fronend developer'</span><span>,</span></div>
      <div class="indent"> <span class="property">contact</span><span class="operator">: </span><span>{</span>
        <div class="indent"> <span class="property">email</span><span class="operator">: </span><span class="string">'e@starcev.pro'</span><span>,</span></div>
        <div class="indent"><span class="property">website</span><span class="operator">:</span><span class="string">'starcev.pro'</span></div><span>}</span>
      </div><span>}</span></code>
    </div>
    <div class="card-front">
      <div class="line-numbers">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
      <code>
        <span class="variable">this</span><span>.</span><span class="property">name </span><span>= </span><span class="string">'Евгений Старцев'</span><span>;</span>
      </code>
    </div>
  </div>
<!--  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />-->
</template>

<style scoped lang="scss">

@use 'sass:color';

@use './assets/variables';
@use './assets/colors';

.card {
  position: relative;
  width: 30rem;
  height: 15rem;
  perspective: 150rem;
  &-front,
  &-back {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    border-radius: 5px;
    box-shadow: 0 1.5rem 4rem rgba(black, 0.4);
    transition: 0.9s cubic-bezier(.25,.8,.25,1);
    //transform-origin: left center;
    backface-visibility: hidden;
    overflow: hidden;
    &:before,
    &:after {
      position: absolute;
    }
    &:before {
      top: -40px;
      right: -40px;
      content: '';
      width: 80px;
      height: 80px;
      background-color: rgba(white,0.08);
      transform: rotate(45deg);
      z-index: 1;
    }
    &:after {
      content: '+';
      top: 0;
      right: 10px;
      font-size: 24px;
      transform: rotate(45deg);
      z-index: 2;
    }
  }
  &-front {
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, colors.$black-dark, colors.$black-light);
    &:after {
      color: color.adjust(colors.$black-light, $lightness: -15%);
    }
  }
  &-back {
    background: linear-gradient(-45deg, colors.$black-dark, colors.$black-light);
    transform: rotateX(180deg);
    &:after {
      color: color.adjust(colors.$black-light, $lightness: -15%);
    }
  }


  &:hover &-front {
    transform: rotateX(-180deg);
  }
  &:hover &-back {
    transform: rotateX(0deg);
    //z-index: 2 !important;
  }
  .line-numbers {
    @extend code;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //width: 20px;
    height: 100%;
    margin: 0;
    padding: 0 10px;
    background-color: rgba(white,0.03);
    font-size: 13px;
    //line-height: 2.15;
    > div {
      padding: 2.5px 0;
      opacity: 0.15;
    }
  }
  code {
    color: colors.$white;
  }
  .indent {
    padding-left: 30px;
  }
  .operator {
    color: colors.$cyan;
  }
  .string {
    color: colors.$green;
  }
  .variable {
    color: colors.$purple;
  }
  .property {
    color: colors.$red;
  }
  .method {
    color: colors.$blue;
  }
  .function {
    color: colors.$yellow;
  }
  .boolean {
    color: colors.$cyan;
  }
}


</style>
