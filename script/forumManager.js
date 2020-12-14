function  Topic (title,messages){
    this.title=title;
    this.messages = messages;
    this.page = function (id){
        let pageContent =`<h1 id = "content-title">Topic: `+this.title+`</h1>
        <div id = "forum">
            <div>`;
        for(let i=0; i<this.messages.length;i++){
            let role = "";
            switch (this.messages[i].user.role){
                case 0: role = "Student";break;
                case 1: role = "Teacher";break;
                case 2: role = "Administrator";break;
            }
            pageContent +=`
            <div class="message">
                <table > 
                    <tr>
                        <th class="id">#`+i+`</th>
                        <th class="timestamp">`+this.messages[i].timestamp.toLocaleDateString()+" "+this.messages[i].timestamp.toLocaleTimeString()+`</th>
                    </tr>
                    <tr>
                        <td class="userInfo">
                            <div class="image-cropper">
				                <img class ="loggedImg" src='`+this.messages[i].user.picture+`'  alt="Profile Picture"/>
			                </div>
			                <h2>`+this.messages[i].user.fullName+`</h2>
			                <h3>`+role+`</h3>
                        </td>
                        <td class="messageContent">
                            <p>`+this.messages[i].content+`</p>
                        </td>
                    </tr>
                </table>
            </div>`;
        }
        pageContent += `</div>
            </div>
            <h1>New Message:</h1>
            <textarea id="newMessage" name="Message Content" rows="7"></textarea>
            <input id="send" value="Send Message" onclick='addMessage(`+id+`)' type="button"/>
            `;

        return pageContent;
    }
}
function Message (user, content, timestamp){
    this.user=user;
    this.content = content;
    this.timestamp = timestamp;
}

let topics = [
    new Topic(
        "Exercise P1 Question",[
            new Message(users[1],
                "Hello everyone! I have a question about P1. As you can see in the exercise statement, the FIGURE 3 does not correspond to the instructions given in class." +
                "<br> Is this an error? If not, where can I find notes about it?", new Date(1601029411000)),
            new Message(users[4],"Hi José, I also have the same doubt. I can't remember anything related to FIGURE 3 from the past lectures." +
                "<br>Let's see if a Teacher/Administrator can give some light on the question.", new Date(1601037041000)),
            new Message(users[10], "Hi! In fact, Figure 3 is wrong. I'll update the corrected document as soon as possible.",new Date(1601053781000))
        ]),
    new Topic(
        "Exam 1 Review",[
            new Message(users[11],
                "Dear students, this is a reminder that this Friday we will be reviewing the problems from midterm 1.", new Date(1603789961000))
        ]),
    new Topic(
        "Test 2 Date",[
            new Message(users[10],
                "It's time to choose a date for the next test. Please choose and reply with one of the following dates." +
                "<br><br> 10/11/2020 <br> 13/11/2020 <br> 16/11/2020", new Date(1604237641000)),
            new Message(users[4],
                "10/11/2020", new Date(1604240832000)),
            new Message(users[2],
                "16/11/2020", new Date(1604254254000)),
            new Message(users[9],
                "10/11/2020", new Date(1604259692000))
        ]),
];
function addMessage(id){
    let content = $("#newMessage").val();
    if(content===undefined || content ===""){
        alert("Please message content cannot be empty");
        return;
    }
    topics[id].messages.push(new Message(loggedUser, content,new Date()));
    changeContent(forum,id);
}
function getTopicsPage(){
    let page = `<h1 id = "content-title">Forum</h1>
        <div id = "forum">
            <div>
                <table> <!-- this is the table where we will be representing the forum, each row will be a different topic-->
                    <tr> <!-- Different classes for the title of the topic, the messages and the last message date -->
                        <th></th> <!-- COLUMNS -->
                        <th>Topic</th>
                        <th>Messages</th>
                        <th>Last Message</th>
                    </tr>`;
    for(let i=0;i<topics.length;i++){
        page+=`<tr class="topic" onclick='changeContent(forum,`+i+`)'>
                <td class="forum-icon">
                    <svg class="icon" width = "60" height="60" viewbox="0 0 423.789 423.789" aria-hidden="true">
                        <path d="M423.789,225.29c0-52.537-50.816-95.767-116.583-100.102c-7.191-9.469-15.979-18.275-26.273-26.207
                                c-31.04-23.916-72.165-37.086-115.8-37.086c-43.634,0-84.759,13.171-115.799,37.086C17.521,123.492,0,156.321,0,191.42
                                c0,55.275,44.811,104.246,110.372,122.249c-3.909,6.604-11.674,16.833-26.906,29.81c-2.959,2.521-4.189,6.53-3.153,10.277
                                c1.036,3.748,4.151,6.554,7.985,7.197c0.575,0.097,5.865,0.941,14.5,0.941c0.001,0,0.001,0,0.002,0
                                c23.175,0,67.583-6.021,107.382-45.818c6.59-1.457,12.992-3.22,19.185-5.264c9.889,4.816,20.515,8.524,31.686,11.048
                                c30.757,30.437,64.927,34.909,82.347,34.909c6.711-0.001,10.939-0.664,11.525-0.762c3.834-0.643,6.949-3.45,7.985-7.197
                                c1.036-3.747-0.193-7.755-3.153-10.277c-9.412-8.02-14.932-14.569-18.141-19.272C390.578,304.654,423.789,267.339,423.789,225.29z
                                M210.133,228.895h-90c-5.523,0-10-4.477-10-10s4.477-10,10-10h90c5.523,0,10,4.477,10,10S215.656,228.895,210.133,228.895z
                                M240.133,179.561h-150c-5.523,0-10-4.477-10-10c0-5.523,4.477-10,10-10h150c5.523,0,10,4.477,10,10
                                C250.133,175.084,245.656,179.561,240.133,179.561z M325.373,302.767c-5.051,1.065-8.461,5.799-7.871,10.927
                                c0.224,1.946,1.705,9.83,11.347,21.917c-15.384-2.515-36.304-9.878-55.581-29.844c-1.401-1.451-3.208-2.445-5.184-2.85
                                c-4.193-0.86-8.289-1.921-12.288-3.155c45.494-23.441,74.471-63.779,74.471-108.342c0-15.473-3.409-30.503-9.942-44.576
                                c20.77,3.551,39.708,11.696,54.598,23.678c18.615,14.979,28.867,34.429,28.867,54.768
                                C403.789,261.171,371.543,293.03,325.373,302.767z"
                                />
                    </svg>
                </td> <!-- ROW 1 -->
                <td class="title">`+topics[i].title+`</td>
                <td class="messages">`+topics[i].messages.length+`</td>
                <td class="date">`+topics[i].messages[topics[i].messages.length-1].timestamp.toLocaleDateString()+`<br>`+topics[i].messages[topics[i].messages.length-1].timestamp.toLocaleTimeString()+`</td>
            </tr>`;
    }
    page += `    </table>
            </div>
        </div>`;
    return page;
}
function getTopicHtml(id){
    return topics[id].page(id);
}
function getTopicTitle(id){
    return topics[id].title;
}