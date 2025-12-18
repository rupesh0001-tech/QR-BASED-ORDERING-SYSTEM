import { start } from "repl";
import Order from "../models/order";
import { Request, Response } from "express";

function getTodayandTommarowDates(): { todayDate: Date; tommarowDate: Date } {
  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);

  const tommarowDate = new Date(todayDate);
  tommarowDate.setDate(todayDate.getDate() + 1);

  return { todayDate, tommarowDate };
}

export const getAllOrdersforToday = async (req: Request, res: Response) => {
  try {
    const dates = getTodayandTommarowDates();

    const AllOrders = await Order.find({
      createdAt: {
        $gte: dates.todayDate,
        $lte: dates.tommarowDate,
      },
    }).lean();
    // lean() helps for better js obje
    if (AllOrders.length == 0) {
      res.status(404).json({
        success: false,
        message: " Order Not Found ",
      });
    }
    res.status(200).json({
      message: "Ordered added !",
      Order: AllOrders,
      count : AllOrders.length
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: " error while fetching the orders ",
    });
  }
};

export const getRunningOrdersForToday = async (req: Request, res: Response) => {
  const dates = getTodayandTommarowDates();

  // fetch the running orders
  const runningOrders = await Order.find(
    {
      order_status: {
        $in: ["pending", "preparing", "ready"],
      },
    },
    { createdAt: { $gte: dates.todayDate, $lt: dates.tommarowDate } }
  ).lean();

  if (runningOrders.length == 0) {
    return res.status(404).json({
      message: " there are no Running Orders Right Now ",
    });
  }

  res.status(200).json({
    success: true,
    message: " here are the running orders ",
    runningOrders,
    count : runningOrders.length,
  });
};

export const getCompletedOrderForToday = async (
  req: Request,
  res: Response
) => {
  try {
    const dates = getTodayandTommarowDates();
    const completedOrders = await Order.find({
      order_status: "delivered",
      createdAt: {
        $gte: dates.todayDate,
        $lt: dates.tommarowDate,
      },
    });

    if (completedOrders.length === 0) {
      return res.status(404).json({
        message: " no completed orders found ",
      });
    }

    res.status(200).json({
        message : ' here are the completed orders ' ,
        completedOrders,
        count : completedOrders.length
    })
  } catch (error: any) {
    res.status(400).json({
      message: " error while fetching the completed orders ",
      error: error,
    });
  }
};
