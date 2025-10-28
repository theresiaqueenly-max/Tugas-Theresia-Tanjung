import React, {useState} from 'react'

function Tambah() {
    const [count,iscount] = useState(0)
  return (
    <div>
        <h1>Tambah kurang</h1>
        <p> Nilai sekarang : {count} </p>
        <button onClick={() => iscount (count +1)}>TAMBAH</button>
        <button onClick={() => iscount (count -1)} disabled= {count <= 0}>KURANG</button>
         </div>
  )
}

export default Tambah