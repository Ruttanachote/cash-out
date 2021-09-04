<template>
  <div>
    <div class="container">
      <br />
      <br />
      <h2>Cash out v1.00 <span class="badge bg-secondary">New</span></h2>
      <div>
        <div class="btn btn-info" @click="set">update list (set)</div>
        <div class="btn btn-dark" @click="clear">del buy (clear)</div>
        <div class="btn btn-dark" @click="Saves">
          saves (saves) {{ localsaves === null ? 'no save' : '1 saves' }}
        </div>
        <!-- <b-dropdown id="dropdown-1" text="Dowload" class="m-md-2">
          <div v-for="localsave in localsaves" :key="localsave">
            <b-dropdown-item>First Action</b-dropdown-item>
          </div>
        </b-dropdown> -->
      </div>
      <div class="row my-5">
        <div class="col my-5">
          <div class="card">
            <div class="card-header">CashOut</div>
            <div class="card-body">
              <div class="row">
                <div
                  class="col-xs-1-10 my-2"
                  v-for="start in list.set"
                  :key="start.num"
                >
                  <b-button
                    @click="select(start)"
                    class="btn"
                    :class="[start.limit === 0 ? '' : 'btn-danger']"
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
                <div class="card">
                  หมายเลข {{ selectDetail.num }} <br />
                  ยอดซื้อสูงสุด {{ selectDetail.max }} <br />
                  ยอดที่ยังซื้อได้ {{ selectDetail.limit }} <br />
                </div>
                <div v-if="detail">
                  <div class="card mt-1" v-for="data in detail" :key="data">
                    คุณ {{ data.name }} ราคา {{ data.price }} วันที่ {{ data.date }}
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div v-if="choose" class="">
                <b-form inline>
                  <b-input-group class="">
                    <b-form-input
                      placeholder="name"
                      class="mb-2 mr-sm-2"
                    ></b-form-input>
                    <b-form-input
                      placeholder="price"
                      class="mr-sm-2"
                      v-model="price"
                      type="number"
                      min="1"
                      :max="price"
                    ></b-form-input>
                    <b-button
                      class="mb-2 mr-sm-2 btn-sm"
                      variant="primary"
                      @click="save"
                      >Save</b-button
                    >
                    <b-button
                      variant="danger"
                      class="mb-2 btn-sm"
                      @click="cancle"
                      >Cancle</b-button
                    >
                  </b-input-group>
                </b-form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div>
          <b-table striped hover :items="list.buy" :fields="fields">
            <template #cell(index)="data">
              {{ data.index }}
            </template>
            <template #cell(actions)="data">
              <button
                class="btn btn-danger text-white btn-sm"
                @click="ActionDel(data)"
              >
                delete
              </button>
            </template>
          </b-table>
        </div>
      </div>
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
      ],
      buy: [],
    }

    const name = ''
    const price = null
    const choose = ''
    const selectIndex = 0
    const selectDetail = null
    const fields = [
      { key: 'index' },
      { key: 'id' },
      { key: 'name' },
      { key: 'buy' },
      { key: 'price' },
      { key: 'date' },
      { key: 'time' },
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
      this.list = JSON.parse(x)
      // this.$router.go('/')
    },
    Saves() {
      const parsed = JSON.stringify(this.list)
      localStorage.setItem('saves', parsed)
      const x = localStorage.getItem('saves')
      this.list = JSON.parse(x)
      this.setseve()
      // this.$router.go('/')
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
      this.localsaves = x
    },
    ActionDel(data) {
      var filtered = this.list.buy.filter((element, index) => {
        return index !== data.index
      })
      var newfiltered = this.list.set.filter((element, index) => {
        return element.id === data.item.id
      })
      console.log(data.item)

      var newvalue = newfiltered[0].limit + parseInt(data.item.price, 10)
      // console.log(newvalue)
      this.list.set[newfiltered[0].id].limit = newvalue
      this.list.buy = filtered
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
      if (newvalue >= 0) {
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
