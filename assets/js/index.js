"use strict";

const nums1 =[1,2,3,4,4,6,7,7,52,63,4,96];
const nums2 =[1,2,2,4,4,3,7,7,52,4,4,50,63];

const mySet = [...new Set([...nums1,...nums2])];

console.log(mySet);


const monitor = {
  sizes: {
    height: {
      value: 20,
      scale: "cm",
    },
    width: {
      value: 56.5,
      scale: "cm",
    },
  },
  model: "Samsung",
  brightness: 200,
  contrast: 100,
  color: 'black',
  dpi: 250,
  resolution: "4K",
};

console.log(monitor.sizes.height.value);

const monitorBrightness = monitor.brightness;
const monitorDpi = monitor.dpi;
const monitorColor = monitor.color;

const {brightness, dpi, color} = monitor;
console.log(brightness, dpi, color);


/*
BAD
const {sizes} = monitor;
const {height,width} = sizes;
const {value} = height;
*/

const {
  sizes:{
    height: {value: hightValue, scale: hightScale },
    width: {value:widthValue, scale: widthScale},
  },
} = monitor;

console.log(`Hight: ${hightValue}${hightScale}, Width: ${widthValue}${widthScale}`);
console.log(monitor);

/*function getMonitorInfo(monitor){
  const {
      sizes:{
      height: {value: hightValue, scale: hightScale },
      width: {value:widthValue, scale: widthScale},
    },
  } = monitor;
  const monitorDpi = monitor.dpi;
  const monitorColor = monitor.color;
  return `Hight: ${hightValue}${hightScale}\nWidth: ${widthValue}${widthScale}\nColor: ${monitorColor}\nDPI: ${monitorDpi}`;
  }
  */


  function getMonitorInfo({
      sizes:{
        height: {value: hightValue, scale: hightScale },
        width: {value:widthValue, scale: widthScale},
      },
      dpi,
      color,
      ...otherinfo
    })  {
    return `Hight: ${hightValue}${hightScale}\nWidth: ${widthValue}${widthScale}\nColor: ${color}\nDPI: ${dpi}`;
    }
  console.log (getMonitorInfo(monitor));
