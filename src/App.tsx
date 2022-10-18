import React from "react";

import styled from "styled-components";

import { Loader } from "components/Loader";
import { Posts } from "components/Posts";
import { Albums } from "components/Albums";
import { Users } from "components/Users";
import { useFetchAllModules } from "hooks/useFetch";

const Wrapper = styled.div`
 display:flex;
   justify-content: space-between;  
   align-items:flex-start;
`;

const App: React.FC = () => {
  const { step, loaded, errorRequests } = useFetchAllModules();
  return (
    <div>
      {!loaded ? (
        <Loader errorRequests={errorRequests} step={step} />
      ) : (
        <Wrapper>
          <Posts />
          <Albums />
          <Users />
        </Wrapper>
      )}
    </div>
  );
};

export default App;
