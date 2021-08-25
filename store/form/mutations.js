export default {
    save(state, data) {
       state.buys.push(data)
       const x = state.list.findIndex(element=>element.id === data.selectIndex)
    //    console.log("test",data.selectIndex);
 
 
       const newvalue =  state.list[x].limit - this.price
       state.list[x].limit = newvalue;
     
    }
}