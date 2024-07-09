import express from "express";
import multer from "multer";
import MyRestaurantController from "../controllers/MyRestaurantController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyRestaurantRequest } from "../middleware/validation";



const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5 mb
    },
});

// const uploadFields = upload.fields([
//     { name: 'restaurantImage', maxCount: 1 },
//     { name: 'menuItemImages', maxCount: 5 } // Adjust maxCount as needed
// ]);



router.get("/", jwtCheck, jwtParse, MyRestaurantController.getMyRestaurant)

// /api/my/restaurant
// check the request body for the property called imageFile in binary form
router.post(
    "/",
    upload.single("imageFile"),
    validateMyRestaurantRequest,
    jwtCheck,
    jwtParse,
    MyRestaurantController.createMyRestaurant
  );

export default router; 