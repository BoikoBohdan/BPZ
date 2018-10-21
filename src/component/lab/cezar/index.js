import React from 'react';
import './index.css';

class Cezar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input__text : '',
            output__text: 'Output text',
            input__key: 1, 
            code: true,
            current__lang: 'ua',  
            error__input: false,             
            en: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            ua: 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ',
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
        if(!this.state.code){
            key = -this.state.input__key;
        }
        else{
            key = this.state.input__key;
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
                console.log(lang__string.indexOf(text.charAt(i).toUpperCase())+key > lang__string.length-1);
                this.state.error__input = false;
                if(lang__string.indexOf(text.charAt(i).toUpperCase())+key > lang__string.length){
                    symbol += lang__string.charAt(lang__string.indexOf(text.charAt(i).toUpperCase())+key-lang__string.length);
                }
                else if((text.charAt(i).toUpperCase())+key < 0){
                    symbol += lang__string.charAt(lang__string.indexOf(text.charAt(i).toUpperCase())+key+text.length);
                }
                else{
                    symbol += lang__string.charAt(lang__string.indexOf(text.charAt(i).toUpperCase())+key);
                }
            }
            if(text.charAt(i) == " "){
                this.state.error__input = false;
                symbol = " ";
            }
            if(!uppercase){
                symbol = symbol.toLocaleLowerCase();
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
            <div className="cezar">
                <h2 className="cezar__alphabetic">{this.state.current__lang == 'ua' ? this.state.ua : this.state.en}</h2>
                <select name="lang" id="lang" className="cezer__lang" onChange={this.handlChangeLang}>
                    <option value="ua" selected>Ua</option>
                    <option value="en">En</option>
                </select>
                <select name="code" id="code" className="cezer__code" onChange={this.handlChaneCode}>
                    <option value="encode">Encode</option>
                    <option value="decode">Decode</option>
                </select>
                <div className="cezar__encode">
                    <div className="cezar__decode-main">
                        <div className="cezar__encode-input">
                            <textarea className={this.state.error__input ? "text__encode error" : "text__encode"} type="text" placeholder="Text" onChange={this.handleencodeTextChange}/>
                            <input className="text_encode-key" placeholder='1' type="text" onChange={this.handleencodeKeyChange}/>
                        </div>
                        <div className="cezar__encode-output">{this.state.output__text}</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cezar;