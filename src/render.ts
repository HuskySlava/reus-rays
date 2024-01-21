export class Render {
    private static instance: Render;
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D | undefined;
    private frameCounter: number = 0;
    private constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        if(this.canvas){
            let ctx = canvas.getContext('2d');
            if(!ctx){
                throw new Error("Canvas context error");
            };

            this.ctx = ctx;
        }
    }

    public static getInstance(canvas: HTMLCanvasElement): Render {
        if(!Render.instance){
            Render.instance = new Render(canvas);
        }
        return Render.instance;
    }

    private clearFrame(): void{

        if(!this.ctx) return;

        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    }

    public renderLoop(): void {
        requestAnimationFrame(() => {
            this.clearFrame();
            this.frameCounter++;
            this.renderLoop();
        })
    }

}