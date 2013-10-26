$(document).ready(function(){
  
  $(".plant").on("click", function(){
    $("#orange-tree-template").show()
    var plantedOrangeTree = new OrangeTree()
    console.log(plantedOrangeTree)
  

    $(".age").on("click", function(){
      plantedOrangeTree.grow()
      $("p.age").html(plantedOrangeTree.age)  

      $("p.fruit-count").html(plantedOrangeTree.orangeCount)

    })

    $(".pick").on("click", function(){
      var orange = plantedOrangeTree.dropOrange()
      $("p.fruit-count").html(plantedOrangeTree.orangeCount)
      console.log(orange)
    })

  })

});

