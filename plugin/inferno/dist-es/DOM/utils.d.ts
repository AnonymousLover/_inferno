import { LifecycleClass } from 'inferno-shared';
import { VNode, Props } from '../core/VNodes';
export declare const EMPTY_OBJ: {};
export declare function createClassComponentInstance(vNode: VNode, Component: any, props: Props, context: Object, isSVG: boolean, lifecycle: LifecycleClass): any;
export declare function replaceLastChildAndUnmount(lastInput: any, nextInput: any, parentDom: any, lifecycle: LifecycleClass, context: Object, isSVG: boolean, isRecycling: boolean): void;
export declare function replaceVNode(parentDom: any, dom: any, vNode: any, lifecycle: LifecycleClass, isRecycling: any): void;
export declare function createFunctionalComponentInput(vNode: VNode, component: any, props: Props, context: Object): any;
export declare function setTextContent(dom: any, text: string | number): void;
export declare function updateTextContent(dom: any, text: string): void;
export declare function appendChild(parentDom: any, dom: any): void;
export declare function insertOrAppend(parentDom: any, newNode: any, nextNode: any): void;
export declare function documentCreateElement(tag: any, isSVG: any): Element;
export declare function replaceWithNewNode(lastNode: any, nextNode: any, parentDom: any, lifecycle: LifecycleClass, context: Object, isSVG: boolean, isRecycling: boolean): void;
export declare function replaceChild(parentDom: any, nextDom: any, lastDom: any): void;
export declare function removeChild(parentDom: Element, dom: Element): void;
export declare function removeAllChildren(dom: Element, children: any, lifecycle: LifecycleClass, isRecycling: boolean): void;
export declare function removeChildren(dom: Element, children: any, lifecycle: LifecycleClass, isRecycling: boolean): void;
export declare function isKeyed(lastChildren: VNode[], nextChildren: VNode[]): boolean;
