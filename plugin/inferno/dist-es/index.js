import { warning, NO_OP } from 'inferno-shared';
import { createVNode, cloneVNode } from './core/VNodes';
import linkEvent from './DOM/events/linkEvent';
import options from './core/options';
import { render, findDOMNode, createRenderer } from './DOM/rendering';
import { EMPTY_OBJ } from './DOM/utils';
if (process.env.NODE_ENV !== 'production') {
    const testFunc = function testFn() { };
    if ((testFunc.name || testFunc.toString()).indexOf('testFn') === -1) {
        warning(('It looks like you\'re using a minified copy of the development build ' +
            'of Inferno. When deploying Inferno apps to production, make sure to use ' +
            'the production build which skips development warnings and is faster. ' +
            'See http://infernojs.org for more details.'));
    }
}
// This will be replaced by rollup
export const version = '1.5.5';
// we duplicate it so it plays nicely with different module loading systems
export default {
    linkEvent,
    // core shapes
    createVNode,
    // cloning
    cloneVNode,
    // used to shared common items between Inferno libs
    NO_OP,
    EMPTY_OBJ,
    // DOM
    render,
    findDOMNode,
    createRenderer,
    options,
    version
};
export { 
// Public methods
linkEvent, 
// core shapes
createVNode, 
// cloning
cloneVNode, 
// used to shared common items between Inferno libs
NO_OP, EMPTY_OBJ, 
// DOM
render, findDOMNode, createRenderer, options };
// Internal stuff that only core inferno-* packages use
export { isUnitlessNumber as internal_isUnitlessNumber } from './DOM/constants';
// Mainly for testing
export { normalize as internal_normalize } from './core/normalization';
