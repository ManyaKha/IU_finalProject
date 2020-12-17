const degrees = ["Degree in Computer Science","Degree in Industrial Design","Degree in Physics Engineering","Degree in Mechanical Engineering"];
const degreeCourses = new Map();
degreeCourses.set(0, ["User Interfaces","Calculus","Linear Algebra", "Programming"]);
degreeCourses.set(1, ["Physics I","Physics II", "Calculus", "Linear Algebra"]);
degreeCourses.set(2,["Principles of Phisycs","Calculus", "Advanced Phisycs", "Linear Algebra"]);
degreeCourses.set(3, ["Physics I","Physics II", "Calculus", "Linear Algebra"]);
// Teacher has all courses.
degreeCourses.set(-1,["Physics I","Physics II", "Calculus", "Linear Algebra", "User Interfaces","Programming","Advanced Phisycs","Principles of Phisycs"]);

/**
 * Check that the specified course is part of the specified degree.
 * @param degree Degree ID
 * @param course CourseID.
 * @returns {boolean}
 */
function degreeContainsCourse(degree, course){
    for (let i=0;i<4;i++) {
        if(degreeCourses.get(degree)[i]===degreeCourses.get(loggedUser.degree)[course])
            return true;
    }
    return false;
}

/**
 * Represents an activity for a course.
 * @param course Course Name
 * @param title Title of the activity.
 * @param dueDate Due date for the activity.
 * @constructor
 */
function Activity(course, title, dueDate){
    this.course = course;
    this.title = title;
    this.dueDate = dueDate;
    this.html = function (mode) {
        let stringTail = `<h3 class="due-date">(Due date:`+this.dueDate+`)</h3><svg class="deliver" width="15" height="15" viewBox="0 0 1000 1000" aria-hidden="true">
            <path d="M850,974.5H150c-77.3,0-140-65.3-140-145.9V646.3c0-20.1,15.7-36.5,35-36.5h70c19.3,0,35,16.3,35,36.5v109.4c0,40.3,31.3,72.9,70,72.9h560c38.7,0,70-32.7,70-72.9V646.3c0-20.1,15.7-36.5,35-36.5h70c19.3,0,35,16.3,35,36.5v182.3C990,909.2,927.3,974.5,850,974.5L850,974.5z M784.5,449.2c-14.2,14.8-37.1,14.8-51.3,0L570,279.1v367.2c0,20.1-15.7,36.5-35,36.5h-70c-19.3,0-35-16.3-35-36.5V279.1L266.8,449.2c-14.2,14.8-37.1,14.8-51.3,0l-51.3-53.4c-14.2-14.8-14.2-38.7,0-53.4L453.2,41.1c1.2-1.3,23.7-15.6,46.4-15.6c22.9,0,45.9,14.3,47.2,15.6l289.1,301.2c14.2,14.8,14.2,38.7,0,53.4L784.5,449.2L784.5,449.2z"/>
        </svg>`;
        let editSVG = `<svg class="edit" width="15" height="15" viewBox="0 0 1000 1000" aria-hidden="true">
            <path d="M242.3,990.3c-64.5,0-116.9-51.4-116.9-116V301.9c0-19.4,15.9-35.1,35.2-35.1c19.4,0,35.2,15.7,35.2,35.1v572.4c0,25.8,21,45.5,46.5,45.5h514.3c27,0,48-19.7,48-45.5V301.9c0-19.4,15.1-35.1,34.5-35.1c19.4,0,34.5,15.7,34.5,35.1v572.4c0,64.5-52.5,116-116.9,116H242.3L242.3,990.3z"/><path d="M954.9,149.2H687.6V44.8c0-19.4-16.3-35-35.6-35H348.1c-19.4,0-35.3,15.7-35.3,35v104.4H45.1C25.7,149.2,10,165,10,184.4c0,19.4,15.7,35.2,35.1,35.2h909.9c19.4,0,35.1-15.9,35.1-35.2C990,165,974.3,149.2,954.9,149.2L954.9,149.2z M617.1,149.2H383.2V78.7h233.9V149.2L617.1,149.2z"/><path d="M429.7,745.8V395.4c0-19.4-15.9-35.1-35.2-35.1c-19.4,0-35.2,15.7-35.2,35.1v350.4c0,19.4,15.9,35.1,35.2,35.1C413.8,780.8,429.7,765.1,429.7,745.8L429.7,745.8z"/><path d="M639.6,745.8V395.4c0-19.4-15.1-35.1-34.5-35.1c-19.4,0-34.5,15.7-34.5,35.1v350.4c0,19.4,15.1,35.1,34.5,35.1C624.5,780.8,639.6,765.1,639.6,745.8L639.6,745.8z"/>
        </svg>`
        return `<div class="activity"><h3 class="title">`+this.title+`</h3> `+ (mode >=1? editSVG:"") +(dueDate===undefined ? "":stringTail)+`</div>`;
    }
}

//Create all activities for each subject.
const activities = [
    new Activity("Physics I", "Presentation Slides"),
    new Activity("Physics I", "Unit I Slides"),
    new Activity("Physics I", "P1 Exercises", "22/12/2020"),
    new Activity("Physics I", "P1A Exercises corrected", "14/01/2021"),
    new Activity("Physics I", "Unit II Slides"),

    new Activity("Calculus", "Induction Slides"),
    new Activity("Calculus", "Module I. functions", "21/01/2021"),
    new Activity("Calculus", "Exercise week I. Function behaviours", "21/01/2021"),

    new Activity("Programming", "Module I. Introduction to python"),
    new Activity("Programming", "Module II. Loops and functions", "25/03/2021"),
    new Activity("Programming", "Module III. Objects and classes", "25/04/2021" ),

    new Activity("User interfaces", "Introduction to HTML", "05/12/2020"),
    new Activity("User interfaces", "Submission Assignment I"),
    new Activity("User interfaces", "CSS and JavaScript", "03/01/2021"),

    new Activity("Linear algebra", "Topic I. Matrix algebra"),
    new Activity("Linear algebra", "Topic II. Resolution of problems", "15/01/2021"),
    new Activity("Linear algebra", "Topic III. Complex algebra", "20/01/2021"),

    new Activity("Physics II", "Magnetism"),
    new Activity("Physics II", "Electricity", "09/02/2021"),
    new Activity("Physics II", "Midterm I. Topics I and II", "14/02/2021"),

    new Activity("Principles of physics", "Black holes"),
    new Activity("Principles of physics", "Astronomy", "17/03/2021"),
    new Activity("Principles of physics", "Stars","19/06/2021"),

    new Activity("Advanced physics", "Doppler effect"),
    new Activity("Advanced physics", "Exam I", "07/12/2020"),
    new Activity("Advanced physics", "Exam II", "24/12/2020"),
];

/**
 * Gets all activities for a course
 * @param course Course name.
 * @param mode User Role
 * @returns {string}
 */
function getActivities(course,mode){
    let html ="";
    activities.forEach(element => {
        if(element.course === course)
            html += element.html(mode);
    });
    return html;
}

/**
 * Shows all different courses available for the current user.
 * @returns {string}
 */
function getCoursesPage() {
    let html="";
    if(loggedUser.role===0){
        html = `<h1>My Courses</h1>
            <h2>`+(loggedUser.degree >=0?degrees[loggedUser.degree]:"All Courses")+`</h2>`;
        for(let i = 0; i<degreeCourses.get(loggedUser.degree).length;i++){
            html+= `<a href="javascript:changeContent(course,`+i+`)">`+degreeCourses.get(loggedUser.degree)[i]+`</a>`;
        }
    }else{
        html = `<h1>Manage Courses</h1>
            <h2>`+(loggedUser.degree >=0?degrees[loggedUser.degree]:"All Courses")+`</h2>`;
        for(let i = 0; i<degreeCourses.get(loggedUser.degree).length;i++){
            html+= `<div class="courseHolder"><div class="courseButton" onclick="changeContent(course,`+i+`)">`+degreeCourses.get(loggedUser.degree)[i]+`</div><svg class="delete" width="15" height="15" viewBox="0 0 1000 1000" aria-hidden="true">
            <path d="M242.3,990.3c-64.5,0-116.9-51.4-116.9-116V301.9c0-19.4,15.9-35.1,35.2-35.1c19.4,0,35.2,15.7,35.2,35.1v572.4c0,25.8,21,45.5,46.5,45.5h514.3c27,0,48-19.7,48-45.5V301.9c0-19.4,15.1-35.1,34.5-35.1c19.4,0,34.5,15.7,34.5,35.1v572.4c0,64.5-52.5,116-116.9,116H242.3L242.3,990.3z"/><path d="M954.9,149.2H687.6V44.8c0-19.4-16.3-35-35.6-35H348.1c-19.4,0-35.3,15.7-35.3,35v104.4H45.1C25.7,149.2,10,165,10,184.4c0,19.4,15.7,35.2,35.1,35.2h909.9c19.4,0,35.1-15.9,35.1-35.2C990,165,974.3,149.2,954.9,149.2L954.9,149.2z M617.1,149.2H383.2V78.7h233.9V149.2L617.1,149.2z"/><path d="M429.7,745.8V395.4c0-19.4-15.9-35.1-35.2-35.1c-19.4,0-35.2,15.7-35.2,35.1v350.4c0,19.4,15.9,35.1,35.2,35.1C413.8,780.8,429.7,765.1,429.7,745.8L429.7,745.8z"/><path d="M639.6,745.8V395.4c0-19.4-15.1-35.1-34.5-35.1c-19.4,0-34.5,15.7-34.5,35.1v350.4c0,19.4,15.1,35.1,34.5,35.1C624.5,780.8,639.6,765.1,639.6,745.8L639.6,745.8z"/>
        </svg><svg class="edit" width="15" height="15" viewBox="0 0 528.899 528.899" aria-hidden="true">
            <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981
		c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611
		C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069
		L27.473,390.597L0.3,512.69z"/>
        </svg></div>`;
        }
    }

    return html;
}

/**
 * Gets the content for a certain course depending on the current user role.
 * @param course Course ID.
 * @param mode User Mode (Role)
 * @returns {string} HTML
 */
function getCourseContentPage(course, mode){
    let studentButton = `<a href="javascript:changeContent(courseStudents,`+course+`)">Students</a>`;
    return `
        <h1> `+degreeCourses.get(loggedUser.degree)[course]+`</h1>
        <div class="button-holder">
        <a><b>Contents</b></a>
        <a href="javascript:changeContent(courseGrades,`+course+`)">Grades</a>`
        +(mode>=1?studentButton:"")+`
        </div>
        <div id="activities">
            `+ getActivities(degreeCourses.get(loggedUser.degree)[course],mode) +`
        </div>
    `;
}

/**
 * Gets the grades of the current student in the specified course. If the user is not a student, it will show the grades of all students.
 * @param course Course ID
 * @param mode User Mode (Role)
 * @returns {string} HTML
 */
function getCourseGradesPage(course, mode){
    function getStudentCourse(user){
        switch (degreeCourses.get(user.degree).findIndex(userCourse => userCourse===degreeCourses.get(loggedUser.degree)[course])){
            case 0: return user.course1;
            case 1: return user.course2;
            case 2: return user.course3;
            case 3: return user.course4;
        }
    }
    function getGrades(){
        if(mode===0){
            return `<div>
                <table id="grades-`+loggedUser.nia+`"> <!-- This is the table for the grades -->
                    <tr> <!-- Different columns of the table -->
                        <th>Activity 1</th>
                        <th>Activity 2</th>
                        <th>Activity 3</th>
                    </tr>
                    <tr> <!-- 1 ROW -->
                        <td>`+getStudentCourse(loggedUser)[0]+`</td>
                        <td>`+getStudentCourse(loggedUser)[1]+`</td>
                        <td>`+getStudentCourse(loggedUser)[2]+`</td>
                    </tr>
                </table>
            </div>`;
        }else{
            let table =`<div>
                <table id="grades-\`+loggedUser.nia+\`"> <!-- This is the table for the grades -->
                    <tr> <!-- Different columns of the table -->
                        <th>Student</th>
                        <th>Activity 1</th>
                        <th>Activity 2</th>
                        <th>Activity 3</th>
                    </tr>`;
            for(let i=0;i<users.length;i++){
                if(users[i].role===0 && degreeContainsCourse(users[i].degree,course)){
                    if(getStudentCourse(users[i])===undefined){
                        continue;
                    }

                    table+=`
                    <tr>
                        <td>`+users[i].fullName+`</td>  <!-- first column -->
                        <td>`+getStudentCourse(users[i])[0]+`</td>  <!-- second column -->
                        <td>`+getStudentCourse(users[i])[1]+`</td>  <!-- third column -->
                        <td>`+getStudentCourse(users[i])[2]+`</td>  <!-- fourth column -->
                    </tr>`;
                }
            }
            table+=`</table></div>`;
            return table;
        }
    }
    let studentButton = `<a href="javascript:changeContent(courseStudents,`+course+`)">Students</a>`;
    return `
        <h1> `+degreeCourses.get(loggedUser.degree)[course]+`</h1>
        <div class="button-holder">
        <a  href="javascript:changeContent(course,`+course+`)">Contents</a>
        <a><b>Grades</b></a>`
        +(mode>=1?studentButton:"")+`
        </div>
        `+getGrades();
}

/**
 * Gets a page with all the students in the given course.
 * @param course Course ID
 * @param mode User mode (Role)
 * @returns {string} HTML
 */
function getCourseStudentsPage(course, mode){
    function getStudentsPage (){
        let pageContent = `<div id="studends">`;
        for(let i = 0; i < users.length; i++){
            if(users[i].role!==0 || !degreeContainsCourse(users[i].degree,course))
                continue;

            pageContent+=
                `
            <!-- Student `+i+` -->
            <div class="student-container">
                <div class="student">
                    <img class="student-img" src ="`+users[i].picture+`" width="100" height="100" alt="Student profile picture">
                    <a href="mailto:`+users[i].email+`"><svg width = "60" height="60" viewbox="0 0 230.17 230.17" aria-hidden="true">
                        <path d="M230,49.585c0-0.263,0.181-0.519,0.169-0.779l-70.24,67.68l70.156,65.518c0.041-0.468-0.085-0.94-0.085-1.418V49.585z"/>
                        <path d="M149.207,126.901l-28.674,27.588c-1.451,1.396-3.325,2.096-5.2,2.096c-1.836,0-3.672-0.67-5.113-2.013l-28.596-26.647
                            L11.01,195.989c1.717,0.617,3.56,1.096,5.49,1.096h197.667c2.866,0,5.554-0.873,7.891-2.175L149.207,126.901z"/>
                        <path d="M115.251,138.757L222.447,35.496c-2.427-1.443-5.252-2.411-8.28-2.411H16.5c-3.943,0-7.556,1.531-10.37,3.866
                            L115.251,138.757z"/>
                        <path d="M0,52.1v128.484c0,1.475,0.339,2.897,0.707,4.256l69.738-67.156L0,52.1z"/>
                    </svg></a>
                    <div class="student-info">
                        <h1>`+users[i].fullName+`</h1>
                        <p><b>ID:</b> `+users[i].nia+(users[i].isExchange ? `<b> Exchange Student</b>`:"")+` </p>
                        <p>`+users[i].degreeName()+`</p>
                    </div>
                </div>
        </div>`
        }
        pageContent+=`</div>`;
        return pageContent;
    }
    let studentButton = `<a href="javascript:changeContent(courseStudents,`+course+`)"><b>Students</b></a>`;
    return `
        <h1 id="courseTitle"> `+degreeCourses.get(loggedUser.degree)[course]+`</h1>
        <div class="button-holder">
        <a  href="javascript:changeContent(course,`+course+`)">Contents</a>
        <a href="javascript:changeContent(courseGrades,`+course+`)">Grades</a>`
        +(mode>=1?studentButton:"")+`
        </div>
        `+getStudentsPage();
}