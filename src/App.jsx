import './App.css'

function App() {

  const handleClickFunction = (e) => {
    const body = document.querySelector('body')
    body.style.background = getRandomColor()
  };

function getRandomColor(){
  let letters = '0123456789ABCDEF'
  let color = '#'
  for(let i=0; i<6; i++){
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color;
}
  return (
    <div className='container'>
      <h1>BACKGROUND COLOR CHANGER</h1>
      <button type="button" class="btn btn-dark" onClick={handleClickFunction}>DON'T CLICK!!</button>
      <h3 className='subhead'>if u click you'll see a magic!</h3>
    </div>
  )
}

export default App
