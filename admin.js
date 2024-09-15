
function teamcontainer1() {
    const team = document.getElementById('team1-admin');
    team.innerHTML = `
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
`;
adminmemberclicks();
}
function teamcontainer2() {
    const team = document.getElementById('team1-admin');
    team.innerHTML = `
                    <div class="leader-admin" class="member-admin">
                        <img src="dummy-person.jpg">
                        <p>Leader-bilaskhan</p>
                        </div>
                        <div class="member-admin">
                        <img src="dummy-person.jpg">
                        <p>Adam</p>
                        </div>
                        <div class="member-admin">
                        <img src="dummy-person.jpg">
                        <p>Eve</p>
                        </div>
                        <div class="member-admin">
                        <img src="dummy-person.jpg">
                        <p>Noah</p>
                        </div>
                        `;
                        adminmemberclicks();
                    }
                    function teamcontainer3() {
    const team = document.getElementById('team1-admin');
    team.innerHTML = `
                    <div class="leader-admin" class="member-admin">
                        <img src="dummy-person.jpg">
                        <p>Leader-Arman</p>
                        </div>
                    <div class="member-admin">
                    <img src="dummy-person.jpg">
                    <p>John</p>
                    </div>
                    <div class="member-admin">
                    <img src="dummy-person.jpg">
                    <p>Jane</p>
                    </div>
                    <div class="member-admin">
                    <img src="dummy-person.jpg">
                    <p>Smith</p>
                    </div>
                    `;
                    adminmemberclicks();
                }
                function teamcontainer4() {
                    const team = document.getElementById('team1-admin');
                    team.innerHTML = `
                    <div class="leader-admin" class="member-admin">
                    <img src="dummy-person.jpg">
                        <p>Leader-Jashan</p>
                    </div>
                    <div class="member-admin">
                        <img src="dummy-person.jpg">
                        <p>Alice</p>
                        </div>
                        <div class="member-admin">
                        <img src="dummy-person.jpg">
                        <p>Bob</p>
                        </div>
                        <div class="member-admin">
                        <img src="dummy-person.jpg">
                        <p>Charlie</p>
                        </div>
                        `;
                        adminmemberclicks();
}
function adminmemberclicks() {
    const showdetailsadmin = document.querySelector('.showcontainer-admin');
    const leaves = [1, 5, 8, 9, 14, 25];  // Example leave dates
    const admincalendar = document.getElementById('calendar-admin');
    const showadminimage = document.querySelector('.show-image-details-admin img');
    const alladminmembers = document.querySelectorAll('.member-admin');
    const memberdetails = showdetailsadmin.querySelector('p');

    alladminmembers.forEach(member => {
        member.addEventListener('click', () => {
            const nameadmin = member.querySelector('p').textContent;
            displayAdminDetails(nameadmin, showadminimage, memberdetails, admincalendar, leaves);
        });
    });
}

function displayAdminDetails(nameadmin, showadminimage, memberdetails, admincalendar, leaves) {
    const showdetailsadmin = document.querySelector('.showcontainer-admin');
    showdetailsadmin.style.display = 'flex';  // Make the details visible
    showadminimage.src = 'dummy-person.jpg';  // Use default image
    memberdetails.textContent = nameadmin;  // Set the member name

    admincalendar.innerHTML = '';  // Clear the previous calendar days

    for (let i = 1; i <= 30; i++) {
        const day = document.createElement('div');
        day.classList.add('calendar-day');
        if (leaves.includes(i)) {
            day.classList.add('leave-taken');
        } else {
            day.classList.add('no-leave');
        }
        day.textContent = i;  // Display day number
        admincalendar.appendChild(day);
    }
}


