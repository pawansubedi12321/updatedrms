import React,{useContext, useEffect} from 'react'
import {Contextdata } from './Context';
import { useLocation } from 'react-router-dom';
export default function AssignRole({alldataofform,setalldataofform,arrayofform,setarrayofform}) {
     let {admin,setadmin,chef,setchef,chef1,setchef1}=useContext(Contextdata);
   // setalldataofform({...alldataofform,admin:admin,chef:chef,chef1:chef1});
   
    //storedata={...storedata,...alldataofform}
    //setalldataofform()
//    useEffect(()=>{
//     setarrayofform([...arrayofform,alldataofform]);
//    },[setarrayofform]);

   


    const admindata=()=>{
              let admindata=!admin;
              setalldataofform({...alldataofform,admin:admindata});
              setadmin(admindata);

      
        
    }
   
    const chefdata=()=>{
        //setchef(!chef);
        //chef=!chef;
        
        let chefdata1=!chef;
        setalldataofform({...alldataofform,chef:chefdata1});
        setchef(chefdata1);
     //   console.log("hsdfl");

    }
    const chef1data=()=>{
       let chefdata2=!chef1
       setalldataofform({...alldataofform,chef1:chefdata2});
       setchef1(chefdata2);
      //  console.log("i am chef1");

    }
    console.log("admin");
    console.log(admin);
    console.log("end")
    console.log("chef");
    console.log(chef);
    console.log("End");
    console.log("chef1");
    console.log(chef1);
    console.log("end");
    //localStorage.setItem('datavalue', JSON.stringify(datavalue));
  return (
    <>
         <form>
            <div className="row mt-4">
                <div className="col-md-12">
                    <div class="form-check form-check-inline formbox">
                        <input class="form-check-input"defaultChecked={admin}onChange={admindata} type="checkbox" id="inlineCheckbox1" value="option1"/>
                        <label class="form-check-label" for="inlineCheckbox1">Admin</label>
                    </div>
                    <div class="form-check form-check-inline formbox">
                        <input class="form-check-input"defaultChecked={chef}onChange={chefdata} type="checkbox" id="inlineCheckbox2" value="option2"/>
                        <label class="form-check-label" for="inlineCheckbox2">Chef</label>
                    </div>
                    <div class="form-check form-check-inline formbox">
                        <input class="form-check-input"defaultChecked={chef1}onChange={chef1data} type="checkbox" id="inlineCheckbox3" value="option3"/>
                        <label class="form-check-label"for="inlineCheckbox3">Chef 1</label>
                    </div>
                </div>
               
            </div>
        </form>
    </>
  )
}
