AFRAME.registerComponent("found-clue", {
    schema: {
    },
    init: function() {
        const CONTEXT_AF = this;
        CONTEXT_AF.scene = document.querySelector("#scene")
        var entity = this.el;
        
        CONTEXT_AF.el.addEventListener("click", function() {
            console.log("i am here")
            //var testclue = document.querySelector("#testclue")
               // testclue.parentNode.removeChild(testclue)
               entity.parentNode.removeChild(entity)
        })
    }
});