document.addEventListener('DOMContentLoaded', function () {

    const mywrapper = document.querySelector('.index-services__wrapper');

    const config = {
        rootMargin: '0px 0px -100px 0px',
        threshold: 0
    };

    const callbackfunc = entries => {
        entries.forEach(entry => {
             console.log(entry);
            if (entry.isIntersecting == true) {
                entry.target.classList.add('fancy');
            }
            else {
                entry.target.classList.remove('fancy');
            }
        });
    }

    const observer = new IntersectionObserver(callbackfunc, config);

    observer.observe(mywrapper);
}); //DOM

/* <div class="wrapper">    
        <div class="div divone"><p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat similique ipsum et? Aut laudantium placeat sapiente architecto saepe, repudiandae officiis rem aliquid excepturi eaque enim obcaecati laborum ut nihil exercitationem, porro mollitia quam? Cupiditate et architecto sint quasi consequatur, suscipit nisi doloremque, quis animi reprehenderit dicta quia enim culpa atque.</p></div>
        <div class="div divtwo"><p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta nam incidunt vitae rerum saepe nisi culpa neque optio id eius temporibus sequi reiciendis eveniet iusto labore ex magni ipsum dolorum, numquam tenetur ullam quos reprehenderit sit. Incidunt delectus quaerat dignissimos. Sint repellat eligendi similique hic quam vel. A, quod!</p></div>
        <div class="div divthree"><p class="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae cumque animi illum deleniti necessitatibus, sapiente magni nobis soluta quae incidunt. Repellendus quas ut eum dolorem magni consectetur! Eaque deleniti soluta expedita accusantium maxime, exercitationem quisquam magni maiores voluptates ipsa corporis, consectetur officiis quod nobis hic corrupti, unde totam. Animi, rerum!</p></div>
    </div> */