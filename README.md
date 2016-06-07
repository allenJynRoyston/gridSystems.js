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
// output:  [{row: 0, column: 0}, {row: 1, column: 1}, etc]


// will grab all coordinates with a 0 in it
var coordsWithZeros = $gs.scanGridForKeys({grid: testGrid, exclude: [0], include:[]})
// output:  [{row: 0, column: 1}, {row: 0, column: 2}, etc]

```


- Get a bloom heat map:
```javascript

/* GRID  
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, X, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
*/


$gs.mapBloom({gridTo: testGrid, row: 2, column: 2, bloomSize: 3, N:true, E:true, S: true, W:true, NE:true, NW: true, SE: true, SW: true, exportCords: true})

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



$gs.mapBloom({gridTo: testGrid, row: 2, column: 2, bloomSize: 3, N:true, E:true, S: true, W:true, NE:true, NW: true, SE: true, SW: true, exportCords: true})
$gs.mapBloom({gridTo: testGrid, row: 2, column: 4, bloomSize: 3, N:true, E:true, S: true, W:true, NE:true, NW: true, SE: true, SW: true, exportCords: true})

/* OUTPUT 

                    [0, 0, 1, 0, 1, 0, 0]
                    [0, 1, 2, 2, 2, 1, 0]
                    [1, 2, 3, 5, 3, 2, 1]
                    [0, 1, 2, 2, 2, 1, 0]
                    [0, 0, 1, 0, 1, 0, 0]

*/


```
