//% color="#ff0000" icon="/f055"
namespace Extras {
    //% block
    //% group="SpriteKind"
    export function arrayOfAllSprites() {
    const allSprites: Sprite[] = [];

    for (const key of Object.keys(game.currentScene().spritesByKind)) {
        for (const sprite of game.currentScene().spritesByKind[parseInt(key)].sprites()) {
            allSprites.push(sprite);
        }
    }
    return allSprites;
}
    //% block="array of all sprites except $kind"
    //% kind.shadow="SpriteKind"
    //% group="SpriteKind"
    export function arrayOfAllSpritesExept(kind: number) {
    const allSprites: Sprite[] = [];

    for (const key of Object.keys(game.currentScene().spritesByKind)) {
        for (const sprite of game.currentScene().spritesByKind[parseInt(key)].sprites()) {
            allSprites.push(sprite);
        }
    }
    for (let value of sprites.allOfKind(kind)){
        allSprites.removeAt(allSprites.indexOf(value))
    }
    return allSprites;
}
    //% block="avg $value"
    //% group="Math"
    export function avg(value: number[]) {
        let temporaryValue = 0
        for (let value2 of value){
            temporaryValue += value2
    }
return (temporaryValue / value.length)
}
    //%block="negative $value"
    //% group="Math"
    export function neg(value: number){
        return (0 - value)
}
    //% blockId=doesKindExists block="does sprite kind $kind exists"
    //% kind.shadow="spritekind"
    //% group="SpriteKind"
    export function doesKindExists(kind: number): boolean {
        let temporaryVar = 0
        for(let value of sprites.allOfKind(kind)){
            temporaryVar += 1 
        }
        if(temporaryVar > 0){
            return true
        } else {
            return false
        }
    }
    //% block="flicker image $image"
    //% image.shadow="image"
    //% group="Images"
    export function flickerImage(image: Image) {
        let exampleArray = [image, img`
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
        `]
        return exampleArray
    }
     //% block="flicker animation array $image"
    //% image.shadow="Image[]"
    //% group="Images"
    export function flickerAnimation(image: Image[]){
        let frameFlicker = true
        let valueCount = 0
        const exampleArray: Image[] = [];
        for(let value of image) {
            if (frameFlicker){
                exampleArray.push(exampleArray[valueCount])
            } else {
                exampleArray.push(img`
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
                `)
            }
        valueCount += 1
        }
        return exampleArray
    }
}