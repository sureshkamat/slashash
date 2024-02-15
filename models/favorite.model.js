const mongoose=require('mongoose');

const FavSchema=new mongoose.Schema({
    id:String,
})

const FavModel=mongoose.model('Fav',FavSchema);
module.exports={FavModel};