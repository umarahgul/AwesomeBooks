
// an array of objects
const collection=[
{title:"Far from Madding Crowd",
 author:"Thomas Hardy"
},
{title:"Tess of Derbilles",
author:"Thomas Hardy2"},

{title:"tale of two cities",
author:"Charles Dickens"},

{title:"Homo Deus",
author:"Yuvel"}
];


// function to add books and author  to the array AND display on the main page 


function addBook(title,author,x) {
    collection.push({ title: title, author: author });
    const removeDiv =document.createElement('div');   
 
     const para1=document.createElement('p');
     para1.textContent=collection[x].title;
     removeDiv.appendChild(para1);
    
    const para2=document.createElement('p');
    para2.textContent=collection[x].author;
    removeDiv.appendChild(para2);


     const removeButton =document.createElement('button');     
     removeButton.textContent="Remove";
     removeDiv.appendChild(removeButton);

    (function (index) {
    removeButton.onclick =function () {
    console.log("removed " + collection[x].title);
     removeBook(x); 
     removeDiv.removeChild(para1);
     removeDiv.removeChild(para2);
     removeDiv.removeChild(removeButton); 
     removeDiv.remove();         
}

 })(x);

const divider=document.createElement('hr');
divider.appendChild(removeDiv);
main.appendChild(removeDiv);
}





// funciton to remove books and authors
function removeBook(x) {
    if (collection>0) {
        
          
        // remove the book from array and display
    }
  else 
  {
    alert("cant remove collection empty");
  }
  
    // console.log('removin  ' + collection[x].title);
    console.log("Inside the removeBook function " + collection[x].title + " " + collection[x].author);
    console.log( collection.splice(x,1));
    
    //const newCollection=collection.filter(item => item !== collection[x]);
    //collection.title.pop(collection[x].author);
    
}

// function to populate the html page
function displayBooks()
{
const main = document.getElementById('awesome');

for(let x=0; x<collection.length; x++)
{
    if(collection.length>0){
    addBook(collection[x].title, collection[x].author, x);
}
//     const removeDiv =document.createElement('div');   
 
//      const para1=document.createElement('p');
//      para1.textContent=collection[x].title;
//      removeDiv.appendChild(para1);
    
//     const para2=document.createElement('p');
//     para2.textContent=collection[x].author;
//     removeDiv.appendChild(para2);


//      const removeButton =document.createElement('button');     
//      removeButton.textContent="Remove";
//      removeDiv.appendChild(removeButton);

//     (function (index) {
//     removeButton.onclick =function () {
//     console.log("removed " + collection[x].title);
//      removeBook(x); 
//      removeDiv.removeChild(para1);
//      removeDiv.removeChild(para2);
//      removeDiv.removeChild(removeButton); 
//      removeDiv.remove();         
// }

//  })(x);

// const divider=document.createElement('hr');
// divider.appendChild(removeDiv);
// main.appendChild(removeDiv);
// }


// const addDiv=document.createElement('div');
// const text_title = document.createElement('input');
// text_title.placeholder = "title";
// addDiv.appendChild(text_title);
// const text_author = document.createElement('input');
// text_author.placeholder="author";
// addDiv.appendChild(text_author);
// const addButton =document.createElement('button');
// addButton.textContent="Add Books";



//   creating a new element to add a book 


}
 
   const removeDiv=document.createElement('div');
    console.log("value of title " + text_title.value);
    const para1=document.createElement('p');
    para1.textContent=text_title.value;
    removeDiv.appendChild(para1);
    const para2=document.createElement('p');
    para2.textContent=text_author.value;
    removeDiv.appendChild(para2);


    const removeButton =document.createElement('button');
    removeButton.textContent="Remove";

    removeDiv.appendChild(removeButton);
    main.appendChild(removeDiv);
    addDiv.appendChild(addButton);
    main.appendChild(addDiv);
}

document.addEventListener('DOMContentLoaded', displayBooks);

