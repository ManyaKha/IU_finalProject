//this script will show the different pages we had implemented, the main change in this section is that the pages will change dynamically, mainly the main container of the page.
//depending on the page the main container will have different title and stylesheet.
var loginPage = {get html() {return ` 
<h1>Welcome to HGC Courses</h1>
<p>Please Log-In in order to see the page content.</p>
<form name="login">
    <p>Email: </p>
    <input name="email" type="text" class="Input" value=""/>
    <br>
    <p>Password: </p>
    <input name="password" type="password" class="Input" value=""/>
    <br>
    <br>
    <input value="Login" onclick="loginUser()" type="button" class="authButton"/>
    <input type="button" value="Sign-up" onclick="changeContent(registerPage)" class="authButton"/>
</form>`}, style :"./style/style-content-login.css", title:"Log-In"};
var registerPage = {get html() {
    return `
<h1>Welcome to HGC Courses</h1>
<p>Fulfill this form in order to sing-up.</p>
<form name="signup">
    <h2>Account Information</h2>
    <p>Username:</p>
    <input name="user" type="text" class="Input" value="" required/><br>
    <p>NIA:</p>
    <input name="nia" type="text" class="Input" pattern="100[0-9]{6}" title="9 numeric digits, where the first three are 100" value="" required/><br>
    <p>Password:</p>
    <input name="password" type="password" class="Input" maxlength="8" pattern="[a-zA-Z0-9]*" title="Maxium 8 characters, a-z A-Z 0-9" value="" required/><br>
    <p>Name and Surname:</p>
    <input name="fullname" type="text" class="Input" value="" required/><br>
    <p>Email:</p>
    <input name="email" type="email" class="Input" value="" required/><br>
    <p>Date of Birth:</p>
    <input name="date" type="date" class="Input" value="" required/><br>
    <p>ID document:</p>
    <input name="id" type="text" class="Input" value="" required/><br>
    <p>Role:</p>
    <select name="role" id="roleSelector" required>
        <option value = "0" label="Student"/>
        <option value = "1" label="Teacher"/>
        <option value = "2" label="Administrator"/>
    </select>
    <p id="degreeLabel">Bachelors Degree:</p>
    <select name="degree" id="degreeSelector">
        <option value = "0" label="Degree in Computer Science"/>
        <option value = "1" label="Degree in Industrial Design"/>
        <option value = "2" label="Degree in Physics Engineering"/>
        <option value = "3" label="Degree in Mechanical Engineering"/>
    </select>
    <script src="./script/formChanger.js"></script>
    <p>University:</p>
    <input name="university" type="text" class="Input" readonly="readonly" value="Universidad Carlos III de Madrid"/><br>
    <p>Language:</p>
    <select name="language">
        <option value = "en_US" label="English (US)"/>
        <option value = "es_ES" label="Spanish (ES)"/>
        <option value = "ru_RU" label="Russian (RU)"/>
    </select><br>
    <input name="accepted" type="checkbox" required/><label>I have read and accept the Terms of Use</label><br>
 
    <input value="Save" onclick="registerUser()" type="submit" class="authButton"/>
    <input type="reset" value="Delete" onclick="void()" class="authButton"/>
</form>`}, style :"./style/style-content-login.css", title:"Log-In"};
var forum = {get html() {return getTopicsPage()}, style : "./style/style-content-forum.css", title:"Forum"};

var courses = {style : "./style/style-content-courses.css", title:"Students", get html(){
            return getCoursesPage();
    }};

var course = {
    style : "./style/style-content-students.css", title: "Course",
    get html(){return "Empty Course"}
};
var courseGrades = {
    style : "./style/style-content-students.css", title: "Course",
    get html(){return "Empty Course Grades"}
};
var courseStudents = {
    style : "./style/style-content-students.css", title: "Course",
    get html(){return "Empty Course Grades"}
};
var grades = {style : "./style/style-content-grades.css", title:"Grades",
    get html(){
        return getGradesPage();
    }};
var copyright = {get html() {return `
<h1>Copyright Notice</h1>
<p>Copyright © <b>HGC Courses</b> 2020 All Rights Reserved

  All files and information contained in this Website or Blog are copyright by <b>HGC Courses</b>, and may not be duplicated, copied, modified or adapted, in any way without our written permission. Our Website or Blog may contain our service marks or trademarks as well as those of our affiliates or other companies, in the form of words, graphics, and logos. Your use of our Website, Blog or Services does not constitute any right or license for you to use our service marks or trademarks, without the prior written permission of <b>HGC Courses</b>. Our Content, as found within our Website, Blog and Services, is protected under United States and foreign copyrights. The copying, redistribution, use or publication by you of any such Content, is strictly prohibited. Your use of our Website and Services does not grant you any ownership rights to our Content.
  
  Copyright © <b>HGC Courses</b>. All Rights Reserved. </p>
`},style : "./style/style-content.css", title:"Copyright"};
var privacy = {get html() {return `<!-- This is the main part of this page, where we describe the privacy content and the information collection and use, in the middle section with two different headers with its respective paragraphs -->
<h1>Privacy Policy of HGC Courses</h1><!-- HEADER 1 -->
<p>HGC Courses operates the hgccourses.com website, which provides the SERVICE.</p>
<p>This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the HGC Courses website.</p>
<p>If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.</p>
<p>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at hgccourses.com, unless otherwise defined in this Privacy Policy.</p>
<h2>Information Collection and Use</h2> <!-- HEADER 2 -->
<p>For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.</p>
`}, style:"./style/style-content.css", title:"Privacy Policy"};
var aboutUs = {get html() {return ` <!-- This is the main part of the page, where we describe the section "about us" in the main part if the page, the middle section with its respective description about us -->
<h1>About Us</h1>
<p>This Web Page has been created by <b>Juan Carlos Cebrián Peñuela (100405916)</b>, <b>Manya Khanna (100362610)</b>, <b>Pablo Mestre Quilez</b> (100383692) and <b>Bogdan Andrei Baltes (100406687)</b>,</p>
`},style:"./style/style-content.css", title:"About us"};

// This map is used for locating the page content given a page title.
let pages = new Map();
pages.set(forum.title,forum);
pages.set(courses.title,courses);
pages.set(grades.title,grades);
pages.set(copyright.title,copyright);
pages.set(privacy.title,privacy);
pages.set(aboutUs.title,aboutUs);

$(document).ready(function() {
    //Restore the current page after page refresh.
    if(!pages.has(window.name.split(":")[0]))
        changeContent(courses);
    changeContent(pages.get(window.name.split(":")[0]),parseInt(window.name.split(":")[1]) >=0 ? window.name.split(":")[1]:undefined);
    addCourses();
});

function addCourses(){
    if(loggedUser.username!==undefined){
        let html ="";
        for(let i = 0; i<degreeCourses.get(loggedUser.degree).length;i++){
            html+= `<li><a href="javascript:changeContent(course,`+i+`)">`+degreeCourses.get(loggedUser.degree)[i]+`</a></li>`;
        }
        $("#navCourses").after(html);
    }
}

function downloadTable(user){
    $("#grades-"+user).table2excel({
        name: "Course Grades",
        filename: "grades-"+user+".xls",
        fileext: ".xls",
        preserveColors: true
    });
}

function changeContent(content, id){
    // If the user is not logged in, always redirect to the logIn page.
    if(loggedUser.username===undefined && content !== registerPage){
        content=loginPage;
    }

    // open a specific forum topic given an id
    if(content===forum && id!==undefined){
        content={
            get html(){return getTopicHtml(id);} ,
            style :"./style/style-content-forum.css",
            title:"Forum"
        };
    }
    if(content===course && id!==undefined){
        content= {
            get html() {
                return getCourseContentPage(id,loggedUser.role);
            },
            style : "./style/style-content-course.css",
            title : degreeCourses.get(loggedUser.degree)[id]
        };
    }
    if(content===courseGrades && id!==undefined){
        content= {
            get html() {
                return getCourseGradesPage(id,loggedUser.role);
            },
            style : "./style/style-content-grades.css",
            title : degreeCourses.get(loggedUser.degree)[id] + " Grades"
        };
    }
    if(content===courseStudents && id!==undefined){
        content= {
            get html() {
                return getCourseStudentsPage(id,loggedUser.role);
            },
            style : "./style/style-content-students.css",
            title : degreeCourses.get(loggedUser.degree)[id] + " Students"
        };
    }
    // Change content of the page.
    $("#content").html(content.html);
    // Change title of the page.
    $("title").html("HGC Courses - "+ content.title);
    // The title of the content is saved in the window name so it can be retrieved after refreshing the page.
    window.name=content.title+":"+id;
    $('html').animate({ scrollTop: 0 }, 'fast');
    if(loggedUser.username !== undefined){

        $("#loggedName").text(loggedUser.fullName);
        $("#loggedImg").attr("src",loggedUser.picture);
        $("#userHeader").show("slow");
    }else{
        $("#loggedName").text("Username");
        $("#loggedImg").attr("src","./images/profilepicture.png");
        $("#userHeader").hide("slow");
    }
    // If the current style is the same as the new content one, exit function, if not, remove the old style and apply the new one.
    let style = $('link[rel=stylesheet][id="content-style"]')
    if(content.style === style.attr("href")){
        return;
    }
    // Change the style of the content of the page.
    style.remove();
    $('head').append('<link id="content-style" rel="stylesheet" href="'+content.style+'">')
    // Close the events calendar in case it is open.
    $(".popup-overlay,.popup-content").removeClass("active");
}