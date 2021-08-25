
<template>
  <div>
    <div class="container">
      <br> <br>
      <h2>Example heading <span class="badge bg-secondary">New</span></h2>
              <div>
          <div class="btn btn-info" @click="set">update list (set)</div>
          <div class="btn btn-dark" @click="clear">del buy (clear)</div>
        </div>
      <div class="row my-5">
        <div class="col my-5">
          <div class="card">
            <div class="card-header">CashOut</div>
            <div class="card-body">
              <div class="row">
                <div
                  class="col-xs-1-10 my-2"
                  v-for="start in starts"
                  :key="start.num"
                >
                  <b-button @click="susu(start)" class="btn" :class="[ start.limit === 0 ? '' : 'btn-danger' ]" :disabled="start.limit === 0">{{
                    start.num
                  }}</b-button>
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
              <div class="col" v-for="(list, index) in buys" :key="list.name">
                <div class="card  my-2">
                  <div class="my-2 bg-info card-custom  p-2">
                     <div class="row">
                  <div class="col">  <b-badge variant="primary">ผู้ซื้อ {{ list.name || "-" }}</b-badge>
                  </div>
                  <div class="col">
                    <b-badge variant="primary">เลข {{ list.num }}</b-badge>
               
                  </div>
                  <div class="col">
                       <b-badge variant="primary">{{ list.price}} บาท</b-badge>
                  </div>

                   <!-- <div class="col-1">
                        <b-badge variant="danger" class="btn"  @click="del(index)">x</b-badge>
                  </div> -->
                     
                  </div>
                 </div>
                  </div>
                </div>
              </div>
            </div>
             <div class="card-footer">
              <div v-if="choose">
                 <input placeholder="name" v-model="name" type="text">
               <input placeholder="price" v-model="price" type="number" min=1 :max="price">
               <input v-model="choose" disabled type="text">
               <div class="row my-2">
                 <div class="col">
                   <div @click="cancel" class="btn btn-danger">Cancel</div>
                   <div @click="save" class="btn btn-success">Save</div>
                 </div>
               </div>
              </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>



<script lang="">
import Vue from 'vue'

export default Vue.extend({
  data() {
    const list = [ 
      {id:0,num:"00",limit:100},
      {id:1,num:"01",limit:100},
       {id:2,num:"00",limit:100},
      {id:3,num:"01",limit:100},
       {id:4,num:"00",limit:100},
      {id:5,num:"01",limit:100},  
       {id:6,num:"00",limit:100},
      {id:7,num:"01",limit:100},
       {id:8,num:"00",limit:100},
      {id:9,num:"01",limit:100},
       {id:10,num:"00",limit:100},
      {id:11,num:"01",limit:100},
       {id:12,num:"00",limit:100},
      {id:13,num:"01",limit:100},
       {id:14,num:"00",limit:100},
      {id:15,num:"01",limit:100},
       {id:16,num:"00",limit:100},
      {id:17,num:"01",limit:100},

    ]
 
    const name = ""
    const price = ""
    const choose = ""
    const selectIndex = 0
    return { list, name , price , choose, selectIndex}
  },
  created(){
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
  },
  computed: {
    starts(){
      const x = localStorage.getItem('list')
      return JSON.parse(x)
    },
    buys() {
      const x = localStorage.getItem('buys')
      return JSON.parse(x)
    }
  },
  methods: {
    set(){
      const parsed = JSON.stringify(this.list)
      const setbuys = JSON.stringify([])
      localStorage.setItem("list",parsed)
      localStorage.setItem("buys",setbuys)

      this.$router.go("/");
    },
    clear(){

      const set = JSON.stringify([])
      localStorage.setItem("list",set)
      localStorage.setItem("buys",set)

      this.$router.go("/");
    },

    del(chooseindex){
      // const x = this.starts.findIndex(element=>element.id===this.selectIndex)
      // console.log(x)
      // this.buys= x;
      // const parsed = JSON.stringify(x)
      //     localStorage.setItem("buys",parsed)
    },
    susu(start) {
      this.choose=start.num
      this.price= start.limit
      this.selectIndex = start.id
    },
    cancel() { 
      this.choose=""
      this.price=null
      this.selectIndex=0
    },
    save() {
      const x = this.starts.findIndex(element=>element.id===this.selectIndex)
      const newvalue = this.starts[x].limit - this.price
      if(newvalue>=0) {
          this.buys.push({ name:this.name , num:this.choose, price:this.price })
          // console.log("test",this.starts[x]);
          const parsed = JSON.stringify(this.buys)
          localStorage.setItem("buys",parsed)

          this.starts[x].limit = newvalue;
          const parsedList = JSON.stringify(this.starts)
          localStorage.setItem("list",parsedList)

      }
      this.choose=""
      this.price=null
      this.selectIndex=0
    }
  },
  watch:{
    buys() {
      localStorage.setItem("buys",this.buys)
    }
  }
})
</script>

<style scoped>

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