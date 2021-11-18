import "../index.css";

import React from "react";

function CustomerList({ customers }) {
  function renderCustomers() {
    return customers.map((customer, i) => {
      return <li key={i}>{customer.name}</li>;
    });
  }

  return (
    <div className="customer-list">
      <ul>
        <li className="customer-list_elements2">{renderCustomers()}</li>
      </ul>
    </div>
  );
}

export default CustomerList;
