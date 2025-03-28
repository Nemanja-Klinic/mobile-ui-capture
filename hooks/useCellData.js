import { useState, useEffect } from 'react';
import { testerExperienceDTO, transformToDTO } from '../app/constants/testerExperienceDTO';
import { setDTO } from '../store/globalSlice';
import { useDispatch } from 'react-redux';

const useCellData = (endpoint) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
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

				// format the response into a DTO
				const dto = testerExperienceDTO(result);

				setData(dto);
				dispatch(setDTO(dto));
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
