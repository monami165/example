import React, { useState, useEffect } from "react";
import Employees from "./components/Employees";
import Pagination from "./components/Pagination";

const url = "http://localhost:3002/Employees";

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(9);

  useEffect(() => {
    const getEmployees = async () => {
      const res = await fetch(url);
      const employees = await res.json();
      setEmployees(employees);
      setLoading(false);
    };

    getEmployees();
  }, []);

  // Get current posts
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1>Employees</h1>
      <Employees employees={currentEmployees} loading={loading} />
      <Pagination
        employeesPerPage={employeesPerPage}
        totalEmployees={employees.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
