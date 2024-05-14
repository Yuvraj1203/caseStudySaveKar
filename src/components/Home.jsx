import React from "react";

const Home = (props) =>{
    return(
        <div className="flex text-orange-500 text-l px-10 my-10">
            <img src={props.image} />
            <div className="px-10 m-auto">
                <h1 className="text-xl text-center ">{props.page}</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum soluta perspiciatis vero molestias illum quod architecto saepe commodi quia facere ducimus corporis earum id similique sit labore sapiente, ut nam rerum, adipisci beatae? Eaque dicta perferendis sunt necessitatibus. Est, veritatis.</p>
            </div>
        </div>
    )
}

export default Home;