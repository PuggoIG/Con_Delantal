const{Restaurants,Addresses,Users} = require("../models");

const createRestaurants = async(req,res) => {
    try{
        req.body.UserId=req.user.id
        const restaurant = await Restaurants.create(req.body)
        if(!house) res.status(400).json({"message":"Error to create restaurant"})
        const address =  await Addresses.create({...req.body.address,RestaurantId:restaurant.id})
        if(!address) res.status(400).json({"message":"Error to create address"})
        
        return res.status(201).json(restaurant)
    }catch(e){
        console.log(e.message)
        return res.status(400).json(e)
    }
}

const getAllRestaurants = async (req,res)=>{
    let AllRestaurants = await Restaurants.findAll({where:{},include:[
        {
            model:Users,
            as:"user"
            
        },
        {
            model:Addresses,
            as:"address"
            
        }
    ]})
    
    return res.status(200).json(AllRestaurants)


}

const getOneRestaurants = async(req,res) =>{
    let getRestaurant = await Restaurants.findOne({where:{id:req.params.id},include:[
        {
            model:Users,
            as:"user"
            
        },
        {
            model:Addresses,
            as:"address"
            
        }
    ]})
    
    return res.status(200).json(getRestaurant)


}



module.exports = {
    createRestaurants,
    getAllRestaurants,
    getOneRestaurants
}