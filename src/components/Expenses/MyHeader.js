import "./MyHeader.css";
function MyHeader(props) {
    return (<div className="header-react-app">
        <h1>{props.header}</h1>
    </div>)
}
export default MyHeader;