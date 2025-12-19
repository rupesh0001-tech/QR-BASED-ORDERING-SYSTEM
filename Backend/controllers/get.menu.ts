import MenuItem from "../models/menuItem";
import { Request, Response } from "express";

export const getMenu = async (req: Request, res: Response) => {
  try {
    const Menu = await MenuItem.find();
    if (!Menu) {
      return res.status(404).json({
        message: " Menu not found",
      });
    }
    res.status(200).json({
      message: "Menu fetched Successfull",
      Menu,
    });
  } catch (error) {
    res.status(400).json({
      message: " error while getting the menu ",
      error: error,
    });
  }
};
