import react from 'react'

const languages=[
    { name: "JavaScript", founder: "Brendan Eich" },
    { name: "Python", founder: "Guido van Rossum" },
    { name: "Java", founder: "James Gosling" },
    { name: "C++", founder: "Bjarne Stroustrup" },
    { name: "Ruby", founder: "Yukihiro Matsumoto" },
]


//using forEach This approach uses forEach method which is be used to iterate over an array of items and perform side effects, such as rendering JSX elements for each item.
const listitems=[];
languages.forEach((language,index)=>{
    listitems.push(<li key={index}>{language.name}</li>)
})
//////

const FunctionalComponent=()=>{
    console.log(listitems)
    return (
        // <div>
        //     <h2>Rendering List using map function</h2>
        //     {languages.map((language,index)=>{
        //         return (
        //             <>
        //             <li>
        //                 <ul key={index}  style={{
        //                     marginBottom: "10px",
        //                     padding: "10px",
        //                     backgroundColor: "#f4f4f4",
        //                     borderRadius: "5px",
        //                 }}>{language.name} : founder {language.founder}</ul>
        //             </li>
        //             </>
        //         )
        //     })}
        // </div>


        //using forEach 
        <div>
            <ul>
                <li>{listitems}</li>
            </ul>
        </div>
        /////
    )
}

export default FunctionalComponent;