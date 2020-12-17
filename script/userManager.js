let loggedUser = new User();
//Object to store all the data for an specific user, in case the user is not register, the system will ask for all this values
function User(username,nia,password,fullName,email,birthDate,id,role,degree,university,language,isExchange,picture,course1,course2,course3,course4){
    this.username=username;
    this.nia=nia;
    this.password=password;
    this.fullName=fullName;
    this.email=email;
    this.birthDate=birthDate;
    this.id=id;
    this.role=role;
    this.degree=degree;
    this.university=university;
    this.language=language;
    this.isExchange=isExchange;
    this.picture=picture;
    this.course1=course1;
    this.course2=course2;
    this.course3=course3;
    this.course4=course4;

    this.cookie =  function (){
        return this.email+"="+this.username+":"+this.nia+":"+this.password+":"+this.fullName+":"+this.email+":"+Date.parse(this.birthDate)+":"+this.id+":"+this.role+":"+this.degree+":"+this.university+":"+this.language+":"+this.isExchange+":"+this.picture+":"+this.course1+":"+this.course2+":"+this.course3+":"+this.course4;
    }
    this.degreeName = function (){
        return degrees[this.degree];
    }
}
function userFromArray(array){
    return new User(array[0],array[1],array[2],array[3],array[4],new Date(parseInt(array[5],10)),array[6],parseInt(array[7],10),parseInt(array[8],10),array[9],array[10],array[11] === 'true',array[12], array[13].split(","),array[14].split(","),array[15].split(","),array[16].split(","));
}
//array storing all the users registered in the system with all their specific data including the mail and the password to login
var users = [
    new User(
        "mikech",
        "1007833",
        "12345",
        "Mike Chance",
        "mikech@mymail.com",
        new Date(2000,10,3),
        "047145R", 0,0,
        "HGC",
        "en_US",
        true,
        "./images/1-intro-photo-final.jpg",
        [8.1,6,7.2],
        [6.4,7.2,8.7],
        [5.0,5.7,4.9],
        [2.1,5.2,3.1]
    ),
    new User(
        "jositoA87",
        "1007854",
        "pass123",
        "Jose Arganda",
        "jositoA87@hmail.com",
        new Date(1998,11,4),
        "037544R", 0,1,
        "HGC",
        "en_US",
        false,
        "./images/user1.jpeg",
        [9,9.8,7.8],
        [7.2,6,6.5],
        [4.4,3,3.3],
        [5.1,4.2,3.5]
    ),
    new User(
        "Manchez",
        "1003254",
        "6542",
        "Miguel Sanchez",
        "manchez_1@hmail.com",
        new Date(1999,1,20),
        "037512A", 0,1,
        "HGC",
        "en_US",
        false,
        "./images/pexels-photo-2078265.jpeg",
        [0.1,0.5,0.2],
        [3,3.2,3.4],
        [5.5,6,5.7],
        [7,5.5,4]
    ),
    new User(
        "AmmyB",
        "1004587",
        "wzaaA",
        "Amaia Brown",
        "ammy_B@mymail.com",
        new Date(2001,7,7),
        "047512B", 0,3,
        "HGC",
        "en_US",
        true,
        "./images/7df9f86c-0bd3-4ff2-b620-d779283e0a50-2t4a9501.JPG",
        [8.1,6,7.2],
        [4.5,7,6.5],
        [3.4,8.4,7.0],
        [10,9.2,41]
    ),
    new User(
        "MiguelitoFU",
        "10025415",
        "duhPASS",
        "Miguel Fuentes",
        "fuentesMiguel@mymail.com",
        new Date(1990,7,7),
        "047512B", 0,2,
        "HGC",
        "en_US",
        false,
        "./images/Picture-Cochrane.jpg",
        [4.7,6,7.2],
        [6.4,8,8.5],
        [5.3,5.7,5.3],
        [4.1,2.3,0.1]
    ),
    new User(
        "Vpe",
        "1004591",
        "nobro",
        "Valeria Perez",
        "Vpe@mymail.com",
        new Date(2000,4,12),
        "044112B", 0,3,
        "HGC",
        "es_ES",
        true,
        "./images/Cute-Girl-Picture-for-Profile-28.png",
        [4.5,6,7.2],
        [7.4,7.4,6.7],
        [5.3,4.2,6.8],
        [3.1,6.2,7.1]
    ),
    new User(
        "XxSebasxX",
        "1004874",
        "eyyyyy",
        "Sebastian Malo",
        "XxSebasxX@mymail.com",
        new Date(2000,5,15),
        "044442Z", 0,0,
        "HGC",
        "es_ES",
        false,
        "./images/Screen Shot 2020-05-07 at 10.38.19 AM.png",
        [8.1,6,7.2],
        [9.4,8.2,8.7],
        [5.0,5.7,4.9],
        [2.1,5.2,3.1]
    ),
    new User(
        "dhidalgo",
        "1004841",
        "notaPASS",
        "Paco Hidalgo",
        "dhidalgo@mymail.com",
        new Date(1990,10,4),
        "048445S", 0,1,
        "HGC",
        "en_US",
        false,
        "./images/images.jpeg",
        [4.2,5.2,6.2],
        [4.2,7.2,8.7],
        [5.7,6.7,4.2],
        [3.1,5.4,3.1]
    ),
    new User(
        "mrwhite",
        "1003441",
        "j1ds4d1",
        "Patrick White",
        "meisterwhitten@hmail.com",
        new Date(2000,12,24),
        "048445H", 0,0,
        "HGC",
        "ru_RU",
        false,
        "./images/995586_746594.jpg",
        [7.1,8.2,4.2],
        [5.4,6.2,3.7],
        [5.2,7.7,8.9],
        [9.1,1.2,0.1]
    ),
    new User(
        "peeeeta",
        "1003845",
        "hasdfds",
        "Emilia Peterson",
        "peeeeta@hmail.com",
        new Date(1998,10,14),
        "048522Z", 0,3,
        "HGC",
        "ru_RU",
        false,
        "./images/20181105_193836.jpg",
        [10,8,9.4],
        [7,8.2,9.5],
        [4.1,5.2,7.8],
        [8,8.1,9.1]
    ),
    new User(
        "tommyD",
        "1000005",
        "ImTommyD",
        "Tom Doyle",
        "doyle.lsfd@hmail.com",
        new Date(1978,10,3),
        "034874R", 1,-1,
        "HGC",
        "en_US",
        false,
        "./images/tomd.jpg"
    ),
    new User(
        "Lukka10",
        "1000001",
        "l0kk0",
        "Lukka Strongël",
        "lukkS@hmail.com",
        new Date(1968,10,24),
        "034874R", 2,-1,
        "HGC",
        "en_US",
        false,
        "./images/user11.jpg"
    ),
];

//the grades button will show a page containing a table with all the courses and the different marks that the student had score for different assignments
function getGradesPage(){
    let pageContent = `<h1>Grades</h1>`;
    function createUserTable(user){ //the table has the following implementation for each row: the subject, score of assignemnt 1, score of assignemnt 2 and score of assignemnt 3
            pageContent+= `<table id="grades-`+user.nia+`"> <!-- This is the table for the grades -->
                <tr> <!-- Different columns of the table -->
                    <th>Course</th>
                    <th>Activity 1</th>
                    <th>Activity 2</th>
                    <th>Activity 3</th>
                </tr>
                <tr> <!-- 1 ROW -->
                    <td>`+degreeCourses.get(user.degree)[0]+`</td>  <!-- first column -->
                    <td>`+user.course1[0]+`</td>  <!-- second column -->
                    <td>`+user.course1[1]+`</td>  <!-- third column -->
                    <td>`+user.course1[2]+`</td>  <!-- fourth column -->
                </tr>
                    <tr> <!-- 2 ROW -->
                    <td>`+degreeCourses.get(user.degree)[1]+`</td>  <!-- first column -->
                    <td>`+user.course2[0]+`</td>  <!-- second column -->
                    <td>`+user.course2[1]+`</td>  <!-- third column -->
                    <td>`+user.course2[2]+`</td>  <!-- fourth column -->
                </tr>
                    <tr> <!-- 3 ROW -->
                    <td>`+degreeCourses.get(user.degree)[2]+`</td>  <!-- first column -->
                    <td>`+user.course3[0]+`</td>  <!-- second column -->
                    <td>`+user.course3[1]+`</td>  <!-- third column -->
                    <td>`+user.course3[2]+`</td>  <!-- fourth column -->
                </tr>
                <tr> <!-- 4 ROW -->
                    <td>`+degreeCourses.get(user.degree)[3]+`</td>  <!-- first column -->
                    <td>`+user.course4[0]+`</td>  <!-- second column -->
                    <td>`+user.course4[1]+`</td>  <!-- third column -->
                    <td>`+user.course4[2]+`</td>  <!-- fourth column -->
                </tr>
            </table>
            <a class="download" href="javascript:downloadTable(`+user.nia+`)">Download Table</a>
            `
    }
    if(loggedUser.username === undefined){
        pageContent+=`<p>Please log in.</p>`;
        return pageContent;
    }
    if(loggedUser.role>0){
        for(let i=0;i<users.length;i++){
            if(users[i].role===0){
                pageContent+=`<h2>`+users[i].fullName+" "+users[i].nia+`</h2>
                    <p>`+degrees[users[i].degree]+`</p>`
                createUserTable(users[i]);
            }
        }
    }else{
        createUserTable(loggedUser);
    }

    return pageContent;
}
//logout function, this button will lead us to the main page were the system ask for the email and password or registration
function logOut(){
    if(confirm("Please confirm Log Out")){
        document.cookie="loggedUser=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
        loggedUser=new User();
        changeContent(loginPage);
    }
}
//function to store the data of a new user, the system will ask you to fill all the boxes with the personal data information, once all boxes had been full, the user will have to accept the terms and policies
function registerUser(){
    let signup = document.signup;
    if(!(signup.user.checkValidity() &&signup.nia.checkValidity() &&signup.password.checkValidity() &&signup.fullname.checkValidity() &&signup.email.checkValidity() &&signup.date.checkValidity() &&signup.id.checkValidity() &&signup.role.checkValidity() &&signup.degree.checkValidity() &&signup.language.checkValidity() &&signup.accepted.checkValidity())){
        alert("Please fulfill all the required fields"); //in case a box is not complete an alert will be shown in the screen
        return;
    }
    let newUser = new User(document.signup.user.value,document.signup.nia.value,document.signup.password.value,document.signup.fullname.value,document.signup.email.value, document.signup.date.value, document.signup.id.value,document.signup.role.selectedIndex,document.signup.role.selectedIndex >0 ? -1:document.signup.degree.selectedIndex,document.signup.university.value,document.signup.language.value,false,"./images/profilepicture.png",[0,0,0],[0,0,0],[0,0,0],[0,0,0]);
    document.cookie=newUser.cookie();//sotring the data for the new user in a cookie
    document.cookie="loggedUser="+newUser.cookie().split("=")[1];
    users.push(newUser);
    loggedUser=newUser;
    changeContent(courses);//changing the type of page.
    addCourses();
}


// Automatically register all users.
for(let i=0;i<users.length;i++){
    document.cookie=users[i].cookie();
}
//function to get the cookie and determine of the user is a cookie we had created, in that case the system will accept the user for login
function getCookie(cname) {
    const name = cname + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

//function to login the user in case the cookie has been created
function loginUser() {
    const user = getCookie(document.login.email.value).split(":");//getting the cookie
    const password = document.login.password.value;//getting the password for the user

    if(user[0]===""){
        alert("Email not registered.");//case that the user is not register in the database cookie
        return;
    }
    if (password === user[2]){ // If the password is ok, log the user in and store a logon cookie. Also, change the content to the courses page.
        loggedUser=userFromArray(user);
        document.cookie="loggedUser="+loggedUser.cookie();
        changeContent(courses);
        alert("Welcome again " + user[3]);
    }else {
        alert("Wrong Password. Please try again");//in case the user introduce a valid email but an invalid password
    }
    addCourses();
}

$(document).ready(function() {
    // After loading the document, check if the window name refers to a page.
    // If the page exists load the content. If it doesn't exists, load the homepage.
    if (loggedUser.username === undefined) {
        let cookie = getCookie("loggedUser");
        if (cookie !== "") {
            let retrievedUser = userFromArray(cookie.split(":"));
            if (retrievedUser !== undefined)
                loggedUser = retrievedUser;
        }

    }
});
