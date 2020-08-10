function set_sprite_velocity_form_goal_position2 (mySprite: Sprite) {
    mySprite.vx = vector.x
    mySprite.vy = vector.y
}
function set_sprite_velocity_form_goal_position (mySprite: Sprite) {
	
}
// resetBoard()
function reset_fromSprite_toSprite (fromSprite: Sprite, toSprite: Sprite) {
    fromSprite.say("")
    fromSprite.x = Math.randomRange(0, screen.width)
    fromSprite.y = Math.randomRange(0, screen.height)
    toSprite.x = Math.randomRange(0, screen.width)
    toSprite.y = Math.randomRange(0, screen.height)
    vector = vectorMath.createVectorFromSprites(fromSprite, toSprite)
    fromSprite.vx = vector.x
    fromSprite.vy = vector.y
}
function reset_mag_dir () {
    let end_sprite: Sprite = null
    begin_sprite.say("")
    begin_sprite.x = Math.randomRange(0, screen.width)
    begin_sprite.y = Math.randomRange(0, screen.height)
    end_sprite.x = Math.randomRange(0, screen.width)
    end_sprite.y = Math.randomRange(0, screen.height)
    vector = vectorMath.createVectorFromSprites(begin_sprite, end_sprite)
    begin_sprite.vx = vector.x
    begin_sprite.vy = vector.y
}
// sprites.onOverlap(1, 2, ...)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprite.say(":)")
    sprite.vx = 0
    sprite.vy = 0
    loops.pause(1000)
    currRun += 1
    // if (currRun <= numRuns)
    if (currRun <= numRuns) {
    	
    }
})
let vector: Vector = null
let begin_sprite: Sprite = null
let currRun = 0
let numRuns = 0
numRuns = 5
currRun = 1
begin_sprite = sprites.create(sprites.castle.skellyFront, SpriteKind.Player)
let myVector = vectorMath.createVector(40, 90)
let myVector2 = vectorMath.createVector(60, 45)
let mySprite = vectorMath.draw_line_from_sprite_along_vector(begin_sprite, vectorMath.text(myVector))
let mySprite2 = vectorMath.draw_line_from_sprite_along_vector(begin_sprite, vectorMath.text(myVector2))
let vectorSum = vectorMath.addVectors(vectorMath.text(myVector), vectorMath.text(myVector2))
console.logValue("dir", vectorSum.dir)
console.logValue("mag", vectorSum.mag)
let mySprite3 = vectorMath.draw_line_from_sprite_along_vector(begin_sprite, vectorMath.text(vectorSum))
