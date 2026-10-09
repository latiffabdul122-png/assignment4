# Dynamic Task Dashboard - Assignment 4

A vanilla JavaScript web application built to manage student tasks dynamically using ES6 classes, immutable state patterns, asynchronous data simulation, and direct DOM manipulation.

## File Organization

The project directory is organized as follows:

- `index.html`: Contains the structural skeleton, including the control button, status indicator paragraph, and main task container.

- `styles.css`: Styles for task items, layout alignment, and visual states (e.g., strikethrough for completed tasks).

- `taskManager.js`: Defines the `Task` class (with immutable `id` defined via `Object.defineProperty`) and the `TaskManager` class for handling task lists immutably.

- `api.js`: Simulates an asynchronous server request returning raw task data wrapped in a Promise with a `setTimeout` delay.

- `main.js`: Handles DOM selection, event bindings, JSON serialization/parsing, asynchronous fetching using `async/await`, try/catch error handling, and dynamic rendering.

- `README.md`: Overview of the repository structure, implementation details, and challenges faced.

## Implementation Details & Challenges Faced

1. **Immutability Patterns**: Ensuring that no array or object mutations occurred required utilizing methods like `.map()` and `.filter()`, along with array spreading `[...]`), rather than mutative methods like `.splice()` or direct property assignments.

2. **Object Property Protection**: Defining the `id` property as read-only on the `Task` class using `Object.defineProperty` ensured that task identifiers remain unalterable after instantiation.

3. **JSON Handling Practice**: Converting fetched task objects to a JSON string via `JSON.stringify` and parsing them back using `JSON.parse` before mapping them into `Task` class instances verified the integrity of simulated network payload processing.

4. **Asynchronous UI Orchestration**: Managing loading states, handling potential errors using `try/catch` blocks, and ensuring smooth DOM re-rendering upon action toggles required structured event flow orchestration without external framework abstractions.