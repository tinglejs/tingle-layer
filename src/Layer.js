/**
 * Layer Component for tinglejs
 * @author gnosaij
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

let Mask = require('tingle-mask');
let Context = require('tingle-context');

class Layer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        document.documentElement.style.height = '100%';
        document.body.style.height = '100%';
        this.handleMask(this.props);
    }

    componentWillUpdate(props) {
        this.handleMask(props);
    }

    handleMask(props) {
        let t = this;
        let last = t.state.showMask;
        t.state.showMask = false;

        if (props.mask) {
            if (props.show) {
                t.state.zIndex = Layer._getIndex();
                t.state.showMask = true;
            } else {
                last && Layer._setIndex();
            }
        }
    }

    getStyle() {
        let prop = this.props,
            show = prop.show,
            width = 'width' in prop,
            height = 'height' in prop,
            full = prop.mode == 'full',
            top = 'top' in prop,
            bottom = 'bottom' in prop,
            left = 'left' in prop,
            right = 'right' in prop,
            style = {
                width: full || !width ? '100%' : prop.width,
                height: full ? '100%' : height ? prop.height : 'auto'
            };

        if (full) {
            style.top = 0;
            style.left = 0;
        } else {
            if (top) {
                style.top = prop.top;
            } else if (bottom) {
                style.bottom = prop.bottom;
            } else {
                style.top = '50%';
                style['WebkitTransform'] = (style['WebkitTransform'] || '' ) + ' translateY(-50%)';
                style['transform'] = (style['transform'] || '') + ' translateY(-50%)';
            }

            if (left) {
                style.left = prop.left;
            } else if (right) {
                style.right = prop.right;
            } else {
                style.left = '50%';
                style['WebkitTransform'] = (style['WebkitTransform'] || '') + ' translateX(-50%)';
                style['transform'] = (style['transform'] || '') + ' translateX(-50%)';
            }
        }

        style.zIndex = this.state.zIndex || prop.zIndex;
        style.display = show ? 'block' : 'none';

        return style;
    }

    handleClick(e) {
        this.props.onClick(e);
    }

    handleHide() {
        this.props.onHide();
    }

    render() {
        let mask = this.state.showMask ? <Mask onHide={this.handleHide.bind(this)} zIndex={this.state.zIndex - 1} closeable={!!this.props.closeable} visible={true} opacity={0.6}/> : '';
        return (
            <div onClick={this.handleClick.bind(this)}>
                {mask}
                <div className="tLayer" style={this.getStyle()}>{this.props.children}</div>
            </div>

        );
    }
}

Layer.defaultProps = {
    onClick: Context.noop,
    onHide: Context.noop,
    zIndex: 1001,
    mask: true,
    show: false
};

// http://facebook.github.io/react/docs/reusable-components.html
Layer.propTypes = {
    onClick: React.PropTypes.func,
    onHide: React.PropTypes.func,
    zIndex: React.PropTypes.number,
    mask: React.PropTypes.bool,
    show: React.PropTypes.bool
};

Layer._zIndex = 1000;

Layer._getIndex = function () {
    Layer._zIndex += 2;
    return Layer._zIndex;
};

Layer._setIndex = function () {
    Layer._zIndex -= 2;
};

Layer.displayName = "layer";


module.exports = Layer;