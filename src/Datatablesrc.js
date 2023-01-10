export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  export const userRows = [
    {
      id: 1,
      username: "Mohammed Belal",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      email: "1example@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Mahmoud Hesham",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "2example@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Ahmed Tamer",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "3example@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Youssef Mohammed",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "4example@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Alaa Sayed",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "5example@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Nayer Ayman",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "6example@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Yasser Anwar",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "7example@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Yehia Adel",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "8example@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Wael Ahmed",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "9example@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "Ramy Ghanim",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "10example@gmail.com",
      status: "active",
      age: 65,
    },
  ];