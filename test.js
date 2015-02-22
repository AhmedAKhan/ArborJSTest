$( document ).ready(function() {
    console.log( "ready!" );

    console.log( "document loaded 2" );

    //var sys = arbor.ParticleSystem(1000, 400,1);
    //var sys = arbor.ParticleSystem();
    //sys.renderer = Renderer("#viewport") 
	//sys.parameters({gravity:true});

	//sys.addNode("Arbor Test Node", {'color':'red', 'shape':'dot','label':'Animals'});      
	//sys.renderer = Renderer("sitemap") ;
	//var animals = sys.addNode('Animals',{'color':'red','shape':'dot','label':'Animals'});

	/*
	  var myRenderer = {
        init: function(system){ console.log("starting ", system) },
        redraw: function(){ console.log("redraw")}
      }

      var sys = arbor.ParticleSystem(1000, 600, 0.5, true, 55, 0.02, 1);
      sys.renderer = Renderer("#viewport")

      sys.parameters({gravity:true});
      
      //var animals = sys.addNode("Animals",  {'color':'red', 'shape':'dot','label':'Animals'}); 
      // var cat = sys.addNode("Cat",      {'color':'green', 'shape':'dot','label':'Cat'}); 
      // var dog = sys.addNode("Dog",      {'color':'blue', 'shape':'dot','label':'Dog'}); 
// 
      // sys.addEdge(animals, cat)
      // sys.addEdge(animals, dog)
      var data = {
      nodes:{
        animals:{'color':'red','shape':'dot','label':'Animals'},
        dog:{'color':'green','shape':'dot','label':'dog'},
        cat:{'color':'blue','shape':'dot','label':'cat'}
      },
      edges:{
        animals:{ dog:{}, cat:{} }
      }
    };
    sys.graft(data);
    */
});