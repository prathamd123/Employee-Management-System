
const employees = [
  {
    id: 1,
    email: "e@e.com",
    password: "123",
    firstName: "Arjun",
    tasks: [
      {
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve the issue preventing users from logging in.",
        taskDate: "2025-01-20",
        taskCategory: "Bug Fix",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Update Homepage UI",
        taskDescription: "Revamp the design of the homepage to enhance user experience.",
        taskDate: "2025-01-19",
        taskCategory: "UI Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Write Unit Tests",
        taskDescription: "Write tests for the user authentication module.",
        taskDate: "2025-01-18",
        taskCategory: "Testing",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    firstName: "Kabir",
    tasks: [
      {
        taskTitle: "Database Optimization",
        taskDescription: "Optimize the database queries for faster response times.",
        taskDate: "2025-01-17",
        taskCategory: "Database",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Implement Dark Mode",
        taskDescription: "Add dark mode support to the app.",
        taskDate: "2025-01-16",
        taskCategory: "Feature",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    firstName: "Meera",
    tasks: [
      {
        taskTitle: "Create API Documentation",
        taskDescription: "Document all API endpoints for external developers.",
        taskDate: "2025-01-15",
        taskCategory: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Bug Fix for Search Bar",
        taskDescription: "Resolve the issue with the search bar not returning accurate results.",
        taskDate: "2025-01-14",
        taskCategory: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Enhance Security",
        taskDescription: "Add two-factor authentication to the login system.",
        taskDate: "2025-01-13",
        taskCategory: "Security",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    firstName: "Aditi",
    tasks: [
      {
        taskTitle: "Add Payment Gateway",
        taskDescription: "Integrate Stripe payment gateway for checkout.",
        taskDate: "2025-01-12",
        taskCategory: "Feature",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Design Marketing Emails",
        taskDescription: "Create email templates for the marketing campaign.",
        taskDate: "2025-01-11",
        taskCategory: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    firstName: "Rahul",
    tasks: [
      {
        taskTitle: "User Feedback Analysis",
        taskDescription: "Analyze user feedback and prepare a report.",
        taskDate: "2025-01-10",
        taskCategory: "Analysis",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix Broken Links",
        taskDescription: "Identify and fix all broken links on the website.",
        taskDate: "2025-01-09",
        taskCategory: "Bug Fix",
        active: false,
        newTask: true,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Conduct Team Meeting",
        taskDescription: "Host a meeting to discuss the quarterly goals.",
        taskDate: "2025-01-08",
        taskCategory: "Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
    firstName: "Neha"
  }
];


  export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  }
  export const getLocalStorage = ()=>{
    const employees  = JSON.parse(localStorage.getItem('employees'));
    const admin  = JSON.parse(localStorage.getItem('admin'));
    
    // console.log(employees,admin);
    return {employees,admin}
  }
  