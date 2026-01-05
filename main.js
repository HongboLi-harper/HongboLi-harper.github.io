// --- main.js ---

// 获取所有菜单按钮
const buttons = document.querySelectorAll('.menu-btn');
const displayArea = document.getElementById('display-area');

// 遍历每个按钮并添加事件监听
buttons.forEach(btn => {
    // 鼠标移入事件
    btn.addEventListener('mouseenter', () => {
        // 获取该按钮 data-content 里的 HTML 内容
        const content = btn.getAttribute('data-content');
        
        // 执行淡入动画
        displayArea.style.opacity = 0; // 先变透明
        setTimeout(() => {
            displayArea.innerHTML = content; // 替换内容
            displayArea.style.opacity = 1;   // 再显示出来
        }, 100); 
    });
});


// document.querySelectorAll('.menu-btn-new').forEach(btn => {
// const panel = btn.querySelector('.menu-panel')

// btn.addEventListener('click', () => {
//     panel.hidden = !panel.hidden
// })
// });
