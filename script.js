let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-nav-toggle');

navBarToggle.addEventListener("click", function(){
    mainNav.classList.toggle('active')
});

// หากคลิกที่รูปภาพ ID "img1"
document.getElementById('img1').addEventListener('click', function() {
    // เข้าถึงองค์ประกอบหรือธาตุ HTML ที่มีคลาส "modal"
    var modal = document.querySelector('.modal');
    
    // เปลี่ยน CSS จาก "none" เป็น "flex"
    modal.style.display = 'flex';
});

// หากคลิกที่รูปภาพ ID "img1"
document.getElementById('Close').addEventListener('click', function() {
    // เข้าถึงองค์ประกอบหรือธาตุ HTML ที่มีคลาส "modal"
    var modal = document.querySelector('.modal');
    
    // เปลี่ยน CSS จาก "none" เป็น "flex"
    modal.style.display = 'none';
});