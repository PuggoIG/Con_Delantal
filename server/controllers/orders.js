 const {Restaurants,Orders}= require("../models");

const calculatePrice = async (req,res)=>{
    const {date_init,date_due,restaurantId}= req.body
    
    
    const date1= new Date (date_init);
    const date2= new Date(date_due);

    let timeDiff = Math.abs(date2.getTime()-date1.getTime());
    let dayDiff = Math.ceil(timeDiff/(1000*3600*24))

    const order = await Orders.findById(restaurantId)
    if (!order) res.status.json({message:"Restaurant does not exist"});

    const count_order = await Orders.count({where:{
        start_date:{
            $between:[date_init,date_due]
        },
        restaurantId:restaurantId
    }})
    
    if(count_order != 0) res.status(400).json({message:"This restaurant is already booked"})

    let price = dayDiff * restaurnat.price

    res.status(200).json({price:price,message:"Order price calculated correctly"})


}

const createOrders = async(req,res)=>{

    req.body.userId = req.user.id
    const order= await Orders.create(req.body).catch(e=>res.statys(400).json(e))
    if(!order) res.status(400).json({message:"Problems to create order"})

    res.status(200).json({message:"order created",id:order.id})


}

module.exports={
    calculatePrice,
    createOrders
} 