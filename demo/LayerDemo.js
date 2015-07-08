
var Layer = require('../src');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Layer/>
            </div>
        );
    }
};

React.render(<Demo/>, document.getElementById('TingleDemo'));