It’s a module with methods that help you deal with file and directory path names on the machine’s filesystem.

The node:path module provides utilities for working with file and directory paths. It can be accessed using:

  

> const path = require('node:path');

  

Let's discuss

  

**path.dirname**

This method returns the lowest level folder of a file path.

> syntax : path.dirname("../fs/path");

  

**path.extname**

Say we need to know what the extension of a file is. Our extname method comes handdly here

> syntax : path.dirname("../fs/file.ext");

  
  

**path.basename**

It returns either the name of the file or directory that the file path refers to. Simply returns the last portion of the path.

> syntax : path.dirname("../fs/file.ext");

  
  

**path.parse**

The path.parse() method is used to return an object whose properties represent the given path. This method returns the following properties:

  

- root (root name)

- dir (directory name)

- base (filename with extension)

- ext (only extension)

- name (only filename)

The values of these properties may be different for every platform. It ignores the platform’s trailing directory separators during parsing.

> syntax : path.dirname("../fs/file.ext");

  
  

**path.normalize**

Many file systems allow the use of shortcuts and references to make navigation easier, such as .. and ., meaning up one directory and current direction respectively. These are great for quick navigation and testing, but it’s a good idea to have our paths a little more readable. With path.normalize, we can convert a path containing these shortcuts to the actual path it represents

In other words, path.normalize is "What is the shortest path I can take that will take me to the same place as the input"

> syntax : path.dirname("../..//anypath/file.ext");

  
  

**path.join**

The path.join() method is used to join a number of path-segments using the platform-specific delimiter to form a single path. The final path is normalized after the joining takes place. The path-segments are specified using comma-separated values.

> syntax : path.dirname("../path", "../path2", "..//../path3);