// prevent links from going to another page.
// const links = document.querySelectorAll('a');links.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('it works');
// })

// stop event bubbling 
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

ul.style.fontSize = '18px';

li.forEach((li) => {
    li.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'green';
        e.target.style.fontSize = '28px';
    });

    li.addEventListener('mouseout', (e) => {
        e.target.style.backgroundColor = '';
        e.target.style.fontSize = '';
    });
});

ul.addEventListener('mouseover', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.backgroundColor = 'green';
    }
})


// Change background color of navigation (Scroll)
let scrollPosition = 0;
let ticking = false;

const mainNav = document.querySelector('.main-navigation');

window.addEventListener('scroll', function (e) {
    scrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function () {
            let changeBg = function () {
                mainNav.style.backgroundColor = '#d3d3d3';
            }
            changeBg(scrollPosition);
            ticking = false;
        });

        ticking = true;
    }
});

// create button 
const button = document.querySelector('.btn');
// select intro h2
const introH2 = document.querySelector('.intro h2');
const introP = document.querySelector('.intro p');

document.createElement('button');
button.textContent = 'click to make text disappear';
button.style.fontSize = '20px';
button.style.backgroundColor = '#17A2B8';
button.style.color = '#fff';
button.style.textAlign = 'center';
button.style.borderRadius = '30px';
button.style.padding = '5px 10px';
button.style.marginBottom = '20px';
button.style.width = '60%';
introH2.prepend(button);

// click button to add and remove text 
button.addEventListener('click', (e) => {
    introP.remove();
    introH2.textContent = 'It vanished!'
});

// button.addEventListener('click', (e) => {
//     // introH2.add();
//     introP.add();
// });


























// Make it so ALL the pictures can be dragged and dropped into different places, create an empty (div) box with a border of dashed to move pictures around.

// class App {

//     static init() {
  
//       App.box = document.getElementsByClassName('box')[0]
  
//       App.box.addEventListener("dragstart", App.dragstart)
//       App.box.addEventListener("dragend", App.dragend)
  
//       const imgContainers = document.getElementsByClassName('holder')
  
//       for(const imgContainer of imgContainers) {
//         imgContainer.addEventListener("dragover", App.dragover)
//         imgContainer.addEventListener("dragenter", App.dragenter)
//         imgContainer.addEventListener("dragleave", App.dragleave)
//         imgContainer.addEventListener("drop", App.drop)
//       }
//     }
  
//     // static dragstart() {
//     //   this.className += " held"
    
//     //   setTimeout(()=>this.className="invisible", 0)
//     // }

//     static dragstart(e) {
//         e.dataTransfer.setData('text'), e.target.parentNode.id
//     }
  
//     static dragend(e) {
//       this.className = "box"
//     }
  
//     static dragover(e) {
//       e.preventDefault()
//     }
  
//     static dragenter(e) {
//       e.preventDefault()
//       this.className += "hovered"
//     }
  
//     static dragleave() {
//       this.className = "holder"
//     }
  
//     // static drop() {
//     //   this.className = "holder"
//     //   this.append(App.box)
//     // }

//     static drop(e) {
//         const div = e.dataTransfer.getData('text')
//         const pointA = document.getElementById(div)
//         const pointB = document.getElementById(e.target.parentNode.id)
//         App.swapElements(pointA, pointB)
//     }
      
  
//   }
  
//   document.addEventListener("DOMContentLoaded", App.init)






















// // create tool tip for logo (mouseOver)
// const logo = document.querySelector('.logo-heading');
// const span = document.createElement('span');
// span.classList.add('toolTipText');
// span.id = 'popup';
// span.textContent = 'Fun Bus is awesome!';

// logo.addEventListener('onmouseover', (e) => {
//     const popup = document.getElementById('popup');
//     popup.toggle('show');
// })