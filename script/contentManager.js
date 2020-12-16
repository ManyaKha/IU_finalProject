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
var blog = {get html() {return `<!--Article 1 HTML-->
<article> <!-- Here starts the main part of the page, the middle section --> <!-- Different sections for the different videos and images with its respective paragraphs -->
    <img class="articleBanner" src ="./images/HTML5 Logo.svg" width="200" height="200" alt="HTML 5 Logo">
    <h1>What is HTML?</h1>
    <p class="intro-p">Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document. </p>
    <div class="video-container"><!-- Video 1 -->
        <h2 class="video-title-reduced">HTML 5 as Fast As Posible</h2>
        <iframe width="420" height="236" src="https://www.youtube-nocookie.com/embed/IsXEVQRaTX8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h2 class="video-title-desktop">HTML 5 as Fast As Posible</h2>
        <p>HTML 5 explained as fast as posible. What changes did the fifth iteration of HTML bring? Why is a new HTML revision so important?</p>
    </div>
    <div class="video-container"><!-- Video 2 -->
        <h2 class="video-title-reduced">HTML Crash Course</h2>
        <iframe width="420" height="236" src="https://www.youtube-nocookie.com/embed/UB1O30fR-EE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h2 class="video-title-desktop">HTML Crash Course</h2>
        <p>This crash course will cram as much about HTML that posible. This is meant for absolute beginners. If you are interested in learning HTML but know nothing, then you are in the right place.</p>
    </div>
    <div class="video-container"><!-- Video 3 -->
        <h2 class="video-title-reduced">HTML History</h2>
        <iframe width="420" height="236" src="https://www.youtube-nocookie.com/embed/41mnNyMxPOA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h2 class="video-title-desktop">HTML History</h2>
        <p>The Internet existed before the Web, but the Web redefined the Internet - what started out as a protocol for helping scientists share documents and references has turned into one of the most important forces in the 21st century. But how did we get here?</p>
    </div>
</article>
<!--Article 2 CSS-->
<article><!-- Same functionality as the previous article --> <!-- Here starts the main part of the page, the middle section --> <!-- Different sections for the different videos and images with its respective paragraphs -->
    <img class="articleBanner" src ="./images/CSS3_logo.svg" width="200" height="200" alt="CSS 3 Logo">
    <h1>What is CSS?</h1>
    <p class="intro-p">Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics.</p>
    <div class="video-container">
        <h2 class="video-title-reduced">Learn CSS in 20 minutes </h2>
        <iframe width="420" height="236" src="https://www.youtube-nocookie.com/embed/1PnVor36_40" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h2 class="video-title-desktop">Learn CSS in 20 minutes </h2>
        <p>In this video we will cover everything you need to know to get up and running with CSS in only 20 minutes. We will cover CSS syntax, how to add CSS to your HTML, CSS colors, CSS units, the box model, and best practices for CSS...</p>
    </div>
    <div class="video-container">
        <h2 class="video-title-reduced">CSS Flexbox</h2>
        <iframe width="420" height="236" src="https://www.youtube-nocookie.com/embed/fYq5PXgSsbE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h2 class="video-title-desktop">CSS Flexbox</h2>
        <p>In this video we will cover everything you need to know about CSS flexbox in only 15 minutes. We will cover what flexbox is, how flexbox works, and the different properties you can use to layout and style your flexbox containers.</p>
    </div>
    <div class="video-container">
        <h2 class="video-title-reduced">CSS Grid </h2>
        <iframe width="420" height="236" src="https://www.youtube-nocookie.com/embed/9zBsdzdE4sM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h2 class="video-title-desktop">CSS Grid</h2>
        <p>In this video we will cover everything you need to know about CSS grid in only 20 minutes. We will cover what grid is, how grid differs from flexbox, how grid works, and the different properties you can use to layout and style your grid containers and items.</p>
    </div>
</article>	
<!--Article 3 JavaScript-->
<article><!-- Same functionality as the previous article --> <!-- Here starts the main part of the page, the middle section --> <!-- Different sections for the different videos and images with its respective paragraphs -->
    <img class="articleBanner" src ="./images/jslogo.png" width="200" height="200" alt="JavaScript Logo">
    <h1>What is JavaScript?</h1>
    <p class="intro-p">JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.

        Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it for client-side page behavior, and all major web browsers have a dedicated JavaScript engine to execute it. </p>
    <div class="video-container">
        <h2 class="video-title-reduced">JavaScript crash Course </h2>
        <iframe width="420" height="236" src="https://www.youtube-nocookie.com/embed/hdI2bqOjy3c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h2 class="video-title-desktop">JavaScript crash Course </h2>
        <p>In this crash course we will go over the fundamentals of JavaScript including more modern syntax like classes, arrow functions, etc. This is the starting point on my channel for learning JS.</p>
    </div>
    <div class="video-container">
        <h2 class="video-title-reduced">JavaScript Object Oriented</h2>
        <iframe width="420" height="236" src="https://www.youtube-nocookie.com/embed/vDJpGenyHaA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h2 class="video-title-desktop">JavaScript Object Oriented</h2>
        <p>In this video we will look at some of the object oriented programming concepts in JavaScript including: Object Literals, Constructors & This, Prototypes & Inheritence, Object.create(), ES6 Classes & Subclasses.</p>
    </div>
    <div class="video-container">
        <h2 class="video-title-reduced">JavaScript Full Course</h2>
        <iframe width="420" height="236" src="https://www.youtube-nocookie.com/embed/PkZNo7MFNFg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h2 class="video-title-desktop">JavaScript Full Course</h2>
        <p>This complete 134-part JavaScript tutorial for beginners will teach you everything you need to know to get started with the JavaScript programming language.</p>
    </div>
</article>`}, style :"./style/style-content-blog.css", title:"Home"};
var forum = {get html() {return getTopicsPage()}, style : "./style/style-content-forum.css", title:"Forum"};

var courses = {style : "./style/style-content-students.css", title:"Students", get html(){
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
var grades = {style : "./style/style-content-grades.css", title:"Grades",
    get html(){
        return getGradesPage();
    }};
var events = {get html() {return `
<h1> Next Events</h1>
<p>04/06/2020 - First HTML/CSS Exam</p>
<p>30/05/2020 - Create your own netflix - Assigment due date.</p>
<p>15/09/2019 - Deliver P1 (OPTIONAL)</p>
<p>12/09/2019 - Introduction Test</p>
<p>07/09/2019 - Course Presentation.</p>
`}, style : "./style/style-content.css", title:"Events"};
var news = {get html() {return `
<h1> Last News</h1> <!-- HEADER FOR THE NEWS -->
<!-- NEWS DESCRIPTION -->
<p>24/04/2020 - CSS post published</p>
<p>20/01/2020 - HTML post published</p>
<p>18/09/2019 - Added HTML article</p>
<p>24/09/2019 - Mondey leture delayed</p>
<p>07/01/2019 - Welcome to the Course</p>
`},style : "./style/style-content.css", title:"News"};
var copyright = {get html() {return `
<h1>Copyright Notice</h1>
<p>Copyright © <b>HGC Courses</b> 2020 All Rights Reserved

  All files and information contained in this Website or Blog are copyright by <b>HGC Courses</b>, and may not be duplicated, copied, modified or adapted, in any way without our written permission. Our Website or Blog may contain our service marks or trademarks as well as those of our affiliates or other companies, in the form of words, graphics, and logos. Your use of our Website, Blog or Services does not constitute any right or license for you to use our service marks or trademarks, without the prior written permission of <b>HGC Courses</b>. Our Content, as found within our Website, Blog and Services, is protected under United States and foreign copyrights. The copying, redistribution, use or publication by you of any such Content, is strictly prohibited. Your use of our Website and Services does not grant you any ownership rights to our Content.
  
  Copyright © Orion Systems. All Rights Reserved. </p>
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
pages.set(blog.title,blog);
pages.set(forum.title,forum);
pages.set(courses.title,courses);
pages.set(grades.title,grades);
pages.set(events.title,events);
pages.set(news.title,news);
pages.set(copyright.title,copyright);
pages.set(privacy.title,privacy);
pages.set(aboutUs.title,aboutUs);

$(document).ready(function() {
    //Restore the current page after page refresh.
    if(!pages.has(window.name.split(":")[0]))
        changeContent(blog);
    changeContent(pages.get(window.name.split(":")[0]),parseInt(window.name.split(":")[1]) >=0 ? window.name.split(":")[1]:undefined);
});

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
            title : degreeCourses.get(loggedUser.degree)[id] + "Grades"
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