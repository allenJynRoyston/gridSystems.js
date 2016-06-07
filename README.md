# gridSystems


### How to use
- Include script:
```javascript
<script src='gridSystems.js'></script>
```




### Functions
- Build any 2 dimensional array:

```javascript
    var rows = 5,
        columns = 5,
        defaultValue = 1;

    var newGrid = $gs.createGrid(rows, columns, defaultValue);
```

| 1 1 1 1 1 |<br>
| 1 1 1 1 1 |<br>
| 1 1 1 1 1 |<br>
| 1 1 1 1 1 |<br>
| 1 1 1 1 1 |<br>


- Reset a grid:

```javascript
    var grid = newGrid,
        resetValue = 0;
    
    var resetGrid = $gs.resetGrid(grid, resetValue);
```

| 0 0 0 0 0 |<br>
| 0 0 0 0 0 |<br>
| 0 0 0 0 0 |<br>
| 0 0 0 0 0 |<br>
| 0 0 0 0 0 |<br>


- Scan grid for keys:
```javascript

var testGrid = [    
                    [1, 0, 0],
                    [0, 2, 0],
                    [0, 0, 3]
               ]

// will grab all coordinates with a 1, 2 or 3 in it
var coordsWithNumbers = $gs.scanGridForKeys({grid: testGrid, exclude: [], include:[1, 2, 3]})

// will grab all coordinates with a 0 in it
$gs.scanGridForKeys({grid: testGrid, exclude: [0], include:[]})
var coordsWithZeros = $gs.scanGridForKeys({grid: testGrid, exclude: [0], include:[]})
```
