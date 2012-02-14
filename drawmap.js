
	// create a CloudMade tile layer
	var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/a48e28c08af84ca9938d7b4cd07aa502/997/256/{z}/{x}/{y}.png',
	    cloudmadeAttribution = 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade - Code by steffenp and vegarsc',
	    cloudmade = new L.TileLayer(cloudmadeUrl, {maxZoom: 18, attribution: cloudmadeAttribution});

	// initialize the map on the "map" div
	var map = new L.Map('map');

	// set the map view to a given center and zoom and add the CloudMade layer
	map.locateAndSetView(14);
	map.addLayer(cloudmade);
