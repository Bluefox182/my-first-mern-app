import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomerForm from "./CustomerForm";
import CustomerList from "./CustomerList";
import "../index.css";

function Customers() {
  const [customers, setCustomers] = useState([]);

  async function getCustomers() {
    const customersRes = await axios.get("http://localhost:5000/customer/");
    // const customersRes = await axios.get(
    //   "https://my-mern-login-app.herokuapp.com/customer/"
    // );
    setCustomers(customersRes.data);
  }

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div className="customer-main-container">
      <CustomerForm getCustomers={getCustomers} />
      <CustomerList customers={customers} />
    </div>
  );
}

export default Customers;
