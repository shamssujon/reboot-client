import React from "react";
import { useLoaderData } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";

const BlogPage = () => {
	return (
		<section className="py-10">
			<div className="container max-w-4xl">
				<h2 className="mb-8 text-center text-4xl font-bold dark:text-slate-50">Blog</h2>
				<div className="grid gap-8">
					<article className="prose rounded-lg border bg-white p-6 shadow md:p-10 lg:prose-xl">
						<h3>What are the different ways to manage a state in a React application?</h3>
						<p>There are four main types of state you need to properly manage in your React apps:</p>
						<ol>
							<li>Local state</li>
							<li>Global state</li>
							<li>Server state</li>
							<li>URL state</li>
						</ol>
						<h4>Local state</h4>
						<p>Local state is data we manage in one or another component.</p>
						<p>
							Local state is most often managed in React using the useState hook. For example, local state
							would be needed to show or hide a modal component or to track values for a form component,
							such as form submission, when the form is disabled and the values of a form's inputs.
						</p>
						<h4>Global state</h4>
						<p> Global state is data we manage across multiple components.</p>
						<p>
							Global state is necessary when we want to get and update data anywhere in our app, or in
							multiple components at least.
						</p>
						<p>
							A common example of global state is authenticated user state. If a user is logged into our
							app, it is necessary to get and change their data throughout our application. Sometimes
							state we think should be local might become global.
						</p>
						<h4>Server state</h4>
						<p>Data that comes from an external server that must be integrated with our UI state.</p>
						<p>
							Server state is a simple concept, but can be hard to manage alongside all of our local and
							global UI state.
						</p>
						<p>
							There are several pieces of state that must be managed every time you fetch or update data
							from an external server, including loading and error state.
						</p>
						<p>
							Fortunately there are tools such as SWR and React Query that make managing server state much
							easier.
						</p>
						<h4>URL state</h4>
						<p>Data that exists on our URLs, including the pathname and query parameters.</p>
						<p>
							URL state is often missing as a category of state, but it is an important one. In many
							cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine
							building a blog without being able to fetch a post based off of its slug or id that is
							located in the URL! There are undoubtedly more pieces of state that we could identify, but
							these are the major categories worth focusing on for most applications you build.
						</p>
					</article>
					<article className="prose rounded-lg border bg-white p-6 shadow md:p-10 lg:prose-xl">
						<h3>How does prototypical inheritance work?</h3>
						<h4>Prototype inheritance</h4>
						<p>
							Prototype inheritance in javascript is the linking of prototypes of a parent object to a
							child object to share and utilize the properties of a parent class using a child class.
							Prototypes are hidden objects that are used to share the properties and methods of a parent
							class to child classes.
						</p>
						<p>
							The syntax used for prototype inheritance has the __proto__ property which is used to access
							the prototype of the child. The syntax to perform a prototype inheritance is as follows :
						</p>
						<code>child.__proto__ = parent;</code>
						<p>
							When we read a property from object, and it’s missing, JavaScript automatically takes it
							from the prototype. In programming, this is called “prototypal inheritance”.
						</p>
						<p>The property [[Prototype]] is internal and hidden, but there are many ways to set it.</p>
					</article>
					<article className="prose rounded-lg border bg-white p-6 shadow md:p-10 lg:prose-xl">
						<h3>What is a unit test? Why should we write unit tests?</h3>
						<h4>Unit Test</h4>
						<p>
							Unit testing is a type of software testing where individual units or software components are
							tested. Its purpose is to validate that each unit of code performs as expected. A unit can
							be anything you want it to be — a line of code, a method, or a class.
						</p>
						<p>
							Generally, smaller tests are better as they give a more granular view of your code’s
							performance. Also, when you test very small units, your tests can run fast, like a thousand
							tests in a second fast.
						</p>
						<h4>Why Do We Need Unit Testing?</h4>
						<p>
							To justify any effort in business, there must be a positive impact on the bottom line. Here
							are a few benefits to writing unit tests:
						</p>
						<ul>
							<li>
								Unit tests save time and money. Usually, we tend to test the happy path more than the
								unhappy path. If you release such an app without thorough testing, you would have to
								keep fixing issues raised by your potential users. The time to fix these issues could’ve
								been used to build new features or optimize the existing system. Bear in mind that
								fixing bugs without running tests could also introduce new bugs into the system.
							</li>
							<li>
								Well-written unit tests act as documentation for your code. Any developer can quickly
								look at your tests and know the purpose of your functions.
							</li>
							<li>It simplifies the debugging process.</li>
							<li>
								Unit testing is an integral part of extreme programming. Extreme programming is
								basically a “test-everything-that-can-possibly-break” programming strategy.
							</li>
						</ul>
					</article>
					<article className="prose rounded-lg border bg-white p-6 shadow md:p-10 lg:prose-xl">
						<h3>React vs. Angular vs. Vue</h3>
						<h4>Angular</h4>
						<p>
							Angular has a steep learning curve, considering it is a complete solution, and mastering
							Angular requires you to learn associated concepts like TypeScript and MVC. Even though it
							takes time to learn Angular, the investment pays dividends in terms of understanding how the
							front end works.
						</p>
						<h4>React</h4>
						<p>
							React offers a Getting Started guide that should help one set up React in about an hour. The
							documentation is thorough and complete, with solutions to common issues already present on
							Stack Overflow. React is not a complete framework and advanced features require the use of
							third-party libraries. This makes the learning curve of the core framework not so steep but
							depends on the path you take with additional functionality. However, learning to use React
							does not necessarily mean that you are using the best practices.
						</p>
						<h4>Vue</h4>
						<p>
							Vue provides higher customizability and hence is easier to learn than Angular or React.
							Further, Vue has an overlap with Angular and React with respect to their functionality like
							the use of components. Hence, the transition to Vue from either of the two is an easy
							option. However, simplicity and flexibility of Vue is a double-edged sword — it allows poor
							code, making it difficult to debug and test.
						</p>
					</article>
				</div>
			</div>
		</section>
	);
};

export default BlogPage;
