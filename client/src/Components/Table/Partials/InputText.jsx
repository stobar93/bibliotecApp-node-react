import React, {useEffect} from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputSelect from "./InputSelect";

export function InputText({label, placeholder, data, setData, width, m, valueTag}){

    useEffect(()=>{
        setData((prev)=>{return{...prev, [label]: valueTag}})
    },[])

    useEffect(()=>{
        return ()=>{
            setData(data=>{return{id: data.id}})
        }
    }, [setData])

    const handleOnChange = (event)=>{
        let value = event.target.value
        setData(data=>{return {...data, [label]: value}})
    }

    const typesOfInput = {
        available: {
            component: ()=> <InputSelect m={m} width={width} label={label} placeholder={placeholder} handleOnChange={handleOnChange} options={['yes', 'no']} value={data[label]} />
        },
        subject: {
            component: ()=> <InputSelect m={m} width={width} label={label} placeholder={placeholder} handleOnChange={handleOnChange} options={["Arts",
            "Biographies",
            "Business",
            "Children's",
            "Comics",
            "Computers",
            "Cookbooks",
            "Crafts",
            "Education",
            "Engineering",
            "Languages",
            "Fitness",
            "History",
            "Humor",
            "Law",
            "LGBTQ+",
            "Literature",
            "Medical",
            "Mystery",
            "Nonfiction",
            "Parenting",
            "Politics",
            "Religion",
            "Romance",
            "Science",
            "Fiction",
            "Self-Help",
            "Thriller",
            "Sports",
            "Travel"]} value={data[label]} />
        },
        status: {
            component: ()=> <InputSelect m={m} width={width} label={label} placeholder={placeholder} handleOnChange={handleOnChange} options={['active', 'banned']} value={data[label]} />
        }
    }
    console.log(valueTag, data)
    return (
        typesOfInput.hasOwnProperty(label) ? 
        typesOfInput[label].component()
        :
        
        <OutlinedInput autoComplete="off"
        sx={{width: width ?? "200px", m: m ?? 0}}
        size="small"
        id={`inputText-${label}`}
        // label={`${label}`}
        // variant="outlined"
        placeholder={`${placeholder}: ${valueTag ?? ""}`}
        onChange={(e)=>handleOnChange(e)}
        value={data[label] ?? ""}
        />
        
    )
}