import React from 'react'
import { useState } from 'react'
import './style.css'
import ReactMarkdown from 'react-markdown'
import savebtn from './Resources/save.svg'
import remarkGfm from 'remark-gfm'

function Body() {

  let [text , change] = useState('');
  let [fileName , changeName] = useState('Markdown');

  function save()
  {
    console.log(text);
    const blob = new Blob([document.querySelector(".output").innerText] , {type: 'text/plain'});
  const file = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = `${fileName}`;
  link.href = file;
  link.click();
  }

  return (
    <>
      <div className="main">
        <div className="fileName">
          <p>File Name :</p>
          <input className='nameOfFile' type="text" placeholder='Markdown' onChange={(e)=>{changeName(e.target.value)}} />
          <p>.txt</p>
        </div>
        <div className="section1">
          <p className='heading'>Markdown</p>
          <textarea id='input' onChange={(e)=>{
            change(e.target.value)
          }} placeholder='Start writing your markdown here !!!'></textarea>
        </div>
        <div className="section2">
        <img src={savebtn} alt='save' onClick={()=>{save()}} className='save' />
        <p className='heading'>Preview</p>
        <div className='outputCont'>
          <div className="output">
            <ReactMarkdown remarkPlugins={[remarkGfm]} className='md'>{text}</ReactMarkdown>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Body
