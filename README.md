# easyPerspective
Perspective effect for HTML elements based on mouse movement

See online Demo: [click here!](http://vafakaramzadegan.ir/filemanager/webUI/easyPerspective/sample.html)

# Usage

include easyPerspective.js after jQuery:
```html
<script type="text/javascript" src"easyPerspective.js"></script>
```

create your element(s):

```html
<div class="yourClass">
  <div class="wrapper">
    <!-- insert your HTML here -->
  </div>
</div>
```

then simply add the following code:
```javascript
$(".yourClass").easyPerspective();
```

custom options:
```javascript
$(".yourClass").easyPerspective({
  sensitivity: 20,
  translate: true,
  lightEffect: true,
  wrapperSelector: ".wrapper" // wrapper DIV selector name
});
```
