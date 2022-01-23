// var open= document.getElementById('open');
// var  modal=document.getElementsByClassName('modal');
// var close=document.getElementById('close');


// // open.addEventListener('click', () => {
// //     model.classList.add('show');
// // });

// // close.addEventListener('click', () => {
// //     model.classList.remove('show');

// // });

// open.addEventListener('click', openmodal);

// close.addEventListener('click', closemodal);

// // window.addEventListener('click', clickoutside);

// function openmodal() {
//     modal[0].style.display='block';
// }

// function closemodal() {
//     modal[0].style.display='none';
// }


// // function clickoutside (e) {
// //     if (e.target==modal){
// //         modal.style.display='none';
// //     }
// // }

const opens= document.querySelector("#open");
const modal = document.querySelector('#modals');
const c = document.querySelector('.close');


opens.addEventListener('click',openmodal);
c.addEventListener('click', closemodal);
window.addEventListener('click', endmodal);

function openmodal() {
    modal.style.display='block';
}

function closemodal() {
    modal.style.display='none';
}

function endmodal(e) {
    if (e.target == modal) {
        modal.style.display='none';
    }
}


