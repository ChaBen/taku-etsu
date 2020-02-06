<template>
  <div class="wrapper">
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg24.jpg')"/>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto">
            <h1 class="title">廃フレコンバックお持ちの方ご相談ください</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="section">

      <div class="team-2">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center">
              <h2 class="title">The Executive Team 2</h2>
              <h4 class="description">This is the paragraph where you can write more details about your team.
              Keep you user engaged by providing meaningful information.</h4>
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
                <h6 class="category">Account Manager</h6>
              </card>
            </div>
            <div class="col-md-4">
              <card type="profile" plain>
                <img
                  slot="image"
                  class="img img-raised rounded"
                  src="img/work4.jpeg">

                <h4 class="card-title">フィルムペレットHDPE （N）</h4>
                <h6 class="category">Aerospace Engineer</h6>
              </card>
            </div>
            <div class="col-md-4">
              <card type="profile" plain>
                <img
                  slot="image"
                  class="img img-raised rounded"
                  src="img/work5.jpeg">

                <h4 class="card-title">キャップペレット（N）</h4>
                <h6 class="category">Photographer</h6>
              </card>
            </div>
          </div>
        </div>
      </div>

      <div class="projects-3" data-background-color="black">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center">
              <h6 class="category text-muted">Our work</h6>
              <h2 class="title">Some of Our Awesome Projects - 3</h2>
            </div>
          </div>
          <div class="section-story-overview">
            <div class="row">
              <div class="col-md-6">
                <div
                  class="image-container image-left"
                  style="background-image: url('img/work1.jpeg')" />
                <h6 class="category text-primary">Design</h6>
                <h4 class="card-title">廃フレコン Aランク</h4>
                <p>
                  Amber Lewis’s interior design blog takes you inside the creative workings of her Los
                  Angeles–based studio. Keep an eye on this website for an industry insider’s point of
                  view.
                </p>
              </div>
              <div class="col-md-5">
                <!-- First image on the right side, above the article -->
                <div
                  class="image-container image-right"
                  style="background-image: url('img/work2.jpeg')"/>
                <h6 class="category text-primary">Design</h6>
                <h4 class="card-title">LDPE 低密度ポリエチレン</h4>
                <p>
                  Amber Lewis’s interior design blog takes you inside the creative workings of her Los
                  Angeles–based studio. Keep an eye on this website for an industry insider’s point of
                  view.
                </p>
              </div>
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
</style>
