let Layer = require('../src');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            show: false
        }
    }

    handleClick(e) {
        var id = e.target.getAttribute('data-id');
        this._hide = false;
        this.setState({
            index: id ? id : 0,
            show: !this.state.show
        });
    }

    render() {
        var index = this.state.index,
            show = this.state.show;
        return (
            <div className="demo">
                <div className="demoItem" onClick={this.handleClick.bind(this)} >
                    <b data-id="1">↖</b>
                    <b data-id="2" >↑</b>
                    <b data-id="3">↗</b><br/>
                    <b data-id="4">←</b>
                    <b data-id="5">・</b>
                    <b data-id="6">→</b><br/>
                    <b data-id="7">↙</b>
                    <b data-id="8">↓</b>
                    <b data-id="9">↘</b><br/>
                </div>
                <Layer width="auto" top="0" left="0" show={show && index == 1} onClick={this.handleClick.bind(this)}>
                    <div style={{width: 100, height: 100, backgroundColor: 'red'}}></div>
                </Layer>
                <Layer top="0" show={show && index == 2} onClick={this.handleClick.bind(this)}>
                    <div style={{height: 100, backgroundColor: 'red'}} onClick={this.handleClick.bind(this)}></div>
                </Layer>
                <Layer width="auto" top="0" right="0" show={show && index == 3} onClick={this.handleClick.bind(this)}>
                    <div style={{width: 100, height: 100, backgroundColor: 'red'}}></div>
                </Layer>
                <Layer width="auto" left="0" height="100%" show={show && index == 4} onClick={this.handleClick.bind(this)}>
                    <div style={{width: 100, height: '100%', backgroundColor: 'red'}}></div>
                </Layer>
                <Layer width="auto" show={show && index == 5} onClick={this.handleClick.bind(this)}>
                    <div style={{width: 100, height: 100, backgroundColor: 'red'}}></div>
                </Layer>
                <Layer width="auto" right="0" height="100%" show={show && index == 6} onClick={this.handleClick.bind(this)}>
                    <div style={{width: 100, height: '100%', backgroundColor: 'red'}}></div>
                </Layer>
                <Layer width="auto" bottom="0" left="0" show={show && index == 7} onClick={this.handleClick.bind(this)}>
                    <div style={{width: 100, height: 100, backgroundColor: 'red'}}></div>
                </Layer>
                <Layer bottom="0" show={show && index == 8} onClick={this.handleClick.bind(this)}>
                    <div style={{height: 100, backgroundColor: 'red'}}></div>
                </Layer>
                <Layer width="auto" bottom="0" right="0" show={show && index == 9} onClick={this.handleClick.bind(this)}>
                    <div style={{width: 100, height: 100, backgroundColor: 'red'}}></div>
                </Layer>
            </div>
        );
    }
};

React.render(<Demo/>, document.getElementById('TingleDemo'));