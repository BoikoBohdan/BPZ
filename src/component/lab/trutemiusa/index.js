import React from 'react';
import './index.css';

class Tretemiusa extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input__text : '',
            output__text: 'Output text',
            input__key: 1, 
            code: true,
            current__lang: 'ua',  
            error__input: false,             
            en: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ',
            ua: 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ ',
        };
    }
    handlChangeLang = (e) => {
        this.setState({current__lang: e.target.value});
    }
    handlChaneCode = (e) => {
        if(e.target.value == 'encode'){
            this.setState({code: true});
        }
        else{
            this.setState({code: false});
        }
        this.handleencodeTextChange();
    }
    handleencodeTextChange = (e) =>{
        let text;
        let key;
        let symbol = '';
        let lang__string;
        let output = '';
        let uppercase = false;
        if(e){
            text = e.target.value;    
            this.setState({input__text: e.target.value});
        }
        else{
            text = this.state.input__text;
        }
        if(this.state.current__lang == 'ua'){
            lang__string = this.state.ua;
        }
        else{
            lang__string = this.state.en;
        }
        for(let i = 0; i < text.length; i++){
            symbol = '';
            if(text.charAt(i) == text.charAt(i).toUpperCase()){
                uppercase = true;
            }
            else{
                uppercase = false;
            }
            if(lang__string.indexOf(text.charAt(i).toUpperCase()) == -1){
                this.state.error__input = true;
            }
            else{
                this.state.error__input = false;
                let k = 3*i + 2;
                let sdvig = 0;
                let m = lang__string.indexOf(text.charAt(i).toUpperCase());
                if(m+k > lang__string.length){
                    sdvig = -lang__string.length;
                }
                else if(m-k < 0){
                    sdvig = lang__string.length;
                }
                if(this.state.code){
                    symbol += lang__string.charAt(m+k+sdvig); 
                }
                else{
                    symbol += lang__string.charAt(m-k+sdvig);
                }
            }
            if(!uppercase){
                symbol = symbol.toLocaleLowerCase();
            }
            if(text.charAt(i) == ' '){
                symbol = ' ';
            }
            output += symbol;
            uppercase = false;
        }
        this.setState({output__text: output});
    }
    handleencodeKeyChange = (e) =>{
        if(Number(e.target.value) && Number(e.target.value) != ''){
            this.setState({
                input__key:  Number(e.target.value),
            });
            console.log(1);
            this.handleencodeTextChange();
        }
    }
    render(){
        return(
            <div className="trutemiusa">
                <h2 className="trutemiusa__alphabetic">{this.state.current__lang == 'ua' ? this.state.ua : this.state.en}</h2>
                <select name="lang" id="lang" className="cezer__lang" onChange={this.handlChangeLang}>
                    <option value="ua" selected>Ua</option>
                    <option value="en">En</option>
                </select>
                <select name="code" id="code" className="cezer__code" onChange={this.handlChaneCode}>
                    <option value="encode">Encode</option>
                    <option value="decode">Decode</option>
                </select>
                <div className="trutemiusa__encode">
                    <div className="trutemiusa__decode-main">
                        <div className="trutemiusa__encode-input">
                            <textarea className={this.state.error__input ? "text__encode error" : "text__encode"} type="text" placeholder="Text" onChange={this.handleencodeTextChange}/>
                            <p className="trutemiusa__title-key">Формула: k = 3*t + 2</p>
                        </div>
                        <div className="trutemiusa__encode-output">{this.state.output__text}</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Tretemiusa;