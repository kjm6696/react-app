// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <button class="topLeftbtn" onClick={topLeftbtn}>Duplicate</button>
    <button class="oneBut" onClick={oneBut}>Change Background</button>
      <button class="twoBut" onClick={twoBut}>Change Heading</button>
        <button class="threBut" onClick={threBut}>Delete Last Instance</button>
    <div class="page">
      <div class="header"><h1>Header for the title</h1></div>
      <img src="https://toppng.com/uploads/preview/and-blank-effect-transparent-11546868080xgtiz6hxid.png" class="img" alt="blank"></img>
      <div class="paragraph"></div>
      <button class="btn" onClick={btn}>Details</button>
    </div>
    </div>
  );
}

// test

export default App;

function topLeftbtn() {
  //document.querySelector('.topLeftbtn').addEventListener('click', function(e){
  const card = document.querySelector('.page');
  const clone = card.cloneNode(true);
  const child = document.body.appendChild(clone)
  console.log(card);
  document.querySelector('.threBut').addEventListener('click', function(e){
    document.body.removeChild(child);
  });
//});
}
function threBut() {
  document.querySelector('.topLeftbtn').addEventListener('click', function(e){
    const card = document.querySelector('.page').cloneNode(true);
    console.log(card);
    document.querySelector('.threBut').addEventListener('click', function(e){
      card.remove();
    });
  });
}


function oneBut() {
  //document.querySelector('.oneBut').addEventListener('click', function(e){
    const page = document.querySelector('.page');
    if (page.style.backgroundColor === "orange") {
      page.style.backgroundColor = "red";
    } else {
      page.style.backgroundColor = "orange";
    }
  //});
}

function twoBut(){
  //document.querySelector('.twoBut').addEventListener('click', function(e){
    const head = document.querySelector('.header');
    if(head.innerHTML === "<h1>Heading for the title</h1>") {
      head.innerHTML = "<h1>Something else</h1>";
    } else {
      head.innerHTML = "<h1>Heading for the title</h1>"
    }
    
  //});
}

function btn() {
  //document.querySelector('.btn').addEventListener('click', function(e){
    const para = document.querySelector('.paragraph');
    if (para.innerHTML === ""){
      para.innerHTML = "<h3>Paragraph for description of the image</h3>";
    } else {
      para.innerHTML = ""
    }
  //});
}



