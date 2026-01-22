document.addEventListener('DOMContentLoaded', function() {
    
    const button = document.getElementById('theme-toggle');
    const icon = button.querySelector('.theme-icon');
    const body = document.body;
    const counterDisplay = document.getElementById('counter');
    
    const savedMode = localStorage.getItem('theme');
    let clickCount = parseInt(localStorage.getItem('clickCount')) || 0;
    
    counterDisplay.textContent = clickCount;
    
    if (savedMode === 'dark') {
        body.classList.add('dark-mode');  
        icon.textContent = '☀️';           
    } else {
        body.classList.remove('dark-mode'); 
        icon.textContent = '🌙';           
    }
    
    button.addEventListener('click', function() {
        
        clickCount++;
        counterDisplay.textContent = clickCount;
        localStorage.setItem('clickCount', clickCount);
        
        const isDark = body.classList.contains('dark-mode');
        
        if (isDark) {
            body.classList.remove('dark-mode'); 
            icon.textContent = '🌙';             
            localStorage.setItem('theme', 'light'); 
        } else {
            body.classList.add('dark-mode');    
            icon.textContent = '☀️';            
            localStorage.setItem('theme', 'dark'); 
        }
        
    });
    
});
