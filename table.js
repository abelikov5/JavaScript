/* Th of Table */
let th_list = {
  N: "#",
  name: "Name",
  email: "Email",
  balance: "Balance"
};

/* Incoming Data */
const users = [
  {
    _id: "5d220b10e8265cc978e2586b",
    isActive: true,
    balance: 2853.33,
    age: 20,
    name: "Buckner Osborne",
    gender: "male",
    company: "EMPIRICA",
    email: "bucknerosborne@empirica.com",
    phone: "+1 (850) 411-2997",
    registered: "2018-08-13T04:28:45 -03:00",
    nestedField: { total: 300 }
  },
  {
    _id: "5d220b10144ef972f6c2b332",
    isActive: true,
    balance: 1464.63,
    age: 38,
    name: "Rosalie Smith",
    gender: "female",
    company: "KATAKANA",
    email: "rosaliesmith@katakana.com",
    phone: "+1 (943) 463-2496",
    registered: "2016-12-09T05:15:34 -02:00",
    nestedField: { total: 400 }
  },
  {
    _id: "5d220b1083a0494655cdecf6",
    isActive: false,
    balance: 2823.39,
    age: 40,
    name: "Estrada Davenport",
    gender: "male",
    company: "EBIDCO",
    email: "estradadavenport@ebidco.com",
    phone: "+1 (890) 461-2088",
    registered: "2016-03-04T03:36:38 -02:00",
    nestedField: { total: 200 }
  }
];

/* Create Fragment */
let headerTable = document.createDocumentFragment();

/* Create a head of table */
let table = document.createElement("table");
headerTable.appendChild(table);
let trHeader = document.createElement("tr");
table.appendChild(trHeader);
for (let i = 0; i < Object.keys(th_list).length; i++) {
  let th = document.createElement("th");
  th.textContent = Object.keys(th_list)[i];
  trHeader.appendChild(th);
}
let keyObjList = Object.keys(th_list);

/* Create the body of talbe */
for (let i = 0; i < users.length; i++) {
  let trBody = document.createElement("tr");
  for (let z = 0; z < Object.keys(th_list).length; z++) {
    let currentUser = users[i];
    let th = document.createElement("th");
    console.log(currentUser["name"]);
    th.textContent = currentUser[keyObjList[z]];
    if (th.textContent == "") th.textContent = i + 1;
    trBody.appendChild(th);
  }
  table.appendChild(trBody);
}

/* Insert fragment go HTML */
document.body.appendChild(headerTable);

// console.log(users.length);
