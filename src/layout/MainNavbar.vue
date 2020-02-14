<template>
  <div class="header-3">
    <nav class="navbar navbar-expand-lg navbar-transparent bg-primary navbar-absolute">
      <div class="container">
        <div class="navbar-translate">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#example-navbar-primary"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-bar bar1"/>
            <span class="navbar-toggler-bar bar2"/>
            <span class="navbar-toggler-bar bar3"/>
          </button>
          <router-link class="navbar-brand" to="/">Takuetsu</router-link>
        </div>
        <div id="example-navbar-primary" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="about" exact>企業情報</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="works" exact>設備</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="contact" exact>私たちに連絡する</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { FormGroupInput, Button } from '@/components'
import { Carousel, CarouselItem } from 'element-ui'
export default {
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem
  }
}
</script>
