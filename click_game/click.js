enchant();
// var game = new Core(800,600);
var game = new Core(400,300);
game.fps = 15;

// ゲームのスコア
score = 0;

game.onload = function() {
	var scene = game.rootScene;
	scene.backgroundColor = "black";

	// 的のオブジェクトを生成
	var target = new Sprite(30,30);
	target.backgroundColor = "Yellow";

	// 初期座標を指定
	target.x = 10;
	target.y = 10;

	// クリックするとターゲットが移動する
	target.addEventListener('touchstart', function() {
		console.log('touch!');
		target.x = Math.random() * 100 + 10;
		target.y = Math.random() * 100 + 10;
		score++;
		if (score >= 10) {
			alert("10 touch");
			console.log('10 touch!');
			score = 0;
		}
	});

	scene.addChild(target);

};
game.start();
