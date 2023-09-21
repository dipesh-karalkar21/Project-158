AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },
    
    
    handlePlacesListState: function () {
        const id = this.el.getAttribute("id");
        console.log(id);
        const placesId = ["hulk", "deadpool", "ironman", "spiderman"];
        if (placesId.includes(id)) {
          const placeContainer = document.querySelector("#places-container");
          placeContainer.setAttribute("cursor-listener", {
            selectedItemId: id,
          });
          this.el.setAttribute("material", {
            color : "#c9c9c9",
            opacity: 1,
          });
        }
      },
    handleMouseEnterEvents: function () {
      this.el.addEventListener("mouseenter", () => {
        this.handlePlacesListState();
      });
    },
    handleMouseLeaveEvents: function () {
      this.el.addEventListener("mouseleave", () => {
        const {selectedItemId} = this.data;
        if(selectedItemId){
          const el = document.querySelector(`#${selectedItemId}`);
          const id = el.getAttribute("id");
          if(selectedItemId == id){
            el.setAttribute("material", {
                color : "white",
                opacity : 1,
            });
          }
        }   
      });
      
    },
  });