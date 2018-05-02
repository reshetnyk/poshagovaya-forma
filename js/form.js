window.onload = function(){

    (function formNavigation(){
        var descr = {
            tab: $('#description-tab'),
            btn: $('#description__btn'),
            btnValue: 'Описание'
        };
        var ingr = {
            tab: $('#ingredients-tab'),
            btn: $('#ingredients__btn'),
            btnValue: 'Ингредиенты'
        };
        var param = {
            tab: $('#parameters-tab'),
            btn: $('#parameters__btn'),
            btnValue: 'Параменты'
        };
        var bokali = {
            tab: $('#bokali-tab'),
            btn: $('#bokali__btn'),
            btnValue: 'Бокалы'
        };

        descr.next = ingr;
        ingr.prev = descr;
        ingr.next = param;
        param.prev = ingr;
        param.next = bokali;
        bokali.prev = param;

        current = descr;
        var prevTabBtn = $('#prev__btn');
        var nextTabBtn = $('#next__btn');
        var submitBtn = $('#submit__btn');
        current.btn.addClass('current');
        nextTabBtn.find('.button-main-block').text(current.next.btnValue);



        function createButtonListener(next){
            return function(e){
                current.tab.hide();
                current.btn.removeClass('current');
                current = next;
                current.tab.show();
                current.btn.addClass('current');
                if(current.prev){
                    prevTabBtn.css('display', 'inline-block');
                    prevTabBtn.find('.button-main-block').text(current.prev.btnValue);
                    prevTabBtn.off('click');
                    prevTabBtn.click(createButtonListener(current.prev));
                } else
                    prevTabBtn.hide();
                if(current.next){
                    nextTabBtn.css('display', 'inline-block');
                    nextTabBtn.find('.button-main-block').text(current.next.btnValue);
                    nextTabBtn.off('click');
                    nextTabBtn.click(createButtonListener(current.next));
                    submitBtn.hide();
                } else{
                    nextTabBtn.hide();
                    submitBtn.css('display', 'inline-block');
                }
            }
        }

        descr.btn.click(createButtonListener(descr));
        ingr.btn.click(createButtonListener(ingr));
        param.btn.click(createButtonListener(param));
        bokali.btn.click(createButtonListener(bokali));
        nextTabBtn.click(createButtonListener(current.next));


    })();

};