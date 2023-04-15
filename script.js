/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((e) => {
    if (e.profession == "developer") {
      console.log(e);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((emp) => {
    if (emp.profession === "developer") {
      console.log(emp);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newEmp = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmp);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const newarrs = arr.filter((emp) => emp.profession !== "admin");
  console.log(newarrs);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArray = [
    { id: 5, name: "alex", age: "21", profession: "intern" },
    { id: 6, name: "jane", age: "25", profession: "manager" },
    { id: 7, name: "emma", age: "22", profession: "developer" },
  ];

  const concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
}
// PrintDeveloperbyMap();
// PrintDeveloperbyForEach();
// addData();
// removeAdmin();
// ConcatenateArray();
