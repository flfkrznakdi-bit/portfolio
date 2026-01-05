const animationMove = function (selector) {
    const targetEl = document.querySelector(selector)
    const bs = window.scrollY
    const targetScrollY = targetEl.getBoundingClientRect().top + bs
    //엘리먼트의 크기와 뷰포트의 상대적인 위치정보를 제공
    window.scrollTo({
        top: targetScrollY,
        behavior: 'smooth'
    })
}

const scrollMove = document.querySelectorAll('[data-animation-scroll="true"]')
for (let i = 0; i < scrollMove.length; i++) {
    scrollMove[i].addEventListener('click', function () {
        const target = this.dataset.target;
        animationMove(target)
    })
}

$(function () {
    $('.section5-1').click(function(){
        $('.section5-1').removeClass('on')
    })
})