const  express =  require("express");
const router = express.Router();
const isAuthenticated =  require("../middlewares/isAuthenticated");
const {calculatePriceValidation} = require("../middlewares/validation")
const {signUp,logIn,me} =  require("../controllers/users");
const {createRestaurant,getAllRestaurants,getOneRestaurant} =  require("../controllers/restaurants");
const {calculatePrice,createOrder} = require('../controllers/orders');



router.post('/users/signup',signUp)
router.post('/users/login',logIn)
router.get('/users/me',isAuthenticated,me)


router.post('/restaurants',isAuthenticated,createRestaurant)
router.get('/restaurants',getAllRestaurants)
router.get('/restaurants/:id',getOneRestaurant)


router.post('/orders/calculate',calculatePriceValidation,calculatePrice);
router.post('/orders',isAuthenticated,createOrder);




module.exports = router;

