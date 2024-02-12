import { useEffect, useState } from 'react';
import { readUserSession } from '@/app/auth/actions/client';

export function useGetUserSB() {
  const [userInfo, setUserInfo] = useState<any>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { error, data } = await readUserSession();
        setUserInfo(data);
      } catch (err) { 
        setError(err);
        console.log('error', err);
      }
    };

    fetchData();

  }, []);

  return { userInfo, error };
}
