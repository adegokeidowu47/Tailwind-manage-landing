const body = document.querySelector('body');
const btn = document.getElementById('btn');
const nav = document.getElementById('menu');
const test01 = document.getElementById('test-01');
const test02 = document.getElementById('test-02');
const test03 = document.getElementById('test-03');
const test04 = document.getElementById('test-04');
const scrollbtn01 = document.getElementById('btn-01');
const scrollbtn02 = document.getElementById('btn-02');
const scrollbtn03 = document.getElementById('btn-03');
const scrollbtn04 = document.getElementById('btn-04');
const scrollbtn05 = document.getElementById('btn-05');
const scrollbtn06 = document.getElementById('btn-06');
const scrollbtn07 = document.getElementById('btn-07');
const scrollbtn08 = document.getElementById('btn-08');
const testimonialsDiv = document.querySelectorAll('.toogle');
let count = 0;


/* Function declaration */

const activeNavBtn = (actWidth, actHeight, btnactive, btn02, btn03, btn04) => {
    btnactive.style.width = actWidth; btnactive.style.height = actHeight; btnactive.style.backgroundColor = 'oklch(64.6% 0.222 41.116)';
    btnactive.style.border = '0';
    btn02.style.width = '15px';
    btn02.style.height = '15px';
    btn02.style.backgroundColor = 'transparent';
    btn02.style.border = '2px solid red';
    btn03.style.width = '15px';
    btn03.style.height = '15px';
    btn03.style.backgroundColor = 'transparent';
    btn03.style.border = '2px solid red';
    btn04.style.width = '15px';
    btn04.style.height = '15px';
    btn04.style.backgroundColor = 'transparent';
    btn04.style.border = '2px solid red';
}

const singleScrollBtn = (index, firstParam, secondParam, activeDiv, div02, div03, div04) => {
    if (index === index) {
        activeDiv.classList.add(secondParam);
        activeDiv.classList.remove(firstParam);
        div02.classList.add(firstParam);
        div02.classList.remove(secondParam);
        div03.classList.add(firstParam);
        div03.classList.remove(secondParam);
        div04.classList.add(firstParam);
        div04.classList.remove(secondParam);
    }
    return;
}


const doubleScrollBtn = (index01, index02, firstParam, secondParam, activeDiv, activeDiv02, div03, div04) => {
    if (index01 === index01 && index02 === index02) {
        activeDiv.classList.add(secondParam);
        activeDiv.classList.remove(firstParam);
        activeDiv02.classList.add(secondParam);
        activeDiv02.classList.remove(firstParam);
        div03.classList.add(firstParam);
        div03.classList.remove(secondParam);
        div04.classList.add(firstParam);
        div04.classList.remove(secondParam);
    }
    return;
}

const trippleScrollBtn = (index, firstParam, secondParam, activeDiv, activeDiv02, activeDiv03, div04) => {
    if (index === index) {
        activeDiv.classList.add(secondParam);
        activeDiv.classList.remove(firstParam);
        activeDiv02.classList.add(secondParam);
        activeDiv02.classList.remove(firstParam);
        activeDiv03.classList.add(secondParam);
        activeDiv03.classList.remove(firstParam);
        div04.classList.add(firstParam);
        div04.classList.remove(secondParam);
    }
    return;
}
const noScrollbtn = (index, firstParam, secondParam, activeDiv, activeDiv02, activeDiv03, div04) => {
    if (index === index) {
        activeDiv.classList.add(secondParam);
        activeDiv.classList.remove(firstParam);
        activeDiv02.classList.add(secondParam);
        activeDiv02.classList.remove(firstParam);
        activeDiv03.classList.add(secondParam);
        activeDiv03.classList.remove(firstParam);
        div04.classList.add(secondParam);
        div04.classList.remove(firstParam);
    }
    return;
}


const doubleactiveNavBtn = (actWidth, actHeight, btnactive, btn02) => {
    btnactive.style.width = actWidth; btnactive.style.height = actHeight; btnactive.style.backgroundColor = 'oklch(64.6% 0.222 41.116)';
    btnactive.style.border = '0';
    btn02.style.width = '15px';
    btn02.style.height = '15px';
    btn02.style.backgroundColor = 'transparent';
    btn02.style.border = '2px solid red';
}

const selfScroll = () => {
    count++;

    if (count === 4) {
        count = 0;
    }
    if (count === 0) {
        singleScrollBtn(0, 'hidden', 'flex', test01, test02, test03, test04);
        activeNavBtn('12px', '12px', scrollbtn01, scrollbtn02, scrollbtn03, scrollbtn04);
        doubleScrollBtn(0, 1, 'md:hidden', 'md:flex', test01, test02, test03, test04);
        doubleactiveNavBtn('12px', '12px', scrollbtn05, scrollbtn06);
        doubleScrollBtn(3, 'lg:hidden', 'lg:flex', test01, test02, test03, test04);
        doubleactiveNavBtn('12px', '12px', scrollbtn07, scrollbtn08);
    }
    if (count === 1) {
        singleScrollBtn(1, 'hidden', 'flex', test02, test01, test03, test04);
        activeNavBtn('12px', '12px', scrollbtn02, scrollbtn01, scrollbtn03, scrollbtn04);
    }
    if (count === 2) {
        singleScrollBtn(2, 'hidden', 'flex', test03, test01, test02, test04);
        activeNavBtn('12px', '12px', scrollbtn03, scrollbtn01, scrollbtn02, scrollbtn04);
        doubleScrollBtn(2, 3, 'md:hidden', 'md:flex', test03, test04, test01, test02);
        doubleactiveNavBtn('12px', '12px', scrollbtn06, scrollbtn05);
        doubleScrollBtn(3, 'lg:hidden', 'lg:flex', test02, test03, test04, test01);
        doubleactiveNavBtn('12px', '12px', scrollbtn08, scrollbtn07);
    }
    if (count === 3) {
        singleScrollBtn(3, 'hidden', 'flex', test04, test01, test02, test03);
        activeNavBtn('12px', '12px', scrollbtn04, scrollbtn01, scrollbtn02, scrollbtn03);
    }

}

// 


testimonialsDiv.forEach((singleDiv, index) => {

    scrollbtn01.addEventListener('click', (e) => {
        e.stopPropagation();
        if (index === 0) {
            singleScrollBtn(index, 'hidden', 'flex', test01, test02, test03, test04);
            activeNavBtn('12px', '12px', scrollbtn01, scrollbtn02, scrollbtn03, scrollbtn04);
            return;
        }
    });

    scrollbtn02.addEventListener('click', (e) => {
        e.stopPropagation();
        if (index === 1) {
            singleScrollBtn(index, 'hidden', 'flex', test02, test01, test03, test04);
            activeNavBtn('12px', '12px', scrollbtn02, scrollbtn01, scrollbtn03, scrollbtn04);
            return;
        }

    });

    scrollbtn03.addEventListener('click', (e) => {
        e.stopPropagation();
        if (index === 2) {
            singleScrollBtn(index, 'hidden', 'flex', test03, test01, test02, test04);
            activeNavBtn('12px', '12px', scrollbtn03, scrollbtn01, scrollbtn02, scrollbtn04);

            return;
        }
    });

    scrollbtn04.addEventListener('click', (e) => {
        e.stopPropagation();
        if (index === 3) {
            singleScrollBtn(index, 'hidden', 'flex', test04, test01, test02, test03);
            activeNavBtn('12px', '12px', scrollbtn04, scrollbtn01, scrollbtn02, scrollbtn03);
            return;
        }
    });

    scrollbtn05.addEventListener('click', (e) => {
        e.stopPropagation();
        if (index === 1) {
            doubleScrollBtn(0, 1, 'md:hidden', 'md:flex', test01, test02, test03, test04);
            doubleactiveNavBtn('12px', '12px', scrollbtn05, scrollbtn06);
            return;
        }


    });

    scrollbtn06.addEventListener('click', (e) => {
        e.stopPropagation();
        if (index === 3) {
            doubleScrollBtn(2, 3, 'md:hidden', 'md:flex', test03, test04, test01, test02);
            doubleactiveNavBtn('12px', '12px', scrollbtn06, scrollbtn05);
            return;
        }
    });

    scrollbtn07.addEventListener('click', (e) => {
        e.stopPropagation();
        if (index === 3) {
            doubleScrollBtn(3, 'lg:hidden', 'lg:flex', test01, test02, test03, test04);
            doubleactiveNavBtn('12px', '12px', scrollbtn07, scrollbtn08);
            return;
        }
    });
    scrollbtn08.addEventListener('click', (e) => {
        e.stopPropagation();
        if (index === 3 && innerWidth >= 1000 && innerWidth <= 1440) {
            doubleScrollBtn(3, 'lg:hidden', 'lg:flex', test02, test03, test04, test01);
            doubleactiveNavBtn('12px', '12px', scrollbtn08, scrollbtn07);
        }

    });

    if (innerWidth = 1440) {
        noScrollbtn(3, 'lg:hidden', 'xl:flex', test02, test03, test04, test01);
    }
    return;

});

setInterval(selfScroll, 2000);

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.add('flex');
    nav.classList.toggle('hidden');
});

body.addEventListener('wheel', () => {
    nav.classList.add('hidden');
    nav.classList.add('flex');
    btn.classList.remove('open');
    return;
});




