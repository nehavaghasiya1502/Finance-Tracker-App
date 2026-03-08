export const saveUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch {
    return null;
  }
};
export const logoutUser = () => {
  localStorage.removeItem("user");
};

export const saveUsersList = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

export const getUsersList = () => {
  try {
    return JSON.parse(localStorage.getItem("users")) || [];
  } catch {
    return [];
  }
};

// CATEGORY STORAGE

export const getCategories = () => {
  try {
    return JSON.parse(localStorage.getItem("categories")) || [];
  } catch {
    return [];
  }
};

export const saveCategories = (categories) => {
  localStorage.setItem("categories", JSON.stringify(categories));
};

export const addCategory = (category) => {
  const categories = getCategories();
  categories.push(category);
  saveCategories(categories);
};

export const deleteCategory = (id) => {
  const categories = getCategories();
  const filtered = categories.filter((cat) => cat.id !== id);
  saveCategories(filtered);
};
// EXPENSE STORAGE

export const getExpenses = () => {
  try {
    return JSON.parse(localStorage.getItem("expenses")) || [];
  } catch {
    return [];
  }
};

export const saveExpenses = (expenses) => {
  localStorage.setItem("expenses", JSON.stringify(expenses));
};

export const addExpense = (expense) => {
  const expenses = getExpenses();
  expenses.push(expense);
  saveExpenses(expenses);
};

export const deleteExpense = (id) => {
  const expenses = getExpenses();
  const filtered = expenses.filter((exp) => exp.id !== id);
  saveExpenses(filtered);
};
// INCOME STORAGE

export const getIncome = () => {
  try {
    return JSON.parse(localStorage.getItem("income")) || [];
  } catch {
    return [];
  }
};

export const saveIncome = (income) => {
  localStorage.setItem("income", JSON.stringify(income));
};

export const addIncome = (data) => {
  const income = getIncome();
  income.push(data);
  saveIncome(income);
};

export const deleteIncome = (id) => {
  const income = getIncome();
  const filtered = income.filter((inc) => inc.id !== id);
  saveIncome(filtered);
};
// DEFAULT CATEGORIES INITIALIZER

export const initializeCategories = () => {

  const existing = localStorage.getItem("categories");

  if (!existing) {

    const defaultCategories = [
      { id: 1, name: "Food" },
      { id: 2, name: "Travel" },
      { id: 3, name: "Bills" },
      { id: 4, name: "Shopping" },
      { id: 5, name: "Health" },
      { id: 6, name: "Education" },
      { id: 7, name: "Entertainment" }
    ];

    localStorage.setItem("categories", JSON.stringify(defaultCategories));
  }
};