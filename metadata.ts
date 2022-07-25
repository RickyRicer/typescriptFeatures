import 'reflect-metadata'

// const plane = {
//   color: 'red'
// };

// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);

// console.log(note);
// console.log(height);

@controller
class Plane {
  color: string = 'red';

  @get('HI THERE')
  fly(): void {
    console.log('vrrrrr');
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  }
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('secret', target.prototype, key);
    
    router.get(path, target.prototype[key]);
  }
}
