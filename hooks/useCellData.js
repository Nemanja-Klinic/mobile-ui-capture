import { useState, useEffect } from 'react';
import { testerExperienceDTO, transformToDTO } from '../app/constants/testerExperienceDTO';

const useCellData = (endpoint) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(endpoint);

				if (!response.ok) {
					throw new Error(`HTTP error: ${response.status}`);
				}

				const contentType = response.headers.get('Content-Type');
				if (!contentType?.includes('application/json')) {
					throw new Error('Expected JSON, but received ' + contentType);
				}

				const result = await response.json();

				// Transform the response into a DTO
				const dto = testerExperienceDTO(result);
				console.log('🚀 ~ fetchData ~ dto:', dto);

				setData(dto);
			} catch (err) {
				if (err instanceof Error) {
					setError({ message: err.message });
				} else {
					setError({ message: 'Unknown error occurred' });
				}
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [endpoint]);

	return { data, loading, error };
};

export default useCellData;
