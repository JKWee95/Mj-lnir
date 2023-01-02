
function Aglaia(mouse_state){
	
}

function Thalia(mouse_state){
}

function Euphrosyne(mouse_state){
}

window.onload = function() {



	/*
	window.onbeforeunload = function () {
		window.scrollTo(0, 0);
	}

	//xxxxxxxxxxxxxxxxxxxxxxxxxxx Submit form xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

	var modal = document.getElementById("myModal");
	var span = document.getElementsByClassName("close")[0];
	var FormButton1 = document.querySelector(".headerWord2");
	var FormButton2 = document.querySelector(".fifthSegmentButton");

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal) {
	    modal.style.display = "none";
	  }
	}

	FormButton1.onclick = function(event) {
		modal.style.display = "block";
	}
	FormButton2.onclick = function(event) {
		modal.style.display = "block";
	}

	const form = document.getElementById('myModal');
	form.addEventListener("submit", function(e) {
		e.preventDefault();
		const data = new FormData(form);
		const action = e.target.action;
		fetch(action, {
		  method: 'POST',
		  body: data,
		})
		.then(() => {
		  alert("Success!");
		})
  	});

	//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

	//xxxxxxxxxxxxxxxxxxxxxxxxxxxx Button in Services xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

	var coll = document.querySelector(".Service_content_button");
	var col2 = document.querySelector(".Service_content_button2");
	var col3 = document.querySelector(".Service_content_button3");

	coll.onclick = function() {
		if (document.querySelector('.first_content').style.display == "block"){
			document.querySelector('.first_content').style.display = "none";
		} 
		else {
			document.querySelector('.first_content').style.display = "block";
		} 
	};
	col2.onclick = function() {
		if (document.querySelector('.second_content').style.display == "block"){
			document.querySelector('.second_content').style.display = "none";
		} 
		else {
			document.querySelector('.second_content').style.display = "block";
		} 
	};
	col3.onclick = function() {
		if (document.querySelector('.third_content').style.display == "block"){
			document.querySelector('.third_content').style.display = "none";
		} 
		else {
			document.querySelector('.third_content').style.display = "block";
		} 
	};

	//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


	//xxxxxxxxxxxxxxxxxxxxxxxxxxxx First Segment xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

	//Initialize Segment 1 to be with page length
	const First_Segment = document.querySelector('.firstSegment');
	const Second_Segment = document.querySelector('.secondSegment');
	const Services = document.querySelector('.Services');
	const Button1 = document.querySelector('.button1');
	const Button2 = document.querySelector('.button2');
	const Button3 = document.querySelector('.button3');
	First_Segment.style.setProperty('--fsHeight', document.documentElement.clientHeight + "px");
	Services.style.setProperty('--height', document.documentElement.clientHeight + "px");

	//xxxxxxxxxxxxxxxxxxxxxxxxxxxx animation when mouse hover enter and exit xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

	//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

	//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Scrolling event xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

	division=3000;
	class_removed=1;

	document.addEventListener('scroll', function() {

		Scroll_yMousePos=(scrollY-ori_scrolling_position)+PositionY_To_Screen_Center;
		//document.getElementById("headerWord1").innerHTML = (scrollY);
		//document.getElementById("headerWord1").innerHTML = (xMousePos-(firstSegmentWidth/2));

		//Move 3Dobject with accordance to mousemove
		arm.rotation.x=Scroll_yMousePos/division;
		group.rotation.x = Scroll_yMousePos/division;	
		arm.rotation.y=InitialArmRotationY+(PositionX_To_Screen_Center/division);
		group.rotation.y = InitialArmRotationY+(PositionX_To_Screen_Center/division);

		//For re-trigger animation
		if(scrollY>=1600 && class_removed==1){
			class_removed=0;
			document.querySelector('.circleOne').style.setProperty('opacity', 1);
			document.querySelector('.circleTwo').style.setProperty('opacity', 1);
			document.querySelector('.circleThree').style.setProperty('opacity', 1);
			document.querySelector('.Line').style.setProperty('opacity', 1);
			rerun_animation_order();
		}
		else if (scrollY<1400 && class_removed==0){
			class_removed=1;
			document.querySelector('.circleOne').style.setProperty('opacity', 0);
			document.querySelector('.circleTwo').style.setProperty('opacity', 0);
			document.querySelector('.circleThree').style.setProperty('opacity', 0);
			document.querySelector('.Line').style.setProperty('opacity', 0);
		}

		function rerun_animation_order(){
			var el1=document.querySelector('.circleOne');
			rerun_anim_sub(el1);
			var el2=document.querySelector('.circleTwo');
			rerun_anim_sub(el2);
			var el3=document.querySelector('.circleThree');
			rerun_anim_sub(el3);
			var el4=document.querySelector('.Line');
			rerun_anim_sub(el4);
		}
		function rerun_anim_sub(variable){
			variable.style.animation = 'none';
			variable.offsetHeight;
			variable.style.animation = null;
		}

		//For Second Segment "About Us" 
		if (scrollY>1050 && scrollY<1450){
			document.querySelector('.secondSegmentInner').style.setProperty('left', (50-(scrollY-1050)*0.0625)+"%");
		}

	});
	*/
	//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
	//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Window Resize event xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

	/*
	document.querySelector(".headerWord1").style.setProperty('font-size', document.documentElement.clientWidth/80 +"px");
	document.querySelector(".headerWord2").style.setProperty('font-size', document.documentElement.clientWidth/80 +"px");
	document.querySelector(".BackgroundText").style.setProperty('font-size', document.documentElement.clientWidth/30 +"px");
	document.querySelector(".Title").style.setProperty('font-size', document.documentElement.clientWidth/50 +"px");
	document.querySelector(".firstSegment").style.setProperty('top', document.documentElement.clientWidth/10 +"px");
	document.querySelector(".Service_title").style.setProperty('font-size', document.documentElement.clientWidth/30 +"px");
	document.querySelector(".Service_desc").style.setProperty('font-size', document.documentElement.clientWidth/50 +"px");
	document.querySelector(".Service_contents").style.setProperty('font-size', document.documentElement.clientWidth/70 +"px");
	document.querySelector(".Service_content_button").style.setProperty('font-size', document.documentElement.clientWidth/70 +"px");
	document.querySelector(".Service_content_button2").style.setProperty('font-size', document.documentElement.clientWidth/70 +"px");
	document.querySelector(".Service_content_button3").style.setProperty('font-size', document.documentElement.clientWidth/70 +"px");
	document.querySelector(".AboutUs").style.setProperty('font-size', document.documentElement.clientWidth/30 +"px");
	document.querySelector(".AboutUsDesc").style.setProperty('font-size', document.documentElement.clientWidth/50 +"px");
	document.querySelector(".fourthSegmentTitle").style.setProperty('font-size', document.documentElement.clientWidth/30 +"px");
	document.querySelector(".fourthSegmentSubTitle").style.setProperty('font-size', document.documentElement.clientWidth/40 +"px");
	document.querySelector(".fourthSegmentDesc").style.setProperty('font-size', document.documentElement.clientWidth/50 +"px");
	document.querySelector(".shapesAndDesc").style.setProperty('font-size', document.documentElement.clientWidth/70 +"px");
	document.querySelector(".address").style.setProperty('font-size', document.documentElement.clientWidth/80 +"px");
	document.querySelector(".email").style.setProperty('font-size', document.documentElement.clientWidth/80 +"px");
	document.querySelector(".fifthSegmentCompanyName").style.setProperty('font-size', document.documentElement.clientWidth/100 +"px");
	document.querySelector(".fifthSegmentButton").style.setProperty('font-size', document.documentElement.clientWidth/80 +"px");

	document.querySelector(".close").style.setProperty('font-size', document.documentElement.clientWidth/80 +"px");
	document.querySelector(".form1").style.setProperty('font-size', document.documentElement.clientWidth/90 +"px");
	document.querySelector(".countrySel").style.setProperty('font-size', document.documentElement.clientWidth/80 +"px");
	document.querySelector(".form_title").style.setProperty('font-size', document.documentElement.clientWidth/40 +"px");
	document.querySelector(".modal-content").style.setProperty('height', document.documentElement.clientHeight/1.5 +"px");

	window.addEventListener("resize", function(){
		renderer.setSize(document.documentElement.clientWidth, document.documentElement.clientHeight);
		//ThreeDBackground.appendChild(renderer.domElement);
		//document.getElementById("headerWord1").innerHTML = (document.documentElement.clientWidth);
		document.querySelector(".headerWord1").style.setProperty('font-size', document.documentElement.clientWidth/80 +"px");
		document.querySelector(".headerWord2").style.setProperty('font-size', document.documentElement.clientWidth/80 +"px");
		document.querySelector(".BackgroundText").style.setProperty('font-size', document.documentElement.clientWidth/30 +"px");
		document.querySelector(".Title").style.setProperty('font-size', document.documentElement.clientWidth/50 +"px");
		document.querySelector(".firstSegment").style.setProperty('top', document.documentElement.clientWidth/10 +"px");
		document.querySelector(".Service_title").style.setProperty('font-size', document.documentElement.clientWidth/30 +"px");
		document.querySelector(".Service_desc").style.setProperty('font-size', document.documentElement.clientWidth/50 +"px");
		document.querySelector(".Service_contents").style.setProperty('font-size', document.documentElement.clientWidth/70 +"px");
		document.querySelector(".Service_content_button").style.setProperty('font-size', document.documentElement.clientWidth/70 +"px");
		document.querySelector(".Service_content_button2").style.setProperty('font-size', document.documentElement.clientWidth/70 +"px");
		document.querySelector(".Service_content_button3").style.setProperty('font-size', document.documentElement.clientWidth/70 +"px");
		document.querySelector(".AboutUs").style.setProperty('font-size', document.documentElement.clientWidth/30 +"px");
		document.querySelector(".AboutUsDesc").style.setProperty('font-size', document.documentElement.clientWidth/50 +"px");
		document.querySelector(".fourthSegmentTitle").style.setProperty('font-size', document.documentElement.clientWidth/30 +"px");
		document.querySelector(".fourthSegmentSubTitle").style.setProperty('font-size', document.documentElement.clientWidth/40 +"px");
		document.querySelector(".fourthSegmentDesc").style.setProperty('font-size', document.documentElement.clientWidth/50 +"px");
		document.querySelector(".shapesAndDesc").style.setProperty('font-size', document.documentElement.clientWidth/70 +"px");
		document.querySelector(".address").style.setProperty('font-size', document.documentElement.clientWidth/80 +"px");
		document.querySelector(".email").style.setProperty('font-size', document.documentElement.clientWidth/80 +"px");
		document.querySelector(".fifthSegmentCompanyName").style.setProperty('font-size', document.documentElement.clientWidth/100 +"px");
		document.querySelector(".fifthSegmentButton").style.setProperty('font-size', document.documentElement.clientWidth/80 +"px");
		document.querySelector(".close").style.setProperty('font-size', document.documentElement.clientWidth/80 +"px");
		document.querySelector(".form1").style.setProperty('font-size', document.documentElement.clientWidth/100 +"px");
		document.querySelector(".countrySel").style.setProperty('font-size', document.documentElement.clientWidth/80 +"px");
		document.querySelector(".form_title").style.setProperty('font-size', document.documentElement.clientWidth/40 +"px");
		document.querySelector(".modal-content").style.setProperty('height', document.documentElement.clientHeight/1.5 +"px");

		document.querySelector('.Services').style.setProperty('--height', document.documentElement.clientHeight + "px");

		//document.getElementById("headerWord1").innerHTML = (document.documentElement.clientHeight);
	});

	//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
	*/

	//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Click event xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

	musicPressed = true;
	document.querySelector(".art_desc").onclick = function() {
		background_music_audio=document.getElementById("backgroundMusic");
		if (background_music_audio.paused){
			background_music_audio.play();
		} 
		else {
			background_music_audio.pause();
		} 
	};

	//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

	//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Scrolling event xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
	hammer_fly_away = false;

	document.addEventListener('scroll', function() {
		//Scroll_yMousePos=(scrollY-ori_scrolling_position)+PositionY_To_Screen_Center;

		//document.body.scrollHeight -> full scroll height
		header_disappear_scroll_trigger = document.documentElement.clientHeight*(3/5);
		segment1_disappear_scroll_trigger = document.documentElement.clientHeight*(5/10);
		segment1_disappear_offset = 270;
		lastSegment_disappear_offset = document.body.scrollHeight*(9.5/10);
		lastSegment_appear_offset = document.body.scrollHeight*(10/10);
		lastSegment_opacity_ratio = lastSegment_appear_offset-lastSegment_disappear_offset;

		document.querySelector('.header').style.setProperty('opacity', (header_disappear_scroll_trigger-scrollY)/header_disappear_scroll_trigger);
		document.querySelector('.firstSegmentDesc_one').style.setProperty('opacity', (segment1_disappear_scroll_trigger-scrollY+segment1_disappear_offset)/segment1_disappear_scroll_trigger);
		document.querySelector('.firstSegmentDesc_two').style.setProperty('opacity', (segment1_disappear_scroll_trigger-scrollY+segment1_disappear_offset)/segment1_disappear_scroll_trigger);
		document.querySelector('.firstSegmentDesc_three').style.setProperty('opacity', (segment1_disappear_scroll_trigger-scrollY+segment1_disappear_offset)/segment1_disappear_scroll_trigger);

		//Display Odin's word at last page
		if ((scrollY+document.documentElement.clientHeight) > lastSegment_disappear_offset && (scrollY+document.documentElement.clientHeight) <= lastSegment_appear_offset){
			document.querySelector('.lastSegment').style.setProperty('opacity', ((scrollY+document.documentElement.clientHeight)-(lastSegment_disappear_offset))/lastSegment_opacity_ratio);
		}
		else if((scrollY+document.documentElement.clientHeight) <= lastSegment_disappear_offset){
			document.querySelector('.lastSegment').style.setProperty('opacity', 0);
		}
		else{
			document.querySelector('.lastSegment').style.setProperty('opacity', 1);
		}

		//play Odin's speech when reach last page
		if ((scrollY+document.documentElement.clientHeight) === lastSegment_appear_offset){
			document.getElementById("speech").volume=0.7;
			document.getElementById("speech").play();
			var delayInMilliseconds = 7000; //7 second
			setTimeout(function() {
				if ((scrollY+document.documentElement.clientHeight) === lastSegment_appear_offset && hammer_fly_away === false){
				  	hammer_fly_up_magnitude = 1.9;
				  	hammer_sound_effect_audio=document.getElementById("hammerSoundEffect");
				  	hammer_sound_effect_audio.play();
				  	hammer_fly_away = true;
				}
			}, delayInMilliseconds);
		}

		if (hammer_fly_away === true && (scrollY) === 0){
			hammer_fly_up_magnitude = -1.9;
			arm.position.y = 60;
			document.getElementById("hammerSoundEffect").currentTime = 0;
			document.getElementById("hammerSoundEffect").play();
		}

		//Hammer shivering
		arm_position_shiver_magnitude_initial = 0.1;
		//InitialArmRotationZ = Math.PI*0.001;
		arm_rotate_magnitude = (scrollY/300000) + arm_rotate_magnitude_initial;
		//arm_rotation_shiver_magnitude = arm_rotation_shiver_magnitude_initial*((scrollY)/(document.body.scrollHeight-document.documentElement.clientHeight));
		arm_position_shiver_magnitude = arm_position_shiver_magnitude_initial*((scrollY)/(document.body.scrollHeight-document.documentElement.clientHeight));


	});

	//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

	//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Initialization xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

	document.querySelector(".firstSegment").style.setProperty('height', document.documentElement.clientHeight*1.3 +"px");
	document.querySelector(".firstSegment").style.setProperty('width', document.documentElement.clientWidth +"px");
	document.querySelector(".lastSegment").style.setProperty('height', document.documentElement.clientHeight +"px");

	if (document.documentElement.clientHeight > document.documentElement.clientWidth){
		document.body.style.setProperty('--bigFont', document.documentElement.clientWidth*0.05 +"px");
		document.body.style.setProperty('--bigSpacing', document.documentElement.clientWidth*0.05 +"px");
		document.body.style.setProperty('--line_height', document.documentElement.clientWidth*0.05 +"px");
	}
	else{
		document.body.style.setProperty('--bigFont', document.documentElement.clientWidth*0.019 +"px");
		document.body.style.setProperty('--bigSpacing', document.documentElement.clientWidth*0.019 +"px");
		document.body.style.setProperty('--line_height', document.documentElement.clientWidth*0.019 +"px");
	}
	
	
	//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

	//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx MouseMove event xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
	
	firstSegmentHeight = document.documentElement.clientHeight;
	firstSegmentWidth = document.documentElement.clientWidth;


	

	document.addEventListener('mousemove', function() {
		// document.getElementById("headerWord1").innerHTML = rect.top +" " + event.pageY;
		// document.getElementById("sub").innerHTML = event.pageY;
		yMousePos=event.pageY;
		xMousePos=event.pageX;
		ori_scrolling_position=document.documentElement.scrollTop;

		const mouse_circle =  document.getElementById('circle');
		document.querySelector(".circle").style.setProperty('top', yMousePos-mouse_circle.offsetHeight/2-scrollY +"px");
		document.querySelector(".circle").style.setProperty('left', xMousePos-mouse_circle.offsetWidth/2 +"px");
		//document.getElementById("headerWord1").innerHTML = (yMousePos-(firstSegmentHeight/2));
		//document.getElementById("headerWord1").innerHTML = (xMousePos-(firstSegmentWidth/2));

		//To make the center of the screen origin
		PositionX_To_Screen_Center = xMousePos-(firstSegmentWidth/2);
		PositionY_To_Screen_Center = yMousePos-(firstSegmentHeight/2)-scrollY;

		//Move 3Dobject with accordance to mousemove
		divisionX=1500;
		divisionY=2500;
		arm.rotation.y=InitialArmRotationY+(PositionX_To_Screen_Center/divisionX)+rotation_diff;
		arm.rotation.x=InitialArmRotationX+(PositionY_To_Screen_Center/divisionY);

		//light3.position.x=(PositionX_To_Screen_Center/divisionX); //left right
		//light3.position.y=-(PositionY_To_Screen_Center/divisionY); //up down

		//console.log(PositionX_To_Screen_Center/divisionX); //left right
		//console.log(-PositionY_To_Screen_Center/divisionY); //up down

	});
	
	//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

	//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx 3D background xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

	var InitialCameraPositionZ = 6
	var InitialCameraPositionY = 7
	var InitialCameraPositionX = 0
	var InitialArmRotationY = Math.PI*0.5 //MATH.PI*0.5 = 90degree
	var InitialArmRotationX = Math.PI*0.09 
	var InitialArmRotationZ = 0
	var InitialArmPositionX = 0
	var InitialArmPositionZ = 0
	var InitialArmPositionY = 0
	var arm_rotation_shiver_magnitude_initial = InitialArmRotationZ*2;
	var arm_rotation_shiver_magnitude = arm_rotation_shiver_magnitude_initial;
	var arm_position_shiver_magnitude_initial = 0;
	var arm_position_shiver_magnitude = arm_position_shiver_magnitude_initial;//0.05;
	var arm_rotate_magnitude_initial = 0.001;
	var arm_rotate_magnitude = arm_rotate_magnitude_initial;
	var hammer_fly_up_magnitude = 0;

	const ThreeDBackground = document.querySelector('.threeD')

	const scene = new THREE.Scene();
	const renderer = new THREE.WebGLRenderer({alpha: true});
	renderer.setClearColor( 0x000000, 0 ); // the default

	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFShadowMap; // default THREE.PCFShadowMap

	loader = new THREE.GLTFLoader();
	//loader.load("https://dl.dropbox.com/s/0betxug3t8xlk85/UFO.gltf", function(gltf){	
	//loader.load("https://dl.dropbox.com/s/207zxx7a46vclfo/arm.gltf", function(gltf){
	//loader.load("https://dl.dropbox.com/s/w6j22dy4d1hadej/arm_blackwhite.glb", function(gltf){
	//loader.load("https://dl.dropbox.com/s/n72amwd8lqv07un/arm_blackwhite_SMOOTH.gltf", function(gltf){
	loader.load("thors_hammer_2.glb", function(gltf){

		gltf.scene.traverse(function(child){
			if (child.isMesh){
				child.castShadow = true;
				child.receiveShadow = true;
			}
		});
		gltf.scene.position.set(0,InitialArmPositionY,-20);
		gltf.scene.scale.set(0.4,0.4,0.4);	
		gltf.scene.rotation.set(InitialArmRotationX, InitialArmRotationY, InitialArmRotationZ);
		gltf.scene.castShadow = true;
		gltf.scene.receiveShadow = true;
		arm=gltf.scene;
		//arm.rotation.set(Math.PI*-0.05,Math.PI*-0.25,0);
		scene.add(gltf.scene);

	});

	/*
	const light3 = new THREE.PointLight( 0x858484, 7, 70, 3);
	light3.position.set(0,100,-10 );
	light3.castShadow = true;
	light3.shadow.bias = -0.005;
	light3.shadow.normalBias = -0.005;
	light3.shadow.radius = 3;

	light3.shadowMapWidth = 1024;
	light3.shadowMapHeight = 1024;
	scene.add( light3 );
	*/

	
	const light4 = new THREE.PointLight( 0x858484, 7, 70, 3);
	light4.position.set(0,-7.7,-15 );
	scene.add( light4 );

	const light5 = new THREE.PointLight( 0x858484, 7, 70, 3);
	light5.position.set(0,27.5,-25 );
	scene.add( light5 );
	

	const light6 = new THREE.AmbientLight(0xffffff,1.5);
	scene.add( light6 );

	/*
	//Create a DirectionalLight and turn on shadows for the light
	const light = new THREE.DirectionalLight( 0x858484, 1 );
	light.position.set( -5, 0, 0 ); //default; light shining from top
	light.castShadow = true; // default false
	scene.add( light );

	//Set up shadow properties for the light
	light.shadow.mapSize.width = 512; // default
	light.shadow.mapSize.height = 512; // default
	light.shadow.camera.near = 0.5; // default
	light.shadow.camera.far = 500; // default
	*/
	//Create a plane that receives shadows (but does not cast them)
	//const planeGeometry = new THREE.PlaneGeometry( 20, 20, 32, 32 );
	//const planeMaterial = new THREE.MeshStandardMaterial( { color: 0x00ff00 } )
	//const plane = new THREE.Mesh( planeGeometry, planeMaterial );
	//plane.receiveShadow = true;
	//scene.add( plane );

	//scene.background = new THREE.Color( 0x1C252E );
	scene.background = null;
	/*
	const starsGeometry = new THREE.SphereGeometry(10, 32, 32);
	const starsMaterial = new THREE.MeshBasicMaterial({color: 0x045150});
	const starsMesh = new THREE.Mesh(starsGeometry, starsMaterial);
	starsMaterial.map = new THREE.TextureLoader().load("https://dl.dropboxusercontent.com/s/k5uf3cp477hx0yl/stars.jpg"); //https://www.dropbox.com/s/k5uf3cp477hx0yl/stars.jpg?dl=0
	starsMaterial.side = THREE.BackSide;
	scene.add(starsMesh);
	*/

	const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	camera.lookAt(scene.position)
	camera.position.z = InitialCameraPositionZ
	camera.position.y = InitialCameraPositionY
	camera.position.x = InitialCameraPositionX

	renderer.setSize(document.documentElement.clientWidth, document.documentElement.clientHeight)
	ThreeDBackground.appendChild(renderer.domElement)

	shiver = true;
	go_down = false;
	rotation_diff = 0;

	function animate() {
		requestAnimationFrame(animate)
		if (shiver === true){
			arm.rotation.x-=arm_rotation_shiver_magnitude;
			arm.rotation.z-=arm_rotation_shiver_magnitude;
			arm.position.x-=arm_position_shiver_magnitude;
			arm.position.z-=arm_position_shiver_magnitude;
			shiver = false;
		}
		else{
			arm.rotation.x+=arm_rotation_shiver_magnitude;
			arm.rotation.z+=arm_rotation_shiver_magnitude;
			arm.position.x+=arm_position_shiver_magnitude;
			arm.position.z+=arm_position_shiver_magnitude;
			shiver = true;
		}
		/*
		if (go_down === false){
			arm.position.y+=0.004;
		}
		else{
			arm.position.y-=0.004;
		}

		if (arm.position.y > InitialArmPositionY*0.985){
			go_down=true;
		}
		if (arm.position.y < InitialArmPositionY*1.015){
			go_down=false;
		}
		*/
		arm.rotation.y-=arm_rotate_magnitude;
		rotation_diff -=arm_rotate_magnitude;
		if (arm.position.y < InitialArmPositionY){
			arm.position.y = InitialArmPositionY;
			hammer_fly_up_magnitude = 0;
			hammer_fly_away = false;
		}
		else{
			arm.position.y += hammer_fly_up_magnitude;
		}
		renderer.render(scene, camera);
	}

	animate()

	//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

	


}