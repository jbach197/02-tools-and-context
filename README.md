# 02-Tools and Context

Link to Master: https://github.com/jbach197/02-tools-and-context
Link to Pull Request: https://github.com/jbach197/02-tools-and-context/pull/1
Link to Travis:

# Installation Instructions
1) Clone the repo
2) Run npm i to install the dependencies
3) Run npm test to complete the tests
4) Run npm lint for the linter

#Requirements
* Implement a List constructor using a class with a length property.
* Implement push() mentod on the List prototype to add items to the list.  The push method will take one parameter.  No restrictions on the type of data in the parameter.
* Implement pop() method on the List prototype to remove the last item from the list and return the value.  The pop method does not take any parameters.
* Implement forEach() method to execute a function on each element in an array.  The parameters are a call back function to execute, the array to traverse.  No return statement as the original array is mutated to be the new values after the callback function runs.
* Implement a map() method to execute a function on each element in the array.  Returns a new array, of the same size as the original.  The parameters are a callback function to execute, array to traverse.
* Implement a filter() method to execute a callback function that returns a new array that only contains elements that match the criteria in the callback function.  The parameters are a callback function and an array to traverse.
* Do not use any built-in array methods to any of the above.

#Testing
Use the `describe` and `it` (or `test`) methods to define descriptive tests and increase readablity
Each `it` callback should aim to test a small, well defined, feature of a function - this may include:
  * tests that ensure the list module functions correctly with error-check parameters
  * tests that the correct errors are thrown with invalid arguments exist
  * tests to ensure that the list module functions return the correct results when invoked with valid arguments


#Worked with and Credits
Nothing specific.





