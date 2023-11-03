class DWS_btnup extends HTMLElement{
    // version: 1.0.0
    constructor(){
        super();
        this.posb;
        this.posr;
        this.wi;
        this.he;
        this.borderra;
        this.bg;
        this.flechacolor;
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes(){
        return ['posb','posr','wi','he','borderra','bg', 'flechacolor'];
    }    
    attributeChangedCallback(nameAtr, oldValue, newValue){    
        switch (nameAtr) {
            case "posb":
                this.posb = newValue;
                break;   
            case "posr":
                this.posr = newValue;
                break; 
            case "wi":
                this.wi = newValue;
                break; 
            case "he":
                this.he = newValue;
                break; 
            case "borderra":
                this.borderra = newValue;
                break; 
            case "bg":
                this.bg = newValue;
                break; 
            case "flechacolor":
                this.flechacolor = newValue;
                break;
        }
            
    }
    connectedCallback(){        
        let sp = `
        <style>
        .btnup{
            cursor: pointer;
            position: fixed;
            width: ${this.wi};
            height: ${this.he};
            bottom: ${this.posb};
            right: ${this.posr};
            border-radius: ${this.borderra};
            background: ${this.bg};
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 999999999999999999999;
          }
          .flecha{
            width: 10px;
            height: 10px;
            border-top: 4px ${this.flechacolor} solid;
            border-left: 4px ${this.flechacolor} solid;
            transform: translateY(2px) rotate(45deg) ;
          }
        </style>
        <div id="btn1" class="btnup">
          <div class="flecha"></div>
        </div>
        `;        
       this.shadowRoot.innerHTML = sp;
       this.shadowRoot.querySelector('#btn1').addEventListener('click',(e)=>{
        //window.scrollTo( 0, 0);
        this.smoothScroll(0);
        });
       //window.onscroll = () => this.muestra_flecha();
       window.addEventListener('scroll', ()=>{
        this.muestra_flecha();
       });
      
      
    } 
    smoothScroll(targetPosition) {
        const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
        const distance = targetPosition - currentPosition;
        const duration = 500; // Duración en milisegundos
        let startTime = null;
      
        function scrollAnimation(currentTime) {
          if (startTime === null) {
            startTime = currentTime;
          }
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, currentPosition, distance, duration);
          document.documentElement.scrollTop = run;
          document.body.scrollTop = run;
          if (timeElapsed < duration) {
            requestAnimationFrame(scrollAnimation);
          }
        }
      
        function ease(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
        };
      
        requestAnimationFrame(scrollAnimation);
      }
      
    muestra_flecha(){
        if(window.scrollY > 200){
            this.shadowRoot.querySelector('#btn1').style.display = "flex";
       }else{
            this.shadowRoot.querySelector('#btn1').style.display = "none";
       }  
    }   
}
window.customElements.define("dws-btnup", DWS_btnup);

