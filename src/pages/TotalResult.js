import React, {useState, useEffect} from 'react';
import Background from "./components/background.js"
import { firestore } from '../firebase';

function TotalResult(){
    let ref = firestore.collection('Report');
    const [itemCount, setItemCount]=useState({});
    // useEffect(
    //     () => { 
    //     //  const data= getTotalCount();

    //     //  if(data != null){
    //     //     setItemCount(data);
    //     //  }
    //     // }, [itemCount][]
    //     // setData();
    //     }
    //   ,[]  );

    //  function getTotalCount(){
    //     // console.log(3);

    //       ref.doc(`fF2LVDgqIHKIjKYbrU6s`).get().then((doc) => {
    //       if (doc.exists) {
    //         setItemCount(doc.data().type);

    //         return doc.data().type;
        
    //         // setItemCount(doc.data().type);
    //     //    doc.data().type;           
    //       }
    //   }).catch((error) => {
    //       console.log("Error getting document:", error);
    //   });
    //   }

    
      
    return <Background>
        <div className='most-items'>
        <span>
            가장 많은 mbti 
        </span>
        </div>
        <div className='least-items'>
        <span>
            가장 적은 mbti 
        </span>
        </div>
        </Background>
}

export default TotalResult;