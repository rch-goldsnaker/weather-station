import { useEffect, useState } from 'react';
import axios from '@/config/axiosClient';

function useGetUserInfo() {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/tb/user`);

        setUserInfo(response.data);
      } catch (error) {
        setError(error);
        console.log('error', error);
      }
    };

    fetchData();

  }, []);

  return { userInfo, error };
}

export default useGetUserInfo;
