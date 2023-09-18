import React,{createContext,useState, useContext} from 'react'
export const Contextdata=createContext();
const Contex = (props) => {

const [text,settext]=useState('');
    
    //console.log(text);
const[email,setemail]=useState('');
    const[phone,setphone]=useState('');
   const[age,setage]=useState('');
     const[contact,setcontact]=useState('');
    const[address,setaddress]=useState('');
    const[file,setfile]=useState("");
    // const[namevalue,setnamevalue]=useState('');
    const[password,setpassword]=useState('');
     const[confirmpassword,setconfirmpassword]=useState('');
    const[admin,setadmin]=useState(false);
    const[chef,setchef]=useState(false);
    const[chef1,setchef1]=useState(false);
    console.log("i am context data");
    console.log(admin);
    console.log("end");
  return (
    <div>
    <Contextdata.Provider value={{text,settext,email,setemail,setphone,phone,setage,age,setcontact,contact,address,setaddress,file,setfile,setconfirmpassword,confirmpassword,setpassword,password,setadmin,admin,setchef,chef,setchef1,chef1}}>
        {props.children}
    </Contextdata.Provider>
    </div>
  )
}

export default Contex;