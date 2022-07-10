import React, { Component } from 'react'

class MyTest extends Component{
    constructor(props:string){
        super(props);
    }  
    static getDerivedStateFromProps(props:any, state:any) {
        return {favoritecolor: props.favcol };
      }
    render (){

        return(<h1>hello</h1>)
    }
}

export default MyTest;