import {useState} from 'react'
import './App.css';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Shantell+Sans:ital,wght@1,500&display=swap');
</style>

function App() {
  
  const [turn, setturn] = useState('X');
  const [cells, setcells] = useState(Array(9).fill(''));
  const [winner, setwinner] = useState();
  
  const Checkwinner = (square) =>{

  
  const combo =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

  ];
  let count=0;
  for(let i=0;i<combo.length; i++){
    const [a,b,c] = combo[i];

    if(square[a] !== '' && square[a] === square[b] && square[b]===square[c]){
            setwinner(square[a]);
    }
    else{
         
    }
  }
}

  
  const handleClick = (num)=>{
    
     if(winner){
      return;
     }
        let square = [...cells]
         
         if(cells[num] !== ''){
          alert('already clicked')
          return;
         }

         if(turn === 'X'){
           square[num] = 'X';
          setturn('O')
         }
         else{
          square[num]= 'O'
          setturn('X');
         }

        //  console.log(square)
        

         isDraw(square) 
         setcells(square);
         Checkwinner(square);
  }

 const handleRestart =() =>{
  setwinner('');
  setcells(Array(9).fill(''));
  setturn('X');
 }
 
 const isDraw =(cells) =>{
  let count=0;
  cells.forEach(element => {
    if(element !== ''){
      count++;
      // alert('count')
    }
  });
    

console.log(count)
if(count >= 9){
  setwinner('Draw')
}
}




  const Cells =({num}) =>{
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
  }


  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>

      <h2> Turn: {turn}</h2>
      <table>
        {/* <h2> Turn: {turn}</h2> */}
        <tbody>
          <tr>
                  <Cells num={0} />
                  <Cells num={1} />
                  <Cells num={2}/>
          </tr>
          <tr>
                  <Cells num={3}/>
                  <Cells num={4}/>
                  <Cells num={5}/>
          </tr>
           <tr>
                  <Cells num={6}/>
                  <Cells num={7}/>
                  <Cells num={8}/>
          </tr>
        </tbody>
      </table>
      {/* console.log({winner}) */}
      
      

      {/* {winner && (
        <>
      <h2>{winner} is the winner</h2>
      <button onClick={handleRestart}>Play Again</button>
      </>
      )} */}
      

      
      {winner &&  <>
      {winner === 'Draw' ? <>
      <h2>Match Draw</h2>
      <button onClick={handleRestart}>Play Again</button>
      </> : <>
      
      <h2>{winner} is the winner</h2>
      <button onClick={handleRestart}>Play Again</button>
      </>}
      </> }
      
      
      
      

    </div>
  );
}

export default App;
