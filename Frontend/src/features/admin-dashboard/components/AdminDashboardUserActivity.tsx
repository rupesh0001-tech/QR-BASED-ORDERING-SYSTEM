import { Forward, PenIcon } from "lucide-react";

interface IUserActivity {
  name: string;
  email: string;
  role: string;
}

const UserActivity = () => {
  const Users: IUserActivity[] = [
    {
      name: "Aarav Sharma",
      email: "aarav.sharma@example.com",
      role: "chef",
    },
    {
      name: "Riya Verma",
      email: "riya.verma@example.com",
      role: "manager",
    },
    {
      name: "Kabir Singh",
      email: "kabir.singh@example.com",
      role: "waiter",
    },
    {
      name: "Meera Patel",
      email: "meera.patel@example.com",
      role: "cashier",
    },
    {
      name: "Arjun Desai",
      email: "arjun.desai@example.com",
      role: "chef",
    },
    {
      name: "Saanvi Agarwal",
      email: "saanvi.agarwal@example.com",
      role: "owner",
    },
    {
      name: "Dev Malhotra",
      email: "dev.malhotra@example.com",
      role: "waiter",
    },
    {
      name: "Isha Nair",
      email: "isha.nair@example.com",
      role: "assistant manager",
    },
    {
      name: "Rudra Kapoor",
      email: "rudra.kapoor@example.com",
      role: "chef",
    },
    {
      name: "Anaya Joshi",
      email: "anaya.joshi@example.com",
      role: "receptionist",
    },
  ];

  return (
    <>
      <div className=" flex flex-col gap-2 ">
        {Users.map((user: any) => {
          return (
            <div  className=" bg-white py-4 px-8 rounded-xl flex justify-between gap-2  ">
              <div className=" flex justify-between w-full ">
                <div>
                  <h1 className=" w-33 text-center "> {user.name}</h1>
                </div>
                <div>
                  <h1 className=" w-33 text-center "> {user.email}</h1>
                </div>
                <div>
                  <h1 className=" w-33 text-center "> {user.role}</h1>
                </div>
              </div>
              <div className=" flex gap-2">
                <Forward   color={"#32353f"} className=" cursor-pointer" />
                <PenIcon color={"#32353f"} size={20} className=" cursor-pointer text-xl" />

              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UserActivity;
