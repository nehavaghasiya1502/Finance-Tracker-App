import Sidebar from "../components/Sidebar";
import SummaryCards from "../components/SummaryCards";
import AddIncome from "../components/AddIncome";
import AddExpense from "../components/AddExpense";
import ExpenseList from "../components/ExpenseList";

import "./DashBoard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-wrapper">

      <div className="dashboard-body">

        <Sidebar />

        <div className="dashboard-content">

          <SummaryCards />

          <div className="forms-section">
            <AddIncome />
            <AddExpense />
          </div>

          <ExpenseList />

        </div>

      </div>

    </div>
  );
}