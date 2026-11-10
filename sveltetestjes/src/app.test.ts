import { render, screen } from '@testing-library/svelte';
import { userEvent, type UserEvent } from '@testing-library/user-event';
import { expect, test } from 'vitest';

import Subject from './App.svelte';

test.describe('App', () => {
	let user: UserEvent;

	test.beforeEach(() => {
		user = userEvent.setup();
		render(Subject);
	});

	test('increments with regular button', async () => {
		const button = screen.getByRole('button', { name: 'Increment' });
		await user.click(button);
		await user.click(button);
		await user.click(button);
		expect(screen.getByRole('status')).toHaveTextContent('3');
	});

	test('does not increment with disabled button', async () => {
		const button = screen.getByRole('button', { name: 'Disabled increment' });
		await user.click(button);
		await user.click(button);
		await user.click(button);
		expect(screen.getByRole('status')).toHaveTextContent('0');
	});
});
