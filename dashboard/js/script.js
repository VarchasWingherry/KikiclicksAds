const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})


// logout code
document.addEventListener("DOMContentLoaded", function () {
    // Get modal elements
    const logModal = document.getElementById("log-modal-pop");
    const logoutBtn = document.getElementById("logout-btn");
    const confirmYes = document.getElementById("log-confirmYes");
    const confirmNo = document.getElementById("log-confirmNo");

    // if (!logoutBtn || !logModal || !confirmYes || !confirmNo) {
    //     console.error("One or more elements not found. Check your HTML IDs.");
    //     return;
    // }

    // Show modal on logout click
    logoutBtn.addEventListener("click", function (event) {
        event.preventDefault();
        logModal.style.display = "block";
    });

    // Confirm logout
    confirmYes.addEventListener("click", function () {
        logModal.style.display = "none";
        alert("You have logged out!");
        window.location.href = "../../html/kikiclickadshome.html";
    });

    // Cancel logout
    confirmNo.addEventListener("click", function () {
        logModal.style.display = "none";
    });

    // Close modal when clicking outside
    window.addEventListener("click", function (event) {
        if (event.target === logModal) {
            logModal.style.display = "none";
        }
    });
});






// const searchButton = document.querySelector('#content nav form .form-input button');
// const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
// const searchForm = document.querySelector('#content nav form');

// searchButton.addEventListener('click', function (e) {
// 	if(window.innerWidth < 576) {
// 		e.preventDefault();
// 		searchForm.classList.toggle('show');
// 		if(searchForm.classList.contains('show')) {
// 			searchButtonIcon.classList.replace('bx-search', 'bx-x');
// 		} else {
// 			searchButtonIcon.classList.replace('bx-x', 'bx-search');
// 		}
// 	}
// })





// if(window.innerWidth < 768) {
// 	sidebar.classList.add('hide');
// } else if(window.innerWidth > 576) {
// 	searchButtonIcon.classList.replace('bx-x', 'bx-search');
// 	searchForm.classList.remove('show');
// }


// window.addEventListener('resize', function () {
// 	if(this.innerWidth > 576) {
// 		searchButtonIcon.classList.replace('bx-x', 'bx-search');
// 		searchForm.classList.remove('show');
// 	}
// })



// const switchMode = document.getElementById('switch-mode');

// switchMode.addEventListener('change', function () {
// 	if(this.checked) {
// 		document.body.classList.add('dark');
// 	} else {
// 		document.body.classList.remove('dark');
// 	}
// })






const ctx = document.getElementById('viewersChart').getContext('2d');

const viewersChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2024-06-01', '2024-06-02', '2024-06-03', '2024-06-04', '2024-06-05', '2024-06-06'],
        datasets: [{
            label: 'Number of Viewers',
            data: [120, 150, 170, 130, 190, 220],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day'
                },
                title: {
                    display: true,
                    text: 'Date'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Viewers'
                }
            }
        }
    }
});

function Delete(){
    const deletee=document.getElementById('addreview');
    deletee.remove();
}


