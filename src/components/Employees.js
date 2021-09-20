import React from "react";

function Employees({ employees, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="employees">
      {employees.map((employee) => {
        const {
          userId,
          jobTitleName,
          firstName,
          lastName,
          phoneNumber,
          emailAddress,
        } = employee;
        return (
          <li key={userId}>
            <div className="container">
              <div>
                <h2>
                  {firstName} {lastName}
                </h2>
                <ul>
                  <li>Job Title: {jobTitleName}</li>
                  <li>Phone Number: {phoneNumber}</li>
                  <li>Email: {emailAddress}</li>
                </ul>
                <button type="button" class="btn">
                  View Employee Detail
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Employees;
