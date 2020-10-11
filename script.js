

    // ATT GÖRA-LISTA
    // deklarerar array för listan
    var toDoList = [];
    
	// skriver ut listan i html
    function displayList() {
        var listElements= "";
        for (var i = 0; i < toDoList.length; i++) {
        listElements +="<ul><li>"+toDoList[i]+ " " + " " +
        "<a href=\"#del\" onclick='deleteList("+i+")'>Remove</a></li></ul></div>";
        }
        document.getElementById("todolist").innerHTML = listElements;
        // skriver ut antal uppgifter
        document.getElementById("numToDo").innerHTML = "Todos: " + toDoList.length;
    }
    
     // lägger till nytt objekt i listan med hjälp av push-metoden
     function addItem() {
        toDoList.push(document.getElementById("todoitem").value);
        // använder displayList-funktionen för att skriva ut det användaren gör i html
        displayList();
    }
     
     // tar bort objekt från listan med hjälp av splice-metoden
     function deleteList(deleteElement) {
        toDoList.splice(deleteElement,1);
        displayList();
    }

     // lagrar listan i localstorage och gör om objekt till sträng
     function storeItem() {
        localStorage.setItem("todoitem", JSON.stringify(toDoList));
    }
     
     // laddar in det som är sparat i localstorage och återställer array
     function appendLocalStorage() {
        if (localStorage.getItem("todoitem")) { 
            toDoList = JSON.parse(localStorage.getItem("todoitem"));
            } 
        displayList();
    }

    // tömmer hela listan
     function clearAll() {
        toDoList = [];
        // alert-ruta 
        {   
        var empty = confirm ("Are you sure you want to clear all items?");
        if (empty == true) {
            localStorage.clear();
            displayList();
        }
        else {
           (empty == false)
        }
        }   
    }

