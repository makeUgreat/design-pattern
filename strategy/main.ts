import {MallardDuck} from "./mallard-duck";
import {RedHeadDuck} from "./redhead-duck";

const mallard = new MallardDuck();
const readHead = new RedHeadDuck();

mallard.display();
mallard.swim();
mallard.quack();

readHead.display();
readHead.swim();
readHead.quack();

const newObj = {
    hi: 'Hello',
}

console.log(newObj.hi)