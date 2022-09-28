import {useEffect, useRef, useCallback} from "react";

export const useTimer = (callback: () => void, interval: number) => {
    const timerRef = useRef<NodeJS.Timer | null>(null)

    // useEffect(()=> {
    //
    //     if(!timerRef.current) {
    //         timerRef.current = setInterval(callback, interval)
    //     }
    //
    //     return () => {
    //         timerRef.current = null
    //     }
    // })

    const stopTimer = useCallback(() => {
        if(!timerRef.current) return;
        clearInterval(timerRef.current)
        timerRef.current = null
    }, [callback, interval])

    const startTimer = useCallback( () => {
        if(timerRef.current) return;
        timerRef.current = setInterval(callback, interval)
    }, [])

    return {timerRef, stopTimer, startTimer}
}

export class TimerUtil {
    timerObj: NodeJS.Timer | null;
    fn: () => {};
    t: number;

    constructor(fn: ()=> {}, t: number){
        this.fn = fn;
        this.t = t;
        this.timerObj = setInterval(fn, t);
    }

    isRunning = () => {
        return this.timerObj !== null
    }

    stop = () => {
        if (this.timerObj) {
            clearInterval(this.timerObj);
            this.timerObj = null;
        }
        return this;
    }

    start = () => {
        if (!this.timerObj) {
            this.stop();
            this.timerObj = setInterval(this.fn, this.t);
        }
        return this;
    }

    reset = (newTime: number) => {
        this.t = newTime;
        return this.stop().start();
    }
}
