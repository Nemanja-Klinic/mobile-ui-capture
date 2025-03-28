export const testerExperienceDTO = (response) => {
	return {
		testerId: response.tester_id,
		project: {
			id: response.project._id,
			name: response.project.name,
			createdAt: response.project.createdAt,
			updatedAt: response.project.updatedAt,
			cells: response.project.cells.map((cell) => ({
				id: cell._id,
				name: cell.name,
				projectId: cell.projectId,
				tasks: cell.tasks,
				nextUrl: cell.next_url,
				createdAt: cell.createdAt,
				updatedAt: cell.updatedAt,
			})),
		},
		cell: {
			id: response.cell._id,
			name: response.cell.name,
			projectId: response.cell.projectId,
			tasks: response.cell.tasks.map((task) => ({
				id: task._id,
				name: task.name,
				cellId: task.cellId,
				description: task.description,
				url: task.url,
				createdAt: task.createdAt,
				updatedAt: task.updatedAt,
			})),
			nextUrl: response.cell.next_url,
			createdAt: response.cell.createdAt,
			updatedAt: response.cell.updatedAt,
		},
	};
};
