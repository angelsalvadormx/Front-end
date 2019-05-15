# Banner 

## Installation

Add the file **banner.css**.
```html
  <link rel="stylesheet" href="./css/banner.css">
```

Now add the id *banner* to element where you wish  show the banner.
```html
  <section id="banner"></section>
```

Then add the file **banner.js**.
```html
  <script src="./js/banner.js"></script>
```

## Configuration

* Set time in milliseconds on property 'time'.
* Create a object with the propertys image, title_card and content_card, in the property **image** add the path of image, in the property **title_card** add the title of your card the card is the white box are on the banner, finnally the property **content_card**  add the description of the card, if you don't want have show the card or part of card just don't add the property to object.

### Configuration example 

```html
  <script>
       banner({
            time:4000,
            items:[
                {
                    image:'image/banner/banner1.jpeg',
                    title_card:"¿Ejemplo 1?", 
                    content_card:"laudantium minus illum? Aliquam maxime cum suscipit aperiam iusto? Corporis, perspiciatis."
                },
                {
                    image:'image/banner/banner2.jpeg'
                },
                {
                    image:'image/banner/banner3.jpeg',
                    title_card:"¿Ejemplo 3?"
                }
            ]
        });
  </script>
```

## Example

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Banner</title>

        <link rel="stylesheet" href="./css/banner.css">
    </head>
    <body>
        <section id="banner"></section>
        
        <script src="./js/banner.js"></script>
        <script>
            banner({
                time:4000,
                items:[
                    {
                        image:'image/banner/banner1.jpeg',
                        title_card:"¿Ejemplo 1?", 
                        content_card:"laudantium minus illum? Aliquam maxime cum suscipit aperiam iusto? Corporis, perspiciatis."
                    },
                    {
                        image:'image/banner/banner2.jpeg'
                    },
                    {
                        image:'image/banner/banner3.jpeg',
                        title_card:"¿Ejemplo 3?", 
                        content_card:"aperiam iusto? Corporis, perspiciatis."
                    }
                ]
            });
        </script>
    </body>
</html>
```

### Screenshots
<img src="https://github.com/AngelSalvador98/Front-end/blob/master/banner/image/screenshot.png?raw=true" alt="Screenshot 1" width="100%">
<br/><br/>
<img src="https://github.com/AngelSalvador98/Front-end/blob/master/banner/image/screenshot1.png?raw=true" alt="Screenshot 2" width="100%">
