const mongoose=require('mongoose')
const Schema=mongoose.Schema
const personSchema= new Schema({
    name: {
        type:String,
        required:true,
    },

    age: Number,

    favoriteFoods: [String]
})
module.exports=mongoose.model('person', personSchema)