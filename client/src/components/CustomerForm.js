import axios from "axios";
import React, { useState } from "react";

function CustomerForm({ getCustomers }) {
  const [customerName, setCustomerName] = useState("");

  async function saveCustomer(e) {
    e.preventDefault();

    try {
      const customerData = {
        name: customerName,
      };
      await axios.post("http://localhost:5000/customer/", customerData);
      // await axios.post(
      //   "https://my-mern-login-app.herokuapp.com/customer/",
      //   customerData
      // );
      getCustomers();
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="customer-main-form">
      <form onSubmit={saveCustomer} className="customer-form">
        <h1 className="customer-title">Create a New Customer</h1>
        <input
          type="text"
          placeholder="Customer Name"
          onChange={(e) => {
            setCustomerName(e.target.value);
          }}
          value={customerName}
          className="customer-form-input"
        />
        <button type="submit" className="customer-button">
          Create
        </button>
      </form>
    </div>
  );
}

export default CustomerForm;
