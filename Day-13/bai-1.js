/*


                      var array= [1, 4, 23,68,123,6,23,54]
                            │
                            │
                            ▼
                         var i = 0
                            │
                            │
                            │
                            ▼
               ┌─────►  i < array.length - 1?
               │             │
               │             │ true
           i = i +1          │
                             ▼
              ▲         var j =0
              │             │
              │             │
              │             │
              │             │
              │             ▼
              └───────  j < array.length - 1 - i    ◄───────────────┐
                false        │                                      │
                             │                                      │
                             │true                               j =│j +1
                             │                                      │
                             ▼                                      │
                        array[j] > array[j + 1] ?  ─────────────────┘
                             │                           false
                             │true
                             │
                             ▼
                         var temp = array[j + 1]
                         array[j + 1] = array[j]
                         array[j] = temp


 */
var array= [123, 12, 43, 78, 34, 85, 34, 218, 64]
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
console.log(array)