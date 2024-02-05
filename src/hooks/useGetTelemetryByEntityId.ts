import axios from '@/config/axiosClient'
import { useEffect, useState } from 'react';

interface TelemetryProps {
  entityType: string;
  entityId: string;
  keys: string;
  useStrictDataTypes: string;
}

function useGetTelemetryByEntityId(props: TelemetryProps) {
  const { entityType, entityId, keys, useStrictDataTypes } = props;
  const [telemetry, setTelemetry] = useState<null | any>(null);
  const [error, setError] = useState<null | Error>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `/api/tb/telemetry?entityType=${entityType}&entityId=${entityId}&keys=${keys}&useStrictDataTypes=${useStrictDataTypes}`;
        
        const response = await axios.get(url);

        setTelemetry(response.data);
      } catch (error) {
        setError(error);
        console.log('error', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, [entityType, entityId, keys, useStrictDataTypes]);

  return { telemetry, error, loading };
}

export default useGetTelemetryByEntityId;
