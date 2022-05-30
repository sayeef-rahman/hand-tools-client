import React from 'react';

const Blogs = () => {
    return (
        <div className='w-3/4 mx-auto'>
            <div className='my-4'>
                <h1 className='font-bold'>How will you improve the performance of a React Application?</h1>

                Answer: The performance of React relies on the architecture, components and libraries that you use in your application. To catch the performance chokepoint, you must first understand the underlying architecture.

                We can improve React Performance by following instructions:

                Complex variables in render
                PureComponent/Recompose
                Keeping component state local where necessary
                Memoizing React components to prevent unnecessary re-renders
                Code-splitting in React using dynamic import()
                Windowing or list virtualization in React
                Lazy loading images in React
                Profiling Components with the DevTools Profiler
                Avoid Reconciliation
                The Power Of Not Mutating Data

            </div>
            <div className='my-4'>
                <h1 className='font-bold'>What are the different ways to manage a state in a React application?</h1>

                Answer: The state is a built-in React object that is used to contain data or information about the component. A component’s state can change over time; whenever it changes, the component re-renders. The change in state can happen as a response to user action or system-generated events and these changes determine the behavior of the component and how it will render.

            </div>
            <div className='my-4'>
                <h1 className='font-bold'>How does prototypical inheritance work?</h1>

                Answer: Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
            </div>
            <div className='my-4'>
                <h1 className='font-bold'> What is a unit test? Why should write unit tests?
                </h1>
                UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.

                In SDLC, STLC, V Model, Unit testing is first level of testing done before integration testing. Unit testing is a WhiteBox testing technique that is usually performed by the developer. Though, in a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing..
            </div>
            <div className='my-4'>
                <h1 className='font-bold'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts ?</h1>

                Answer: Everybody says don’t do it. Never mutate state directly, always call setState.

                But why, though?

                If you’ve tried it out, you might’ve noticed nothing bad happened. If you modify state directy, call this.setState({ }) or even this.forceUpdate(), then everything might appear to be just fine.

                As you may already know, a common way to tune a React component for performance is to make it “pure,” which causes it to only re-render when its props change (instead of every time its parent re-renders). This can be done automatically by extending React.PureComponent instead of React.Component, or manually by implementing the shouldComponentUpdate lifecycle method to compare nextProps with current props. If the props look the same, it skips the render, and saves some time.
            </div>
        </div>
    );
};

export default Blogs;