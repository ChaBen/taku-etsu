<template>
  <div id="contactus" class="cd-section">
    <!--     *********    CONTACT US 1     *********      -->
    <div class="contactus-1 section-image" style="background-image: url('img/contact1.jpg')">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <h2 class="title">連絡する</h2>
            <h4 class="description">廃フレコンで困ってるお客様まずはお電話で問い合わせくださいませ。</h4>
            <info-section
              type="primary"
              icon="now-ui-icons location_pin">
              <h4 class="info-title">第一リサイクルセンター</h4>
              <p class="description">千葉県八街市八街い77-171</p>
            </info-section>

            <info-section
              type="primary"
              icon="now-ui-icons tech_mobile">
              <h4 class="info-title">お問い合わせ</h4>
              <div class="description">TEL: <h2 class="phone">043-312-0202</h2>
                <br>FAX: <h2 class="phone">043-312-0201</h2>
              </div>
            </info-section>
          </div>
        </div>
      </div>
    </div>
    <!--     *********    END CONTACT US 1      *********      -->
    <!--     *********    CONTACT US 2     *********      -->
    <div class="contactus-2">
      <gmap-map
        id="map"
        :center="center"
        :zoom="16"
        :options="options"
        class="map"
        map-type-id="terrain">
        <gmap-marker :position="center"/>
      </gmap-map>
    </div>
    <!--     *********    END CONTACT US 2      *********      -->
  </div>
</template>
<script>
import { Card, Button, InfoSection, FormGroupInput, Checkbox } from '@/components'
import { Carousel, CarouselItem } from 'element-ui'
import { API_KEY } from '@/constants'
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: API_KEY
  }
})
export default {
  components: {
    Card,
    InfoSection,
    [Button.name]: Button,
    [Checkbox.name]: Checkbox,
    [FormGroupInput.name]: FormGroupInput,
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem
  },
  data() {
    return {
      center: {
        lat: 35.6525361,
        lng: 140.2709573
      },
      options: {
      }
    }
  }
}
</script>
<style>
.contactus-2 {
  height: 600px;
}
.phone {
  display: inline-block;
  font-weight: 700;
  margin-bottom: 10px;
}
</style>
