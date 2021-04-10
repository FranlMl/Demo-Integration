
let nav = document.querySelectorAll('nav li');


console.log(nav);



for (let i = 0 ; i < nav.length; i++ ) {

    nav[i].addEventListener('mouseover', function () {

        this.style.fontSize = '25px'
    } )

}


for (let i = 0; i< nav.length; i++) {


    nav[i].addEventListener('mouseout', function () {


        this.style.fontSize ='23px';


    })


}


