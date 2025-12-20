import MenuItem from "../models/menuItem";
import menuItems from "./sample.data";

const init = async () => {
    await MenuItem.deleteMany({});
    await MenuItem.insertMany(menuItems);
};

init();
