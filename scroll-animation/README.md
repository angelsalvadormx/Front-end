# Scroll down animation 

## Instalation

Add scroll_animation.css & scroll_animation.js files to your project and call the function animation()
```html
  <link rel="stylesheet" href="./scroll_animation.css">
```
```html
  <script src="./scroll_animation.js"></script>
  <script> animation(); </script>
```


## Configuration

* Add the class 'animated' to element that you want to set the animation
* Add this attribute 'data-animation' with type of animation that you want 

### Types animations

* fadeIn
* fadeInTop
* fadeInTopBig

* fadeInRight
* fadeInRightBig

* fadeInLeft
* fadeInLeftpBig

### Types transitions
* SlowStart
* slowEnd

## Example

```html
  <!DOCTYPE html>
   <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Example</title>

        <!-- Css scroll animation -->
        <link rel="stylesheet" href="./scroll_animation.css">
    </head>
    <body>
        
      <section>
        <article class="animated slowEnd" data-animation="fadeInLeftBig">
            ...
        </article>

        <article class="animated slowStart" data-animation="fadeInTop">
            ... 
        </article>

        <article class="animated" data-animation="fadeInRight">
            ...
        </article>
      </section>
            
      <script src="./scroll_animation.js"></script>
    
       <script>
         animation();
       </script>
    </body>
  </html>
 ```
[Demo](http://salvador.coddy.com.mx/animation-scroll/){:target="_blank"}

## 
[Linkdin](https://www.linkedin.com/in/angel-salvador-99a815132/){:target="_blank"}
[Instagram](https://www.instagram.com/angelsalvadormx/){:target="_blank"}
