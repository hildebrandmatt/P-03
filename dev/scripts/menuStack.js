var menuStack = document.getElementsByClassName("menu-category")

$(document).ready(menuSort())
$(".menu-btn").click(function(){ menuButtonClick(this.id) })
$(window).resize(function(){menuSlideStack()})

function menuSort(){
    menuStack[0].style.zIndex = "3"
    menuStack[1].style.zIndex = "2"
    menuStack[2].style.zIndex = "1"
    menuStack[3].style.zIndex = "0"
    
    menuStack[0].style.top="0px"
    menuStack[1].style.top="-15px"
    menuStack[2].style.top="-30px"
    menuStack[3].style.top="-45px"

    menuSlideStack()
}

function menuSlideStack(){
    if(window.innerWidth >= 980){    
        menuStack[0].style.left="0px"
        menuStack[1].style.left="-15px"
        menuStack[2].style.left="-30px"
        menuStack[3].style.left="-45px"
    } else {  
        menuStack[0].style.left="0px"
        menuStack[1].style.left="0px"
        menuStack[2].style.left="0px"
        menuStack[3].style.left="0px"
    }
}

function menuButtonClick(buttonClicked){
    newMenuId = buttonClicked.replace("btn", "menu")
    newMenuIndex = menuSearch(newMenuId)
    if(newMenuIndex != 0){
        oldMenu = menuStack[0]
    
        menuFlip(newMenuIndex)
    
        //reorderMenuStack(newMenuIndex)
    
        //menuSort()
    }
}

function menuSearch(newMenuId){
    for(i=0; i < menuStack.length; i++){
        if(menuStack[i].id == newMenuId){
            return i
        }
    }
}

function reorderMenuStack(menuIndex){
    let tmpStack = []
    let firstItem = menuStack[menuIndex]
    tmpStack.push(firstItem)
    for(i=0; i < menuStack.length; i++){
        if(i != menuIndex){
            tmpStack.push(menuStack[i])
        }
    }
    menuStack = tmpStack
}

function menuFlip(menuIndex){
    let flippedMenu = menuStack[menuIndex]
    flippedMenu.firstElementChild.style.display = "none"

    var pullPageOut = setInterval(function(){
        flippedMenu.style.top = (parseInt(flippedMenu.style.top) - 14 + 'px')
        if(window.innerWidth >= 980){flippedMenu.style.left = (parseInt(flippedMenu.style.left) - 10 + 'px')} //IF $desktop_width CHANGES CHANGE THIS!!!
    }, 1)

    
    reSort = setTimeout(function(){
        clearInterval(pullPageOut)
        flippedMenu.style.zIndex = "8"
        var pushPageIn = setInterval(function(){
            flippedMenu.style.top = (parseInt(flippedMenu.style.top) + 14 + 'px')
            if(window.innerWidth >= 980){flippedMenu.style.left = (parseInt(flippedMenu.style.left) + 10 + 'px')} //IF $desktop_width CHANGES CHANGE THIS!!!
            if(parseInt(flippedMenu.style.top) >= 0){
                clearInterval(pushPageIn)
                reorderMenuStack(menuIndex)
                menuSort()
                flippedMenu.firstElementChild.style.display = "block"
            }
        }, 1)
    }, 250)
}