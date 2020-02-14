<template>
  <div class="wrapper">
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg24.jpg')"/>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto">
            <h1 class="title">設備</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="title">
          <h2>粉砕洗浄ライン</h2>
        </div>
        <!--     *********    PLAIN BLOG CARDS      *********      -->
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <card type="blog" plain>
              <img slot="image" class="img rounded img-raised" src="img/machine1.jpeg">
              <div class="card-body" style="padding: 0;">
                <h3 class="card-title" style="margin: 0;">
                  <a href="#nuk">粉砕機</a>
                </h3>
              </div>
            </card>
          </div>
          <div class="col-md-6 col-lg-4">
            <card type="blog" plain>
              <img slot="image" class="img rounded img-raised" src="img/machine2.jpeg">
              <div class="card-body" style="padding: 0;">
                <h3 class="card-title" style="margin: 0;">
                  <a href="#nuk">スクーリュ</a>
                </h3>
              </div>
            </card>
          </div>
          <div class="col-md-6 col-lg-4">
            <card type="blog" plain>
              <img slot="image" class="img rounded img-raised" src="img/machine3.jpeg">
              <div class="card-body" style="padding: 0;">
                <h3 class="card-title" style="margin: 0;">
                  <a href="#nuk">10m水槽Uタン式</a>
                </h3>
              </div>
            </card>
          </div>
          <div class="col-md-6 col-lg-4">
            <card type="blog" plain>
              <img slot="image" class="img rounded img-raised" src="img/machine4.jpeg">
              <div class="card-body" style="padding: 0;">
                <h3 class="card-title" style="margin: 0;">
                  <a href="#nuk">高速摩擦洗浄機</a>
                </h3>
              </div>
            </card>
          </div>
          <div class="col-md-6 col-lg-4">
            <card type="blog" plain>
              <img slot="image" class="img rounded img-raised" src="img/machine5.jpeg">
              <div class="card-body" style="padding: 0;">
                <h3 class="card-title" style="margin: 0;">
                  <a href="#nuk">8m水槽</a>
                </h3>
              </div>
            </card>
          </div>
        </div>

        <div class="title">
          <h2>押出機1号機</h2>
          <img slot="image" class="img rounded img-raised" src="img/jixie1.jpeg">
        </div>
        <div class="title" style="margin-top: 20px;">
          <h2>押出機2号機</h2>
          <img slot="image" class="img rounded img-raised" src="img/jixie2.jpeg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Card, Button, Badge, InfoSection, FormGroupInput, Checkbox } from '@/components'
import { Select, Option } from 'element-ui'

export default {
  name: 'AboutUs',
  bodyClass: 'about-us',
  components: {
    Card,
    InfoSection,
    Badge,
    [Button.name]: Button,
    [Checkbox.name]: Checkbox,
    [FormGroupInput.name]: FormGroupInput,
    [Select.name]: Select,
    [Option.name]: Option
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        speciality: ''
      }
    }
  }
}
</script>
<style>
</style>
