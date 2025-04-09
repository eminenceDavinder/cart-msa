import express from "express";
import {
  handleAddToCart,
  handleCartDeletion,
  handleRemoveFromCart,
} from "@controllers/cart.controller";
import { routes } from "@utils/routes";

const router = express.Router();

router.post(routes.CART_ADD_PRODUCT_URL as string, handleAddToCart);
router.put(routes.CART_REMOVE_PRODUCT_URL as string, handleRemoveFromCart);
router.delete(routes.DELETE_CART_URL as string, handleCartDeletion);

export default router;
