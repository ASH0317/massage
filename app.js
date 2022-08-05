let title = document.querySelector('.title');
let massage = document.querySelector('.massage');


document.querySelector('.btn').addEventListener('click', function () {
    title.className = 'none';
    massage.className = 'massage';
})
