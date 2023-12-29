import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);

  const getuser = async () => {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    console.log(data);
    const usersArray = data.users;
    console.log(usersArray);
    setUser(usersArray[Math.floor(Math.random() * 30) + 1]);
    // setUser(await response.json());
  };
  useEffect(() => {
    getuser();
  }, []);

  return (
    <div className="d-flex justify-content-center" style={{}}>
      <div style={{ width: "30rem" }} className="card bg-secondary  ">
        <div>
          <img className="rounded-circle border " src= {user.image} alt="img" />
        </div>
        <div className="d-flex justify-content-between ">
          <div className="d-flex  flex-column my-2 ">
            <div className="fw-bolder ">Date of Birth</div>
            <div>{user.birthDate}</div>
          </div>
          <div className="d-flex  flex-column my-2">
            <div className="fw-bolder ">Age</div>
            <div>{user.age}</div>
          </div>
          <div className="d-flex  flex-column my-2">
            <div className="fw-bolder ">Weight</div>
            <div>{user.weight}</div>
          </div>
          <div className="d-flex  flex-column my-2">
            <div className="fw-bolder ">Height</div>
            <div>{user.height}</div>
          </div>
        </div>
        <div className="my-2 ">
          <h3>
            {user.firstName} {user.lastName}
          </h3>
          <h5>{user.address ? user.address.address : "N/A"}</h5>
        </div>
        <br />
        <div className="d-flex justify-content-around my-1  ">
          <a  className="text-light text-decoration-none" href="">
            <span>
              <i class="fa-solid fa-phone"></i>
            </span>
            {user.phone}
          </a>
          <a className="text-light text-decoration-none" href="">
            <span>
              <i class="fa-regular fa-envelope me-2 "></i>
            </span>
            {user.email}
          </a>
        </div>
        <button onClick={getuser} className="btn btn-dark  my-2 ">
          Get New User
        </button>
      </div>
    </div>
  );
}

export default App;
