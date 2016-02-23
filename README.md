# dobtco-formbuilder-UI-generator

This is returns HTML output for JSON provided by dobtco [formbuilder](https://github.com/dobtco/formbuilder).
##
currently supports  [Bootstrap](https://getbootstrap.com/).

## Usage

```
<script src="generator.js"></script>
```
```
builder.on('save', function(payload){
    var form =  dynamicUIGenerator(payload);
    console.log(form);
    // use form wherever needed
});
```



