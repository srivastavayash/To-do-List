var form = document.getElementById('addform');
var itemList = document.getElementById('items');
//Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

//Add Item
function addItem(e) {
     e.preventDefault();
     //get input value
     var newItem = document.getElementById('item').value;
     //create new li
     var li = document.createElement('li');
     li.className = 'list-group-item';
     // Add text node with input value
     li.appendChild(document.createTextNode(newItem));
     // Create del button element
     var deleteBtn = document.createElement('button');

     // Add classes to del button 
     deleteBtn.className = 'btn';

     // Append text node
     deleteBtn.appendChild(document.createTextNode('X'));

     // Append button to li
     li.appendChild(deleteBtn);

     // Append li to list
     itemList.appendChild(li);
}
// Remove item
function removeItem(e) {
     if (e.target.classList.contains('btn')) {
          if (confirm('Are You Sure?')) {
               var li = e.target.parentElement;
               itemList.removeChild(li);
          }
     }
}