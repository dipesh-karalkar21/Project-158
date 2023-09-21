AFRAME.registerComponent("comic", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards()
      
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "hulk",
          title: "World War Hulk",
          url: "./assests/Hulk.jpg",
        },
        {
          id: "deadpool",
          title: "Deapool Bad Blood",
          url: "./assests/Deadpool.jpg",
        },
  
        {
          id: "ironman",
          title: "Invincible Iron Man",
          url: "./assests/Ironman.webp",
        },
        {
          id: "spiderman",
          title: "The Amazing Spiderman",
          url: "./assests/Spiderman.jpg",
        },
      ];
      let prevoiusXPosition = -75;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 30;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        const rectEl = this.rect(position,item.id , item);
  
        const borderEl = this.border(item,position);
  
        const textEl = this.text(item,position);
        
        
       rectEl.appendChild(textEl);
       this.placesContainer.appendChild(rectEl);
       this.placesContainer.appendChild(borderEl);
  
      }
    },
  rect:function(position , id , item){
      
      const entity = document.createElement("a-entity");
      entity.setAttribute("id",id);
      entity.setAttribute("visible",true);
      entity.setAttribute("geometry",{
        primitive : "plane",
        height : 28,
        width : 20,   
      });
      entity.setAttribute("position",position);
      entity.setAttribute("material",{
        src : item.url,

      })
      entity.setAttribute("cursor-listener", {});
      return entity;
    },
    border:function(item,position){
      const pos = position;
      pos.z = -40.1;
      const entity = document.createElement("a-entity");
      entity.setAttribute("visible",true);
      entity.setAttribute("position",pos);
      entity.setAttribute("geometry",{
        primitive : "plane",
        height : 30,
        width : 22   
      });
      entity.setAttribute("material",{
        color : 'white',
        opacity : 1,
      })    
      entity.setAttribute("cursor-listener", {});
      return entity;
    },
    text:function(item,position){
      const pos = position;
      pos.y = -25;
      const entity = document.createElement("a-entity");
      entity.setAttribute("visible",true);
      entity.setAttribute("position" , pos );
      entity.setAttribute("text",{
        value : item.title ,
        color : "black",
        width : 65,
        align : "center",
        font : "exo2bold",
  
      })
      return entity;
    },
    
  });
  