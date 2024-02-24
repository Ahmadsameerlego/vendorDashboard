var circles = {
    "circle_width"       : 2,
    "color"              : "#00A79C",
    "shadow"             : false,
    "shadow_blur"        : 2,
    "inner_background"   : true,
    "inner_bg_color"     : "#ffffff",
    'clock_direction'    : true,
}

  var circle = function(ele ,radius ,stop_precent ,text ,customProperties){
    this.rib = radius;
    this.cWidth = circles.circle_width;
    this.canvas = document.querySelector(ele);
    this.label = document.querySelector(text);
    this.precentCounter = 0;
    this.shadow_blur = circles.shadow_blur;
    this.padding = (this.shadow_blur + 10) /2;
    this.canvas.height = this.rib + this.padding * 2;
    this.canvas.width = this.rib + this.padding * 2;
    this.loading_stop = stop_precent;


    if(this.loading_stop === null){
        this.loading_stop = this.canvas.getAttribute('data-percent');
    }


    this.radius = this.rib / 2 - this.shadow_blur;
    this.count = 0;
    this.ctx = this.canvas.getContext("2d");
    this.x ;this.y ;this.counter = 0 ;this.done = false;
    this.stopDrawing = false;
    this.start = false;
    this.adder = 0;
    this.color = circles.color;
    this.inner_background = circles.inner_background;
    this.inner_bg_color = circles.inner_bg_color;
    this.clock_direction = circles.clock_direction;



    if(customProperties){
        if(customProperties.circle_width){
            this.cWidth = customProperties.circle_width;
        }
        if(customProperties.color){
            this.color = customProperties.color;
        }
        if(customProperties.shadow){
            this.shadow = customProperties.shadow;
        }
        if(customProperties.inner_background){
            this.inner_background = customProperties.inner_background;
        }
        if(customProperties.inner_bg_color){
            this.inner_bg_color = customProperties.inner_bg_color;
        }
        if(customProperties.clock_direction){
            this.clock_direction = customProperties.clock_direction;
        }
    }

    // draw function
    this.draw =( x ,y ) => {
        this.ctx.beginPath();
        this.ctx.shadowBlur = this.shadow_blur;
        this.ctx.shadowColor = this.color;
        this.ctx.fillStyle = this.color; 
        this.ctx.arc( this.x + this.padding , this.y + this.padding ,this.cWidth ,0 ,Math.PI * 2 );
        this.ctx.fill();
    }
        this.ctx.beginPath();
        this.ctx.fill();
        this.ctx.fillStyle = "#eeebeb";
        this.ctx.arc(this.rib / 2 + this.padding ,this.rib / 2 + this.padding,this.radius + 2  ,0 ,Math.PI * 2);
        this.ctx.fill();

    if(this.inner_background){
        this.ctx.beginPath();
        this.ctx.fill();
        this.ctx.fillStyle = this.inner_bg_color;
        this.ctx.arc(this.rib / 2 + this.padding ,this.rib / 2 + this.padding , this.radius - this.cWidth * 2 ,0 ,Math.PI * 2);
        this.ctx.fill();
    }

    this.movement = () => {
        if(!this.stopDrawing ){
            requestAnimationFrame(this.movement);
        }
        if(this.canvas.getBoundingClientRect().top <= innerHeight / 1.2 ){
            this.start = true;
        }
        if(this.start){
            this.x = this.rib / 2 + Math.sin(this.count) * ( this.rib / 2 - this.cWidth);
            this.y = this.rib / 2 + Math.cos(this.count) * ( this.rib / 2 - this.cWidth);
            this.draw(this.x ,this.y);
            if(!this.done){
                if(this.clock_direction){
                    this.count -= 0.03;
                }else{
                    this.count += 0.03;
                }
                this.counter++;
            }
            // this.logic();

            // 210 is the number of frames to draw full circle
            if(this.counter == (this.loading_stop / 100 * 210) || Math.abs((this.loading_stop / 100 * 210) - this.counter) == .5){
                this.done = true;
                this.stopDrawing = true;
            }
            
            this.adder = (this.loading_stop) / (this.loading_stop / 100 * 210);
            this.precentCounter += this.adder;
            if(this.label != null && this.precentCounter <= this.loading_stop ){
                this.label.innerHTML = Math.ceil(this.precentCounter) + "%";
            }
        }
    }
    this.movement();

}