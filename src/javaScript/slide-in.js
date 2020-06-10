document.addEventListener('DOMContentLoaded', function () {

    const mywrapper = document.querySelector('.index-services__wrapper');

    const config = {
        rootMargin: '0px 0px -150px 0px',
        threshold: 0
    };

    const callbackfunc = (entries, self) => {
        entries.forEach(entry => {
             console.log(entry);
            if (entry.isIntersecting == true) {
                entry.target.classList.add('fancy');
                self.unobserve(entry.target);
            }
/*             else {
                entry.target.classList.remove('fancy');
            } */
        });
    }

    const observer = new IntersectionObserver(callbackfunc, config);

    observer.observe(mywrapper);
}); //DOM