 interface MenuItemI {
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    status: string;
  }




  let [menu, setMenu] = useState<MenuItemI[]>([]);
  const params = useParams();
 

  const getMenu = async () => {
    await api
      .get(`/api/${params.tableId}/menu`)
      .then((res) => { setMenu(res.data.Menu) })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div>
        {
            menu.map((item, index) => {
                return (
                  <div key={index}>
                    <div>{item.name}</div>
                    <div>{item.description}</div>
                    <div>{item.price}</div>
                    <div>{item.category}</div>
                    <div><img src={item.image} alt="" /></div>
                    <div>{item.status}</div>
                  </div>
                );
              })
        }
    </div>
  )