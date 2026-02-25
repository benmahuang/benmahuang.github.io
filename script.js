// 移动端菜单切换
const mobileMenu = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenu && navMenu) {
    mobileMenu.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // 汉堡菜单动画
        const bars = this.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.classList.toggle('change');
        });
    });
}

// 点击菜单项后关闭菜单
if (navMenu) {
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}