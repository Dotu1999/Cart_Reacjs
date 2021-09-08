import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/component/App'
import './index.css';
import {createStore} from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

// const user = {
//   name:"Tu dz",
//   email:"tudq72@wru.vn"
// }
// // const element = <h1>Hello world , my name is :{user.name} ,email:{user.email}</h1>
// var number = [1,2,3,4];
// var doublenumber = number.map((eachnumber)=>eachnumber*2 + ":")
// ReactDOM.render(doublenumber,document.getElementById('root'));




//==================================================================================>
// vi du render trong reactjs
// function updateTimer(){
//   const element = (
//     <div>
//       <h1>Timer update example :</h1>
//       <h2>Current time is:{new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   ReactDOM.render(element,document.getElementById('root'));
// };
// setInterval(updateTimer,1000); // setInterval la ham cua he thong 


// ==========================================================================>
// tao component bang class,thao tac props
// class UserDetail extends React.Component{
//   render(){
//     return(
//       <div className="UserDetail">
//             <p>Name : {this.props.name}</p>
//             <p>Email : {this.props.email}</p>
//       </div>
//     );
//   }
// }
// class OtherInfo extends React.Component{
//   render(){
//     return(
//       <div className ="OtherInfo">
//         <p>Other information : {this.props.otherInformation}</p>
//       </div>
//     );
//   }
// }
// class UserInfo extends React.Component{
//   render(){
//     return(
//       <div>
//         <UserDetail name={this.props.name} email = {this.props.email}/>
//         <OtherInfo otherInformation={this.props.otherInformation}/>
//       </div>
//     );
//   }
// }
// const element = <UserInfo name="Tu dz" email="tudq72wru.vn" otherInformation = "hello word"/>
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );


// ================================================================================>
//  State và Lifecycle-vòng đời của một React component
// class Counter extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {seconds:0};
//   }
//   incrementcounter(){
//     this.setState((prevState,props)=>({
//       seconds:prevState.seconds + 1
//     }));
//   }
//   componentDidMount()
//   {
//     this.timeID = setInterval(()=>this.incrementcounter(),1000);
//   }
//   componentWillUnmount(){
//     clearInterval(this.timeID);
//   }
//   render(){
//     return(
//       <div>
//         <h1>This is a counting machine !</h1>
//         <h2>Seconds: {this.state.seconds} s</h2>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Counter/>,document.getElementById("root"));


// =========================================================================>
// Bắt sự kiện nút bấm trong React
// class ToggleButton extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={isOn :true};
//     // this.buttonClick = this.buttonClick.bind(this);
//   }
//   // buttonClick(){
//   //   this.setState(prevState =>(
//   //     {isOn :!prevState.isOn}
//   //   ));
//   // }
//   buttonClick = ()=>{
//     this.setState(prevState =>(
//       {isOn :!prevState.isOn}
//     ));
//   }
//   render(){
//     return(
//     <div>
//         <button className ="ToggleButton" onClick={this.buttonClick}>
//           This is a Toggle Button {this.state.isOn ?"On" : "OFF"}
//         </button>
//     </div>);
//   }
// }
// ReactDOM.render(
//   <ToggleButton/>
//   ,document.getElementById('root')
// )



//============================================================>
// Render có điều kiện các Component
// class Logincomponent extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = { isLogin: false};
//   }
//   handleLogout = ()=>{
//     this.setState({isLogin:false});
//   }
//   handleLogin = ()=>{
//     this.setState({isLogin:true});
//   }
//   render(){
//     let myButton = null;
//     if(this.state.isLogin){
//       myButton = <button onClick = {this.handleLogout}>LogOut</button>
//     }
//     else{
//       myButton = <button onClick = {this.handleLogin}>LogIn</button>
//     }
//     let title = this.state.isLogin ? "Logined" :"LogOuted" 
//     return(
//       <div>
//         <h1>{title}</h1>
//         {myButton}
//       </div>
//     )
//   }
// }
// class MailComponent extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return(
//       <div>
//         <h1>Mail statistics</h1>
//         {this.props.newMess.length >0 && 
//         <h2>
//           You have {this.props.newMess.length} new messages  
//         </h2>}
//       </div>
//     );
//   }
// }
// ReactDOM.render(
//     <MailComponent newMess ={["hello","tu","hi"]}/>
//     ,document.getElementById('root')
//   )


//==================================================================>
// Sử dụng list, keys để render nhiều Component khác nhau

// day la 1 component khai bai bang ham ,luu y: ten ham viet hoa ky tu  dau tien 
// function ListItem(props){
//     return <li>{props.value}</li>
// }
// class AnimalsComponent extends React.Component{
//   constructor(props){
//     super(props);
//     this.listItems = props.animals.map(
//       (animal,index) => <ListItem key = {animal.id} value ={index.toString() + " _" + animal.name} />
//     );
//   }
//   render(){
//     // console.log(this.listItems[0])
//     return(
//       <ul>
//           {this.listItems}
//       </ul>
//     );
//   }
// }
// const animals = [
//   { id:1,
//     name:"lion"
//   },
//   { id : 2 ,
//     name :"cat"
//   },
//   { id : 3,
//     name :"dog"},
//   { id :4,
//     name :"tiger"}]
// ReactDOM.render(
//   <AnimalsComponent animals = {animals}/>,document.getElementById("root")
// )


//==========================================================>
// Làm việc với Form trong React
// class FormComponent extends  React.Component{
//   constructor(props){
//     super(props);
//     this.state = {textData:""};
//   }
//   handleChange = (event)=>{
//     this.setState({textData:event.target.value});
//   }
//   handleSubmit = (event)=>{
//     alert("Your submit text data :" + this.state.textData);
//     event.preventDefault();
//   }
//   render(){
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Your Name :
//           <input type="text" value = {this.state.textData} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit form your name"></input>
//       </form>
//     )
//   }
// }
// ReactDOM.render(
//   <FormComponent/>,document.getElementById('root')
// )




// ========================================================================
// Handle nhiều thẻ input
// class FormComponent extends  React.Component{
//   constructor(props){
//     super(props);
//     this.state = 
//     {
//       yourName:"",
//       phoneNumber : ""
//     };
//   }
//   handleChange = (event)=>{
//     this.setState({
//       [event.target.name]: event.target.value
//     }
//     );
//   }
//   handleSubmit = (event)=>{
//     alert("Your submit text data :" + this.state.yourName +"-"+ this.state.phoneNumber );
//     event.preventDefault();
//   }
//   render(){
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Your Name : 
//           <input type="text" name="yourName" value = {this.state.yourName} onChange={this.handleChange} />
//         </label>
//         <br></br>
//         <br></br>
//         <label>
//           Phone :
//           <input type="text" name="phoneNumber" value = {this.state.phoneNumber} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit form your name"></input>
//       </form>
//     )
//   }
// }
// ReactDOM.render(
//   <FormComponent/>,document.getElementById('root')
// )



// =======================================================================
// Composition và Inheritance  thay the cho  ke thua
// class UpComponent extends React.Component{
//   render() {
//     return(
//       <div className="red">
//         This is Red
//       </div>
//     );
//   }
// }
// class DownComponent extends React.Component{
//   render() {
//     return(
//       <div className="green">
//         This is Green
//       </div>
//     );
//   }
// }
// class PaneComponent extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return(
//       <div>
//         {this.props.up}
//         {this.props.down}
//         {this.props.children}
//       </div>
//     );
//   }
// }
// ReactDOM.render(
//   <PaneComponent 
//     up={<UpComponent/>} 
//     down={<DownComponent/>}>
//       <p>this is children</p>
//     </PaneComponent>,
//   document.getElementById("root")
// )



// =======================================================================>
// REDUX
// const store =createStore(allReducers);
// ReactDOM.render(
// <Provider store={store}>
//     <App/>
// </Provider>
// ,document.getElementById('root')
// )

//Khởi tạo môt
const NumberContext = React.createContext();
 
class UpdateNumber extends React.Component {
  render() {
    return (
      <button onClick={() => {
        console.log(this.context.update())
      }}>Update Number</button>
    );
  }
}
UpdateNumber.contextType = NumberContext;
 
class ShowNumber extends React.Component {
  render() {
    return (
      <p>{this.context.number}</p>
    );
  }
}
ShowNumber.contextType = NumberContext;
 
 
export default class ContextComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  updateNumber = () => {
    this.setState({
      number: Math.random(),
    });
  };
  render() {
    return (
      <NumberContext.Provider
        value={{
          number: this.state.number,
          update: this.updateNumber.bind(this),
        }}
      >
        <NumberContext.Consumer>
            { () =>  (
              <>
                <ShowNumber />
                <UpdateNumber />
              </>
            )}
        </NumberContext.Consumer>
      </NumberContext.Provider>
    );
  }
}
ReactDOM.render(
    <ContextComponent />,document.getElementById("root")
)
