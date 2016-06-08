# gridSystems


### How to use
- Include script:
```javascript
<script src='gridSystems.js'></script>
```




### Functions
## createGrid()
- Build any 2 dimensional array:
- $gs.createGrid(number, number, number);

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

## resetGrid()
- Reset a grid:
- $gs.resetGrid(array, number);
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

## scanGridForKeys()
- Scan grid for keys:
- $gs.scanGridForKeys({grid:array, exclude:array, include:array})
```javascript

var testGrid = [    
                    [1, 0, 0],
                    [0, 2, 0],
                    [0, 0, 3]
               ]

// will grab all coordinates with a 1, 2 or 3 in it
var coordsWithNumbers = $gs.scanGridForKeys({grid: testGrid, exclude: [], include:[1, 2, 3]})
// output:  [{row: 0, column: 0}, {row: 1, column: 1}, etc]


// will grab all coordinates that do NOT have a 0 in it
var coordsWithZeros = $gs.scanGridForKeys({grid: testGrid, exclude: [0], include:[]})
// output:  [{row: 0, column: 1}, {row: 0, column: 2}, etc]

// can be used in conjunction (will grab anything NOT 0 and anything with a 1 in it)
var coordsWithZeros = $gs.scanGridForKeys({grid: testGrid, exclude: [0], include:[1]})
// output:  [{row: 0, column: 1}, {row: 0, column: 2}, etc]

```

## mapBloom()
- Get a bloom heat map:
- $gs.mapBloom({gridTo:array, coords:array, bloomSize:number, N:boolean, E:boolean, S:boolean, W:boolean, NE:boolean, NW:boolean, SE:boolean, SW:boolean, exportCords:boolean})
```javascript

/* GRID  
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, X, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
*/


$gs.mapBloom({gridTo: testGrid, coords: [{row: 2, column: 2}], bloomSize: 3, N:true, E:true, S: true, W:true, NE:true, NW: true, SE: true, SW: true, exportCords: true})

/* OUTPUT 
/* GRID  
                    [0, 0, 1, 0, 0],
                    [0, 1, 2, 1, 0],
                    [1, 2, 3, 2, 1],
                    [0, 1, 2, 1, 0],
                    [0, 0, 1, 0, 0],

*/
```

- Heatmaps that overlap will add to each other:
```javascript
/* GRID  
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, X, 0, X, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
*/



$gs.mapBloom({gridTo: testGrid, coords: [{row: 2, column: 2}, {row: 2, column: 4}],  bloomSize: 3, N:true, E:true, S: true, W:true, NE:true, NW: true, SE: true, SW: true, exportCords: true})


/* OUTPUT 

                    [0, 0, 1, 0, 1, 0, 0]
                    [0, 1, 2, 2, 2, 1, 0]
                    [1, 2, 3, 5, 3, 2, 1]
                    [0, 1, 2, 2, 2, 1, 0]
                    [0, 0, 1, 0, 1, 0, 0]

*/


```
