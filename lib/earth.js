let scene = new THREE.Scene();
let aspect = window.innerWidth / window.innerHeight;
let cam = new THREE.PerspectiveCamera(45,aspect,0.1,1000);
cam.position.set(0,0,800);

let renderer = new THREE.CSS3DRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let scene2 = new THREE.Scene();
let cam2 = new THREE.PerspectiveCamera(45,aspect,0.1,1000);
cam2.position.set(0,10,100);
let renderer2 = new THREE.WebGLRenderer();
renderer2.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer2.domElement);

//matahari
var geometry = new THREE.SphereGeometry( 20, 60, 60 );
var sun = new THREE.TextureLoader().load('texture/8k_sun.jpg');
var material = new THREE.MeshBasicMaterial( {
    map : sun
} );
var matahari = new THREE.Mesh( geometry, material );
matahari.name = "matahari";
matahari.position.x += 37;
matahari.position.y += 5;
scene2.add( matahari );

//merkurius
var geometry = new THREE.SphereGeometry( 20, 60, 60 );
var mercury = new THREE.TextureLoader().load('texture/8k_mercury.jpg');
var material = new THREE.MeshPhongMaterial( {
    map : mercury
} );
var merkurius = new THREE.Mesh( geometry, material );
scene2.add( merkurius );
merkurius.position.x += 37;
merkurius.position.y += -70;

//venus
var geometry = new THREE.SphereGeometry(  20, 60, 60  );
var mercury = new THREE.TextureLoader().load('texture/8k_venus_surface.jpg');
var material = new THREE.MeshPhongMaterial( {
    map : mercury
} );
var venus = new THREE.Mesh( geometry, material );
scene2.add( venus );
venus.position.x += 37;
venus.position.y += -150;

//bumi
var geometry = new THREE.SphereGeometry(  20, 60, 60  );
var mercury = new THREE.TextureLoader().load('texture/8k_earth_daymap.jpg');
var material = new THREE.MeshPhongMaterial( {
    map : mercury
} );
var bumi = new THREE.Mesh( geometry, material );
scene2.add( bumi );
bumi.position.x += 37;
bumi.position.y += -220;

//mars
var geometry = new THREE.SphereGeometry( 20, 60, 60 );
var mercury = new THREE.TextureLoader().load('texture/8k_mars.jpg');
var material = new THREE.MeshPhongMaterial( {
    map : mercury
} );
var mars = new THREE.Mesh( geometry, material );
scene2.add( mars );
mars.position.x += 37;
mars.position.y += -290;

//jupiter
var geometry = new THREE.SphereGeometry( 20, 60, 60 );
var mercury = new THREE.TextureLoader().load('texture/8k_jupiter.jpg');
var material = new THREE.MeshPhongMaterial( {
    map : mercury
} );
var jupiter = new THREE.Mesh( geometry, material );
scene2.add( jupiter );
jupiter.position.x += 37;
jupiter.position.y += -360;

//saturn
var geometry = new THREE.SphereGeometry( 20, 60, 60 );
var mercury = new THREE.TextureLoader().load('texture/8k_saturn.jpg');
var material = new THREE.MeshPhongMaterial( {
    map : mercury
} );
var saturn = new THREE.Mesh( geometry, material );
scene2.add( saturn );
saturn.position.x += 37;
saturn.position.y += -430;

//uranus
var geometry = new THREE.SphereGeometry( 20, 60, 60 );
var mercury = new THREE.TextureLoader().load('texture/2k_uranus.jpg');
var material = new THREE.MeshPhongMaterial( {
    map : mercury
} );
var uranus = new THREE.Mesh( geometry, material );
scene2.add( uranus );
uranus.position.x += 37;
uranus.position.y += -500;

//neptune
var geometry = new THREE.SphereGeometry( 20, 60, 60 );
var mercury = new THREE.TextureLoader().load('texture/2k_neptune.jpg');
var material = new THREE.MeshPhongMaterial( {
    map : mercury
} );
var neptune = new THREE.Mesh( geometry, material );
scene2.add( neptune );
neptune.position.x += 37;
neptune.position.y += -570;

//lampu
var light = new THREE.AmbientLight( 0xffffff ); // soft white light
scene2.add( light );


var floorTexture = new THREE.ImageUtils.loadTexture( 'texture/8k_stars_milky_way.jpg' );
floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping; 
floorTexture.repeat.set( 10, 10 );
var floorMaterial = new THREE.MeshBasicMaterial( { map: floorTexture, side: THREE.DoubleSide } );
var floorGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
var floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.position.y = 0;
// floor.rotation.x = Math.PI / 2;
scene2.add(floor);

let el = document.createElement('div');
el.innerHTML = (
    "<h1>Sun</h1><table class='matahari'><tr><td>Suhu permukaan</td><td>5.778 K</td></tr><tr><td>Jarak ke Bumi</td><td>149,6 juta km</td></tr><tr><td>Luas permukaan</td><td>6.09×1012 km2; 12,000 × Bumi</td></tr><tr><td>Kecepatan Escape (dari permukaan)</td><td>617.7 km/s; 55 × Bumi</td></tr><tr><td>Gravitasi permukaan khatulistiwa</td><td>274 m/s2; 28 × Bumi</td></tr><tr><td>Deskripsi</td><td>Matahari atau Surya adalah bintang di pusat tata surya.<br> Bentuknya nyaris bulat dan terdiri dari plasma panas<br> bercampur medan magnet. Diameternya sekitar 1.392.684 km,<br> kira-kira 109 kali diameter Bumi, dan massanya mewakili <br>kurang lebih 99,86 % massa total tata surya.</td></tr></table><br><br><br><br><br><br><br><br><br><br><br><br><h1>Merkurius</h1><table class='merkurius'><tr><td>Lama satu hari</td><td>58 h 15 j 30 m</td></tr><tr><td>Radius rata-rata</td><td>2.439,7 km</td></tr><tr><td>Periode orbit</td><td>88 hari</td></tr><tr><td>Massa</td><td>3,285E23 kg (0,055 M⊕′)</td></tr><tr><td>Kecepatan rotasi ekuator</td><td>0,892 km/j</td></tr><tr><td>Periode rotasi sideris</td><td>58,646 day; 1407,5 jam</td></tr><tr><td>Deskripsi</td><td>Merkurius adalah planet terkecil di dalam tata surya dan juga <br> yang terdekat dengan Matahari dengan kala revolusi 88 hari <br> dan kala rotasi 59 hari. Kecerahan planet ini berkisar di antara <br> -2 sampai 5,5 dalam magnitudo tampak namun tidak mudah <br>terlihat karena sudut pandangnya dengan Matahari kecil</td></tr></table><br><br><br><br><br><br><br><br><br><br><br><br><h1>Venus</h1><table class='venus'><tr><td>Lama satu hari</td><td>116 h 18 j 0 m</td></tr><tr><td>Radius rata-rata</td><td>6.051,8 km</td></tr><tr><td>Periode orbit</td><td>225 hari</td></tr><tr><td>Kecepatan rotasi ekuator</td><td>6,52 km/h (1,81 m/s)</td></tr><tr><td>Periode rotasi sideris</td><td>−243,018 5 hari</td></tr><tr><td>Gravitasi permukaan</td><td>8,87 m/s2; 0,904 g</td></tr><tr><td>Deskripsi</td><td>Venus adalah planet terdekat kedua dari Matahari setelah Merkurius.<br> Planet ini mengorbit Matahari selama 224,7 hari Bumi. <br>Venus tidak memiliki satelit alami dan dinamai dari dewi cinta <br>dan kecantikan dalam mitologi Romawi.</td></tr></table><br><br><br><br><br><br><br><br><br><br><br><br><h1>Bumi</h1><table class='bumi'><tr><td>Radius rata-rata</td><td>6.371,0 km</td></tr><tr><td>Keliling</td><td>40.075,017 km</td></tr><tr><td>Luas Permukaan</td><td>510.072.000 km</td></tr><tr><td>kecepatan</td><td>11,186 km/s</td></tr><tr><td>Deskripsi</td><td>Bumi adalah planet ketiga dari Matahari yang merupakan planet terpadat<br> dan terbesar kelima dari delapan planet dalam Tata Surya. Bumi juga merupakan <br>planet terbesar dari empat planet kebumian Tata Surya. Bumi terkadang disebut<br> dengan dunia atau Planet Biru.</td></tr></table><br><br><br><br><br><br><br><br><br><br><br><br><h1>Mars</h1><table class='mars'><tr><td>Lama satu hari</td><td>1 h 0 j 37 m</td></tr><tr><td>Radius rata-rata</td><td>3.389,5 km</td></tr><tr><td>Periode orbit</td><td>687 hari</td></tr><tr><td>Gravitasi</td><td>3,711 m/s²</td></tr><tr><td>Luas permukaan</td><td>144,8 juta km²</td></tr><tr><td>Deskripsi</td><td>Mars adalah planet terdekat keempat dari Matahari. Namanya diambil dari <br>dewa perang Romawi, Mars. Planet ini sering dijuluki sebagai 'planet merah' <br>karena tampak dari jauh berwarna kemerah-kemerahan. Ini disebabkan oleh <br>keberadaan besi(III) oksida di permukaan planet Mars.</td></tr></table><br><br><br><br><br><br><br><br><br><br><br><br><h1>Jupiter</h1><table class='jupiter'><tr><td>Lama satu hari</td><td>0 h 9 j 56 m</td></tr><tr><td>Radius rata-rata</td><td>69.911 km</td></tr><tr><td>Satelit yang diketahui</td><td>67</td></tr><tr><td>Kecepatan rotasi ekuator</td><td>12,6 km/s; 45.300 km/j</td></tr><tr><td>Periode rotasi sideris</td><td>9,925 h (9 jam 55 menit 30 detik)</td></tr><tr><td>Bulan</td><td>Europa, Io, Ganymede, Callisto, Amalthea, Valetudo, dll</td></tr><tr><td>Deskripsi</td><td>Jupiter adalah planet terdekat kelima dari Matahari setelah Merkurius,<br> Venus, Bumi, dan Mars. Planet ini juga merupakan planet terbesar <br>di Tata Surya. Jupiter merupakan raksasa gas dengan massa seperseribu <br>massa Matahari dan dua setengah kali jumlah massa semua planet lain <br>di Tata Surya.</td></tr></table><br><br><br><br><br><br><br><br><br><br><br><br><h1>Saturn</h1><table class='saturnus'><tr><td>Lama satu hari</td><td>0 h 10 j 42 m</td></tr><tr><td>Radius rata-rata</td><td>58.232 km</td></tr><tr><td>Periode orbit</td><td>29 tahun</td></tr><tr><td>Massa</td><td>5,683E26 kg (95,16 M⊕′)</td></tr><tr><td>Luas permukaan</td><td>42,7 miliar km²</td></tr><tr><td>Bulan</td><td>Titan, Enceladus, Mimas, Iapetus, Hyperion, Phoebe, Dione, dll</td></tr><tr><td>Deskripsi</td><td>Saturnus adalah sebuah planet di tata surya yang dikenal juga sebagai<br> planet bercincin, dan merupakan planet terbesar kedua di tata surya setelah Jupiter.<br> Jarak Saturnus sangat jauh dari Matahari, karena itulah Saturnus tampak tidak terlalu<br> jelas dari Bumi. Saturnus berevolusi dalam waktu 29,46 tahun.</td></tr></table><br><br><br><br><br><br><br><br><br><br><br><br><h1>Uranus</h1><table class='uranus'><tr><td>Lama satu hari</td><td>0 h 17 j 14 m</td></tr><tr><td>Ditemukan</td><td>13 Maret 1781</td></tr><tr><td>Radius rata-rata</td><td>25.362 km</td></tr><tr><td>Bulan</td><td>Titania, Miranda, Umbriel, Oberon, Cressida, Puck, Ariel, dll</td></tr><tr><td>Deskripsi</td><td>Uranus adalah planet ketujuh dari Matahari. Uranus merupakan planet yang memiliki<br> jari-jari terbesar ketiga sekaligus massa terbesar keempat di Tata Surya. Uranus juga<br> merupakan satu-satunya planet yang namanya berasal dari tokoh dalam mitologi Yunani,<br> dari versi Latinisasi nama dewa langit Yunani Ouranos.</td></tr></table><br><br><br><br><br><br><br><br><br><br><br><br><h1>Neptune</h1><table class='neptunus'><tr><td>Lama satu hari</td><td>0 h 16 j 6 m</td></tr><tr><td>Radius rata-rata</td><td>24.622 km</td></tr><tr><td>Periode orbit</td><td>165 tahun</td></tr><tr><td>Massa</td><td>1,024E26 kg (17,15 M⊕′)</td></tr><tr><td>Bulan</td><td>Triton, S/2004 N 1, Proteus, Sao, Thalassa, Nereid, Galatea, dll</td></tr><tr><td>Deskripsi</td><td>Neptunus merupakan planet terjauh jika ditinjau dari Matahari. Planet ini dinamai dari<br> dewa lautan Romawi. Neptunus merupakan planet terbesar keempat berdasarkan <br>diameter dan terbesar ketiga berdasarkan massa. Massa Neptunus tercatat 17 kali<br> lebih besar daripada Bumi, dan sedikit lebih besar daripada Uranus.</td></tr></table>"
);
let obj = new THREE.CSS3DObject(el);
obj.position.set(-280,-1900,0);
scene.add(obj);


let t1 = gsap.timeline({paused:true});
t1.to(obj.position,{y:2500,duration:50});

let t2 = gsap.timeline({paused:true});
t2.to(matahari.position,{y:335,duration:30});

let t3 = gsap.timeline({paused:true});
t3.to(merkurius.position,{y:315,duration:30});

let t4 = gsap.timeline({paused:true});
t4.to(venus.position,{y:315,duration:33});

let t5 = gsap.timeline({paused:true});
t5.to(bumi.position,{y:315,duration:39});

let t6 = gsap.timeline({paused:true});
t6.to(mars.position,{y:315,duration:45});

let t7 = gsap.timeline({paused:true});
t7.to(jupiter.position,{y:315,duration:51});

let t8 = gsap.timeline({paused:true});
t8.to(saturn.position,{y:315,duration:59});

let t9 = gsap.timeline({paused:true});
t9.to(uranus.position,{y:315,duration:67});

let t10 = gsap.timeline({paused:true});
t10.to(neptune.position,{y:315,duration:77});

let ganjil = false;

addEventListener('mousedown',function(e){
    if (ganjil==false){
        t1.play();
        t2.play();
        t3.play();
        t4.play();
        t5.play();
        t6.play();
        t7.play();
        t8.play();
        t9.play();
        t10.play();
        ganjil = true;
    }
    else{
        t1.pause();
        t2.pause();
        t3.pause();
        t4.pause();
        t5.pause();
        t6.pause();
        t7.pause();
        t8.pause();
        t9.pause();
        t10.pause();
        ganjil = false;
    }
});
// var pivot = new THREE.Group();
// scene2.add(pivot);
// pivot.add(cube);

function draw(){
    // obj.position.y += 0.9;
    // bumi.position.y += 2;
    floor.position.x += 0.01;
    matahari.rotation.y += 0.005;
    merkurius.rotation.y += 0.005;
    venus.rotation.y += 0.005;
    bumi.rotation.y += 0.005;
    mars.rotation.y += 0.005;
    jupiter.rotation.y += 0.005;
    saturn.rotation.y += 0.005;
    uranus.rotation.y += 0.005;
    neptune.rotation.y += 0.005;
    // merkurius.position.y += 0.1;
    // bumi.position.y += 0.1;
    renderer.render(scene, cam);
    renderer2.render(scene2, cam2);
    requestAnimationFrame(draw);
}
draw();
