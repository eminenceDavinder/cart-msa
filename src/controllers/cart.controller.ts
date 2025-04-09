import { Response } from "express";
import { Interfaces, Helpers, Validators } from "yash-msa";
import { routes } from "@utils/routes";
import { constants } from "@constants";

export const handleAddToCart = async (
  req: Interfaces.IRequest,
  resp: Response,
) => {
  await Helpers.requestHandler(
    req,
    resp,
    Validators.addCartRequestBodySchema,
    routes.CART_ADD_PRODUCT_URL as string,
    "post",
    constants.DB_URL,
    routes.CART_DB_URL as string,
  );
};

export const handleRemoveFromCart = async (
  req: Interfaces.IRequest,
  resp: Response,
) => {
  await Helpers.requestHandler(
    req,
    resp,
    Validators.objectIdSchema,
    routes.CART_REMOVE_PRODUCT_URL as string,
    "put",
    constants.DB_URL,
    routes.CART_DB_URL as string,
  );
};

export const handleCartDeletion = async (
  req: Interfaces.IRequest,
  resp: Response,
) => {
  await Helpers.requestHandler(
    req,
    resp,
    Validators.emptyBodySchema,
    routes.DELETE_CART_URL as string,
    "delete",
    constants.DB_URL,
    routes.CART_DB_URL as string,
  );
};
