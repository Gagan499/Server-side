
function teamcontainer1() {
    const team = document.getElementById('team1-admin');
    team.innerHTML = `
                    <div class="leader-admin">
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
}
function teamcontainer2() {
    const team = document.getElementById('team1-admin');
    team.innerHTML = `
                    <div class="leader-admin">
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
}
function teamcontainer3() {
    const team = document.getElementById('team1-admin');
    team.innerHTML = `
                    <div class="leader-admin">
                        <img src="dummy-person.jpg">
                        <p>Leader-Armanpreet kaur</p>
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
}
function teamcontainer4() {
    const team = document.getElementById('team1-admin');
    team.innerHTML = `
                    <div class="leader-admin">
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
}
function adminmemberclicks() {
    const showdetailsadmin = document.getElementById('showdetails-admin');
    const showimageadmin = document.querySelector('.show-image-details-admin img');
    const calendar = document.getElementById('calender-admin');
    const membersadmin = document.querySelectorAll('.member-admin');

    membersadmin.forEach(member => {
        member.addEventListener('click', () => {
            const leaves = [1, 5, 8, 9, 14, 25];
            const name = member.querySelector('p').textContent;
            showadmindetails(name, showdetailsadmin, showimageadmin, calendar, leaves);
        });
    });
}

function showadmindetails(name, showdetailsadmin, showimageadmin, calendar, leaves) {
    showdetailsadmin.style.display = 'flex';
    showdetailsadmin.style.height = '245px';
    showimageadmin.src = 'dummy-person.jpg'; // Ensure dummy-person.jpg is the correct path
    showdetailsadmin.querySelector('.member-details').textContent = name;
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
