import React, {useRef, useCallback, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Store} from '../redux/Store'
import {connect} from 'react-redux';


export default function Index(){

    function debounce(fn, wait = 50, dep=[]){
        let { current } = useRef({fn, timer: null});

        useEffect(function(){
            current.fn = fn;
        }, [fn])

        return useCallback(function f(...args){
            if(current.timer) clearTimeout(current.timer)
            current.timer = setTimeout(()=>{
                current.fn.call(this, ...args)
            }, wait)
        }, dep)
    }

    function MountedRef (){
        const inputRef = useRef(null);

        function onClick(){
            inputRef.current.focus();
        }
        return (
            <>
                <button onClick={onClick}>auto focus</button>
                <input ref={inputRef} type="text"/>
            </>
        )
    }

    function onClick(){
        console.log('OOOOOOnclick~~')
    }

    return (
        <div onClick={debounce(onClick, 2000)}>Interview - hook
            <MountedRef />
        </div>
    )
}