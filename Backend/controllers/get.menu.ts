import MenuItem from "../models/menuItem";
import { Request, Response } from "express";
import Table from "../models/table";

export const getMenu = async (req: Request, res: Response) => {
  try {
    const tableId = req.params.tableId;
    const checkIfTheTableExist = await Table.findById(tableId);

    if (!checkIfTheTableExist) {
      return res.status(404).json({
        message: "table not Found PLease Scan the Qr code again ",
      });
    }
    const Menu = await MenuItem.find();
    if (!Menu) {
      return res.status(404).json({
        message: " Menu not found",
      });
    }
    res.status(200).json({
      message: "Menu fetched Successfull",
      Menu,
      table : checkIfTheTableExist
    });
  } catch (error) {
    res.status(400).json({
      message: " error while getting the menu ",
      error: error,
    });
  }
};
