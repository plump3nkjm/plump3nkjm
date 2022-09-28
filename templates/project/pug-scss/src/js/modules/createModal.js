export default () => {
    const btnOpen = document.getElementsByClassName('btn-open');
    const body = document.getElementsByTagName('body')[0];

    const createModal = () => {
        //bodyの固定
        let scrollY = window.scrollY;
        body.style.position = 'fixed';
        body.style.overflow = 'hidden';
        body.style.top = `-${scrollY}px`;
        //bodyの固定 end

        const youtubeURL = [
            'https://www.youtube.com/embed/DE9nwq3ORMU',
        ];

        let wrapperEl = document.createElement('div');
        let cotentEl = document.createElement('div');
        let youtubeEl = document.createElement('div');
        let contentWrapperEl = document.createElement('div');
        let btnEl = document.createElement('button');
        wrapperEl.id = 'modal-wrapper';
        cotentEl.className = 'content';
        youtubeEl.className = 'youtube';
        btnEl.className = 'close-btn';

        youtubeEl.innerHTML = `<iframe src=${youtubeURL[0]}?autoplay=1 frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        btnEl.innerHTML = '<img src="./assets/img/btn-close.svg">';

        cotentEl.appendChild(youtubeEl);
        contentWrapperEl.appendChild(btnEl);
        contentWrapperEl.appendChild(cotentEl);
        wrapperEl.appendChild(contentWrapperEl);

        document.getElementsByTagName('body')[0].appendChild(wrapperEl);

        document.getElementById('modal-wrapper').querySelector('button').addEventListener('click', () => {
            //bodyの固定を解除
            body.style.position = 'relative';
            body.style.overflow = 'auto';
            body.style.top = '0px';
            //bodyの固定を解除 end
            document.getElementsByTagName('body')[0].removeChild(document.getElementById('modal-wrapper'));
        });
    };
    [].forEach.call(btnOpen, el => {
        el.addEventListener('click', createModal);
    })
}
