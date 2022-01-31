import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from './Todo';

const todo = {
	text: 'Testing todo',
	complete: false
}

test('Todo can be updated', async () => {
	const handleDelete = jest.fn();
	const handleComplete = jest.fn();
	
	const renderedTodo = render(<Todo todo={todo} onClickComplete={handleComplete} onClickDelete={handleDelete} />)
	


	console.log('got here')
	expect(renderedTodo.container).toHaveTextContent('Testing todo');

	const button = renderedTodo.getByText('Set as done');
	fireEvent.click(button);

  expect(handleComplete.mock.calls).toHaveLength(1);

});