1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById("ID")
=>Select a single element by its id.Return one element,ID is must me unique.

getElementsByClassName
=>Selects elements by their class.Returns an HTMLCollection.Can Select multiple elements.

querySelector
=>select the first element that matches a CSS selector.Returns a single element.

querySelectorAll
=>Selects all element that match a CSS selector.Returns a NodeList.

2.How do you create and insert a new element into the DOM?
=>Create an element using document.createElement("tag").Set content or attributes.
select the parent element where it should be added.

3.What is Event Bubbling and how does it work?
=>Event Bubbling is when an event starts on a target element and then propagates upwad through its parent elements all the way to the document.

4.What is Event Delegation in JavaScript? Why is it useful?
=> Event delegation is technique where you attach a single event listener to a parent element instead of each child element and use event.target to handle events on the actual child.

5.What is the difference between preventDefault() and stopPropagation() methods?
preventDefault():Stops the default browser action (like link navigation or from submission).

stopPropagation(): stop the event from bubbling up to parent elements.
