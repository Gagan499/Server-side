const users = {
    admin: { username: "admin", password: "admin123", role: "admin" },
    employee: { username: "employee", password: "employee123", role: "employee" }
};

const apppage = document.getElementById('app');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const originalContent = apppage.innerHTML;

document.addEventListener('DOMContentLoaded', () => {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const user = Object.values(users).find(user =>
            user.username === username && user.password === password
        );

        if (user) {
            if (user.role === 'admin') {
                apppage.innerHTML = `
                <div class="admindashboard">
            <div class="navbar-admin">
                <ul>
                    <li><a id="team-1-admin" onclick="teamcontainer1()">Team 1</a></li>
                    <li><a id="team-2-admin" onclick="teamcontainer2()">Team 2</a></li>
                    <li><a id="team-3-admin" onclick="teamcontainer3()">Team 3</a></li>
                    <li><a id="team-4-admin" onclick="teamcontainer4()">Team 4</a></li>
                </ul>
            </div>
            <div id="team-admin">
                <div id="team1-admin">
                    <div class="leader-admin" class="member-admin">
                        <img src="dummy-person.jpg">
                        <p>Leader-Gagan</p>
                    </div>
                    <div class="member-admin">
                        <img src="dummy-person.jpg">
                        <p>David</p>
                    </div>
                    <div class="member-admin">
                        <img src="dummy-person.jpg">
                        <p>Bob</p>
                    </div>
                    <div class="member-admin">
                        <img src="dummy-person.jpg">
                        <p>Charlie</p>
                    </div>
                </div>
            </div>
            <div class="showcontainer-admin" style="display: none;">
                <div id="showdetails-admin">
                    <div class="calendar" id="calendar-admin"></div>
                    <div class="show-image-details-admin">
                        <img src="">
                        <p></p>
                    </div>
                    <div class="navbar-showdetils-admin">
                        <a id="progress">Progress</a>
                        <a id="application">Application</a>
                    </div>
                </div>
            </div>
            <button id="logoutadmin">Logout</button>
        </div>`;
        adminmemberclicks();

                document.getElementById('logoutadmin').addEventListener('click', function () {
                    apppage.innerHTML = originalContent;
                    loginError.textContent = '';
                });
            } else if (user.role === 'employee') {
                apppage.innerHTML = `
                <div class="employeedash">
                    <h1>Employee Dashboard</h1>
                    <div class="navbar">
                    <ul>
                        <li><a id="team1" onclick="team1container()">Team 1</a></li>
                        <li><a id="team2" onclick="team2container()">Team 2</a></li>
                        <li><a id="team3" onclick="team3container()">Team 3</a></li>
                        <li><a id="team4" onclick="team4container()">Team 4</a></li>
                    </ul>
                    </div>
                    <div class="team1" id="teamcontainer">
                        <div class="team-leader">
                            <img src="dummy-person.jpg" alt="Team Leader" class="teamleader">
                            <p>Leader-Gagan</p>
                        </div>
                        <div class="team-member team-member-1">
                            <img src="dummy-person.jpg" alt="Team Member 1" class="mem-1">
                            <p>David</p>
                        </div>
                        <div class="team-member team-member-2">
                            <img src="dummy-person.jpg" alt="Team Member 2" class="mem-2">
                            <p>Bob</p>
                        </div>
                        <div class="team-member team-member-3">
                            <img src="dummy-person.jpg" alt="Team Member 3" class="mem-3">
                            <p>Charlie</p>
                        </div>
                    </div>
                    <div id="showdetails" style="display: none;">
                        <div class="calendar" id="calendar"></div> <!-- Calendar Container -->
                        <div class="show-image">
                            <img src="" alt="Member Image">
                            <p>Member Details</p>
                        </div>
                        <div class="assign-complete-task">
                            <a id="assign">Assign Task</a>
                            <a id="complete">Complete Task</a>
                        </div>
                        <div class="show-count-task" id="show-count-task">
                        </div>
                    </div>
                    
                    <button id="logoutEmployee">Logout</button>
                </div>
            `;

                memberclicks(); // Attach event listeners for team members

                document.getElementById('logoutEmployee').addEventListener('click', function () {
                    apppage.innerHTML = originalContent;
                    loginError.textContent = '';
                });
            }
        } else {
            loginError.textContent = "Invalid username or password.";
        }
    });
});

function team1container() {
    const teamcontainer = document.getElementById('teamcontainer');
    teamcontainer.innerHTML = `
        <div class="team-leader">
            <img src="dummy-person.jpg" alt="Team Leader" class="teamleader">
            <p>Leader-Gagan</p>
        </div>
        <div class="team-member team-member-1">
            <img src="dummy-person.jpg" alt="Team Member 1" class="mem-1">
            <p>David</p>
        </div>
        <div class="team-member team-member-2">
            <img src="dummy-person.jpg" alt="Team Member 2" class="mem-2">
            <p>Bob</p>
        </div>
        <div class="team-member team-member-3">
            <img src="dummy-person.jpg" alt="Team Member 3" class="mem-3">
            <p>Charlie</p>
        </div>
    `;
    memberclicks(); // Attach event listeners to team members
}
function team2container() {
    const teamcontainer = document.getElementById('teamcontainer');
    teamcontainer.innerHTML = ` 
        <div class="team-leader">
            <img src="dummy-person.jpg" alt="Team Leader" class="teamleader">
            <p>Leader-bilaskhan</p>
        </div>
        <div class="team-member team-member-1">
            <img src="dummy-person.jpg" alt="Team Member 1" class="mem-1">
            <p>Adam</p>
        </div>
        <div class="team-member team-member-2">
            <img src="dummy-person.jpg" alt="Team Member 2" class="mem-2">
            <p>Eve</p>
        </div>
        <div class="team-member team-member-3">
            <img src="dummy-person.jpg" alt="Team Member 3" class="mem-3">
            <p>Noah</p>
        </div> `
        ;
    memberclicks();
}

// Define team3container similarly
function team3container() {
    const teamcontainer = document.getElementById('teamcontainer');
    teamcontainer.innerHTML = `
        <div class="team-leader">
            <img src="dummy-person.jpg" alt="Team Leader" class="teamleader">
            <p>Leader-Armanpreet Kaur</p>
        </div>
        <div class="team-member team-member-1">
            <img src="dummy-person.jpg" alt="Team Member 1" class="mem-1">
            <p>John</p>
        </div>
        <div class="team-member team-member-2">
            <img src="dummy-person.jpg" alt="Team Member 2" class="mem-2">
            <p>Jane</p>
        </div>
        <div class="team-member team-member-3">
            <img src="dummy-person.jpg" alt="Team Member 3" class="mem-3">
            <p>Smith</p>
        </div>  `
        ;
    memberclicks();
}

// Define team4container similarly
function team4container() {
    const teamcontainer = document.getElementById('teamcontainer');
    teamcontainer.innerHTML = ` 
        <div class="team-leader">
            <img src="dummy-person.jpg" alt="Team Leader" class="teamleader">
            <p>Leader-Jashan</p>
        </div>
        <div class="team-member team-member-1">
            <img src="dummy-person.jpg" alt="Team Member 1" class="mem-1">
            <p>Alice</p>
        </div>
        <div class="team-member team-member-2">
            <img src="dummy-person.jpg" alt="Team Member 2" class="mem-2">
            <p>Bob</p>
        </div>
        <div class="team-member team-member-3">
            <img src="dummy-person.jpg" alt="Team Member 3" class="mem-3">
            <p>Charlie</p>
        </div>`
        ;
    memberclicks();
}
function memberclicks() {
    const showdetails = document.getElementById('showdetails');
    const showImage = document.querySelector('.show-image img');
    const memberDetails = showdetails.querySelector('p');
    const calendar = document.getElementById('calendar');
    const members = document.querySelectorAll('.team-member');

    members.forEach(member => {
        member.addEventListener('click', () => {
            const leaves = randomleaves();
            const name = member.querySelector('p').textContent;
            showdetailsfunc(name, showImage, memberDetails, calendar, leaves);
        });
    });
    members.forEach(member => {
        const assignwork = document.getElementById('assign');
        const completework = document.getElementById('complete');
        const assigncompletework = document.getElementById('show-count-task');
        let count = Math.floor(Math.random()*10)+1;

        assignwork.addEventListener('click', () => {
            assigncompletework.innerHTML = `<p>Assigned Task is ${count}</p>`;
        });
        completework.addEventListener('click', () => {
            count = Math.max(0, count - 3);
            assigncompletework.innerHTML = `<p>completed Task is ${count}</p>`;
        })
    })
}

function showdetailsfunc(name, showImage, memberDetails, calendar, leaves) {
    showdetails.style.display = 'flex';
    showdetails.style.height = '245px';
    showImage.src = 'dummy-person.jpg';
    memberDetails.textContent = name;
    calendar.innerHTML = ''; // Clear previous calendar

    for (let i = 1; i <= 30; i++) {
        const day = document.createElement('div');
        day.classList.add('calendar-day');
        if (leaves.includes(i)) {
            day.classList.add('leave-taken');
            day.textContent = i;
        } else {
            day.classList.add('no-leave');
            day.textContent = i;
        }
        calendar.appendChild(day);
    }
}

function randomleaves() {
    let leavesarray = [];
    let maxleave = 10;
    while (leavesarray.length <= maxleave) {
        const randomday = Math.floor(Math.random() * 30) + 1;
        leavesarray.push(randomday);
    }
    return leavesarray;
}