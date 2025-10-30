const container = document.getElementById('container');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

 // Function to open/close the menu (called by the "More Info" button)
function toggleMobileMenu() {
    const menuItems = document.getElementById('mobile-menu-items');
    menuItems.classList.toggle('active'); // Toggles the CSS class
}

document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links inside the mobile menu.
    document.querySelectorAll('#mobile-menu-items .nav-link-item').forEach(link => {
        link.addEventListener('click', function(e) {
            
            const targetId = this.getAttribute('href');
            
            // 💥 FIX 1: CLOSE THE MENU FIRST (Always executed on link click)
            const menuItems = document.getElementById('mobile-menu-items');
            if (menuItems && menuItems.classList.contains('active')) {
                // This removes the 'active' class to close the menu immediately.
                menuItems.classList.remove('active');
            }
            // ------------------------------------------------------------
            
            // 💥 FIX 2: ONLY APPLY preventDefault, scroll, and highlight 
            // TO INTERNAL HASH LINKS (which start with #)
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault(); 
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    
                    // ACTION 2: Smoothly scroll to the target section
                    targetElement.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });

                    // ACTION 3 & 4: Highlight the section for 5 seconds
                    targetElement.classList.add('highlight-flash');
                    
                    setTimeout(() => {
                        targetElement.classList.remove('highlight-flash');
                    }, 5000); 
                }
            }
            // If the link is not a hash link (like an external link), 
            // the menu is already closed, and the browser follows the link normally.
        });
    });
    
    // IMPORTANT: Also add an event listener for the Search button inside the menu 
    // to close the menu after the user clicks Search.
    document.querySelector('#mobile-menu-items .search-btn')?.addEventListener('click', function(e) {
        const menuItems = document.getElementById('mobile-menu-items');
        if (menuItems && menuItems.classList.contains('active')) {
            menuItems.classList.remove('active');
        }
    });
});


// Function to handle the smooth scroll when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // This makes the scroll smooth
    });
}

// Function to show/hide the button based on scroll position
function scrollFunction() {
    const mybutton = document.getElementById("scrollToTopBtn");
    // Show the button when scrolling down 300px (or any distance you choose)
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.classList.add('show');
    } else {
        mybutton.classList.remove('show');
    }
}

// Add the scroll event listener to the window
window.onscroll = function() {
    scrollFunction();
};

// =========================================================================
// NOTE: Ensure your existing code is included above or below this.
// For example, your existing JS should still be there:
// const container = document.getElementById('container'); // ... etc
// =========================================================================
