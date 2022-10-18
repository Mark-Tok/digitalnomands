import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { pullUrls, ModulesAPI } from "api";
import { delay } from "constanst/helpers";
import { TIME_DELAY } from "constanst/values";
import { addModules } from "store/moduleSlice";

export const useFetchAllModules = () => {
  const [step, setStep] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [errorRequests, setErrorRequests] = useState<string[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const requests = pullUrls.map(async (url, index) => {
      //имитация задержки для загрузки
      await delay(TIME_DELAY * (index + 1));
      return fetch(url)
        .then((response) => {
          setStep((prev) => prev + 1);
          if (!response.ok) {
            setErrorRequests((prev) => [...prev, response.url]);
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((res) => {
          const key = ModulesAPI[index].toLowerCase();
          dispatch(addModules({ [key]: res }));
        });
    });
    Promise.allSettled(requests).then(() =>
      setTimeout(() => setLoaded(true), TIME_DELAY)
    );
    return () => {
      setStep(0);
    };
  }, [dispatch]);
  return {
    step,
    loaded,
    errorRequests,
  };
};
