import React from "react";
import ReactDOM from "react-dom";

class Calculator extends React.Component {

    constructor(props) {
        
        super(props);

        this.state = {
            
            a: 0,
            b: [],
            c: 0,
            oper: "",
            cnt:0
        };

        this.myfunc= this.myfunc.bind(this);  

    }

    myfunc(e) {
        
    if(e.target.className=='numbers') {
            
            this.setState({
                             
            
                a: this.state.a *10+parseInt(e.target.id),   
                b: this.state.b.concat(this.state.a)
                 
            });    
            
        }
    
    if(e.target.id=='equal' || this.state.cnt>1 ){

        switch(this.state.oper) {

            case 'mult': 
                this.setState({a: this.state.a * this.state.c});
                break;

            case 'addi':
                this.setState({a: this.state.a + this.state.c});
                break;

            case 'subt':
                this.setState({a: this.state.c - this.state.a});
                break;

            case 'divi':
                this.setState({a: this.state.c / this.state.a});
                break;

            //default: this.setState({a: this.state.a});

        };
}

    else if(e.target.className=='operators' && e.target.id!=='equal' && e.target.id!=='ac') {

    this.setState({

        oper: e.target.id,        
        c: this.state.a,
        a: 0,
        cnt: this.state.cnt+1
        
    }); 

}
    //console.log(this.state.oper);


    else if(e.target.id=='ac'){

        this.setState({

        a:0,
        c:0

        });
};

         
}

    render() {
    
        return(
            
            <div onClick={this.myfunc}>
                <Display num={this.state.a}/>
                <div>
                    <button id='7' className="numbers">7</button>
                    <button id='8' className="numbers">8</button>
                    <button id='9' className="numbers">9</button>
                    <button id='divi' className="operators">/</button>
                </div>
                <div>
                    <button id='4' className="numbers">4</button>
                    <button id='5' className="numbers">5</button>
                    <button id='6' className="numbers">6</button>
                    <button id='mult' className="operators">*</button>
                </div>
                <div>
                    <button id='1' className="numbers">1</button>
                    <button id='2' className="numbers">2</button>
                    <button id='3' className="numbers">3</button>
                    <button id='subt' className="operators">-</button>
                </div>
                <div>
                    <button id='0' className="numbers">0</button>
                    <button id='addi' className="operators">+</button>
                    <button id='equal' className="operators">=</button>
                    <button id='ac' className="operators">AC</button>
                </div>
            </div>

        )
    }
}

class Display extends React.Component {

    render() {
        //console.log(this.props.num);
        return(

            <div className="disp">
                {this.props.num}
            </div>    
        )
    }
}

export default Calculator
