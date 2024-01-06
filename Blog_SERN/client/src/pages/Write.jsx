import React,{useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Write() {

  const [value, setValue] = useState('')
  const [title, setTitle] = useState('')
  const [cat, setCat] = useState('')

  const handleclick = async e=>{
    e.preventDefault()
  }

  return (
    <div className='mt-10 flex gap-5'>
      <div className='flex-1 w-70'>
        <input className='border-2 rounded-xl' type="text" placeholder='Tittle' onChange={e=>setTitle(e.target.value)}/>
      </div>
      <div>
      <ReactQuill theme="snow" value={value} onChange={setValue}/>
      </div>
      <div className='flex-1'>
        <input type="file" name="" id="file" />
        <label htmlFor="file">Upload images</label>
        <div className='p-1'>
          <h1 className='text-2xl'>category</h1>
          <input type="radio" name="cat" id="art" value="art" onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="art">ART</label>
          <input type="radio" name="cat" id="science" value="art" onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="science">science</label>
          <input type="radio" name="cat" id="technology" value="art" onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="technology">technology</label>
          <input type="radio" name="cat" id="cinema" value="art" onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="cinema">cinema</label>
          <input type="radio" name="cat" id="design" value="art" onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="design">design</label>
          <input type="radio" name="cat" id="food" value="art" onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="food">food</label>
        </div>
      </div>
      <button onClick={handleclick} className='bg-green-300 rounded-lg p-2 m-2'>publish</button>
      <button className='bg-green-300 rounded-lg p-2 m-2'>Save as draft</button>
    </div>
  )
}

export default Write