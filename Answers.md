1. What problem does the context API help solve?

The context API help solve the problem that prop-drilling brings up to us when we have multiple components that needs access to the same data. Since in react, data can be passed in one direction, from parent to child, the context API helps use pass data to sibling components or any component that needs access to the data.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are basically something that describes an event happening. It's role is to let redux know what action is going to occur when an event is triggered and what to do with that action. The reducer is a function that keeps track of the overall state of the application. it's role is to take in the action that is triggered and change the state based on what action was triggered. The store holds the initial state and keeps track of changes made to the state, which is why it is known as the single source of truth.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the overall state of the entire application while component state is the state that the individual component is in. When you need to keep track of state that is only known and used for the individual component, that is when component state is used. While application state is used when all components need to be aware of the state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is a middleware package that gives redux the ability to run asynchronous operations. When the action is called, redux thunk intercepts the action and if it's an action the thunk passes it to the reducer, and if it's a function then thunk invokes the function and passes the dispatch as an argument.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

So far I like redux state management system the most because you're able to keep track of each state that the application is in and perform operations based on the specific state that the entire app is in.
