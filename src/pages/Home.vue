<template>
  <div class="wrapper">
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/main.jpeg')"/>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto">
            <h1 class="title">廃フレコンバックお持ちの方ご相談ください</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="section" style="padding: 0;">
      <div class="projects-3" data-background-color="black">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center">
              <h2 class="title">廃フレコン</h2>
              <ul class="card-list">
                <li>1. 様々の種類のフレコンが混在している</li>
                <li>2. つり用の太いヒモが一部ついている</li>
                <li>3. 内袋が一部はいっている</li>
                <li>4. ゴミ、残留物が微量に入って いる</li>
                <li>5. 異臭がないこと</li>
                <li>6. 目立つ汚れがないこと</li>
              </ul>
            </div>
          </div>
          <div class="section-story-overview">
            <div class="row">
              <div class="col-md-6">
                <div
                  class="image-container image-left"
                  style="background-image: url('img/work1.jpeg')" />
                <h4 class="card-title category text-primary">廃フレコン Aランク</h4>
              </div>
              <div class="col-md-6">
                <!-- First image on the right side, above the article -->
                <div
                  class="image-container image-right"
                  style="background-image: url('img/work2.jpeg')"/>
                <h4 class="card-title category text-primary">廃フレコンBランク</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="team-2">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <card type="profile" plain>
                <img
                  slot="image"
                  class="img img-raised rounded"
                  src="img/material1.jpg">

                <h4 class="card-title">フレコン再生ペレット(黒)</h4>
              </card>
            </div>
            <div class="col-md-6">
              <card type="profile" plain>
                <img
                  slot="image"
                  class="img img-raised rounded"
                  src="img/material2.jpg">

                <h4 class="card-title">フレコン再生ペレット（雑色)</h4>
              </card>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <card type="profile" plain>
                <img
                  slot="image"
                  class="img img-raised rounded"
                  src="img/work3.jpeg">

                <h4 class="card-title">フィルムペレット LDPE（N）</h4>
              </card>
            </div>
            <div class="col-md-4">
              <card type="profile" plain>
                <img
                  slot="image"
                  class="img img-raised rounded"
                  src="img/work4.jpeg">

                <h4 class="card-title">キャップペレット（N）</h4>
              </card>
            </div>
            <div class="col-md-4">
              <card type="profile" plain>
                <img
                  slot="image"
                  class="img img-raised rounded"
                  src="img/work5.jpeg">

                <h4 class="card-title">フィルムペレットHDPE（N）</h4>
              </card>
            </div>
          </div>
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
.team-2 {
  padding-top: 0 !important;
}
h2.title {
  margin-bottom: 40px !important;
}
.card-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 20px 0 0 20px;
  padding: 0;
  font-size: 1.2em;
}
.card-list > li {
  width: 50%;
  text-align: left;
}
</style>
