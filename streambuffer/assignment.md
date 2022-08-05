
**<H3>Buffer & Stream</H3>**
Buffer is a (binary) data type in NodeJs. Buffer is like arry of integer where each integer represent byte of data.
Buffer class is a global class that can be accessed in an application without importing the buffer module.

Stream is flow of buffer. 

**<H4>Asignment</H4>**

- Research about pipe method in fs module.

- Create a first.txt file having 3 large paragraphs of text. Create a readable stream of first.txt file and use createWriteStream and pipe method to write the incomming buffer directly to a new file 'second.txt' (not using callback like in class).