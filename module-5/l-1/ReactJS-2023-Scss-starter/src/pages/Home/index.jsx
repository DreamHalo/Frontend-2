import {useEffect} from "react";
import {Button} from "flowbite-react";


const index = () => {

  const inisialState={
   password:"",
   username:"",
   checkbox:false,

  }

  const reducer = (state, action) =>{
    console.log("action-->", action);
    console.log("state-->", state);
    switch (action.type){
        case ""
    }

  }

    return (
        <div>
            <h1>Home</h1>
            <Button color="success">Success</Button>
        </div>
    );
};

export default index;
