namespace SpriteKind {
    export const Target = SpriteKind.create()
    export const Bullet = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    do_one_complete_cycle(sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player), 40, 15)
})
function test_add (V_a_text: string, V_b_text: string, origin_sprite: Sprite) {
    line_a = vectorMath.draw_line_from_sprite_along_vector(
    origin_sprite,
    V_a_text,
    1,
    2
    )
    tmp_sprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tmp_sprite.setPosition(org.x + V_a.x, org.y + V_a.y)
    line_b = vectorMath.draw_line_from_sprite_along_vector(
    tmp_sprite,
    V_b_text,
    3,
    4
    )
    V_sum = vectorMath.createVectorFromText(add_2_vectors(vectorMath.text(V_a), vectorMath.text(V_b)))
    V_sum_line = vectorMath.draw_line_from_sprite_along_vector(
    origin_sprite,
    vectorMath.text(V_sum),
    5,
    6
    )
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    gun = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        `, SpriteKind.Player)
    gun.setPosition(80, 110)
    gun.setKind(SpriteKind.Projectile)
    foods = [
    sprites.food.smallBurger,
    sprites.food.smallApple,
    sprites.food.smallLemon,
    sprites.food.smallDrumstick,
    sprites.food.smallHam,
    sprites.food.smallPizza
    ]
    info.setScore(0)
    FIFO = []
    lit_up = false
    shooting = true
})
sprites.onDestroyed(SpriteKind.Food, function (sprite) {
    FIFO.removeAt(FIFO.indexOf(sprite))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (shooting && !(lit_up)) {
        if (FIFO.length > 0) {
            lit_up = true
            myBullet = sprites.create(img`
                2 
                `, SpriteKind.Bullet)
            myBullet.y = gun.y
            thisTarget = FIFO.pop()
            thisTarget.vx = 0
            myVector = vectorMath.createVectorFromSprites(myBullet, thisTarget)
            arrow_sprite = vectorMath.draw_line_from_sprite_along_vector(
            myBullet,
            vectorMath.text(myVector),
            5,
            6
            )
            pause(200)
            myBullet.vx = 5 * myVector.x
            myBullet.vy = 5 * myVector.y
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Target, function (sprite, otherSprite) {
    sprite.setVelocity(0, 0)
    pause(500)
    otherSprite.destroy(effects.spray, 500)
})
function add_2_vectors (v1_text: string, v2_text: string) {
    vectorSum = vectorMath.addVectors(v1_text, v2_text)
    return vectorMath.text(vectorSum)
}
function sprite_with_random_position () {
    tmp_sprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tmp_sprite.x = Math.randomRange(0, screen.width)
    tmp_sprite.y = Math.randomRange(0, screen.height)
    return tmp_sprite
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    org = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    org.setPosition(randint(50, 130), randint(50, 110))
    V_a = vectorMath.createVector(20, randint(10, 340))
    console.logValue("V_a dir", V_a.dir_degrees)
    V_b = vectorMath.createVector(40, randint(10, 340))
    console.logValue("V_b dir", V_b.dir_degrees)
    test_add(vectorMath.text(V_a), vectorMath.text(V_b), org)
    console.logValue("V_sum", V_sum.dir_degrees)
})
function do_one_complete_cycle (from_sprite: Sprite, magnitude: number, dir_delta_degrees: number) {
    output = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    output.setPosition(20, 10)
    dir_degrees = 0
    line_color = 1
    while (dir_degrees < 360) {
        output.say("angle " + dir_degrees)
        V_a = vectorMath.createVector(magnitude, dir_degrees)
        console.logValue("vector", vectorMath.text(V_a))
        line_sprite = vectorMath.draw_line_from_sprite_along_vector(
        from_sprite,
        vectorMath.text(V_a),
        line_color,
        line_color % 13 + 1
        )
        dir_degrees += dir_delta_degrees
        line_color = line_color % 13 + 1
        pause(1000)
    }
    output.destroy()
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 20; index++) {
        from_sprite = sprite_with_random_position()
        from_sprite.setKind(SpriteKind.Projectile)
        from_sprite.setImage(sprites.builtin.shark0)
        to_sprite = sprite_with_random_position()
        to_sprite.setKind(SpriteKind.Target)
        to_sprite.setImage(sprites.food.smallBurger)
        to_sprite.vx = 0
        myVector = vectorMath.createVectorFromSprites(from_sprite, to_sprite)
        arrow_sprite = vectorMath.draw_line_from_sprite_along_vector(
        from_sprite,
        vectorMath.text(myVector),
        1,
        2
        )
        pause(1000)
        pause(2000)
        from_sprite.destroy()
        to_sprite.destroy()
        arrow_sprite.destroy()
    }
})
sprites.onOverlap(SpriteKind.Bullet, SpriteKind.Food, function (sprite, otherSprite) {
    if (shooting && lit_up) {
        otherSprite.startEffect(effects.fire, 100)
        info.changeScoreBy(1)
        otherSprite.destroy()
        sprite.destroy()
        arrow_sprite.destroy()
        lit_up = false
    }
})
let len = 0
let aFood: Sprite = null
let line_sprite: Sprite = null
let line_color = 0
let dir_degrees = 0
let output: Sprite = null
let vectorSum: Vector = null
let myVector: Vector = null
let thisTarget: Sprite = null
let myBullet: Sprite = null
let lit_up = false
let FIFO: Sprite[] = []
let foods: Image[] = []
let gun: Sprite = null
let V_sum_line: Sprite = null
let V_b: Vector = null
let V_sum: Vector = null
let line_b: Sprite = null
let V_a: Vector = null
let org: Sprite = null
let tmp_sprite: Sprite = null
let line_a: Sprite = null
let shooting = false
let arrow_sprite: Sprite = null
let to_sprite: Sprite = null
let from_sprite: Sprite = null
// needed by  up arrow
from_sprite = sprites.create(img`
    . 
    `, SpriteKind.Player)
// needed by  up arrow
to_sprite = sprites.create(img`
    . 
    `, SpriteKind.Player)
// needed by  up arrow
arrow_sprite = sprites.create(img`
    . 
    `, SpriteKind.Player)
shooting = false
game.onUpdate(function () {
	
})
game.onUpdate(function () {
    if (shooting && !(lit_up)) {
        if (FIFO.length < 3) {
            aFood = sprites.create(foods[randint(0, foods.length - 1)], SpriteKind.Player)
            aFood.setFlag(SpriteFlag.DestroyOnWall, true)
            aFood.setKind(SpriteKind.Food)
            len = FIFO.unshift(aFood)
            aFood.setPosition(0, randint(0, 120))
            aFood.vx = randint(5, 50)
        }
    }
})
