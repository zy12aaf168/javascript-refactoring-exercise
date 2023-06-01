# **Advanced JS - Assignment - Changes explained**


<table>
  <tr>
   <td>Change
   </td>
   <td>Reason
   </td>
  </tr>
  <tr>
   <td>Converted to ES6 from CommonJS.
   </td>
   <td>ES6 is preferred as it is modern and up-to-date.
   </td>
  </tr>
  <tr>
   <td>Replaced var with const/let as needed
   </td>
   <td>Var is outdated, const and let are the preferred modern standards.
   </td>
  </tr>
  <tr>
   <td>Removed global scoped variable txr
   </td>
   <td>Not needed globally as was only used in processTransactions. Ended up being removed entirely in the end anyway.
   </td>
  </tr>
  <tr>
   <td>Replace validateTransactions with an arrow function
   </td>
   <td>Arrow functions are a modern way of handling small distinct functions as more succinct and clearer to read
   </td>
  </tr>
  <tr>
   <td>Used implicit return for validateTransactions definition and when it was called in processTransactions 
   </td>
   <td>validateTransactions is an arrow function that immediately returns a value, so using implicit return is preferred. Also, preferred method for a simple if statement without an else. 
   </td>
  </tr>
  <tr>
   <td>Removed for loop and replaced with reduce function
   </td>
   <td>Built-in array functions like reduce are preferred as a more efficient and clean way to iterate. Decided on reduce (instead of other methods) at this position in code as a more clean iteration over array and direct assignment to txCount object.
   </td>
  </tr>
  <tr>
   <td>Returned the result of calling sortByAmountThenName instead of txr
   </td>
   <td>Cut out step of putting back into array (see below for further details) so no need to put the result into another variable only to immediately return that variable.
   </td>
  </tr>
  <tr>
   <td>sortedKeys given key and value during sort
   </td>
   <td>Removed need for the reduce function afterwards and no longer iterating twice over the same list. By using entries instead of keys, maximise payoff from the sort in the first pass. Also now working with an array of arrays instead of passing back and forth between arrays and objects.
   </td>
  </tr>
  <tr>
   <td>Use map function on sortedKeys and return result directly
   </td>
   <td>Like reduce, map is a built-in array function that is preferred to a for loop. Also allows for direct return of result instead of needing the additional variable sortedResults.
   </td>
  </tr>
</table>
