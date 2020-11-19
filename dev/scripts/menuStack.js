var menuStack = document.getElementsByClassName("menu-category")

$(document).ready(menuSort())
$(".menu-btn").click(function(){ menuButtonClick(this.id) })

function menuSort(){
    menuStack[0].style.zIndex = "3"
    menuStack[1].style.zIndex = "2"
    menuStack[2].style.zIndex = "1"
    menuStack[3].style.zIndex = "0"
    
    menuStack[0].style.top="0px"
    menuStack[1].style.top="-15px"
    menuStack[2].style.top="-30px"
    menuStack[3].style.top="-45px"
}

function menuButtonClick(buttonClicked){
    newMenuId = buttonClicked.replace("btn", "menu")
    newMenuIndex = menuSearch(newMenuId)
    oldMenu = menuStack[0]

    reorderMenuStack(newMenuIndex)

    menuSort()
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