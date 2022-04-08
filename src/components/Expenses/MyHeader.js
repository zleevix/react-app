import "./MyHeader.css";
const MyHeader = (props) => {
    const header = props.header;
    
    return (<div className="header-react-app">
        <h1>{header}</h1>
    </div>)
}
export default MyHeader;