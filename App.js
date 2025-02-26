import { useEffect } from 'react'
import Header from './Header'
export default function App(){

useEffect(function(){
fetch('https://opentdb.com/api.php?amount=10')
.then(res=>res.json())
.then(data=>console.log(data))
.catch(err=>console.error(err)
)
  },[])


  return <div className='app'>

    <Header/>
  </div>
}
