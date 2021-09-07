<template>
  <div>
    <div class="container">
      
      <br />
      <br />
      <div class="card container cardhead ">
        <h2 class="primary center">
          Cash out v1.00 
        </h2>
      </div>
      <!-- <div>
         <div class="btn btn-info" @click="set">update list (set)</div>
        <div class="btn btn-dark" @click="clear">del buy (clear)</div>
        <div class="float-right btn btn-danger" @click="deletedefual">เคลียร์ข้อมูล (ลบ)</div> 
      </div> -->
      <div class="row my-5">
        <div class="col my-5">
          <div class="card">
            <div class="card-header">CashOut</div>
            <div class="card-body">
              <div class="row">
                <div
                  class="col-xs-1-10 my-2 container"
                  v-for="start in list.set"
                  :key="start.num"
                >
                  <b-button
                    @click="select(start)"
                    class="btn"
                    :class="[
                      start.limit === 0
                        ? 'btn-danger '
                        : start.limit <= 99 && start.limit > 0
                        ? 'btn-warning'
                        : 'btn-success',
                    ]"
                    >{{ start.num }}</b-button
                  >
                </div>
              </div>
            </div>
            <div class="card-footer"></div>
          </div>
        </div>

        <div class="col-sm-12 col-md-4 my-5">
          <div class="card">
            <div class="card-header">Detall</div>
            <div class="card-body">
              <div v-if="selectDetail">
                <div v-if="detail">
                  <div
                    class="card mt-2 container bg- text-white"
                    v-for="data in detail"
                    :key="data.id"
                  >
                    คุณ {{ data.name }} ราคา {{ data.price }} วันที่
                    {{ data.date }}
                  </div>
                </div>
                <br />
                <div class="card bg-light text-dark">
                  หมายเลข {{ selectDetail.num }} <br />
                  ยอดซื้อสูงสุด {{ selectDetail.max }} <br />
                  ยอดที่ยังซื้อได้ {{ selectDetail.limit }} <br />
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div v-if="choose" class="">
                <b-form inline>
                  <b-input-group class="">
                    <b-form-input
                      placeholder="name"
                      v-model="name"
                      type="text"
                      class="mb-2 mr-sm-2"
                      v-on:keyup.enter="save"
                    ></b-form-input>

                    <b-form-input
                      placeholder="price"
                      class="mr-sm-2"
                      v-model="price"
                      v-on:keyup.enter="save"
                      type="number"
                      min="1"
                      :max="price"
                    ></b-form-input>
                  </b-input-group>
                </b-form>
                <div class="float-right">
                  <b-button
                    class="mb-2 mr-sm-2 btn-sm"
                    variant="outline-primary"
                    @click="save"
                    >Confirm</b-button
                  >
                  <b-button
                    variant="outline-danger"
                    class="mb-2 mr-sm-2 btn-sm"
                    @click="cancle"
                    >Cancle</b-button
                  >
                </div>
              </div>
              <br />
              <div
                class="btn pill variant btn-primary container"
                @click="Saves"
              >
                saves (saves) {{ localsaves === null ? 'no save' : '1 saves' }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card text-center">
        <div>
          <b-table striped hover :items="list.buy" :fields="fields">
            <template #cell(index)="data">
              {{ data.index + 1 }}
            </template>
            <template #cell(actions)="data">
              <button
                class="btn btn-danger text-white btn-sm"
                @click="ActionDel(data)"
              >
                Delete
              </button>
            </template>
          </b-table>
        </div>
      </div>
      <br />
      <div class="card">
        <span class="float-right btn btn-danger container" @click="deletedefual">เคลียร์ข้อมูลทั้งหมด (ลบ)</span>
      </div>
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script lang="">
import Vue from 'vue'

export default Vue.extend({
  data() {
    const list = {
      set: [
        { id: 0, num: '00', limit: 100, max: 100, list: [] },
        { id: 1, num: '01', limit: 100, max: 100, list: [] },
        { id: 2, num: '02', limit: 100, max: 100, list: [] },
        { id: 3, num: '03', limit: 100, max: 100, list: [] },
        { id: 4, num: '04', limit: 100, max: 100, list: [] },
        { id: 5, num: '05', limit: 100, max: 100, list: [] },
        { id: 6, num: '06', limit: 100, max: 100, list: [] },
        { id: 7, num: '07', limit: 100, max: 100, list: [] },
        { id: 8, num: '08', limit: 100, max: 100, list: [] },
        { id: 9, num: '09', limit: 100, max: 100, list: [] },
        { id: 10, num: '10', limit: 100, max: 100, list: [] },
        { id: 11, num: '11', limit: 100, max: 100, list: [] },
        { id: 12, num: '12', limit: 100, max: 100, list: [] },
        { id: 13, num: '13', limit: 100, max: 100, list: [] },
        { id: 14, num: '14', limit: 100, max: 100, list: [] },
        { id: 15, num: '15', limit: 100, max: 100, list: [] },
        { id: 16, num: '16', limit: 100, max: 100, list: [] },
        { id: 17, num: '17', limit: 100, max: 100, list: [] },
        { id: 18, num: '18', limit: 100, max: 100, list: [] },
        { id: 19, num: '19', limit: 100, max: 100, list: [] },
        { id: 20, num: '20', limit: 100, max: 100, list: [] },

        { id: 21, num: '21', limit: 100, max: 100, list: [] },
        { id: 22, num: '22', limit: 100, max: 100, list: [] },
        { id: 23, num: '23', limit: 100, max: 100, list: [] },
        { id: 24, num: '24', limit: 100, max: 100, list: [] },
        { id: 25, num: '25', limit: 100, max: 100, list: [] },
        { id: 26, num: '26', limit: 100, max: 100, list: [] },
        { id: 27, num: '27', limit: 100, max: 100, list: [] },
        { id: 28, num: '28', limit: 100, max: 100, list: [] },
        { id: 29, num: '29', limit: 100, max: 100, list: [] },
        { id: 30, num: '30', limit: 100, max: 100, list: [] },
        { id: 31, num: '31', limit: 100, max: 100, list: [] },
        { id: 32, num: '32', limit: 100, max: 100, list: [] },
        { id: 33, num: '33', limit: 100, max: 100, list: [] },
        { id: 34, num: '34', limit: 100, max: 100, list: [] },
        { id: 35, num: '35', limit: 100, max: 100, list: [] },
        { id: 36, num: '36', limit: 100, max: 100, list: [] },
        { id: 37, num: '37', limit: 100, max: 100, list: [] },
        { id: 38, num: '38', limit: 100, max: 100, list: [] },
        { id: 39, num: '39', limit: 100, max: 100, list: [] },
        { id: 40, num: '40', limit: 100, max: 100, list: [] },

        { id: 41, num: '41', limit: 100, max: 100, list: [] },
        { id: 42, num: '42', limit: 100, max: 100, list: [] },
        { id: 43, num: '43', limit: 100, max: 100, list: [] },
        { id: 44, num: '44', limit: 100, max: 100, list: [] },
        { id: 45, num: '45', limit: 100, max: 100, list: [] },
        { id: 46, num: '46', limit: 100, max: 100, list: [] },
        { id: 47, num: '47', limit: 100, max: 100, list: [] },
        { id: 48, num: '48', limit: 100, max: 100, list: [] },
        { id: 49, num: '49', limit: 100, max: 100, list: [] },
        { id: 50, num: '50', limit: 100, max: 100, list: [] },
        { id: 51, num: '51', limit: 100, max: 100, list: [] },
        { id: 52, num: '52', limit: 100, max: 100, list: [] },
        { id: 53, num: '53', limit: 100, max: 100, list: [] },
        { id: 54, num: '54', limit: 100, max: 100, list: [] },
        { id: 55, num: '55', limit: 100, max: 100, list: [] },
        { id: 56, num: '56', limit: 100, max: 100, list: [] },
        { id: 57, num: '57', limit: 100, max: 100, list: [] },
        { id: 58, num: '58', limit: 100, max: 100, list: [] },
        { id: 59, num: '59', limit: 100, max: 100, list: [] },
        { id: 60, num: '60', limit: 100, max: 100, list: [] },

        { id: 61, num: '61', limit: 100, max: 100, list: [] },
        { id: 62, num: '62', limit: 100, max: 100, list: [] },
        { id: 63, num: '63', limit: 100, max: 100, list: [] },
        { id: 64, num: '64', limit: 100, max: 100, list: [] },
        { id: 65, num: '65', limit: 100, max: 100, list: [] },
        { id: 66, num: '66', limit: 100, max: 100, list: [] },
        { id: 67, num: '67', limit: 100, max: 100, list: [] },
        { id: 68, num: '68', limit: 100, max: 100, list: [] },
        { id: 69, num: '69', limit: 100, max: 100, list: [] },
        { id: 70, num: '70', limit: 100, max: 100, list: [] },
        { id: 71, num: '71', limit: 100, max: 100, list: [] },
        { id: 72, num: '72', limit: 100, max: 100, list: [] },
        { id: 73, num: '73', limit: 100, max: 100, list: [] },
        { id: 74, num: '74', limit: 100, max: 100, list: [] },
        { id: 75, num: '75', limit: 100, max: 100, list: [] },
        { id: 76, num: '76', limit: 100, max: 100, list: [] },
        { id: 77, num: '77', limit: 100, max: 100, list: [] },
        { id: 78, num: '78', limit: 100, max: 100, list: [] },
        { id: 79, num: '79', limit: 100, max: 100, list: [] },
        { id: 80, num: '80', limit: 100, max: 100, list: [] },

        { id: 81, num: '81', limit: 100, max: 100, list: [] },
        { id: 82, num: '82', limit: 100, max: 100, list: [] },
        { id: 83, num: '83', limit: 100, max: 100, list: [] },
        { id: 84, num: '84', limit: 100, max: 100, list: [] },
        { id: 85, num: '85', limit: 100, max: 100, list: [] },
        { id: 86, num: '86', limit: 100, max: 100, list: [] },
        { id: 87, num: '87', limit: 100, max: 100, list: [] },
        { id: 88, num: '88', limit: 100, max: 100, list: [] },
        { id: 89, num: '89', limit: 100, max: 100, list: [] },
        { id: 90, num: '90', limit: 100, max: 100, list: [] },
        { id: 91, num: '91', limit: 100, max: 100, list: [] },
        { id: 92, num: '92', limit: 100, max: 100, list: [] },
        { id: 93, num: '93', limit: 100, max: 100, list: [] },
        { id: 94, num: '94', limit: 100, max: 100, list: [] },
        { id: 95, num: '95', limit: 100, max: 100, list: [] },
        { id: 96, num: '96', limit: 100, max: 100, list: [] },
        { id: 97, num: '97', limit: 100, max: 100, list: [] },
        { id: 98, num: '98', limit: 100, max: 100, list: [] },
        { id: 99, num: '99', limit: 100, max: 100, list: [] },
      ],
      buy: [],
    }

    const setclear = {
      set: [
        { id: 0, num: '00', limit: 100, max: 100, list: [] },
        { id: 1, num: '01', limit: 100, max: 100, list: [] },
        { id: 2, num: '02', limit: 100, max: 100, list: [] },
        { id: 3, num: '03', limit: 100, max: 100, list: [] },
        { id: 4, num: '04', limit: 100, max: 100, list: [] },
        { id: 5, num: '05', limit: 100, max: 100, list: [] },
        { id: 6, num: '06', limit: 100, max: 100, list: [] },
        { id: 7, num: '07', limit: 100, max: 100, list: [] },
        { id: 8, num: '08', limit: 100, max: 100, list: [] },
        { id: 9, num: '09', limit: 100, max: 100, list: [] },
        { id: 10, num: '10', limit: 100, max: 100, list: [] },
        { id: 11, num: '11', limit: 100, max: 100, list: [] },
        { id: 12, num: '12', limit: 100, max: 100, list: [] },
        { id: 13, num: '13', limit: 100, max: 100, list: [] },
        { id: 14, num: '14', limit: 100, max: 100, list: [] },
        { id: 15, num: '15', limit: 100, max: 100, list: [] },
        { id: 16, num: '16', limit: 100, max: 100, list: [] },
        { id: 17, num: '17', limit: 100, max: 100, list: [] },
        { id: 18, num: '18', limit: 100, max: 100, list: [] },
        { id: 19, num: '19', limit: 100, max: 100, list: [] },
        { id: 20, num: '20', limit: 100, max: 100, list: [] },

        { id: 21, num: '21', limit: 100, max: 100, list: [] },
        { id: 22, num: '22', limit: 100, max: 100, list: [] },
        { id: 23, num: '23', limit: 100, max: 100, list: [] },
        { id: 24, num: '24', limit: 100, max: 100, list: [] },
        { id: 25, num: '25', limit: 100, max: 100, list: [] },
        { id: 26, num: '26', limit: 100, max: 100, list: [] },
        { id: 27, num: '27', limit: 100, max: 100, list: [] },
        { id: 28, num: '28', limit: 100, max: 100, list: [] },
        { id: 29, num: '29', limit: 100, max: 100, list: [] },
        { id: 30, num: '30', limit: 100, max: 100, list: [] },
        { id: 31, num: '31', limit: 100, max: 100, list: [] },
        { id: 32, num: '32', limit: 100, max: 100, list: [] },
        { id: 33, num: '33', limit: 100, max: 100, list: [] },
        { id: 34, num: '34', limit: 100, max: 100, list: [] },
        { id: 35, num: '35', limit: 100, max: 100, list: [] },
        { id: 36, num: '36', limit: 100, max: 100, list: [] },
        { id: 37, num: '37', limit: 100, max: 100, list: [] },
        { id: 38, num: '38', limit: 100, max: 100, list: [] },
        { id: 39, num: '39', limit: 100, max: 100, list: [] },
        { id: 40, num: '40', limit: 100, max: 100, list: [] },

        { id: 41, num: '41', limit: 100, max: 100, list: [] },
        { id: 42, num: '42', limit: 100, max: 100, list: [] },
        { id: 43, num: '43', limit: 100, max: 100, list: [] },
        { id: 44, num: '44', limit: 100, max: 100, list: [] },
        { id: 45, num: '45', limit: 100, max: 100, list: [] },
        { id: 46, num: '46', limit: 100, max: 100, list: [] },
        { id: 47, num: '47', limit: 100, max: 100, list: [] },
        { id: 48, num: '48', limit: 100, max: 100, list: [] },
        { id: 49, num: '49', limit: 100, max: 100, list: [] },
        { id: 50, num: '50', limit: 100, max: 100, list: [] },
        { id: 51, num: '51', limit: 100, max: 100, list: [] },
        { id: 52, num: '52', limit: 100, max: 100, list: [] },
        { id: 53, num: '53', limit: 100, max: 100, list: [] },
        { id: 54, num: '54', limit: 100, max: 100, list: [] },
        { id: 55, num: '55', limit: 100, max: 100, list: [] },
        { id: 56, num: '56', limit: 100, max: 100, list: [] },
        { id: 57, num: '57', limit: 100, max: 100, list: [] },
        { id: 58, num: '58', limit: 100, max: 100, list: [] },
        { id: 59, num: '59', limit: 100, max: 100, list: [] },
        { id: 60, num: '60', limit: 100, max: 100, list: [] },

        { id: 61, num: '61', limit: 100, max: 100, list: [] },
        { id: 62, num: '62', limit: 100, max: 100, list: [] },
        { id: 63, num: '63', limit: 100, max: 100, list: [] },
        { id: 64, num: '64', limit: 100, max: 100, list: [] },
        { id: 65, num: '65', limit: 100, max: 100, list: [] },
        { id: 66, num: '66', limit: 100, max: 100, list: [] },
        { id: 67, num: '67', limit: 100, max: 100, list: [] },
        { id: 68, num: '68', limit: 100, max: 100, list: [] },
        { id: 69, num: '69', limit: 100, max: 100, list: [] },
        { id: 70, num: '70', limit: 100, max: 100, list: [] },
        { id: 71, num: '71', limit: 100, max: 100, list: [] },
        { id: 72, num: '72', limit: 100, max: 100, list: [] },
        { id: 73, num: '73', limit: 100, max: 100, list: [] },
        { id: 74, num: '74', limit: 100, max: 100, list: [] },
        { id: 75, num: '75', limit: 100, max: 100, list: [] },
        { id: 76, num: '76', limit: 100, max: 100, list: [] },
        { id: 77, num: '77', limit: 100, max: 100, list: [] },
        { id: 78, num: '78', limit: 100, max: 100, list: [] },
        { id: 79, num: '79', limit: 100, max: 100, list: [] },
        { id: 80, num: '80', limit: 100, max: 100, list: [] },

        { id: 81, num: '81', limit: 100, max: 100, list: [] },
        { id: 82, num: '82', limit: 100, max: 100, list: [] },
        { id: 83, num: '83', limit: 100, max: 100, list: [] },
        { id: 84, num: '84', limit: 100, max: 100, list: [] },
        { id: 85, num: '85', limit: 100, max: 100, list: [] },
        { id: 86, num: '86', limit: 100, max: 100, list: [] },
        { id: 87, num: '87', limit: 100, max: 100, list: [] },
        { id: 88, num: '88', limit: 100, max: 100, list: [] },
        { id: 89, num: '89', limit: 100, max: 100, list: [] },
        { id: 90, num: '90', limit: 100, max: 100, list: [] },
        { id: 91, num: '91', limit: 100, max: 100, list: [] },
        { id: 92, num: '92', limit: 100, max: 100, list: [] },
        { id: 93, num: '93', limit: 100, max: 100, list: [] },
        { id: 94, num: '94', limit: 100, max: 100, list: [] },
        { id: 95, num: '95', limit: 100, max: 100, list: [] },
        { id: 96, num: '96', limit: 100, max: 100, list: [] },
        { id: 97, num: '97', limit: 100, max: 100, list: [] },
        { id: 98, num: '98', limit: 100, max: 100, list: [] },
        { id: 99, num: '99', limit: 100, max: 100, list: [] },
      ],
      buy: [],
    }

    const name = ''
    const price = null
    const choose = ''
    const selectIndex = 0
    const selectDetail = null
    const fields = [
      { key: 'index', label: 'บิล' ,sortable: true },
      // { key: 'id', sortable: true },
      { key: 'name', label: 'ชื่อผู้ซื้อ', sortable: true },
      { key: 'buy', label: 'เลข',sortable: true },
      { key: 'price',label: 'ราคา', sortable: true },
      { key: 'date',label: 'วันที่ซื้อ', sortable: true },
      { key: 'time',label: 'เวลา', sortable: true },
      { key: 'actions' },
    ]
    const localsaves = null
    return {
      list,
      name,
      price,
      choose,
      selectIndex,
      selectDetail,
      fields,
      localsaves,
      setclear,
    }
  },
  created() {
    this.set()
    // if(localStorage.getItem('list')) {
    //   try {
    //     const x = JSON.parsed(localStorage.getItem('list'))
    //     console.log(x)
    //   } catch {
    //      const parsed = JSON.stringify(this.list)
    //      localStorage.setItem("list",parsed)
    //      const x = localStorage.getItem('list')
    //      console.log(x)
    //   }
    // }
    // if(localStorage.getItem('buys')) {
    //   try {
    //     const x = JSON.parsed(localStorage.getItem('buys'))
    //     console.log(x)
    //   } catch {
    //      const  set = []
    //      const parsed = JSON.stringify(set)
    //      localStorage.setItem("buys",parsed)
    //      const x = localStorage.getItem('buys')
    //      console.log(x)
    //   }
    // }

    const x = localStorage.getItem('saves')
    this.localsaves = x
  },
  computed: {
    // starts() {
    //   const x = localStorage.getItem('list')
    //   return JSON.parse(x)
    // },
    // buys() {
    //   const x = localStorage.getItem('buys')
    //   return JSON.parse(x)
    // },
    detail() {
      return this.list.buy.filter((element) => element.id === this.choose.id)
    },
  },
  methods: {
    set() {
      // const parsed = JSON.stringify(this.list)
      // const setbuys = JSON.stringify([])
      // localStorage.setItem('list', parsed)
      // localStorage.setItem('buys', setbuys)
      const x = localStorage.getItem('saves')
      const set = JSON.parse(x)
      console.log(JSON.parse(x))
      console.log(this.list)

      if (set) {
        if (set.length === 0) {
          this.list = this.setclear
        } else {
          this.list = set
        }
      } else {
        this.list = this.setclear
      }
    },
    Saves() {
      // const parsed = JSON.stringify(this.list)
      // localStorage.setItem('saves', parsed)
      // const x = localStorage.getItem('saves')
      // this.list = JSON.parse(x)
      // this.setseve()

      // this.$router.go('/')
      this.$swal
        .fire({
          position: 'center',
          type: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500,
        })
        .then(() => {
          const parsed = JSON.stringify(this.list)
          localStorage.setItem('saves', parsed)
          const x = localStorage.getItem('saves')
          this.list = JSON.parse(x)
          this.setseve()
        })
    },
    clear() {
      // const set = JSON.stringify([])
      // localStorage.setItem('list', set)
      // localStorage.setItem('buys', set)
      // localStorage.setItem('saves', set)
      // const x = localStorage.getItem('saves')
      // this.list = JSON.parse(x)
      this.list = this.setclear
      this.setseve()
      this.$router.go('/')
    },

    setseve() {
      const x = localStorage.getItem('saves')
      if (x) {
        if (x.length === 0) {
          this.localsaves = null
        } else {
          this.localsaves = x
        }
      } else {
        this.localsaves = null
      }
    },

    deletedefual() {
      // const set = JSON.stringify([])
      // localStorage.setItem('saves', set)

      this.$swal
        .fire({
          title: 'มั่นใจหรือที่จะลบข้อมูล?',
          text: "ข้อมูลจะถูกเคลียร์ทั้งหมด",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
        })
        .then((result) => {
          if (result.value) {
            this.$swal
            .fire('ลบสำเร็จ!', 'ข้อมูลทั้งหมดถูกลบ.', 'success')
              .then(() => {
                localStorage.removeItem('saves')
                this.list = this.setclear
                this.setseve()
                this.$router.go('/')
              })
          } else {
            console.log('test')
          }
        })

      // localStorage.removeItem('saves')
      // this.list = this.setclear
      // this.setseve()
      // this.$router.go('/')
    },

    ActionDel(data) {
      // var filtered = this.list.buy.filter((element, index) => {
      //   return index !== data.index
      // })
      // var newfiltered = this.list.set.filter((element, index) => {
      //   return element.id === data.item.id
      // })
      // console.log(data.item)

      // var newvalue = newfiltered[0].limit + parseInt(data.item.price, 10)
      // // console.log(newvalue)
      // this.list.set[newfiltered[0].id].limit = newvalue
      // this.list.buy = filtered
      this.$swal
        .fire({
          title: 'แน่ใจนะที่จะลบ',
          text: `บิลเลขที่ ${data.index+1}`,
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
        })
        .then((result) => {
          if (result.value) {
            this.$swal
              .fire('ลบสำเร็จ!', 'บิลที่คุณเลือกถูกลบเรียบร้อยเเล้ว', 'success')
              .then(() => {
                var filtered = this.list.buy.filter((element, index) => {
                  return index !== data.index
                })
                var newfiltered = this.list.set.filter((element, index) => {
                  return element.id === data.item.id
                })
                console.log(data.item)

                var newvalue =
                  newfiltered[0].limit + parseInt(data.item.price, 10)
                // console.log(newvalue)
                this.list.set[newfiltered[0].id].limit = newvalue
                this.list.buy = filtered
              })
          } else {
            console.log('test')
          }
        })
    },
    del(chooseindex) {
      // const x = this.starts.findIndex(element=>element.id===this.selectIndex)
      // console.log(x)
      // this.buys= x;
      // const parsed = JSON.stringify(x)
      //     localStorage.setItem("buys",parsed)
    },
    select(start) {
      this.choose = start
      this.price = start.limit
      this.selectIndex = start.id
      this.selectDetail = start
    },
    cancle() {
      this.choose = ''
      this.price = null
      this.selectIndex = 0
    },
    save() {
      // this.choose

      // const x = this.list.set.findIndex(
      //   (element) => element.id === this.selectIndex
      // )
      const newvalue = this.list.set[this.choose.id].limit - this.price
      if (newvalue >= 0 && this.price > 0) {
        var d = new Date()
        this.list.set[this.choose.id].limit = newvalue
        this.list.buy.push({
          id: this.choose.id,
          buy: this.choose.num,
          name: this.name || '-',
          price: this.price,
          date: d.toLocaleDateString(),
          time: d.toLocaleTimeString(),
        })
        // console.log("test",this.starts[x]);
        // const parsed = JSON.stringify(this.buys)
        // localStorage.setItem('buys', parsed)
        // this.starts[x].limit = newvalue
        // const parsedList = JSON.stringify(this.starts)
        // localStorage.setItem('list', parsedList)
      }
      // this.choose = ''
      this.price = null
      this.selectIndex = 0
    },
  },
  // watch: {
  //   buys() {
  //     localStorage.setItem('buys', this.buys)
  //   },
  // },
})
</script>

<style scoped>
* {
  color: black !important;
}
.card-custom {
}
.col-xs-1-10,
.col-sm-1-10 {
  position: relative;
  min-height: 1px;
}

.col-xs-1-10 {
  width: 10%;
  float: left;
}

.text-light {
  color: aliceblue;
}

.cardhead{
  background: burlywood;
  
}
h2 {
  font-family: 'Oswald', sans-serif;
  font-size: 46px;  
  text-shadow: 2px 2px 5px red;
  background: burlywood;
  text-align: center;
}

@media (min-width: 768px) {
  .col-sm-1-10 {
    width: 10%;
    float: left;
  }
}

@media (min-width: 992px) {
  .col-md-1-10 {
    width: 10%;
    float: left;
  }
}

@media (min-width: 1200px) {
  .col-lg-1-10 {
    width: 10%;
    float: left;
  }
}
</style>
