const titleVal = document.getElementById('title');
const authorVal = document.getElementById('author');
const main = document.getElementById('awesome');
let sheet=document.createElement('style');
class Book{

  static count=0;

constructor(title, author)
{
  this.title=title;
  this.author=author;
}

static collection=[
  { title: 'title1', author: 'auhtor1' },
  { title: 'title2', author: 'auhtor2' },
  { title: 'title3', author: 'auhtor3' },
  { title: 'title4', author: 'auhtor4' },
];

static addBooks(title, author)
{
  const newBook =new Book(title, author);
  Book.collection.push(newBook);
  Book.displayBooks();
 // return newBook;
  // add books to the collection

}

static displayBooks()
{

  main.innerHTML="";

  for(let x=0; x< Book.collection.length; x += 1)
  {
      const displayDiv = document.createElement('div');
      const para1 = document.createElement('p');
      const para2 = document.createElement('p');
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';

      para1.textContent = Book.collection[x].title + ' by ' ;
      displayDiv.setAttribute('id', `id${x}`);
      displayDiv.classList.add('displayDiv');
      
      console.log(displayDiv.id);
      displayDiv.appendChild(para1);
      // console.log(para1.textContent);
      para2.textContent = Book.collection[x].author;
      displayDiv.appendChild(para2);
      removeButton.textContent = 'Remove';
      removeButton.setAttribute('id','rmvBtn');
      displayDiv.appendChild(removeButton);

      main.appendChild(displayDiv);
      removeButton.addEventListener('click', () => {
        displayDiv.remove();
        Book.collection.splice(x, 1);
      });
      //const cssDiv=document.getElementById(`id${x}`);
      //cssDiv.style.cssText='display: flex; flex-direction: row; align-items:center; gap:5%;  width:100%';
     // const rmvBtn= document.getElementById('rmvBtn');
      //rmvBtn.style.cssText='#rmvBtn {margin-left: 70%; margin-right:0; }';

  }

// display books along with remove button 

}

}

document.getElementById('addBook').addEventListener('click', function(){Book.addBooks(titleVal.value, authorVal.value)});
document.addEventListener('DOMContentLoaded', Book.displayBooks);

if(!localStorage.getItem("title")){
  setStorage();
}
else
{
  getStorage();
}

function getStorage() {
  const currentTitle = localStorage.getItem('title');
  const currentAuthor = localStorage.getItem('author');

  titleVal.value = currentTitle;
  document.getElementById('author').value = currentAuthor;
}

function setStorage() {
  localStorage.setItem('title', document.getElementById('title').value);
  localStorage.setItem('author', document.getElementById('author').value);
}




// const collection = [
//   { title: 'title1', author: 'auhtor1' },
//   { title: 'title2', author: 'auhtor2' },
//   { title: 'title3', author: 'auhtor3' },
//   { title: 'title4', author: 'auhtor4' },
// ];


// const Book1= new Book(titleVal, authorVal);

// function displayBooks() {
//   main.innerHTML = '';
//   if (collection.length > 0) {
//     for (let x = 0; x < collection.length; x += 1) {
//       const displayDiv = document.createElement('div');
//       const para1 = document.createElement('p');
//       const para2 = document.createElement('p');
//       const removeButton = document.createElement('button');
//       removeButton.textContent = 'Remove';

//       para1.textContent = collection[x].title;
//       displayDiv.setAttribute('id', `id${x}`);
//       console.log(displayDiv.id);
//       displayDiv.appendChild(para1);
//       // console.log(para1.textContent);
//       para2.textContent = collection[x].author;
//       displayDiv.appendChild(para2);
//       removeButton.textContent = 'Remove';
//       displayDiv.appendChild(removeButton);

//       const divider = document.createElement('hr');
//       displayDiv.appendChild(divider);
//       main.appendChild(displayDiv);
//       removeButton.addEventListener('click', () => {
//         displayDiv.remove();
//         collection.splice(x, 1);
//       });
//     }
//   } else {
//     alert('Empty Collection');
//   }
// }

// function addBooks() {
//   collection.push({ title: `${titleVal.value}`, author: `${authorVal.value}` });
//   for (let i = 0; i < collection.length; i += 1) { console.log(collection[i]); }
//   displayBooks();
// }

// if(!localStorage.getItem("title")){
//     setStorage();
// }
// else
// {
//     getStorage();
// }

// function getStorage() {
//     const currentTitle = localStorage.getItem('title');
//     const currentAuthor = localStorage.getItem('author');

//     titleVal.value = currentTitle;
//     document.getElementById('author').value = currentAuthor;
//   }

//   function setStorage() {
//     localStorage.setItem('title', document.getElementById('title').value);
//     localStorage.setItem('author', document.getElementById('author').value);
//   }
