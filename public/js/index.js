const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  lerp: 0.03,
});

// Toggle Sidebar Function
function toggleSidebar() {
    let button = document.querySelector("#sidebarBtn");
    let sidebar = document.querySelector("#sidebar");
    button.addEventListener("click", function () {
      sidebar.classList.toggle("active");
      if (sidebar.classList.contains('active')) {
        button.textContent = "Close+";
        button.style.color = 'black'
        
    } else {
        button.textContent = "Menu+";
        button.style.color = 'white'
      }
    });
  }
  
toggleSidebar();
