Synchronous way: It waits for each operation to complete, after that only it executes the next operation. So, next operation have to wait if current operation is taking time to compl~ete.

Asynchronous way: It never waits for each operation to complete, rather it executes all operations in the first GO only. The result of each operation will be handled once the result is available.


Use cases

If your operations are not doing very heavy lifting like querying huge data from DB then go ahead with Synchronous way otherwise Asynchronous way.****

In Asynchronous way you can show some Progress indicator to the user while in background you can continue with your heavy weight works. This is an ideal scenario for GUI apps.