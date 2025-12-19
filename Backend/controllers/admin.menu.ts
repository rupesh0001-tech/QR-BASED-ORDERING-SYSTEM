import MenuItem from "../models/menuItem";
import { Request, Response } from "express";

export const createItem = async (req: Request, res: Response) => {
  try {
    const { name, description, price, category, image, status } = req.body;
    if (!name || !description || !price || !category || !image || !status) {
      return res.status(404).json({
        message: "Field are missing",
      });
    }

    const item = await MenuItem.create({
      name,
      description,
      price,
      category,
      image,
      status,
    });

    res.status(201).json({
      message: " item created successfully",
      item,
    });
  } catch (error: any) {
    res.status(500).json({
      message: " error while creating a item",
      error: error.message,
    });
  }
};

export const editItem = async (req: Request, res: Response) => {
  try {
    const { itemId } = req.params;
    const { name, description, price, category, image, status } = req.body;
    const updatedItem = await MenuItem.findByIdAndUpdate(
      itemId,
      { $set: req.body },
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({
        message: "item not found ",
      });
    }
    res.status(200).json({
      message: "item Updated Successfully",
      updatedItem,
    });
  } catch (error: any) {
    res.status(500).json({
      message: " error while editing the item ",
      error: error.message,
    });
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  try {
    const { itemId } = req.params;
    const isItemExist = await MenuItem.findByIdAndDelete({ _id: itemId });
    if (!isItemExist) {
      return res.status(404).json({
        message: " Item not found to delete",
      });
    }
    res.status(200).json({
      message: "item deleted Successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      message: " error while deleting the Item ",
      error: error.message,
    });
  }
};
