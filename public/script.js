
const bar =   document.getElementById('bar');
const close = document.getElementById('close')
const nav =   document.getElementById('navbar');
var textDisplay=false;
const userloged = localStorage.getItem('userloged');
const room_name = localStorage.getItem('room_name');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active'); 
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active'); 
    })
}
const getuserlogged=(username)=>{
  return username;
}

const changehtlm = (json1,c) => {
  let cat_list = document.querySelector(".row");
  for (catI in json1){
    const cat = json1[catI]
    console.log(cat.id_chores);
    cat_list.innerHTML='';
      if (cat.username==c){
          cat_list.innerHTML += '<tbody><tr><td>'+cat.id_chores+'</td><td>'+cat.chore_name+'</td><td>'+cat.descr+'</td><td>'+cat.room_name+'</td></tbody><div>'
      }
  }

}
const pingApi = () => {
  console.log({ value: document.getElementById("inputNumber").value });
  fetch(
    "/api/ping?" +
      new URLSearchParams({
        value: document.getElementById("inputNumber").value,
      })
  ).then((res) => res.json());
};

const executeFunction = () => {
      getCreation();
};
const executeFunction1 = () => {
  getCreation();
};
const executeFunction7=()=>{
  getlogin();
}

const executeFunction2 = () => {
  getseechores();
};


const deletefunction=()=>{
  getDelete();
  getseechores();
}
const createkitchen=()=>{
  localStorage.setItem('room_name', "Kitchen");
}
const createbathroom=()=>{
  localStorage.setItem('room_name', "Bathroom");
}
const createbedroom=()=>{
  localStorage.setItem('room_name', "Bedroom");
}
const createother=()=>{
  localStorage.setItem('room_name', "Other");
}


const submitechore = () => {
  getCreationChore();
  document.getElementById("ChoreName").value="";
  document.getElementById("Description").value="";
}

const getlogin=() =>{
  var username = document.getElementById("username").value;
  var pword = document.getElementById("pword").value;
  fetch("/users/")
      .then((data) => data.json())
      .then((data) => LoginJB(data,username, pword)
      );
}

const LoginJB = (json1,c, c2) => {
  let bool='fasle';
  for (catI in json1){
    const cat = json1[catI]
      if (cat.username==c){
        if (cat.pword == c2){
          bool='true';
      }
  }
  if (bool =='true'){
    localStorage.setItem('room_name', "Kitchen");
    window.location.href="index.html";
  }
  else{
    if (textDisplay == false){
      let div = document.getElementById('labelsignin');
      let newText = document.createElement('p');
      newText.textContent = 'Wrong password or username';
      div.prepend(newText);
      textDisplay = true;
  }
  }
}}

const signinJB = (json1,c) => {
  var lastname = document.getElementById("Lastname").value;
  var firstname = document.getElementById("Firstname").value;
  var username = document.getElementById("username").value;
  var pword = document.getElementById("pword").value;

  var payload = {
    lastname: lastname,
    firstname: firstname,
    username: username,
    pword: pword
  };
  let bool='true';
  for (catI in json1){
    const cat = json1[catI]
      if (cat.username==c){
        bool='false';
      }
  }
  if (bool =='true'){
    fetch("/users/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json());
      localStorage.setItem('userloged', c);
    window.location.href="index.html";
  }
  else{
    if (textDisplay == false){
      let div = document.getElementById('labelsignin');
      let newText = document.createElement('p');
      newText.textContent = 'Username already exists';
      div.prepend(newText);
      textDisplay = true;
  }
  }
}

const getseechores=()=>{
  fetch("/chores/")
      .then((data) => data.json())
      .then((data) => changehtlm(data,userloged));
}

const getCreationChore = () => {
  var chore_name = document.getElementById("ChoreName").value;
  var descr = document.getElementById("Description").value;
  var payload = {
    chore_name: chore_name,
    descr: descr,
    room_name: room_name,
    username: userloged,
  };
  alert("Your chore has been registered")
  fetch("/chores/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
  
  };

const getCreation = () => {
  var username = document.getElementById("username").value;
  fetch("/users/")
      .then((data) => data.json())
      .then((data) => signinJB(data,username)
      );
};

const getDelete = () => {
  var id_chore = document.getElementById("id_chore").value;
  fetch("/chores/" + id_chore, {
    method: "DELETE",
  })
    .then((res) => res.json())
};



const getUpdate = () => {
  var Id_User = document.getElementById("Id_User").value;
  var lastname = document.getElementById("Lastname").value;
  var firstname = document.getElementById("Firstname").value;
  var username = document.getElementById("username").value;

  var payload = {
    Id_User : Id_User,
    lastname: lastname,
    firstname: firstname,
    username: username,
  };

  
  fetch("/users/"+Id_User, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((res) => alert(JSON.stringify(res)));
};
