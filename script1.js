const collection = [
{title:"title1", author:"author1"},
{title:"title2", author:"author2"},
{title:"title2", author:"author2"},
{title:"title2", author:"author2"}
]

function addBooks(x)
{
        const displayDiv =document.createElement('div');   
         const para1=document.createElement('p');
         console.log("value added in the text field = " + document.getElementById('title').textContent);
        
         para1.textContent=document.getElementById('title').textContent;
         
         displayDiv.appendChild(para1);
        
        const para2=document.createElement('p');
        para2.textContent=document.getElementById('author').textContent;
        displayDiv.appendChild(para2);
    
    
         const removeButton =document.createElement('button');     
         removeButton.textContent="Remove";
         displayDiv.appendChild(removeButton);
    
        (function (index) {
        removeButton.onclick =function () {
        console.log("removed " + collection[x].title);
         removeBook(x); 
         displayDiv.removeChild(para1);
         displayDiv.removeChild(para2);
         displayDiv.removeChild(removeButton); 
         displayDiv.remove();         
    }
    
     })(x);
    
    const divider=document.createElement('hr');
    displayDiv.appendChild(divider);
    main.appendChild(displayDiv);

}

// display books  if available in collection
const main = document.getElementById('awesome');

function displayBooks()
{
    
   
    if(collection.length>0)
    {

    for(let x=0; x<collection.length; x++)
    {    
        const displayDiv =document.createElement('div');   
         const para1=document.createElement('p');
         para1.textContent=collection[x].title;
         
         displayDiv.appendChild(para1);
        
        const para2=document.createElement('p');
        para2.textContent=collection[x].author;
        displayDiv.appendChild(para2);
    
    
         const removeButton =document.createElement('button');     
         removeButton.textContent="Remove";
         displayDiv.appendChild(removeButton);
    
        (function (index) {
        removeButton.onclick =function () {
        console.log("removed " + collection[x].title);
         removeBook(x); 
         displayDiv.removeChild(para1);
         displayDiv.removeChild(para2);
         displayDiv.removeChild(removeButton); 
         displayDiv.remove();         
    }
    
     })(x);
    
    const divider=document.createElement('hr');
    displayDiv.appendChild(divider);
    main.appendChild(displayDiv);

        
} // for loop closes
}  // if statement closes

else {

    alert("Empty Collection");
}
    
} // function closes

document.addEventListener('DOMContentLoaded',displayBooks);

