import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    va: [],
    items:[
        {id:1,itmnm:"Chapati",discrip1:"Order Chapati Now",hotelnm:"Hotel Digikull",price:15,img:"https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0NDI3OTkxNjMwMjkyMzI4/cook-a-chapati.jpg"},
        {id:2,itmnm:"Pickle",discrip1:"Order Pickl Now",hotelnm:"Hotel Digikull",price:10,img:"https://www.archanaskitchen.com/images/archanaskitchen/1-Author/poonampagar-gmail.com/amla-achaar-recipe-hot-sweet-indian-gooseberry-pickle.jpg"},
        {id:3,itmnm:"Curd",discrip1:"Order Curd Now",hotelnm:"Hotel Digikull",price:20,img:"https://image.shutterstock.com/image-photo/fresh-curd-traditional-pot-on-260nw-1890391174.jpg"},
        {id:4,itmnm:"Sweet",discrip1:"Order Sweet Now",hotelnm:"Hotel Digikull",price:30,img:"https://thumbs.dreamstime.com/z/indian-sweets-13868613.jpg"},
        {id:5,itmnm:"Daal",discrip1:"Order Daal Now",hotelnm:"Hotel Digikull",price:25,img:"https://cdn.xxl.thumbs.canstockphoto.com/daal-curry-traditional-indian-food-made-of-yellow-lentil-with-spices-and-herbs-close-up-in-a-bowl-stock-images_csp61511253.jpg"},
        {id:6,itmnm:"Paneer Dish",discrip1:"Order Paneer Dish Now",hotelnm:"Hotel Digikull",price:100,img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-butter-masala-recipe-2.jpg"}  
    ],
    
}

const thaliSlice = createSlice({
    name:"thalislice",
    initialState,

    reducers:{
        add: (state,action)=>{
            state.va.push(action.payload);
        },
        remove:(state,action)=>{
         let arr =  state.va.filter((itm)=> itm.id !== action.payload);
         state.va = arr;
        },
    },
})


export const {add,remove} = thaliSlice.actions;
export default thaliSlice.reducer;