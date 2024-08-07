document.addEventListener("DOMContentLoaded", function() {
    const toggleMenuButton = document.querySelector('.toggle-menu');
    const closeSidebarButton = document.querySelector('.close-sidebar button');
    const sidebar = document.querySelector('.sidebar');

    toggleMenuButton.addEventListener('click', function() {
        sidebar.style.display = 'flex';
    });

    closeSidebarButton.addEventListener('click', function() {
        sidebar.style.display = 'none';
    });

    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !toggleMenuButton.contains(event.target)) {
            sidebar.style.display = 'none';
        }
    });
});
