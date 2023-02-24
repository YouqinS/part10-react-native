import { GET_REPOSITORIES } from '../graphql/queries';
import {useQuery} from "@apollo/client";

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  console.log("fetched data: ", data)

  return { repositories: data?.repositories, error, loading };
};

export default useRepositories;