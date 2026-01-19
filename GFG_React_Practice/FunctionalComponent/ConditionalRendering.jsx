import react, { useEffect, useState } from 'react'


///USING IF ELSE
// const ConditionalRendering=({show})=>{
//     if(show==='no'){
//         return <p>Not want to show</p>
//     }
//     return <h>Showing </h>
// }


// //USING TERNERY OPERATOR
// const ConditionalRendering=({show})=>{
//     // return <h1>{show==='yes'?"Showing": "Not want to show"}</h1>

//     //showing html also
//     return <h1>{show==='yes'? (<p style={{color:"red"}}>Showing</p>): (<p>Now want to show</p>)}</h1>
    
// }


//USING LOGICAL AND OPERATOR
//The && operator returns the second operand if the first is true, and nothing if the first is false. This can be useful when you only want to render something when a condition is true.
//If hasNotifications is true: You have new notifications!
// If hasNotifications is false: Nothing is rendered.
// const ConditionalRendering=({show})=>{
//     return <div>{show==='yes' && (<p style={{color:"blue"}}>Showing</p>)}</div>
// }


///SWITCH CASE RENDERING
// const ConditionalRendering=({show})=>{
//     switch(show){
//         case 'yes':
//             return <h1>Showing</h1>;
//         case 'no':
//             return <p>Not showing</p>;
//         case 'loading':
//             return <p>Loading....</p>
//     }
// }


// ///Conditional Rendering in Lists (Using .map())
// const items=['apple','gvava','mngo','jira']
// const ConditionalRendering=({show})=>{
//     return (
//         items.map((item,index)=>{
//         return <div>{item.includes('a') ? (<p key={index}>{item}</p>) :  null}</div>
//     })
// )
// }

//////LOADING EFFECT PRACTICE USIN CONDITIONAL RENDERING
const ConditionalRendering=()=>{
    const [fetch, setfetch] = useState(true);
    const [Data, setData] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            
            setData('Hiii')
            setfetch(false)
        },2000)
    })

    // return fetch ? (<p>Loading</p> ): (<p>{Data}</p> )
   
   
    // return (
        
    //         fetch ? (<p>Loading</p> ): (<p>{Data}</p> )
        
    // )


     return (
        <div>
            {fetch ? (<p>Loading</p> ): (<p>{Data}</p> )}
        </div>  
    )


       
}

export default ConditionalRendering