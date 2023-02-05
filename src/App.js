// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="page">
      <div class="header"><h1>Header for the title</h1></div>
      <img src="https://toppng.com/uploads/preview/and-blank-effect-transparent-11546868080xgtiz6hxid.png" class="img" alt="blank"></img>
      <div class="paragraph"></div>
      <button class="btn">Details</button>
      <button class="topLeftbtn">Duplicate</button>
    <button class="oneBut">Change Background</button>
      <button class="twoBut">Change Heading</button>
        <button class="threBut">Delete Last Instance</button>
    </div>
    
    // <div className="App">
    //   <header className="App-header">
        
    //     {/* <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p> */}
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}
const activeBut = document.querySelector('.topLeftbtn');
activeBut.addEventListener("keydown", function(e) {
  activeBut.focus();
  activeBut.style.backgroundColor = "white";
  setTimeout(() => {
  activeBut.style.backgroundColor = "";
  }, 500);
});

document.querySelector('.topLeftbtn').addEventListener('mouseenter', event =>{
  document.querySelector('.topLeftbtn').style.backgroundColor = "white";
  setTimeout(() => {
    document.querySelector('.topLeftbtn').style.backgroundColor = "";
  }, 500);
});

document.querySelector('.topLeftbtn').addEventListener('click', function(e){
  const card = document.querySelector('.page');
  // const clone = card.cloneNode(true);
  console.log(card);
  document.querySelector('.threBut').addEventListener('click', function(e){
    card.remove();
  });
});

document.querySelector('.oneBut').addEventListener('click', function(e){
  const page = document.querySelector('.page');
  if (page.style.backgroundColor === "orange") {
    page.style.backgroundColor = "red";
  } else {
    page.style.backgroundColor = "orange";
  }
});

document.querySelector('.twoBut').addEventListener('click', function(e){
  const head = document.querySelector('.header');
  if(head.innerHTML === "<h1>Heading for the title</h1>") {
    head.innerHTML = "<h1>Something else</h1>";
  } else {
    head.innerHTML = "<h1>Heading for the title</h1>"
  }
  
});

document.querySelector('.btn').addEventListener('click', function(e){
  const para = document.querySelector('.paragraph');
  if (para.innerHTML === ""){
    para.innerHTML = "<h3>Paragraph for description of the image</h3>";
  } else {
    para.innerHTML = ""
  }
});

export default App;
