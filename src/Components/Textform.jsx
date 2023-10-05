import React, { useEffect, useState } from 'react'

function Textform() {

    const [text, setText] = useState('');
    const [word, setWord] = useState(0);
    const [char, setChar] = useState(0);

    const count = () =>{
        const wordCount = text.split(' ').length -1;
        setWord(wordCount);

        const charCount = text.split(' ').join('').length
        setChar(charCount)
    }
    useEffect(count,[text, setText]);

    const toUppercase = () =>{
        const upperText = text.toUpperCase();
        setText(upperText);
    }

    const toLowercase = () =>{
        const lowerText = text.toLowerCase();
        setText(lowerText);
    }

    const capitalizedSentence = () =>{
        const newSentence = text.split('.').map((element)=>element.trim().charAt(0).toUpperCase() + element.trim().slice(1).toLowerCase()).join('. ');
        setText(newSentence);
    }

    const capitalizedWord = () =>{
        const newWord = text.split(' ').map((element)=>element.trim().charAt(0).toUpperCase() + element.trim().slice(1).toLowerCase()).join(' ')
        setText(newWord);
    }

    const removeSpace = () =>{
        const newWord = text.split(' ');
        let newArray = [];
        newWord.forEach((element)=>{
            if (element.length != 0) {
                newArray.push(element);
            }    
        })
        
        const rmspace = newArray.join(' ');

        setText(rmspace);
    }

    const copyText = () =>{
        const textArea = document.getElementById('textInput');
        textArea.select();
        navigator.clipboard.writeText(textArea.value);
    }

    const resetAll = () =>{
        setText('')
    }


  return (
    <>
        <div className='container mx-auto flex justify-center py-20 w-full max-w-4xl flex-col px-5'>
            <div>
            <textarea 
                id='textInput'
                rows={10}  
                className='w-full border-2 border-gray-400 rounded-lg p-4' 
                value={text}
                onChange={(e)=>{setText(e.target.value)}}
                />
            </div>

            <div className='flex gap-4 mt-4 justify-between'>
                <div className='font-bold'>Word Count: {word}</div>
                <div className='font-bold'>Character Count: {char}</div>
            </div>

            <div className='flex gap-4 mt-4 flex-wrap justify-center'>
            <button type="button" className='bg-teal-600 px-4 py-2 text-sm font-bold text-white uppercase rounded-lg shadow' onClick={toUppercase}>To Uppercase</button> 

            <button type="button" className='bg-teal-600 px-4 py-2 text-sm font-bold text-white uppercase rounded-lg shadow' onClick={toLowercase}>To Lowercase</button> 

            <button type="button" className='bg-teal-600 px-4 py-2 text-sm font-bold text-white uppercase rounded-lg shadow' onClick={capitalizedSentence}>Capitalize Sentence</button> 

            <button type="button" className='bg-teal-600 px-4 py-2 text-sm font-bold text-white uppercase rounded-lg shadow' onClick={capitalizedWord}>Capitalize Word</button> 

            <button type="button" className='bg-teal-600 px-4 py-2 text-sm font-bold text-white uppercase rounded-lg shadow' onClick={removeSpace}>Remove Space</button> 

            <button type="button" className='bg-teal-600 px-4 py-2 text-sm font-bold text-white uppercase rounded-lg shadow' onClick={copyText}>Copy Text</button> 

            <button type="button" className='bg-teal-600 px-4 py-2 text-sm font-bold text-white uppercase rounded-lg shadow' onClick={resetAll}>Reset All</button> 
              
            </div>
            
        </div>
    </>
  )
}

export default Textform