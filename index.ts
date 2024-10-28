 
function toggleSkillsVisibility(): void {
   // Get the elements
   const skillsSection = document.getElementById('skills') as HTMLElement | null;
   const toggleButton = document.getElementById('button') as HTMLButtonElement | null;

   if (skillsSection && toggleButton) {
       // Get current computed display style
       let currentDisplay = window.getComputedStyle(skillsSection).display;
       console.log('Skills section display:', currentDisplay);

       // Toggle visibility and button text
       if (currentDisplay === 'none') {
           skillsSection.style.display = 'block'; // Show the section
           toggleButton.textContent = 'Hide Skills'; // Update button text
       } else {
           skillsSection.style.display = 'none'; // Hide the section
           toggleButton.textContent = 'Show Skills'; // Update button text
       }
   } else {
       console.error('Skills section or button not found in DOM.');
   }
}

// Ensure the DOM is loaded before adding event listener
if (typeof document !== "undefined") {
   document.addEventListener('DOMContentLoaded', () => {
      const toggleButton = document.getElementById('button') as HTMLButtonElement | null;
   
      if (toggleButton) {
          toggleButton.addEventListener('click', toggleSkillsVisibility);
      } else {
          console.error('Toggle button not found.');
      }
   });
}

  
function toggleLanguagesVisibility(): void {
   // Get the elements
   const skillsSection = document.getElementById('languages') as HTMLElement | null;
   const toggleButton = document.getElementById('languagesBtn') as HTMLButtonElement | null;

   if (skillsSection && toggleButton) {
       // Get current computed display style
       let currentDisplay = window.getComputedStyle(skillsSection).display;
       console.log('Skills section display:', currentDisplay);

       // Toggle visibility and button text
       if (currentDisplay === 'none') {
           skillsSection.style.display = 'block'; // Show the section
           toggleButton.textContent = 'Hide Languages'; // Update button text
       } else {
           skillsSection.style.display = 'none'; // Hide the section
           toggleButton.textContent = 'Show Languages'; // Update button text
       }
   } else {
       console.error('Skills section or button not found in DOM.');
   }
}

// Ensure the DOM is loaded before adding event listener
if (typeof document !== "undefined") {
   document.addEventListener('DOMContentLoaded', () => {
      const toggleButton = document.getElementById('languagesBtn') as HTMLButtonElement | null;
   
      if (toggleButton) {
          toggleButton.addEventListener('click', toggleLanguagesVisibility);
      } else {
          console.error('Toggle button not found.');
      }
   });
}

 
function toggleHobiesVisibility(): void {
   // Get the elements
   const skillsSection = document.getElementById('hobies') as HTMLElement | null;
   const toggleButton = document.getElementById('hobiesBtn') as HTMLButtonElement | null;

   if (skillsSection && toggleButton) {
       // Get current computed display style
       let currentDisplay = window.getComputedStyle(skillsSection).display;
       console.log('Skills section display:', currentDisplay);

       // Toggle visibility and button text
       if (currentDisplay === 'none') {
           skillsSection.style.display = 'block'; // Show the section
           toggleButton.textContent = 'Hide Languages'; // Update button text
       } else {
           skillsSection.style.display = 'none'; // Hide the section
           toggleButton.textContent = 'Show Languages'; // Update button text
       }
   } else {
       console.error('Skills section or button not found in DOM.');
   }
}

// Ensure the DOM is loaded before adding event listener
if (typeof document !== "undefined") {
   document.addEventListener('DOMContentLoaded', () => {
      const toggleButton = document.getElementById('hobiesBtn') as HTMLButtonElement | null;
   
      if (toggleButton) {
          toggleButton.addEventListener('click', toggleHobiesVisibility);
      } else {
          console.error('Toggle button not found.');
      }
   });
}

 