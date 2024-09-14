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
                apppage.innerHTML = ` Admin Dashboard HTML code here `;
                document.getElementById('logoutAdmin').addEventListener('click', function () {
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
    const leaves = [1, 5, 7, 10, 11, 16, 15]; // Sample leave days

    const members = document.querySelectorAll('.team-member');
    const assignwork = document.getElementById('assign');
    const completework = document.getElementById('complete');
    const assigncompletework = document.getElementById('show-count-task');
    let count = 5;

    members.forEach(member => {
        member.addEventListener('click', () => {
            const name = member.querySelector('p').textContent;
            showdetailsfunc(name, showImage, memberDetails, calendar, leaves);
        });
    });

    assignwork.addEventListener('click', (event) => {
        event.preventDefault();
        assigncompletework.innerHTML = `<p>Assigned Task is ${count + 2}</p>`;
    });
    completework.addEventListener('click', (event) => {
        event.preventDefault();
        assigncompletework.innerHTML = `<p>completed Task is ${count - 2}</p>`;
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
