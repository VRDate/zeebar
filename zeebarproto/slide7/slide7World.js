
function slide7World(id, ht) {
	var txt = '<h1>At all times:<br> you should be able to zoom in and out and get the big picture...<h1>'; 
	buildCube(30, 1, 30, 0, 0 , 0, colors[id],'', ht, id, '.js', '', txt);
	
	for (var i = 0; i < 20; i++) {
		// txt = 'slide ' + id + ' - cube ' + i;
		buildCube(8, 8, 8, Math.random() * 50 - 25, 5, Math.random() * 50 - 25, 0xffffff, 'textures/' + textureImages[id], ht, id, '.js','', txt);
		mesh.rotation.set( Math.random() * 1.5708, Math.random() * 1.5708, Math.random() * 1.5708 );
	}
	playback = true;
} 

callback2(screens.indexOf('slide7') + 1);
