function __grid(properties){


  //----------------------------
  this.createGrid = function(rows, columns, defaultValue){

    var r = [];
    var grid = [];
    var defaultValue = 0

    for (i = 0; i < columns; i++){
      grid.push([])
      for (n = 0; n < rows; n++){
        grid[i].push(defaultValue)
      }
    }

    return grid;

  };
  //----------------------------


  //----------------------------
  this.resetGrid = function(grid, defaultValue){

    var _grid = grid;

    for(var i = 0; i < _grid.length; i++){
      for(var n = 0; n < _grid[i].length; n++){
        _grid[i][n] = defaultValue
      }
    }

    return _grid;

  };
  //----------------------------

  //----------------------------
  this.scanGridForKeys = function(options){

    var _grid     = options.grid,
        _exclude  = options.exclude,
        _include  = options.include,
        _coords   = [];


    for(var i = 0; i < _grid.length; i++){
      for(var n = 0; n < _grid[i].length; n++){
        var v = globals.grids.rooms[i][n];
        // exclude
        for (m = 0; m < _exclude.length; m++){
          if(_exclude[m] != v){
            _coords.push({row: i, column: n})
          }
        }
        // include
        for (m = 0; m < _include.length; m++){
          if(_include[m] == v){
            _coords.push({row: i, column: n})
          }
        }
      }
    }

    return _coords;


  }
  //----------------------------

  //----------------------------
  this.mapBloom = function(options){

    var gridTo    = options.gridTo,
        coords    = options.coords,
        _n        = options.N,
        _e        = options.E,
        _s        = options.S,
        _w        = options.W,
        _ne       = options.NE,
        _nw       = options.NW,
        _se       = options.SE,
        _sw       = options.SW,
        bloomSize = options.bloomSize,
        exportCords  = options.exportCords;


    var _returnCoords = [];

    for(var c = 0; c < coords.length; c++){
      row       = coords[c].row,
      column    = coords[c].column


      gridTo[row][column] = bloomSize + gridTo[row][column];
      for(var i = 1; i < bloomSize; i++){

          // up
          if( (row - i) >= 0 ){

            if(_n){
              gridTo[row - i][column] = gridTo[row - i][column] + (bloomSize - i);
              if(exportCords){
                _returnCoords.push({row: row - i, column:  column, value: gridTo[row - i][column] + (bloomSize - i)})
              }
            }
            for(var n = 1; n < bloomSize; n++){

                // right
                if(_ne){
                  if( (column + i) < gridTo[row - i].length - n ){
                    if(gridTo[row - i][column + n] + (bloomSize - i - n) > 0){
                      gridTo[row - i][column + n] = gridTo[row - i][column + n] + (bloomSize - i - n);
                      if(exportCords){
                        _returnCoords.push({row: row - i, column:  column + n, value: gridTo[row - i][column + n] + (bloomSize - i - n)})
                      }
                    }
                  }
                }

                // left
                if(_nw){
                  if( (column - i) < gridTo[row - i].length - n ){
                    if(gridTo[row - i][column - n] + (bloomSize - i - n) > 0){
                      gridTo[row - i][column - n] = gridTo[row - i][column - n] + (bloomSize - i - n);
                      if(exportCords){
                        _returnCoords.push({row: row - i, column:  column - n, value: gridTo[row - i][column - n] + (bloomSize - i - n)})
                      }
                    }
                  }
                }

            }
          }


          // bottom
          if( (row + i) < gridTo.length ){

            if(_s){
              gridTo[row + i][column] = gridTo[row + i][column] + (bloomSize - i);
              if(exportCords){
                _returnCoords.push({row: row + i, column:  column, value: gridTo[row + i][column] + (bloomSize - i)})
              }
            }
            for(var n = 1; n < bloomSize; n++){

                // right
                if(_se){
                  if( (column + i) < gridTo[row - i].length - n ){
                    if(gridTo[row + i][column + n] + (bloomSize - i - n) > 0){
                      gridTo[row + i][column + n] = gridTo[row + i][column - n] + (bloomSize - i - n);
                      if(exportCords){
                        _returnCoords.push({row: row + i, column: column + n, value: gridTo[row + i][column + n] + (bloomSize - i - n)})
                      }
                    }
                  }
                }


                // left
                if(_sw){
                  if( (column - i) < gridTo[row - i].length - n ){
                    if(gridTo[row + i][column - n] + (bloomSize - i - n) > 0){
                      gridTo[row + i][column - n] = gridTo[row + i][column - n] + (bloomSize - i - n);
                      if(exportCords){
                        _returnCoords.push({row: row + i, column: column - n, value: gridTo[row + i][column - n] + (bloomSize - i - n)})
                      }
                    }
                  }
                }

            }
          }


          // right
          if(_e){
            if( (column + i) < gridTo[row].length ){
              gridTo[row][column + i] = gridTo[row][column + i] + (bloomSize - i);
              if(exportCords){
                _returnCoords.push({row: row, column: column + i, value: gridTo[row][column + i] + (bloomSize - i)})
              }
            }
          }

          // left
          if(_w){
            if( (column - i) >= 0){
              gridTo[row][column - i] = gridTo[row][column - i] + (bloomSize - i);
              if(exportCords){
                _returnCoords.push({row: row, column: column - i, value: gridTo[row][column - i] + (bloomSize - i)})
              }
            }
          }



      }

    }
    return _returnCoords;



  }
  //----------------------------

}


var $gs = new __grid()
