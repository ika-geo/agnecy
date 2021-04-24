//header menu

let $menuItem = document.querySelectorAll(".menuItem")

for (let i = 0; i < $menuItem.length; i++) {
    $menuItem[i].onclick = () => {
        for (let a = 0; a < $menuItem.length; a++) {
            $menuItem[a].classList.remove("active")
        }
        $menuItem[i].classList.add("active")

    }
}

//for products menuList and images

const $products__menuList = document.querySelectorAll(".products__menuList")
const $products__list = document.querySelectorAll(".products__list")

for (let i = 0; i < $products__menuList.length; i++) {
    $products__menuList[i].onclick = () => {
        for (let a = 0; a < $products__menuList.length; a++) {
            $products__menuList[a].classList.remove("active")
            $products__list[a].classList.remove("active")
        }
        $products__menuList[i].classList.add("active")
        $products__list[i].classList.add("active")

    }
}

// for images

const $img = document.querySelectorAll(".products__list img")

for (let i = 0; i < $img.length; i++) {
    $img[i].onclick = () => {
        if ($img[i].classList.contains("active")) {
            $img[i].classList.remove("active")
        } else {
            for (let a = 0; a < $img.length; a++) {
                $img[a].classList.remove("active")
            }
            $img[i].classList.add("active")
        }
    }
}




//team person hover / main person change


const $person = document.querySelectorAll(".team_bottom__right_teamList__person")
const $personImg = document.querySelectorAll(".team_bottom__right_teamList__person img")
const $mainPerson = document.querySelectorAll(".mainPerson")
const $mainImg = document.querySelector(".team_bottom__left img")


for (let i=0; i<$person.length; i++){
    $person[i].addEventListener("mouseover", ()=>{
        $person[i].lastElementChild.style.display="flex"
        console.log(i)
    })
    $person[i].addEventListener("mouseout", ()=>{
        $person[i].lastElementChild.style.display="none"
        console.log(i)
    })

    $person[i].addEventListener("click", function (){
        for (let a = 0; a<$mainPerson.length; a++){
            $mainPerson[a].classList.remove("active")
        }
        $mainPerson[i].classList.add("active")
        $mainImg.src=$personImg[i].src
    })

}

