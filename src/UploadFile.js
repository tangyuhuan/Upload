import React, { Component } from "react";

class UploadFile extends Component{
  constructor(props){
  super(props);
  this.state = {
    name:'',
    path:'',
    preview:null,
    data:null
  }
}

changePath=(e)=>{
  const file = e.target.files[0];
  if(!file){
    return;
  }
  let src,preview,type = file.type;

  if (/^image\//.test(type)) {
      src = URL.createObjectURL(file)
      preview = <img src={src} alt=''/>
  }else if(/^video\//.test(type)){
      src = URL.createObjectURL(file)
      preview = <video src={src} autoPlay loop controls/>
  }else {
    return; 
  }   
  this.setState({
    path:file.name,
    data:file,
    preview:preview
  })
}

upload = () =>{
  const data = this.state.data;
  const url = " ";//服务器上传地址  
  const form = new FormData();
  form.append('file', data);  
  fetch(url,{
    method: 'POST',  
    body: form  
  }).then(res=>{
    console.log(res)
  })
}
cancel=()=>{
  this.props.closeOverlay();
}

render(){
  const {path,preview} = this.state;
  return (
    <div>
      <h4>上传文件</h4>
      <div className='row'>
        <label>文件路径</label> 
        <div className='row-input'>
          <span>{path?path:'请选择文件路径'}</span>
          <input type="file" accept="image/*, video/*"  multiple onChange={this.changePath} /> 
        </div>
      </div>
      <div className='media'>
        {preview}
      </div>
      <button className='primary upload' onClick={this.upload}>上传</button>
      <button className='primary cancel' onClick={this.cancel}>取消</button>
    </div>
    )
  }
}
export default UploadFile;




