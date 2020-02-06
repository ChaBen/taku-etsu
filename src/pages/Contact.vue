<template>
  <div id="contactus" class="cd-section">
    <!--     *********    CONTACT US 1     *********      -->
    <div class="contactus-1 section-image" style="background-image: url('img/contact1.jpg')">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <h2 class="title">連絡する</h2>
            <h4 class="description">もっと情報が必要ですか？ 他の人が私たちの製品について言っていることを確認してください。 彼らは購入にとても満足しています。</h4>
            <info-section
              type="primary"
              icon="now-ui-icons location_pin">
              <h4 class="info-title">オフィスで私たちを見つける</h4>
              <p class="description">千葉県八街市八街い77-171</p>
            </info-section>

            <info-section
              type="primary"
              icon="now-ui-icons tech_mobile">
              <h4 class="info-title">指輪をください</h4>
              <p class="description">TEL: 043-312-0202
                <br>FAX: 043-312-0201
              </p>
            </info-section>
          </div>
          <div class="col-md-5 ml-auto mr-auto">
            <card type="contact" raised header-classes="text-center">
              <h4 slot="header" class="card-title">Contact Us</h4>

              <div class="row">
                <div class="col-md-12 pr-2">
                  <label>Name</label>
                  <fg-input
                    placeholder="Name..."
                    addon-left-icon="now-ui-icons users_circle-08"/>
                </div>
              </div>
              <div class="form-group">
                <label>Email address</label>
                <fg-input
                  placeholder="Email Here..."
                  addon-left-icon="now-ui-icons ui-1_email-85"/>
              </div>
              <div class="form-group">
                <label>Your message</label>
                <textarea id="message" name="message" class="form-control" rows="6"/>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <n-checkbox>
                    I'm not a robot
                  </n-checkbox>
                </div>
                <div class="col-md-6">
                  <n-button type="primary" round class="pull-right">Send Message</n-button>
                </div>
              </div>

            </card>
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
</style>
