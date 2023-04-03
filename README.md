# luhn-algorithm-card-number-validation-check
basic luhn algorithm card number validation check. // Grundlegende Luhn Algorithmus Validierung.

function:

=> .. insert a number and check out your console();


about:

luhn algorithm = every second number from right gets multiplied by 2.
if these numbers value is >=10  the checksum of the numbers is calculated.
after that you add all numbers again one by one and the result has to be an whole number 
with the last count of 0.

in JS:

first all second numbers from right get multiplied by 2 and then all pushed into an array.

also the first numbers of right get pushed into an other array only multiplied by 1 just to convert them in a number..


then all the numbers of the second right numbers array who are >= 10 get pushed in a seperate array.
also the numbers who are < than 10 in an other seperated array..

all numbers who are >= 10 get converted in to a string to get splittet for the checksum calculation.

then these checksum either get in to a new seperated array...
!There an issue occures that all those checksums occures behind a number of 1.
- for example like this: 1,7,1,2,1,8 
i searched for the reason but didnt find it.. //When you now it better please comment here..//
The solution was to slice out again every second number from left in to an other new array

after all this array collections, all the arrays get summerized and this is the result of the luhn algorithm.


