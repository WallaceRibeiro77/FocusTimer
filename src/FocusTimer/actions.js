import state from './state.js';

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running');
}

export function addFive(){
    console.log('addfive minutes mane')
}

export function minusFive(){
    console.log('minusfive minutes mane')
}