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
                            <p>Team Leader</p>
                        </div>
                        <div class="team-member team-member-1">
                            <img src="dummy-person.jpg" alt="Team Member 1" class="mem-1">
                            <p>David</p>
                        </div>
                        <div class="team-member team-member-2">
                            <img src="dummy-person.jpg" alt="Team Member 1" class="mem-1">
                            <p>Boob</p>
                        </div>
                        <div class="team-member team-member-3">
                            <img src="dummy-person.jpg" alt="Team Member 1" class="mem-1">
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
                            <p>Assign Task</p>
                            <p>Complete Task</p>
                        </div>
                        <div class="show-count-task"></div>
                    </div>
                    
                    <button id="logoutEmployee">Logout</button>
                </div>
            `;
            const showdetails = document.getElementById('showdetails');
            const showImage = document.querySelector('.show-image img');
            const memberDetails = showdetails.querySelector('p');
            const calendar = document.getElementById('calendar');
            const leaves = [1, 5, 7, 10, 11, 16, 15]; // Sample leave days

            const member1 = document.querySelector('.team-member-1');
            const member2 = document.querySelector('.team-member-2');
            const member3 = document.querySelector('.team-member-3');

            member1.addEventListener('click', () => {
                showdetails.style.display = 'flex';
                showdetails.style.height = '245px';
                showImage.src = 'dummy-person.jpg';
                memberDetails.textContent = 'David';
                calendar.innerHTML = ''; // Clear previous calendar

                // Generate the calendar
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
            });
            member2.addEventListener('click', () => {
                showdetails.style.display = 'flex';
                showdetails.style.height = '245px';
                showImage.src = 'dummy-person.jpg';
                memberDetails.textContent = 'Boob';
                calendar.innerHTML = ''; // Clear previous calendar

                // Generate the calendar
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
            });
            member3.addEventListener('click', () => {
                showdetails.style.display = 'flex';
                showdetails.style.height = '245px';
                showImage.src = 'dummy-person.jpg';
                memberDetails.textContent = 'Charlie';
                calendar.innerHTML = ''; // Clear previous calendar

                // Generate the calendar
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
            });

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
                <p>Team Leader</p>
            </div>
            <div class="team-member team-member-1">
                <img src="dummy-person.jpg" alt="Team Member 1" class="mem-1">
                <p>David</p>
            </div>
            <div class="team-member team-member-2">
                <img src="dummy-person.jpg" alt="Team Member 1" class="mem-1">
                <p>Boob</p>
            </div>
            <div class="team-member team-member-3">
                <img src="dummy-person.jpg" alt="Team Member 1" class="mem-1">
                <p>Charlie</p>
            </div>
        `;
        memberclicks(); // Attach event listeners to team members
    }
// Function for team 2 container (similar to team1container)
function team2container() {
const teamcontainer = document.getElementById('teamcontainer');
teamcontainer.innerHTML = `
<div class="team-leader">
    <img src="dummy-person.jpg" alt="Team Leader" class="teamleader">
    <p>Team Leader of Team 2</p>
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
</div>
`;
memberclicks(); // Attach event listeners to team members
}

// Define team3container similarly
function team3container() {
const teamcontainer = document.getElementById('teamcontainer');
teamcontainer.innerHTML = `
<div class="team-leader">
    <img src="dummy-person.jpg" alt="Team Leader" class="teamleader">
    <p>Team Leader of Team 3</p>
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
</div>
`;
memberclicks(); // Attach event listeners to team members
}

// Define team4container similarly
function team4container() {
const teamcontainer = document.getElementById('teamcontainer');
teamcontainer.innerHTML = `
<div class="team-leader">
    <img src="dummy-person.jpg" alt="Team Leader" class="teamleader">
    <p>Team Leader of Team 4</p>
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
</div>
`;
memberclicks(); // Attach event listeners to team members
}


    // Function for handling member clicks
    function memberclicks() {
        const showdetails = document.getElementById('showdetails');
        const showImage = document.querySelector('.show-image img');
        const memberDetails = showdetails.querySelector('p');
        const calendar = document.getElementById('calendar');
        const leaves = [1, 5, 7, 10, 11, 16, 15];

        const member1 = document.querySelector('.team-member-1');
        const member2 = document.querySelector('.team-member-2');
        const member3 = document.querySelector('.team-member-3');

        member1.addEventListener('click', () => showdetailsfunc('David', showImage, memberDetails, calendar, leaves));
        member2.addEventListener('click', () => showdetailsfunc('Boob', showImage, memberDetails, calendar, leaves));
        member3.addEventListener('click', () => showdetailsfunc('Charlie', showImage, memberDetails, calendar, leaves));
    }

    // Function for displaying member details and calendar
    function showdetailsfunc(name, showImage, memberDetails, calendar, leaves) {
        const showdetails = document.getElementById('showdetails');
        showdetails.style.display = 'flex';
        showdetails.style.height = '245px';
        showImage.src = 'dummy-person.jpg';  // Dummy image path
        memberDetails.textContent = name;
        calendar.innerHTML = ''; // Clear previous calendar

        // Generate the calendar
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