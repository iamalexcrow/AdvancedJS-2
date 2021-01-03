const filter = () => {
    // const menu = document.querySelector('.portfolio-menu'),
    //         items = menu.querySelectorAll('li'),
    //         btnAll = menu.querySelector('.all'),
    //         btnLovers = menu.querySelector('.lovers'),
    //         btnChef = menu.querySelector('.chef'),
    //         btnGirl = menu.querySelector('.girl'),
    //         btnGuy = menu.querySelector('.guy'),
    //         btnGrandmother = menu.querySelector('.grandmother'),
    //         btnGranddad = menu.querySelector('.granddad'),
    //         wrapper = document.querySelector('.portfolio-wrapper'),
    //         markAll = wrapper.querySelectorAll('.all'),
    //         markGirl = wrapper.querySelectorAll('.girl'),
    //         markLovers = wrapper.querySelectorAll('.lovers'),
    //         markChef = wrapper.querySelectorAll('.chef'),
    //         markGuy = wrapper.querySelectorAll('.guy'),
    //         // markGrandmother = wrapper.querySelectorAll('.grandmother'),
    //         // markGranddad = wrapper.querySelectorAll('.granddad'),
    //         no = document.querySelector('.portfolio-no');

    // const typeFilter = (markType) => {
    //     markAll.forEach(mark => {
    //         mark.style.display = "none";
    //         mark.classList.remove('animated', 'fadeIn');

    //     });

    //     no.style.display = "none";
    //     no.classList.remove('animated', 'fadeIn');

    //     if (markType) {
    //         markType.forEach(mark => {
    //             mark.style.display = 'block';
    //             mark.classList.add('animated', 'fadeIn');
    //         });
    //     } else {
    //             no.style.display = 'block';
    //             no.classList.add('animated', 'fadeIn');
    //     }
    // };
    // btnAll.addEventListener('click', ()=> {
    //     typeFilter(markAll);
    // });

    // btnLovers.addEventListeners('click', ()=> {
    //     typeFilter(markLovers);
    // });

    // btnGuy.addEventListeners('click', ()=> {
    //     typeFilter(markGuy);
    // });

    // btnChef.addEventListeners('click', ()=> {
    //     typeFilter(markChef);
    // });

    // btnGirl.addEventListeners('click', ()=> {
    //     typeFilter(markGirl);
    // });

    // btnGrandmother.addEventListeners('click', ()=> {
    //     typeFilter();
    // });

    // btnGranddad.addEventListeners('click', ()=> {
    //     typeFilter();
    // });


    const wrapper = document.querySelector('.portfolio-wrapper'),
    markAll = wrapper.querySelectorAll('.all'),
    menu = document.querySelector('.portfolio-menu'),
    no = document.querySelector('.portfolio-no'),
    items = menu.querySelectorAll('li');
      
    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = "none";
            mark.classList.remove('animated', 'fadeIn');

        });

        no.style.display = "none";
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
                no.style.display = 'block';
                no.classList.add('animated', 'fadeIn');
        }
    };

    const filterAll =(one, two, three=false) => {
        const btn = menu.querySelector(one);
        
        if (three) {
            btn.addEventListener('click', ()=> {
                typeFilter(wrapper.querySelectorAll(two));
            });
        } else {
            btn.addEventListener('click', ()=> {
                typeFilter();
            });
        }
    };

    filterAll('.all','.all', true);
    filterAll('.lovers','.lovers', true);
    filterAll('.chef','.chef', true);
    filterAll('.girl','.girl', true);
    filterAll('.guy','.guy', true);
    filterAll('.grandmother');
    filterAll('.granddad');

    menu.addEventListener('click', (e)=> {
       let target = e.target;
       
       if (target && target.tagName =='LI') {
           items.forEach(btn => btn.classList.remove('active'));
           target.classList.add('active');
       }
    });
};

export default filter;