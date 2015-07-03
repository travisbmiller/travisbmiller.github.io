// Run Once Dpcument is loaded
    
    function App () {
        
        console.log("app fired");


        var todo =  {
           submit: submit,
           getTask: getTask,
           addTask: addTask,
           clone: cloneListElement,
           clear: clearInput,
           deleteTask: deleteTask,
           createListElement, createListElement
        }
        console.log(todo)
        return todo;

        


        ////////////////////////////////

        // On Click - Submit  BTN
        function submit (e) {
            // Prevent URL Change 
            event.preventDefault()
            
            // Get Task
            var value = todo.getTask()

            // Clone List (if you want to clone)
            //var newNode = todo.clone()
            
            // Create New Node Element
            var newNode = todo.createListElement();

            // Add text value to Node
            newNode.getElementsByTagName("span")[0].innerHTML = value;
          
            // Add click Handler for Deleting
            newNode.getElementsByTagName("i")[0].addEventListener("click", todo.deleteTask);

            // Append New Task to Task List
            todo.addTask(newNode)
            
            // Clear Input Field
            todo.clear();

        }

        // Input Value
        function getTask () {
            // Grab Text in Input Field
            var input = document.querySelector("input").value;
            
            // Return Text
            return input;
        }

        // Add Task
        function addTask (node) {
            
            ///// Option 1 - place as last child (on Bottom)
            
            // var list = document.getElementById("taskList")
            // list.appendChild(node)

            ///// Option 2 - place as first child (on Top)
            
            // Grab List Parent Node
            var list = document.getElementById("taskList")
            
            // Place New Node 
            list.insertBefore(node, list.firstChild)
        }

        // Clone List Element
        function cloneListElement () {            
            
            // Select Element to Clone
            var newElement = document.querySelector(".task-item");
            
            // Clone - passing true to clone and children
            var newNode = newElement.cloneNode(true);
            
            return newNode;
        }

        // Create New Node List Element
        function createListElement () {
            // Create node
            var listNode = document.createElement("li")
            // Add Class task-item
            listNode.setAttribute("class", "task-item");
            // Add Children Nodes
            listNode.innerHTML = '<i class="fa fa-times"></i><span></span>';
            
            return listNode
        }   

        // clear Input
        function clearInput () {
            // Select Input Field and set value to empty string
            document.querySelector("input").value = ""
        }

        // Delete Task
        function deleteTask () {
            // Grab Parent Node (this = <i></i>, we want <li></li>)
            var currentNode = this.parentNode;
            
            // Grab Parent node of li (<ul></ul>)
            var list = document.getElementById("taskList")
            
            // Delete Node - Must Delete using Parent Node
            list.removeChild(currentNode);
        }  


    }


    // Execute App Function and return todo object
    App()

    console.log("app.js file init")

    // On Click Event to Submit Button
    document.getElementById("submit").addEventListener("click", todo.submit)
        



