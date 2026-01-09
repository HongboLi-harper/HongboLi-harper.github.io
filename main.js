/**
 * main.js
 * Core logic for language switching and interactive showcase display.
 */

// --- 1. Language Switch Logic ---

// Select language toggle buttons
const btnEn = document.getElementById('btn-en');
const btnZh = document.getElementById('btn-zh');

// Select all elements tagged with language classes
const allEn = document.querySelectorAll('.lang-en');
const allZh = document.querySelectorAll('.lang-zh');

/**
 * Switches the interface language between English and Chinese
 * @param {string} lang - The target language ('en' or 'zh')
 */
function switchLang(lang) {
    if (lang === 'zh') {
        // Update button visual states
        btnZh.classList.add('active');
        btnEn.classList.remove('active');
        // Hide English content and show Chinese content
        allEn.forEach(el => el.style.display = 'none');
        allZh.forEach(el => el.style.display = 'block');
    } else {
        // Update button visual states
        btnEn.classList.add('active');
        btnZh.classList.remove('active');
        // Hide Chinese content and show English content
        allZh.forEach(el => el.style.display = 'none');
        allEn.forEach(el => el.style.display = 'block');
    }
}

// Bind click events to language buttons
btnEn.addEventListener('click', () => switchLang('en'));
btnZh.addEventListener('click', () => switchLang('zh'));


// --- 2. Interactive Showcase Logic ---

// Select all menu items and the central display container
const showcaseButtons = document.querySelectorAll('.menu-btn');
const displayArea = document.getElementById('display-area');

/**
 * Handle hover interaction:
 * Inject HTML from 'data-content' attribute into the display area with a fade effect.
 */
showcaseButtons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        // Retrieve the HTML string stored in the data-content attribute
        const content = btn.getAttribute('data-content');
        
        // Execute a simple fade-in transition
        displayArea.style.opacity = 0; // Set transparent
        
        setTimeout(() => {
            displayArea.innerHTML = content; // Inject new content
            displayArea.style.opacity = 1;   // Fade back in
        }, 150); // Delay matches CSS transition timing
    });
});
