/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    speed = 30;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:relative;" />';
    };

    this.moveRight = function () {
        this.left += speed;
    };
    this.moveLeft = function () {
        this.left -= speed;
    };
    this.moveTop = function () {
        this.top -= speed;
    };
    this.moveDow = function () {
        this.top += speed;
    }

}

let hero = new Hero('anh1.jpeg', 20, 30, 200);


async function start() {

  if (hero.left < window.innerWidth - hero.size && hero.top < 30) {
    hero.moveRight();
  } else if (hero.top < window.innerHeight - hero.size && hero.left >= window.innerWidth - hero.size ) {
    hero.moveDow();
  } else if (hero.left > 30 ){
    hero.moveLeft();
  } else {
    hero.moveTop();
  }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 50)
}

start();