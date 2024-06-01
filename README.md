# Sine wave inteference simulator (React three fiber)
This project allows you to simulate the interference patterns of up to four sine waves on the web browser. 
Users can adjust location, amplitude, wavelength, and frequency of each waves. 



![pic1](./public/3dwave.gif)


## DEMO
![pic3](./public/storm.gif)


[https://wave-inteference-js.vercel.app/](https://wave-inteference-js.vercel.app/)

_left click - Rotate , middle mouse - Zoom, right click - pan_

## Local Installation

![pic4](./public/2wave.gif)


```
> git clone https://github.com/TaroAndMulan/WaveInteferenceJS.git
> cd WaveInteferenceJS
> npm install
> npm run dev
 http://localhost:3000
```
## User Manual
* **Crest** - color of the crest 
* **Trough** - color of the trough  
 *Accepts manual color input via Hex color code. '#' sign infront of the number is required, e.g., "#FF00FF"*.

 Try to find the combination of these two colors that looks nice (use any color picker website to find a nice pallete). Here is an example of mixing red and white.

![pic7](./public/redexample.gif)



* **GridSize** - determine how large the plane is. For example, Gridsize "100" will create a plane with dimension 100x100.
* **Resolution** - Setting the resolution to '500' will divide the grid into a 500x500 square for the simulation. ***Increase this number for better visuals. Lower this number if your PC or mobile device struggles to run smoothly.***
* **Wavelength, frequency, amplitude, phases(°)** - are properties of wave. There is no input field for wave speed because it will be calculated from wavelenght and frequency (v=fλ)
* **location** - Location of the source (x,y). The point in the middle is always the origin (0,0). You can determine the x and y axes and their direction by inputting some numbers and observing the changes. 
* **on** - simulate this wave or not? 

## How it works?

![pic2](./public/blueexample.gif)

I use React for the frontend and three.js(React Three Fiber) as the graphics library. The sine waves are just three.js plane geometry with custom shaders. Please note that the current code is not written for anyone to learn from. It is unfinished. I plan to rewrite it from scratch for better readability in the future.

Instead of reading my code, just follow my guide below.

If you already know react three fiber, then you are ready to learn how to create a wave. This blog post will teach you all you need.
[wave-tutorial](https://blog.maximeheckel.com/posts/the-study-of-shaders-with-react-three-fiber/)

If you are not familiar with react or three.js or shading then
* **Learn React (optional)**: You don't have to use React; plain JavaScript is fine.
* **Learn Three.JS (optional)**: There are plenty of learning materials, but the best one is the [Three.js journey](https://threejs-journey.com/) by Bruno Simmon. 
* **Learn shaders**  : Even if you've never heard of shaders before, it won't take more than a few days to create a project like this. Visit [shadertoy](https://www.shadertoy.com/) to see what you can do with shaders. Bruno Simmon course mentioned above also teaches you how to write custom shaders for Three.js. Another excellent resource is [the book of shading](https://thebookofshaders.com/) (it's free and is the most recommended resource to learn from).

## TBD
* Add other type of waves. 
* Add inward waves (currently, all waves are outward)
* Add option to customise each wave's color individually 
* Add circular base
* Add time control functionality (pause/resume/change simulation speed)
* Add a measuring tool in case someone wants to do physics with this (e.g., an on-screen ruler or pointer).
* rewrite and document the code 