<template>
  <div class="wrapper">
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg32.jpg')"/>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto">
            <h1 class="title">私たちに関しては</h1>
            <h4>このプロジェクトの背後にある素晴らしいチームに会って、私たちの仕事の詳細をご覧ください。</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="projects-5">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center">
              <h2 class="title">ご挨拶</h2>
              <h4 class="description">プラスチック再生原料製造販売を開始しました
              20世紀,人類は自然の資源を利用して大量に物をつくり,
              これに伴って大量の廃棄物を生み出しました,21世紀は,
              この廃棄物を巡り返し利用して物を作ることを推進し資源循環型の
              社会へと変えていくことが必要不可欠となっております
              </h4>
              <div class="section-space"/>
            </div>
          </div>
          <div class="row">
            <div class="col-md-5 ml-auto">
              <card
                type="background"
                raised
                class="card-background-product"
                style="background-image: url('img/project8.jpg')">
                <h2 class="card-title">企業理念</h2>
                <p class="card-description">プラスチックに関わる全ての分野において
                常にグロバールな視点で
                高品質な商品,適切な技術
                必要とされる情報を,広く社会に提供し,
                社員と企業の成長と共に
                豊かな社会を実現するために貢献し続けます
                </p>
                <h2 class="card-title">経営理念</h2>
                <p class="card-description">小さくて強い会社</p>
              </card>
            </div>
            <div class="col-md-5 mr-auto">
              <info-section
                type="danger"
                icon="fal fa-user-tie"
                title="代表取締役"
                description="張 献"
              />

              <info-section
                type="danger"
                icon="fal fa-trademark"
                title="商号"
                description="タクエツ株式会社"
              />

              <info-section
                type="danger"
                icon="fal fa-building"
                title="本社"
                description="東京都新宿区西早稲田3-31-11ニュウーライフ西早稲田5階"
              />

              <info-section
                type="danger"
                icon="fal fa-warehouse"
                title="設立"
                description="平成27年2月17日"
              />

              <info-section
                type="danger"
                icon="fal fa-map-marker-alt"
                title="事業拠点"
                description="第一リサイクルセンター〒289-1143 千葉県八街市八街い77-171"
              />

              <info-section
                type="danger"
                icon="fal fa-funnel-dollar"
                title="資本金"
                description="500万円"
              />

              <info-section
                type="danger"
                icon="fal fa-university"
                title="取引銀行"
                description="三菱UFJ銀行, 巣鴨銀行, 大和銀行"
              />

              <info-section
                type="danger"
                icon="fal fa-handshake"
                title="加盟団体"
                description="八街商工会議所"
              />

              <info-section
                type="danger"
                icon="fal fa-receipt"
                title="事業内容"
                description="プラスチックリサイクル 国際貿易"
              />
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
.projects-5 {
  padding-top: 0 !important;
}
</style>
