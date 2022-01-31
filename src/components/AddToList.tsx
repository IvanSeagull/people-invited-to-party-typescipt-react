import { parse } from 'node:path/win32';
import React, { useState } from 'react';
import {IState as Props} from '../App';

interface IProps{
    people: Props["people"],
    setPeople:  React.Dispatch<React.SetStateAction<Props['people']>>
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => {
    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        imgUrl: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if(!input.name || !input.age || !input.imgUrl){
            return
        }
        setPeople([...people, {
            name: input.name,
            age: parseInt(input.age),
            url: input.imgUrl,
            note: input.note
        }])

        setInput({
            name: "",
            age: "",
            note: "",
            imgUrl: ""
        })
    }

  return <div className='AddToList'>
      <input type={"text"} placeholder='Name' className='AddToList-input' value={input.name} onChange={handleChange} name="name"/>
      <input type={"text"} placeholder='Age' className='AddToList-input' value={input.age} onChange={handleChange} name="age"/>
      <input type={"text"} placeholder='Image Url' className='AddToList-input' value={input.imgUrl} onChange={handleChange} name="imgUrl"/>
      <textarea  placeholder='Notes' className='AddToList-input' value={input.note} onChange={handleChange} name="note"/>
      <button className='AddToList-btn' onClick={handleClick}>Add to list</button>

  </div>;
};

export default AddToList;
