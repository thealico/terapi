let _ = function(v) {
    
    let r ;

    if( typeof v === 'string'){
        
        r       = document.querySelectorAll(v);
        r.path  = v;
    }


    return r;
 };
  


/*
    let on = function(event, elemstr, callback) {

        document.addEventListener(event, function(e) {

            let elements = document.querySelectorAll(elemstr);
            
            for(let i = 0; i < elements.length; i++) {
                
                let elem = elements[i];
                
                if(e.target === elem) {
                    
                    callback(e);
                }
            }
        });
    }
*/



NodeList.prototype.on = function(event,callback) {

    let nodes = this;

    document.addEventListener(event, function(e) {
        
        nodes = nodes.path ? document.querySelectorAll(nodes.path) : nodes;

        for(let n of nodes) {
            
            if( n == e.target) {

                callback(e);
            }
        }
    });
}



NodeList.prototype.onClass = function(className) {
    
    for(let e of this) {

        e.classList.add(className);
    }

    return this;
}



NodeList.prototype.unClass = function(className) {
   
    for(let e of this) {
        
        if (e.classList.contains(className)) e.classList.remove(className);

    }

    return this;
}


NodeList.prototype.attr = function(n,v) {

    for(let e of this) {

        if(v) e.setAttribute(n,v); else { return e.getAttribute(n) ? e.getAttribute(n) : false; }
    }
}

NodeList.prototype.unAttr = function(n){
    
    for(let e of this) {
        
        e.removeAttribute(n);
    }
}

NodeList.prototype.data = function(n,v){

    for(let e of this){
        
        if( v && ( v != 'json' ) ) this.dataset[n] = v; else { return this.dataset[n] ? ((  v == 'json' ) ? JSON.parse(this.dataset[n]) : this.dataset[n] )  : false; }  

    }
}

HTMLElement.prototype.isClass = function hasClass(className){
    
    return (` ${this.className} `.replace(/[\n\t\r]/g, " ").indexOf(className) > -1);
}

HTMLElement.prototype.onClass = function(className) {
    
    this.classList.add(className);
    return this;
}

HTMLElement.prototype.unClass = function(className) {
   
    if (this.classList.contains(className)) this.classList.remove(className);
    
    return this;
}

HTMLElement.prototype.attr = function(n,v){
    
    if(v) this.setAttribute(n,v); else { 
        console.log(this.getAttribute(n));
        return this.getAttribute(n) ? this.getAttribute(n) : false; 
    }   
}

HTMLElement.prototype.unAttr = function(n){
    
    this.removeAttribute(n);
}

HTMLElement.prototype.data = function(n,v){
    
    if( v && ( v != 'json' ) ) this.dataset[n] = v; else { return this.dataset[n] ? ((  v == 'json' ) ? JSON.parse(this.dataset[n]) : this.dataset[n] )  : false; }  

}
