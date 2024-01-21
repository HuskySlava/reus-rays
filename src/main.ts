import './style.css'
import {Render} from "./render.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<canvas id="canvas" width="200" height="200"></canvas>
<div>
    <textarea id="log">This is a test</textarea>
</div>
`


const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
const render = Render.getInstance(canvas);

render.renderLoop();

